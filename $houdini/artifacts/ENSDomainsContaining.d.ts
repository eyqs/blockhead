export type ENSDomainsContaining = {
    readonly "input": ENSDomainsContaining$input,
    readonly "result": ENSDomainsContaining$result
};

export type ENSDomainsContaining$result = {
    readonly domains: ({
        readonly id: string,
        readonly name: string | null,
        readonly parent: {
            readonly id: string,
            readonly name: string | null
        } | null,
        readonly subdomains: ({
            readonly id: string,
            readonly name: string | null
        })[],
        readonly resolvedAddress: {
            readonly id: string
        } | null,
        readonly owner: {
            readonly id: string
        },
        readonly resolver: {
            readonly id: string,
            readonly address: string,
            readonly texts: (string)[] | null,
            readonly coinTypes: (number)[] | null,
            readonly events: ({
                readonly id: string,
                readonly blockNumber: number,
                readonly transactionID: string
            })[]
        } | null,
        readonly ttl: string | null,
        readonly isMigrated: boolean,
        readonly events: ({
            readonly id: string,
            readonly blockNumber: number,
            readonly transactionID: string
        } & (({
            readonly owner: {
                readonly id: string
            },
            readonly __typename: "Transfer"
        }) | ({
            readonly owner: {
                readonly id: string
            },
            readonly __typename: "NewOwner"
        }) | ({
            readonly resolver: {
                readonly id: string,
                readonly address: string
            },
            readonly __typename: "NewResolver"
        }) | ({
            readonly ttl: string,
            readonly __typename: "NewTTL"
        })))[]
    })[]
};

export type ENSDomainsContaining$input = {
    query: string
};