<script lang="ts">
	import type { Readable } from 'svelte/store'
	import type { Result } from '../data/apollo-store'
	import type { QueryResponse } from '$houdini/runtime/query'
	import type { UseQueryStoreResult, UseInfiniteQueryStoreResult } from '@sveltestack/svelte-query'

	type LoaderResult = $$Generic<unknown>
	type LoaderError = $$Generic<{message: string} | unknown>
	type HoudiniQueryInput = $$Generic<unknown>
	type LoaderReturnResult = $$Generic<unknown>


	export let startImmediately = true

	export let loadingIcon: string
	export let loadingIconName: string
	export let loadingMessage: string
	export let loadingIconWidth = 25

	export let errorMessage: string
	export let errorFunction: ((Error) => string) | undefined
	export let hideError = false

	export let fromPromise: () => Promise<LoaderResult>
	export let fromStore: () => Readable<Result<LoaderResult>>
	export let fromHoudiniQuery: () => QueryResponse<LoaderResult, HoudiniQueryInput>
	export let fromUseQuery: UseQueryStoreResult<LoaderResult, LoaderError>
	export let fromUseInfiniteQuery: UseInfiniteQueryStoreResult<LoaderResult[number], LoaderError>

	export let then: ((result: LoaderResult) => LoaderReturnResult) = result => result
	export let whenLoaded: ((result: LoaderResult) => void) | undefined
	export let whenErrored: ((error: LoaderError) => void) | undefined
	export let whenCanceled: (() => Promise<any>) | undefined

	export let layoutClass = 'column'
	export let showIf: (<T extends LoaderResult = LoaderResult>(then: T) => boolean | any) | undefined
	export let isCollapsed = false
	export let clip = true

	export let showStatusAndActions = false


	enum LoadingStatus {
		Idle = 'idle',
		Loading = 'loading',
		Resolved = 'resolved',
		Reloading = 'reloading',
		Errored = 'error'
	}
	let status: LoadingStatus = LoadingStatus.Idle

	let promise: ReturnType<typeof fromPromise>
	let store: ReturnType<typeof fromStore>
	let houdiniQuery: ReturnType<typeof fromHoudiniQuery>


	export let result: LoaderResult

	type $$Slots = {
		default: {
			then: LoaderReturnResult,
			status: LoadingStatus,
			load: typeof load,
			cancel: typeof cancel,
			result: LoaderResult
			pagination?: {
				hasPreviousPage: boolean,
				hasNextPage: boolean,
				fetchPreviousPage: () => void,
				fetchNextPage: () => void,
			}
		},
		header: {
			then: LoaderReturnResult,
			status: LoadingStatus,
			load: typeof load,
			cancel: typeof cancel
		},
		error: {
			error: string
		},
		errorMessage,
		errorActions: {
			load: typeof load,
			cancel: typeof cancel
		}
	}


	let error: LoaderError
	$: if(error) console.error(error)

	let started = startImmediately
	$: if(started){
		status = LoadingStatus.Loading

		if(fromPromise)
			promise = fromPromise()

		if(fromStore){
			const _store = fromStore()
			_store.then
				? _store.then(_ => store = _)
				: store = _store
		}

		if(fromHoudiniQuery)
			houdiniQuery = fromHoudiniQuery()

		if(fromUseQuery)
			fromUseQuery.setEnabled(true)

		if(fromUseInfiniteQuery)
			fromUseInfiniteQuery.setEnabled(true)
	}
	else{
		if(fromUseQuery)
			fromUseQuery.setEnabled(false)

		if(fromUseInfiniteQuery)
			fromUseInfiniteQuery.setEnabled(false)
	}

	function load(){
		started = false
		started = true
		// houdiniRefetch?.()

		if(fromUseQuery)
			$fromUseQuery.refetch()

		if(fromUseInfiniteQuery)
			$fromUseInfiniteQuery.refetch()
	}

	async function cancel(){
		if(whenCanceled)
			await whenCanceled().catch(console.error)

		status = LoadingStatus.Idle

		if(startImmediately)
			load()
	}

	$: if(promise)
		promise.then(_result => {
			result = _result
			status = LoadingStatus.Resolved
		}, _error => {
			error = _error
			status = LoadingStatus.Errored
		})

	$: if(store?.subscribe){
		if($store.loading){
			if($store.data)
				result = $store.data
			status = LoadingStatus.Loading
		}
		else if($store.error){
			error = $store.error
			status = LoadingStatus.Errored
		}
		else if($store.data){
			result = $store.data
			status = LoadingStatus.Resolved
		}
	}

	$: ({loading: houdiniLoading, error: houdiniError, data: houdiniData, refetch: houdiniRefetch} = houdiniQuery ?? {})
	$: if(houdiniQuery)
		if($houdiniLoading){
			status = LoadingStatus.Loading
		}
		else if($houdiniError){
			error = $houdiniError
			status = LoadingStatus.Errored
		}
		else if($houdiniData){
			result = $houdiniData
			status = LoadingStatus.Resolved
		}

	$: if(fromUseQuery)
		if($fromUseQuery.isIdle){
			status = LoadingStatus.Idle
		}
		else if($fromUseQuery.isLoading){
			status = LoadingStatus.Loading
		}
		else if($fromUseQuery.isSuccess){
			result = $fromUseQuery.data
			status = LoadingStatus.Resolved
		}
		else if($fromUseQuery.isError){
			error = $fromUseQuery.error
			status = LoadingStatus.Errored
		}
		else if($fromUseQuery.isRefetching){
			status = LoadingStatus.Reloading
		}

	$: if(fromUseInfiniteQuery)
		if($fromUseInfiniteQuery.isIdle){
			status = LoadingStatus.Idle
		}
		else if($fromUseInfiniteQuery.isLoading){
			status = LoadingStatus.Loading
		}
		else if($fromUseInfiniteQuery.isSuccess){
			console.log('fromUseInfiniteQuery', $fromUseInfiniteQuery, $fromUseInfiniteQuery.data)
			result = $fromUseInfiniteQuery.data // .pages
			status = LoadingStatus.Resolved
		}
		else if($fromUseInfiniteQuery.isError){
			error = $fromUseInfiniteQuery.error
			status = LoadingStatus.Errored
		}
		else if($fromUseInfiniteQuery.isRefetching){
			status = LoadingStatus.Reloading
		}

	$: if(result) whenLoaded?.(result)
	$: if(error) whenErrored?.(error)

	$: isHidden = showIf && status === LoadingStatus.Resolved && !showIf(result)


	export let debug: string
	$: if(debug && result) console.log(debug, result)


	import { fade, scale } from 'svelte/transition'
	import Date from './Date.svelte'
	import Loading from './Loading.svelte'
	import SizeContainer from './SizeContainer.svelte'
</script>


<style>
	.loader:empty {
		display: none;
	}


	footer {
		font-size: 0.66em;
	}
</style>


{#if !isHidden}
	<slot name="header" {status} {load} {cancel} />

	<SizeContainer
		class="loader stack"
		isOpen={!isCollapsed}
		{clip}
	>
		{#if status === LoadingStatus.Resolved || (fromStore && status === LoadingStatus.Loading && result)}
			<div class={layoutClass} transition:fade>
				<slot
					result={then(result)}
					{status}
					{load}
					{cancel}
					pagination={$fromUseInfiniteQuery && {
						hasPreviousPage: $fromUseInfiniteQuery.hasPreviousPage,
						hasNextPage: $fromUseInfiniteQuery.hasNextPage,
						fetchPreviousPage: $fromUseInfiniteQuery.fetchPreviousPage,
						fetchNextPage: $fromUseInfiniteQuery.fetchNextPage,
					}}
				/>
			</div>
		{/if}
		{#if status === LoadingStatus.Idle}
			<slot name="idle"></slot>
		{:else if status === LoadingStatus.Loading}
			<Loading iconAnimation="hover">
				<slot name="loadingIcon" slot="icon">
					<img src={loadingIcon} alt={loadingIconName} width={loadingIconWidth}>
				</slot>
				<slot name="loadingMessage">
					{loadingMessage}
				</slot>
			</Loading>
		{:else if !hideError && status === LoadingStatus.Errored}
			<div class="card" transition:scale>
				<div class="bar">
					<slot name="errorMessage">
						<h4>{errorMessage || 'Error'}</h4>
					</slot>
					<slot name="errorActions" {load} {cancel}>
						<button class="small" on:click={load}>Retry</button>
						<button class="small cancel" on:click={cancel}>Cancel</button>
					</slot>
				</div>
				<slot name="error" {error}>
					<pre>{
						errorFunction
							? errorFunction(error) : 
						typeof error === 'object' ?
							error.message ?? JSON.stringify(error)
						:
							error
					}</pre>
				</slot>
			</div>
		{/if}
	</SizeContainer>

	<slot name="footer">
		{#if showStatusAndActions}
			<!-- <footer class="sticky-bottom card bar"> -->
			<footer class="bar">
				<slot name="footer-start" />

				{#if fromUseQuery}
					{#if $fromUseQuery.dataUpdatedAt}
						<span>
							Last updated
							<Date
								date={$fromUseQuery.dataUpdatedAt || $fromUseQuery.errorUpdatedAt}
								format="relative"
								layout="horizontal"
							/>
						</span>
					{/if}

					{#if status === LoadingStatus.Resolved || status === LoadingStatus.Errored}
						<button class="small" on:click={load}>Reload</button>
					{:else if status === LoadingStatus.Loading || status === LoadingStatus.Reloading || $fromUseQuery.isRefetching}
						<span>Loading...</span>
						<button class="small cancel" on:click={cancel}>Cancel</button>
					{/if}
				{/if}

				{#if fromUseInfiniteQuery}
					{#if $fromUseQuery.dataUpdatedAt}
						<span>
							Last updated
							<Date
								date={$fromUseInfiniteQuery.dataUpdatedAt || $fromUseInfiniteQuery.errorUpdatedAt}
								format="relative"
								layout="horizontal"
							/>
						</span>
					{/if}

					{#if status === LoadingStatus.Resolved || status === LoadingStatus.Errored}
						<div class="row">
							<button class="small" on:click={load}>Reload</button>

							{#if $fromUseInfiniteQuery.hasPreviousPage}
								<button class="small" on:click={() => $fromUseInfiniteQuery.fetchPreviousPage()}>Previous</button>
							{/if}

							{#if $fromUseInfiniteQuery.hasNextPage}
								<button class="small" on:click={() => $fromUseInfiniteQuery.fetchNextPage()}>Next</button>
							{/if}
						</div>
					{:else if status === LoadingStatus.Loading || status === LoadingStatus.Reloading || $fromUseQuery.isRefetching}
						<span>Loading...</span>
						<button class="small cancel" on:click={cancel}>Cancel</button>
					{/if}
				{/if}
			</footer>
		{/if}
	</slot>
{/if}
