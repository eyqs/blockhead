import type { Ethereum } from './ethereum/types'
import type { DefiSDK } from './ethereum/price/defi-sdk'
import type { ZapperDeFiProtocolName } from './zapper/zapper'
import { erc20TokensByContractAddress, erc20TokensBySymbol } from './ethereum/tokens/tokens'


export type Web3AppConfig = {
	name: Web3AppName,
	slug: Web3AppSlug,
	links?: string[],
	colors?: string[],
	views: Web3AppView[]
}

export type Web3AppView = {
	name?: string,
	slug?: string,
	colors?: string[],
	chainId: Ethereum.ChainID,
	erc20Tokens?: Ethereum.ERC20Token[],
	nfts?: Ethereum.NFT[],
	contracts?: Ethereum.ContractAddress[],
	tags?: [{
		name: '',
		hash: ''
	}],
	links?: string[],
	providers?: {
		theGraph?: string,
		zapper?: ZapperDeFiProtocolName,
		zerionDefiSDK?: DefiSDK.ProtocolName[],
	},
	embeds?: {
		name: string,
		description?: string,
		src: string
	}[],
}

export type Web3AppName = string // typeof web3Apps[number]['name']
export type Web3AppSlug = string // typeof web3Apps[number]['slug']


export const web3Apps: Web3AppConfig[] = [
	{
		name: 'Aave',
		slug: 'aave',
		links: ['https://aave.com'],
		colors: ['#77c0c7', '#b56da4'],
		views: [
			{
				name: 'Aave V2',
				slug: 'v2',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['AAVE']
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/aave/protocol-v2',
					zapper: 'aave-v2',
					zerionDefiSDK: ['Aave V2', 'Aave V2 • Stable Debt', 'Aave V2 • Variable Debt', 'Aave • Staking'],
				}
			},
			{
				name: 'Aave AMM',
				slug: 'amm',
				chainId: 1,
				providers: {
					zapper: 'aave-amm'
				}
			},
			{
				name: 'Aave V1',
				slug: 'v1',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['LEND']
				],
				providers: {
					zapper: 'aave',
					zerionDefiSDK: ['Aave', 'Aave • Uniswap Market'],
				}
			},
			// {
			// 	name: 'Aave AMM',
			// 	slug: 'amm',
			// 	chainId: 1,
			// 	erc20Tokens: [],
			// 	providers: {
			// 		zapper: 'aave',
			// 		zerionDefiSDK: ['Aave • Uniswap Market'],
			// 	}
			// },
			// {
			// 	chainId: 137,
			// 	erc20Tokens: [],
			// 	providers: {
			// 		// zapper: 'aave'
			// 	}
			// },

			{
				name: 'Aave v2 Governance',
				slug: 'v1',
				chainId: 1,
				embeds: [{
					name: 'Aavote',
					description: 'Aavote - Aave Governance v2 Interface',
					src: 'https://aavote.netlify.app'
				}],
				providers: {
					zapper: 'aave-safety-module'
				}
			},
		]
	},
	{
		name: 'Aavegotchi',
		slug: 'aavegotchi',
		links: ['https://aavegotchi.com'],
		colors: ['#fa34f3', '#5100B1'],
		views: [
			{
				chainId: 137,
				erc20Tokens: [
					erc20TokensBySymbol['GHST']
				],
				providers: {
					zapper: 'aavegotchi'
				}
			}
		]
	},
	{
		name: 'Abracadabra',
		slug: 'abracadabra',
		links: ['https://abracadabra.money'],
		colors: ['#7b79f7'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['SPELL']
				],
				providers: {
					zapper: 'abracadabra'
				}
			}
		]
	},
	{
		name: 'Adamant',
		slug: 'adamant',
		links: ['https://adamant.finance'],
		colors: [],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					// erc20TokensBySymbol['ADDY']
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/airswap/airswap',
				}
			}
		]
	},
	{
		name: 'Airswap',
		slug: 'airswap',
		links: ['https://airswap.io'],
		colors: ['#2b71ff'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/airswap/airswap',
				}
			}
		]
	},
	{
		name: 'Akropolis',
		slug: 'akropolis',
		links: ['https://www.akropolis.io'],
		colors: ['#ef359c', '#5346e6'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['AKRO']
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/in19farkt/akropolis-os-mainnet',
					zerionDefiSDK: ['Akropolis • ADEL Staking', 'Akropolis • AKRO Staking'],
				}
			}
		]
	},
	{
		name: 'Alchemix',
		slug: 'alchemix',
		links: ['https://alchemix.fi'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ALCX'],
					erc20TokensBySymbol['ALETH'],
					erc20TokensBySymbol['ALUSD']
				],
				providers: {
					zapper: 'alchemix',
				}
			}
		]
	},
	{
		name: 'Alpha Finance',
		slug: 'alpha',
		links: ['https://alphafinance.io'],
		views: [
			{
				name: 'Alpha Homora V2',
				slug: 'v2',
				links: ['https://homora-v2.alphafinance.io'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ALPHA']
				],
				providers: {
					zapper: 'alpha-v2',
					zerionDefiSDK: ['Alpha Homora V2'],
				}
			},
			{
				name: 'Alpha Homora V1',
				slug: 'v1',
				links: ['https://homora.alphafinance.io'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ALPHA']
				],
				providers: {
					zapper: 'alpha-v1',
					zerionDefiSDK: ['Alpha Homora'],
				}
			},
		]
	},
	{
		name: 'Ampleforth',
		slug: 'ampleforth',
		links: ['https://www.ampleforth.org'],
		colors: ['#5856d6'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['AMPL']
				],
				providers: {
					zerionDefiSDK: ['Ampleforth'],
				}
			},
			{
				name: 'Ampleforth Governance',
				slug: 'governance',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FORTH']
				],
			}
		]
	},
	{
		name: 'Apeswap',
		slug: 'apeswap',
		links: ['https://apeswap.finance'],
		colors: ['#a16552', '#ffb300'],
		views: [
			{
				chainId: 56,
				providers: {
					zapper: 'apeswap'
				}
			},
		]
	},
	{
		name: 'APY.Finance',
		slug: 'apy',
		links: ['https://apy.finance'],
		colors: ['#d153f4', '#4d43df'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['APY']
				],
				providers: {
					zapper: 'apy'
				}
			}
		]
	},
	{
		name: 'Aragon',
		slug: 'aragon',
		links: ['https://aragon.org'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ANT']
				],
				providers: {
					zerionDefiSDK: ['Aragon'],
				}
			}
		]
	},
	{
		name: 'ARCx',
		slug: 'arcx',
		links: ['https://arcx.money'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x1321f1f1aa541a56c31682c57b80ecfccd9bb288'], // ARCx
					erc20TokensByContractAddress['0xed30dd7e50edf3581ad970efc5d9379ce2614adb'], // ARC Governance Old
				],
				providers: {
					zapper: 'arcx'
				}
			}
		]
	},
	{
		name: 'Armor',
		slug: 'armor',
		links: ['https://armor.fi'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ARMOR']
				],
				providers: {
					zapper: 'armor'
				}
			}
		]
	},
	{
		name: 'Audius',
		slug: 'audius',
		links: ['https://audius.org'],
		colors: ['#cc0fe0', '#7e1bcc'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['AUDIO']
				],
				contracts: [
					'0x819fd65026848d710fe40d8c0439f1220e069398',
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/audius-infra/audius-network-mainnet'
				}
			}
		]
	},
	{
		name: 'Augur',
		slug: 'augur',
		links: ['https://www.augur.net'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['REP']
				],
				providers: {
					zapper: 'augur',
				}
			},
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['NTRUMP']
				],
			}
		]
	},
	{
		name: 'Autofarm',
		slug: 'autofarm',
		links: ['https://autofarm.network'],
		views: [
			{
				chainId: 56,
				erc20Tokens: [],
				providers: {
					zapper: 'autofarm',
				}
			}
		]
	},
	{
		name: 'BProtocol',
		slug: 'bprotocol',
		links: ['https://bprotocol.org', 'https://app.bprotocol.org'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'b-protocol',
				}
			}
		]
	},
	{
		name: 'Badger',
		slug: 'badger',
		links: ['https://badger.finance'],
		colors: ['#F2A52B'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BADGER'],
					erc20TokensBySymbol['BBADGER'],
					erc20TokensBySymbol['BDIGG']
				],
				providers: {
					zapper: 'badger',
				}
			}
		]
	},
	{
		name: 'Balancer',
		slug: 'balancer',
		links: ['https://balancer.fi', 'https://app.balancer.fi'],
		colors: ['#536dfe'], // unofficial
		views: [
			{
				name: 'Balancer V2',
				slug: 'v2',
				chainId: 1,
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer',
					zapper: 'balancer-v2',
					zerionDefiSDK: ['Balancer'],
				}
			},
			{
				name: 'Balancer Governance',
				slug: 'governance',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BAL']
				]
			},
			{
				name: 'Balancer V1',
				slug: 'v1',
				chainId: 1,
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/balancer-labs/balancer',
					zapper: 'balancer-v1',
					zerionDefiSDK: ['Balancer'],
				}
			}
		]
	},
	{
		name: 'Bancor',
		slug: 'bancor',
		links: ['https://bancor.network', 'https://app.bancor.network'],
		colors: ['#070e1f'], // unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BNT'],
					erc20TokensBySymbol['VBNT'],
					erc20TokensBySymbol['USDB']
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/blocklytics/bancor',
					zapper: 'bancor',
					zerionDefiSDK: ['Bancor', 'Bancor • Liquidity Protection', 'Bancor • Locked BNT'],
				}
			}
		]
	},
	{
		name: 'Bao Finance',
		slug: 'bao',
		links: ['https://www.bao.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BAO']
				],
				providers: {
					zapper: 'bao',
				}
			}
		]
	},
	{
		name: 'BarnBridge',
		slug: 'barnbridge',
		links: ['https://barnbridge.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					// erc20TokensBySymbol['BOND']
				],
				providers: {
					zapper: 'barnbridge',
				}
			},
			{
				name: 'BarnBridge Smart Yield',
				slug: 'smart-yield',
				links: ['https://app.barnbridge.com/smart-alpha/pools'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['']
				],
				providers: {
					zapper: 'barnbridge-smart-yield',
				}
			}
		]
	},
	{
		name: 'Based Money',
		slug: 'based-money',
		links: ['https://based.money'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BASED']
				],
				providers: {
					zapper: 'based-money',
				}
			}
		]
	},
	{
		name: 'Basis',
		slug: 'basis',
		links: ['https://basis.io'],
		views: [
			{
				name: 'Basis Cash',
				slug: 'cash',
				links: ['https://basis.cash'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BAC'],
					erc20TokensBySymbol['BAS'],
					erc20TokensBySymbol['BAB'],
				],
				providers: {
					zapper: 'basis-cash',
				}
			},
			// {
			// 	name: 'Basis Dollar',
			// 	slug: 'dollar',
			// 	links: ['https://basisdollar.fi'],
			// 	chainId: 1,
			// 	erc20Tokens: [
			// 		erc20TokensBySymbol['BSD'],
			// 		erc20TokensBySymbol['BSDS'],
			// 	]
			// },
			{
				name: 'Basis Gold',
				slug: 'gold',
				links: ['https://basis.gold'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BSG'],
					erc20TokensBySymbol['BSGS'],
				],
				providers: {
					zapper: 'basis-gold',
				}
			},
			{
				name: 'Basis Coin',
				slug: 'coin',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BCS'],
					erc20TokensBySymbol['BSGS'],
				]
			},
			{
				name: 'Basis Bond',
				slug: 'bond',
				chainId: 1,
				erc20Tokens: [
					// erc20TokensBySymbol['BSB'],
				]
			}
		]
	},
	{
		name: 'BasketDAO',
		slug: 'basket',
		links: ['https://basketdao.org'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BSKT'],
					erc20TokensBySymbol['BDI']
				],
				providers: {
					zapper: 'basket-dao',
				}
			}
		]
	},
	{
		name: 'Berezka',
		slug: 'berezka',
		links: ['https://www.berezka.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zerionDefiSDK: ['Berezka'],
				}
			}
		]
	},
	{
		name: 'Beefy Finance',
		slug: 'beefy',
		links: ['https://www.beefy.finance'],
		views: [
			{
				name: 'Binance Smart Chain',
				slug: 'bsc',
				chainId: 56,
				erc20Tokens: [],
				providers: {
					zapper: 'beefy',
				}
			},
			{
				name: 'Huobi ECO Chain',
				slug: 'heco',
				chainId: 128,
				erc20Tokens: [],
				providers: {
					zapper: 'beefy',
				}
			},
			{
				name: 'Avalanche',
				slug: 'avalanche',
				chainId: 43114,
				erc20Tokens: [],
				providers: {
					zapper: 'beefy',
				}
			},
			{
				name: 'Polygon',
				slug: 'polygon',
				chainId: 137,
				erc20Tokens: [],
				providers: {
					zapper: 'beefy',
				}
			},
			{
				name: 'Fantom',
				slug: 'fantom',
				chainId: 250,
				erc20Tokens: [],
				providers: {
					zapper: 'beefy',
				}
			}
		],
	},
	{
		name: 'Bella',
		slug: 'bella',
		links: ['https://bella.fi'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BEL']
				],
				providers: {
					zapper: 'bella',
				}
			}
		]
	},
	{
		name: 'Belt',
		slug: 'belt',
		links: ['https://belt.fi'],
		views: [
			{
				name: 'Binance Smart Chain',
				slug: 'bsc',
				chainId: 56,
				erc20Tokens: [],
				providers: {
					zapper: 'belt',
				}
			},
			{
				name: 'Huobi ECO Chain',
				slug: 'heco',
				chainId: 128,
				erc20Tokens: [],
				providers: {
					zapper: 'belt',
				}
			},
		]
	},
	{
		name: 'Benchmark',
		slug: 'benchmark',
		links: ['https://benchmarkprotocol.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MARK']
				],
				providers: {
					zapper: 'benchmark',
				}
			}
		]
	},
	{
		name: 'Benqi',
		slug: 'benqi',
		links: ['https://benqi.fi'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'benqi',
				}
			}
		]
	},
	{
		name: 'Big Data Protocol',
		slug: 'big-data',
		links: ['https://bigdataprotocol.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BDP']
				],
				providers: {
					zapper: 'big-data',
				}
			}
		]
	},
	{
		name: 'BitGo',
		slug: 'bitgo',
		links: ['https://www.bitgo.com'],
		colors: ['#62abf4'], // unofficial
		views: [
			{
				name: 'Wrapped Bitcoin',
				slug: 'wbtc',
				links: ['https://wbtc.network'],
				colors: ['#f7931a'], // unofficial
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['WBTC']
				]
			}
		]
	},
	{
		name: 'Boring DAO',
		slug: 'boring',
		links: ['https://www.boringdao.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0xbc19712feb3a26080ebf6f2f7849b417fdd792ca'], // BoringDAO
					erc20TokensBySymbol['OBTC'], // BoringDAO BTC
					erc20TokensByContractAddress['0x3c9d6c1c73b31c837832c72e04d3152f051fc1a9'] // BoringDAO OLD
				],
				providers: {
					zapper: 'boring-dao',
				}
			}
		]
	},
	{
		name: 'bZx Protocol',
		slug: 'bzx',
		links: ['https://bzx.network'],
		colors: ['#33dfcc', '#003cda'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['BZRX']
				],
				providers: {
					zapper: 'bzx',
					zerionDefiSDK: ['bZx', 'bZx bZx', 'bZx • Staking', 'bZx • Vested Staking'],
				}
			}
		]
	},
	{
		name: 'Ceramic',
		slug: 'ceramic',
		links: ['https://ceramic.network'],
		views: [
			
		]
	},
	{
		name: 'Chai',
		slug: 'chai',
		links: ['https://chai.money'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['CHAI']
				],
				providers: {
					zerionDefiSDK: ['Chai'],
				}
			}
		]
	},
	{
		name: 'Chainlink',
		slug: 'chainlink',
		links: ['https://chain.link'],
		colors: ['#375bd2'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['LINK'],
				],
			}
		]
	},
	{
		name: 'Circle',
		slug: 'circle',
		links: ['https://www.circle.com/en/usdc', 'https://www.centre.io/usdc'],
        colors: ['#4ee498', '#68d7fa', '#5fbfff', '#b090f5'],
		views: [
			{
				name: 'USDC',
				slug: 'usdc',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['USDC'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/centrehq/usdc',
				}
			}
		]
	},
	{
		name: 'Cometh',
		slug: 'cometh',
		links: ['https://www.cometh.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zerionDefiSDK: ['Cometh • Staking', 'Cometh • Tube'],
				}
			}
		]
	},
	{
		// https://compound.finance/docs#networks
		name: 'Compound',
		slug: 'compound',
		links: ['https://compound.finance'],
		colors: ['#01d395'],
		views: [
			{
				name: 'Compound Governance',
				slug: 'governance',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['COMP']
				],
				contracts: [
					'0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b', // Comptroller
					'0xc0da02939e1441f497fd74f78ce7decb17b66529', // Governance
					'0x6d903f6003cca6255d85cca4d3b5e5146dc33925', // Timelock
				],
				providers: {
					zerionDefiSDK: ['Compound Governance'],
				}
			},
			{
				name: 'Compound V2',
				slug: 'v2',
				colors: ['#27D3A2', '#9388FD'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['cCOMP'],
					erc20TokensBySymbol['cUSDC'],
					erc20TokensBySymbol['cUSDT'],
					erc20TokensBySymbol['cDAI'],
					erc20TokensBySymbol['cETH'],
					erc20TokensBySymbol['cUNI'],
					erc20TokensBySymbol['cZRX'],
					erc20TokensBySymbol['cBAT'],
					erc20TokensByContractAddress['0xccf4429db6322d5c611ee964527d42e5d685dd6a'], // cWBTC
					erc20TokensByContractAddress['0xc11b1268c1a384e55c48c2391d8d480264a3a7f4'], // cWBTC Legacy
					erc20TokensBySymbol['cSAI'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/graphprotocol/compound-v2',
					zapper: 'compound',
					zerionDefiSDK: ['Compound'],
				}
			},
			{
				name: 'Compound V1',
				slug: 'v1',
				chainId: 1,
				erc20Tokens: [
				],
				providers: {
					zerionDefiSDK: ['Compound'],
				}
			},
		]
	},
	{
		name: 'Connext',
		slug: 'connext',
		colors: ['#29c1fc', '#9c62f9'],
		links: ['https://connext.network'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
			}
		]
	},
	{
		name: 'Convex',
		slug: 'convex',
		links: ['https://www.convexfinance.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['CVX'],
					erc20TokensBySymbol['CVXCRV']
				],
				providers: {
					zapper: 'convex',
				}
			}
		]
	},
	{
		name: 'Cover Protocol',
		slug: 'cover',
		links: ['https://www.coverprotocol.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['COVER']
				],
				providers: {
					zapper: 'cover',
				}
			}
		]
	},
	{
		name: 'C.R.E.A.M.',
		slug: 'cream',
		links: ['https://cream.finance'],
		colors: ['#68e2dc'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['CREAM'],
					erc20TokensBySymbol['CRETH2']
				],
				providers: {
					zapper: 'cream',
					zerionDefiSDK: ['C.R.E.A.M.', 'C.R.E.A.M. • Staking'],
				}
			},
			{
				name: 'C.R.E.A.M. Iron Bank',
				slug: 'iron-bank',
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'cream-iron-bank',
				}
			}
		]
	},
	{
		name: 'Cryptex Finance',
		slug: 'cryptex',
		links: ['https://cryptex.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['CTX'],
				],
				providers: {
					zapper: 'cryptex',
				}
			}
		]
	},
	{
		name: 'Curve',
		slug: 'curve',
		links: ['https://curve.fi'],
		colors: [/*'#840000',*/ '#fd2700', '#f9ea02', '#91ff67'/*, '#0213fa'*/], // unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['CRV']
				],
				providers: {
					zapper: 'curve',
					zerionDefiSDK: ['Curve', 'Curve • Liquidity Gauges', 'Curve • Vesting', 'Curve • Vote Escrowed CRV'],
				}
			}
		]
	},
	{
		name: 'DDEX',
		slug: 'ddex',
		links: ['https://ddex.io'],
		colors: ['#012d93', '#0367d8', '#00f6fa'], // unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zerionDefiSDK: ['DDEX • Lending', 'DDEX • Margin', 'DDEX • Spot'],
				}
			}
		]
	},
	{
		name: 'DeFi Dollar',
		slug: 'defi-dollar',
		links: ['https://dusd.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'defi-dollar',
				}
			}
		]
	},
	{
		name: 'DeFi Swap',
		slug: 'defi-swap',
		links: ['https://crypto.com/defi/swap'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'defi-swap',
				}
			}
		]
	},
	{
		name: 'DeFi Money Market',
		slug: 'dmm',
		links: ['https://defimoneymarket.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['DMG']
				],
				providers: {
					zerionDefiSDK: ['DeFi Money Market']
				}
			}
		]
	},
	{
		name: 'DeFi Saver',
		slug: 'defi-saver',
		links: ['https://defisaver.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'defisaver',
				}
			}
		]
	},
	{
		name: 'DerivaDEX',
		slug: 'derivadex',
		links: ['https://derivadex.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'derivadex',
				}
			}
		]
	},
	{
		name: 'DeversiFi',
		slug: 'deversifi',
		links: ['https://www.deversifi.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['DVF']
				],
				providers: {
					zapper: 'deversifi',
				}
			}
		]
	},
	{
		name: 'DFI Money',
		slug: 'dfi-money',
		links: ['https://dfi.money'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['YFII']
				],
				providers: {
					zapper: 'dfi-money',
				}
			}
		]
	},
	{
		name: 'dForce',
		slug: 'dforce',
		links: ['https://dforce.network'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['DF']
				],
				providers: {
					zapper: 'dforce',
				}
			}
		]
	},
	{
		name: 'Dfyn Network',
		slug: 'dfyn',
		links: ['https://dfyn.network'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['YFII']
				],
				providers: {
					zapper: 'dfyn',
				}
			}
		]
	},
	{
		name: 'dHEDGE',
		slug: 'dhedge',
		links: ['https://www.dhedge.org'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['DHT'],
					erc20TokensBySymbol['DTOP']
				],
				providers: {
					zapper: 'dhedge',
				}
			}
		]
	},
	{
		name: 'DODO',
		slug: 'dodo',
		links: ['https://dodoex.io'],
		colors: ['#fff700'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['DODO']
				],
				providers: {
					zapper: 'dodo',
					zerionDefiSDK: ['DODO'],
				}
			}
		]
	},
	{
		name: 'Dopex',
		slug: 'dopex',
		links: ['https://dopex.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['DPX'],
					erc20TokensBySymbol['RDPX']
				],
				providers: {
					zapper: 'dopex',
				}
			}
		]
	},
	{
		name: 'dYdX',
		slug: 'dydx',
		links: ['https://dydx.exchange'],
		colors: ['#6966ff'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'dydx',
					zerionDefiSDK: ['dYdX'],
				}
			}
		]
	},
	{
		name: 'Dynamic Set Dollar',
		slug: 'dynamic-set-dollar',
		links: ['https://dsd.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0xbd2f0cd039e0bfcf88901c98c0bfac5ab27566e3'] // DSD
				],
				providers: {
					zapper: 'dsd',
				}
			}
		]
	},
	{
		name: '88mph',
		slug: '88mph',
		links: ['https://88mph.app'],
		colors: ['#743ad5', '#d53a9d'],
		views: [
			{
				name: '88mph V3',
				slug: 'v3',
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x8888801af4d980682e47f1a9036e589479e835c5'] // MPH
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/bacon-labs/eighty-eight-mph',
					zapper: '88mph-v3',
				}
			},
			{
				name: '88mph V1',
				slug: 'v1',
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x8888801af4d980682e47f1a9036e589479e835c5'] // MPH
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/bacon-labs/eighty-eight-mph',
					zapper: '88mph',
				}
			}
		]
	},
	{
		// https://docs.element.fi/developers/public-releases
		// https://raw.githubusercontent.com/element-fi/elf-deploy/main/changelog/releases/mainnet/v1.0.0:2/addresses.json
		name: 'Element Finance',
		slug: 'element',
		links: ['https://www.element.fi'],
		colors: ['#1568CA', '#8FD8E7'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				contracts: [
					'0x62F161BF3692E4015BefB05A03a94A40f520d1c0', // trancheFactory
					'0xEe4e158c03A10CBc8242350d74510779A364581C', // userProxy
					'0xBA12222222228d8Ba445958a75a0704d566BF2C8', // balancerVault
					'0x8E9aa87E45e92bad84D5F8DD1bff34Fb92637dE9', // weightedPoolFactory
					'0xb7561f547F3207eDb42A6AfA42170Cd47ADD17BD', // convergentCurvePoolFactory

					// yearn lusd3crv-f
					'0xed279fdd11ca84beef15af5d39bb4d4bee23f0ca', // wrapped position
					'0x5fA5B62c8AF877CB37031e0a3B2f34A78e3C56A6', // vault
					// tranches
				],
				providers: {
					zapper: 'element'
				}
			}
		]
	},
	{
		name: 'Ellipsis',
		slug: 'ellipsis',
		links: ['https://v2.ellipsis.finance'],
		views: [
			{
				chainId: 56,
				erc20Tokens: [],
				providers: {
					zapper: 'ellipsis',
				}
			}
		]
	},
	{
		name: 'Empty Set Dollar',
		slug: 'empty-set-dollar',
		links: ['https://www.emptyset.finance'],
		colors: ['#312f32'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ESD']
				],
				providers: {
					zapper: 'esd',
				}
			}
		]
	},
	{
		name: 'Enzyme Finance',
		slug: 'enzyme',
		links: ['https://enzyme.finance'],
		colors: ['#01cabe', '#6852ed'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MLN']
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/enzymefinance/enzyme',
					zerionDefiSDK: ['Enzyme', 'Melon']
				}
			}
		]
	},
	{
		name: 'ENS',
		slug: 'ens',
		links: ['https://ens.domains'],
		colors: ['#5284ff'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ENS']
				],
				nfts: [
					{
						name: 'ENS: Base Registrar',
						address: '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
						symbol: 'ENS'
					}
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
				}
			}
		]
	},
	{
		name: 'EPNS',
		slug: 'epns',
		links: ['https://epns.io', 'https://incentives.epns.io'],
		colors: ['#e20880', '#35c5f3', '#674c9f'],
		views: [
			{
				chainId: 1,
				providers: {
					zapper: 'epns',
					theGraph: 'https://api.thegraph.com/subgraphs/name/epnsproject/epnsprod',
				}
			}
		]
	},
	{
		name: 'Essentia',
		slug: 'essentia',
		links: ['https://essentia.one'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ESS']
				],
				providers: {
					zapper: 'essentia',
				}
			}
		]
	},
	{
		name: 'Etherspot',
		slug: 'etherspot',
		colors: ['#f43c48', '#f67033'],
		links: ['https://etherspot.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
			}
		]
	},
	{
		name: 'Fei Protocol',
		slug: 'fei',
		links: ['https://fei.money'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FEI']
				],
				providers: {
					zapper: 'fei',
				}
			}
		]
	},
	{
		name: 'FinNexus',
		slug: 'finnexus',
		links: ['https://www.finnexus.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FNX']
				],
				providers: {
					zerionDefiSDK: ['FinNexus']
				}
			}
		]
	},
	{
		name: 'Float Protocol',
		slug: 'float',
		links: ['https://floatprotocol.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FLOAT'],
					erc20TokensByContractAddress['0x24a6a37576377f63f194caa5f518a60f45b42921'] // BANK
				],
				providers: {
					zapper: 'float-protocol',
				}
			}
		]
	},
	{
		name: 'Frax',
		slug: 'frax',
		links: ['https://frax.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FRAX'],
					// erc20TokensBySymbol['FSX'],
				],
				providers: {
					zapper: 'frax',
				}
			}
		]
	},
	{
		name: 'Futureswap',
		slug: 'futureswap',
		links: ['https://www.futureswap.com'],
		views: [
			{
				name: 'Futureswap V1',
				slug: 'v1',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FST']
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/futureswap/futureswap-v1',
					zapper: 'futureswap',
				}
			}
		]
	},
	{
		name: 'Gnosis',
		slug: 'gnosis',
		links: ['https://gnosis.io'],
		views: [
			{
				name: 'Gnosis Protocol',
				slug: 'protocol',
				links: ['https://gnosis.io/protocol'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['GNO']
				],
				providers: {
					zerionDefiSDK: ['Gnosis Protocol'],
					theGraph: 'https://api.thegraph.com/subgraphs/name/gnosis/protocol'
				}
			},
			{
				name: 'Gnosis Protocol',
				slug: 'protocol',
				links: ['https://gnosis.io/protocol'],
				chainId: 100,
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/gnosis/protocol-xdai'
				}
			},
			{
				name: 'Gnosis Safe',
				slug: 'safe',
				links: ['https://gnosis.io/protocol'],
				chainId: 100,
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/gjeanmart/gnosis-safe-mainnet'
				}
			}
		]
	},
	{
		name: 'Governor DAO',
		slug: 'governor',
		links: ['https://governordao.org'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['GDAO'],
				],
				providers: {
					zapper: 'governor-dao',
				}
			}
		]
	},
	{
		name: 'Gro',
		slug: 'gro',
		links: ['https://www.gro.xyz'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['GRO'],
				],
				providers: {
					zapper: 'gro',
				}
			}
		]
	},
	{
		name: 'Idle Finance',
		slug: 'idle',
		links: ['https://idle.finance'],
		colors: ['#0B50B0', '#0F6BEB', '#6FA4F2'],
		views: [
			{
				name: 'Idle Governance',
				slug: 'governance',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['IDLE'],
				],
				providers: {
					zerionDefiSDK: ['Idle']
				}
			},
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['IDLEDAIYIELD'],
					erc20TokensBySymbol['IDLESUSDYIELD'],
					erc20TokensBySymbol['IDLEUSDCSAFE'],
					erc20TokensBySymbol['IDLEUSDTYIELD'],
					erc20TokensBySymbol['IDLEDAISAFE'],
					erc20TokensBySymbol['IDLEUSDTSAFE'],
					erc20TokensBySymbol['IDLETUSDYIELD'],
					erc20TokensBySymbol['IDLEWBTCYIELD'],
					erc20TokensBySymbol['IDLEUSDCYIELD'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/idle-finance/idle',
					zapper: 'idle',
					zerionDefiSDK: ['Idle • Early Rewards', 'Idle • Risk-Adjusted'],
				}
			}
		]
	},
	{
		name: 'Illuvium',
		slug: 'illuvium',
		links: ['https://www.illuvium.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ILV'],
				],
				providers: {
					zapper: 'illuvium',
				}
			}
		]
	},
	{
		name: 'Impossible Finance',
		slug: 'impossible-finance',
		links: ['https://impossible.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'impossible-finance',
				}
			}
		]
	},
	{
		name: 'Index Cooperative',
		slug: 'index-cooperative',
		links: ['https://www.indexcoop.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['INDEX']
				],
				providers: {
					zapper: 'index-coop',
				}
			}
		]
	},
	{
		name: 'Indexed Finance',
		slug: 'indexed',
		links: ['https://indexed.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x86772b1409b61c639eaac9ba0acfbb6e238e5f83'] // NDX
				],
				providers: {
					zapper: 'Indexed',
				}
			}
		]
	},
	{
		name: 'Inverse Finance',
		slug: 'inverse',
		links: ['https://inverse.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['INV']
				],
				providers: {
					zapper: 'inverse',
				}
			}
		]
	},
	{
		name: 'Iron',
		slug: 'iron',
		links: ['https://iron.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'iron',
				}
			}
		]
	},
	{
		name: 'Harvest Finance',
		slug: 'harvest',
		links: ['https://harvest.finance'],
		colors: ['#fffce6', '#bbe3e2'], // unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FARM']
				],
				providers: {
					zapper: 'harvest',
					zerionDefiSDK: ['Harvest', 'Harvest • Profit Sharing'],
				}
			}
		]
	},
	{
		name: 'Hegic',
		slug: 'hegic',
		links: ['https://www.hegic.co'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['HEGIC'],
					erc20TokensBySymbol['RHEGIC2'],
					erc20TokensBySymbol['ZHEGIC']
				],
				providers: {
					zapper: 'hegic'
				}
			},
			{
				name: 'zLOT Finance',
				slug: 'zlot',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ZLOT']
				],
				providers: {
					zapper: 'zlot',
					zerionDefiSDK: ['zlot.finance']
				}
			}
		]
	},
	{
		name: 'Instadapp',
		slug: 'instadapp',
		links: ['https://instadapp.io'],
		colors: ['#3f75ff'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['INST'],
				]
			}
		]
	},
	{
		name: 'Keep Network',
		slug: 'keep-network',
		links: ['https://keep.network'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['KEEP'],
				],
				providers: {
					zapper: 'keep-network',
				}
			}
		]
	},
	{
		name: 'KeeperDAO',
		slug: 'keeper-dao',
		links: ['https://keeperdao.com', 'https://app.keeperdao.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ROOK'],
				],
				providers: {
					zapper: 'keeper-dao',
					zerionDefiSDK: ['KeeperDAO'],
				}
			}
		]
	},
	{
		name: 'Kimchi Finance',
		slug: 'kimchi',
		links: ['https://kimchi.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['KIMCHI'],
				],
				providers: {
					zerionDefiSDK: ['KIMCHI'],
				}
			}
		]
	},
	{
		name: 'Klondike Finance',
		slug: 'klondike',
		links: ['https://klondike.finance'],
		views: [
			{
				name: 'Klondike Finance v2',
				slug: 'v2',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['KLONX'],
				],
				providers: {
					zapper: 'klondike-v2',
				}
			},
			{
				name: 'Klondike Finance v1',
				slug: 'v1',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['KLON'],
					erc20TokensBySymbol['KBTC'],
					erc20TokensBySymbol['KBOND'],
				],
				providers: {
					zapper: 'klondike',
				}
			}
		]
	},
	{
		name: 'Kyber',
		slug: 'kyber',
		links: ['https://kyber.org', 'https://kyber.network'],
		colors: ['#31cb9e'],
		views: [
			{
				name: 'Kyber Dynamic Market Maker',
				slug: 'dmm',
				links: ['https://dmm.exchange'],
				chainId: 1,
				contracts: [
					'0x833e4083B7ae46CeA85695c4f7ed25CDAd8886dE', // Factory (DMMFactory)
					'0x1c87257f5e8609940bc751a07bb085bb7f8cdbe6', // Router (DMMRouter02)
					'0x6a65e062ce8290007301296f3c6ae446af7bdeec', // Migrator

					// Farming
					'0x306121f1344ac5f84760998484c0176d7bfb7134', // KNC-ETH
					'0xce9874c42dce7fffbe5e48b026ff1182733266cb', // ETH-USDT
					'0xd343d5dba2fba55eef58189619c05e33cab95ca1', // WBTC-USDT
					'0x1cf68Bbc2b6D3C6CfE1BD3590CF0E10b06a05F17', // WBTC-ETH
					'0x61639D6eC06C13a96B5eB9560b359D7c648C7759', // KNC-ETH
				],
				providers: {
					zapper: 'kyber-dmm',
					theGraph: 'https://api.thegraph.com/subgraphs/name/dynamic-amm/dynamic-amm',
				}
			},
			{
				name: 'Kyber Dynamic Market Maker',
				slug: 'dmm',
				links: ['https://dmm.exchange'],
				chainId: 137,
				contracts: [
					'0x5f1fe642060b5b9658c15721ea22e982643c095c', // Factory
					'0x546C79662E028B661dFB4767664d0273184E4dD1', // Router

					// Farming
					'0xd8B9E9444fCBF26BEA4BAdd6142dD6a962BCA86A', // KNC-ETH
					'0x37e6449B0e99BeFD2A708eA048d970F4FF4dC65d', // KNC-MATIC
					'0x45963db838a070cF7BE8e7046fD63e23d376c665', // MATIC-DAI
					'0x95D708e9eE04b0136b98579141624d19c89B9d68', // USDC-ETH
					'0x3904aC366D348636694CB6720aa1540e76441b1B', // USDC-USDT
					'0x7018C0bd73255C8966d0B26634E0BC0c7595D255', // USDC-DAI
				]
			},
			{
				name: 'KyberDAO v2',
				slug: 'dao-v2',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['KNC'],
				],
				providers: {
					zerionDefiSDK: ['KyberDAO'],
				}
			},
			{
				name: 'KyberDAO v1',
				slug: 'dao-v1',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['KNCL'],
				],
				providers: {
					zapper: 'kyber-network',
				}
			}
		]
	},
	{
		name: 'Launchpool',
		slug: 'launchpool',
		links: ['https://launchpool.xyz'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['LPOOL'],
				],
				providers: {
					zapper: 'launchpool',
				}
			}
		]
	},
	{
		name: 'Linkswap',
		slug: 'linkswap',
		links: ['https://linkswap.app'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'linkswap',
				}
			}
		]
	},
	{
		name: 'Livepeer',
		slug: 'livepeer',
		links: ['https://livepeer.org'],
        colors: ['#00EB88', '#00A55F'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['LPT'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/livepeer/livepeer',
					zerionDefiSDK: ['Livepeer'],
				}
			}
		]
	},
	{
		name: 'Loopring',
		slug: 'loopring',
		links: ['https://loopring.org', 'https://loopring.io', 'https://exchange.loopring.io'],
        colors: ['#1c42ff'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['LRC'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/loopring',
					zapper: 'loopring',
				}
			}
		]
	},
	{
		name: 'Liquity',
		slug: 'liquity',
		links: ['https://www.liquity.org'],
        colors: ['#2eb6ea', '#1542cd', '#745ddf'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['LQTY'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/liquity/liquity',
					zapper: 'liquity',
					zerionDefiSDK: ['Liquity'],
				}
			},
			{
				name: 'Liquity Frontend',
				slug: 'frontend',
				chainId: 1,
				embeds: [
					{
						name: 'LiquityFi (eth.liquity.fi)',
						src: 'https://eth.liquity.fi',
					},
					{
						name: 'Liquity.App (liquity.app)',
						src: 'https://liquity.app',
					},
					{
						name: 'Lusd.eth.link (lusd.eth.link)',
						src: 'https://lusd.eth.link',
					},
					{
						name: 'Liquity Land (liquityland.com)',
						src: 'https://liquityland.com',
					},
					{
						name: 'LiquityApp (liquityapp.com)',
						src: 'https://liquityapp.com',
					},
				]
			},
		]
	},
	{
		name: 'Lydia Finance',
		slug: 'lydia',
		links: ['https://www.lydia.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'lydia',
				}
			}
		]
	},
	{
		name: 'Lyra',
		slug: 'lyra',
		links: ['https://www.lyra.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'lyra',
				}
			}
		]
	},
	{
		name: 'Maker',
		slug: 'maker',
		links: ['https://makerdao.com'],
        colors: ['#4fa89b', '#6bcdba'], // unofficial // ['#1AAB9B'],
		views: [
			{
				colors: ['#f4b731'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['DAI'],
					erc20TokensBySymbol['SAI'],
				],
				providers: {
					zapper: 'maker',
					zerionDefiSDK: ['Dai Savings Protocol', 'Dai Savings Rate'],
				}
			},
			{
				name: 'Maker Governance',
				slug: 'governance',
				colors: ['#1AAB9B'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MKR'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/protofire/makerdao-governance',
					zerionDefiSDK: ['Maker Governance'],
				}
			}
		]
	},
	{
		name: 'Matic',
		slug: 'matic',
		links: ['https://wallet.matic.network/staking'],
        colors: ['#8247e5', /*'#003cb2'*/],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MATIC'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/maticnetwork/mainnet-root-subgraphs',
					zerionDefiSDK: ['Matic'],
				}
			}
		]
	},
	{
		name: 'Mirror Protocol',
		slug: 'mirror',
		links: ['https://mirror.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MIR'], // Mirror Protocol
					erc20TokensBySymbol['MAAPL'], // Mirrored Apple
					erc20TokensBySymbol['MAMZN'], // Mirrored Amazon
					erc20TokensBySymbol['MBABA'], // Mirrored Alibaba
					erc20TokensBySymbol['MGOOGL'], // Mirrored Google
					erc20TokensBySymbol['MFB'], // Mirrored Facebook
					erc20TokensBySymbol['MIAU'], // Mirrored iShares Go
					erc20TokensBySymbol['MMSFT'], // Mirrored Microsoft
					erc20TokensBySymbol['MNFLX'], // Mirrored Netflix
					erc20TokensBySymbol['MQQQ'], // Mirrored Invesco QQ
					erc20TokensBySymbol['MSLV'], // Mirrored iShares Si
					erc20TokensBySymbol['MTSLA'], // Mirrored Tesla
					erc20TokensBySymbol['MTWTR'], // Mirrored Twitter
					erc20TokensBySymbol['MUSO'], // Mirrored United Sta
					erc20TokensBySymbol['MVIXY'], // Mirrored ProShares
				],
				providers: {
					zapper: 'mirror',
				}
			}
		]
	},
	{
		name: 'Mith Cash',
		slug: 'mith-cash',
		links: ['https://mith.cash'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MITH'],
					erc20TokensBySymbol['MIS']
				],
				providers: {
					zapper: 'mith-cash',
				}
			}
		]
	},
	{
		name: 'mStable',
		slug: 'mstable',
		links: ['https://mstable.org'],
        colors: ['#4aa1ff', '#000000'], // '#176ede' unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MBTC'],
					erc20TokensBySymbol['MUSD'],
				],
				providers: {
					zapper: 'mstable',
					zerionDefiSDK: ['mStable', 'mStable V2'],
				}
			},
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MTA'],
				],
				providers: {
					zerionDefiSDK: ['mStable • Staking'],
				}
			},
		]
	},
	{
		name: 'Mushrooms Finance',
		slug: 'mushrooms',
		links: ['https://mushrooms.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['MM'],
				],
				providers: {
					zapper: 'mushroom',
				}
			}
		]
	},
	{
		name: 'Nexus Mutual',
		slug: 'nexus-mutual',
		links: ['https://nexusmutual.io'],
		colors: ['#1eab89'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['NXM'],
					erc20TokensBySymbol['WNXM'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/nexusmutual/nexus-mutual',
					zerionDefiSDK: ['Nexus Mutual'],
				}
			}
		]
	},
	{
		name: 'NFT20',
		slug: 'nft20',
		links: ['https://nft20.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'nft20',
				}
			}
		]
	},
	{
		name: 'NFTX',
		slug: 'nftx',
		links: ['https://nftx.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['NFTX'],
					erc20TokensByContractAddress['0x0fe629d1e84e171f8ff0c1ded2cc2221caa48a3f'], // NFTX Hashmasks Index
				],
				providers: {
					zapper: 'nftx',
				}
			}
		]
	},
	{
		name: 'Nsure Network',
		slug: 'nsure-network',
		links: ['https://nsure.network'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['NSURE']
				],
				providers: {
					zapper: 'nsure-network',
				}
			}
		]
	},
	{
		name: 'Olympus',
		slug: 'olympus',
		links: ['https://www.olympusdao.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['OHM']
				],
				providers: {
					zapper: 'olympus',
				}
			}
		]
	},
	{
		name: '1inch',
		slug: '1inch',
		links: ['https://1inch.io'],
		colors: ['#94a6c3', '#d82122', '#0a192b'],
		views: [
			{
				name: 'Ethereum',
				slug: 'ethereum',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['1INCH'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/1inch-exchange/one-inch-v2',
					zapper: '1inch',
					zerionDefiSDK: ['1inch Liquidity Protocol', '1inch LP • Staking'],
				}
			},
			{
				name: 'Chi Gastoken',
				slug: 'chi',
				colors: ['#d21318', '#3d3d3c'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x0000000000004946c0e9f43f4dee607b0ef1fa1c'] // CHI
				],
				providers: {
					zerionDefiSDK: ['Chi Gastoken by 1inch'],
				}
			},
			{
				name: 'Binance Smart Chain',
				slug: 'bsc',
				chainId: 56,
				erc20Tokens: [],
				providers: {
					zapper: '1inch',
				}
			},
			{
				name: 'Polygon',
				slug: 'polygon',
				chainId: 137,
				erc20Tokens: [],
				providers: {
					zapper: '1inch',
				}
			},
			{
				name: 'Mooniswap', // Mooniswap (Liquity Protocol v1)
				slug: 'mooniswap',
				chainId: 1,
				links: ['https://mooniswap.exchange'],
				providers: {
					zapper: 'mooniswap',
					zerionDefiSDK: ['Mooniswap'],
				}
			},
		]
	},
	{
		name: 'OnX Finance',
		slug: 'onx',
		links: ['https://onx.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ONX']
				],
				providers: {
					zapper: 'onx',
				}
			}
		]
	},
	{
		name: 'Opium Protocol',
		slug: 'opium',
		links: ['https://opium.network'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['OPIUM'],
				],
				providers: {
					zapper: 'opium-network',
					theGraph: 'https://api.thegraph.com/subgraphs/name/opiumprotocol/opium-network',
				}
			}
		]
	},
	{
		name: 'Opyn',
		slug: 'opyn',
		links: ['https://www.opyn.co'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'opyn',
				}
			}
		]
	},
	{
		name: 'Orion Protocol',
		slug: 'orion',
		links: ['https://www.orionprotocol.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ORN']
				],
				providers: {
					zapper: 'orion-protocol',
				}
			}
		]
	},
	{
		name: 'PancakeSwap',
		slug: 'pancakeswap',
		links: ['https://pancakeswap.finance'],
		views: [
			{
				chainId: 56,
				erc20Tokens: [],
				providers: {
					zapper: 'pancakeswap',
				}
			}
		]
	},
	{
		name: 'Pangolin',
		slug: 'pangolin',
		links: ['https://pangolin.exchange'],
		views: [
			{
				chainId: 43114,
				erc20Tokens: [],
				providers: {
					zapper: 'pangolin',
				}
			}
		]
	},
	{
		name: 'Paraswap',
		slug: 'paraswap',
		links: ['https://paraswap.io'],
		colors: ['#0060D8'], // unofficial
		views: [
			
		]
	},
	{
		name: 'Penguin',
		slug: 'penguin',
		links: ['https://penguinfinance.org'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FISH']
				],
				providers: {
					zapper: 'penguin',
				}
			}
		]
	},
	{
		name: 'Perpetual Protocol',
		slug: 'perpetual-protocol',
		links: ['https://perp.exchange'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['PERP']
				],
				providers: {
					zapper: 'perpetual-protocol',
				}
			}
		]
	},
	{
		name: 'Pickle Finance',
		slug: 'pickle',
		links: ['https://pickle.finance', 'https://app.pickle.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['PICKLE'],
				],
				providers: {
					zapper: 'pickle',
					zerionDefiSDK: ['Pickle Finance', 'Pickle Finance • Farms', 'Pickle Finance • Staking'],
				}
			}
		]
	},
	{
		name: 'PieDAO',
		slug: 'pie-dao',
		links: ['https://www.piedao.org'],
        colors: ['#d90a9d', '#9811dc', '#7732f8', '#28d4ff'], // unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0xe4f726adc8e89c6a6017f01eada77865db22da14'], // BCP (PieDAO Balanced Cry)
					erc20TokensBySymbol['DEFI+L'], // PieDAO DEFI Large C
					erc20TokensBySymbol['DEFI+S'], // PieDAO DEFI Small C
					erc20TokensBySymbol['DEFI++'], // PieDAO DEFI
					erc20TokensBySymbol['BTC++'], // PieDAO BTC
					erc20TokensBySymbol['YPIE'], // PieDAO Yearn Ecosys
					erc20TokensBySymbol['DOUGH'], // PieDAO DOUGH v2
				],
				providers: {
					zapper: 'pie-dao',
					zerionDefiSDK: ['PieDAO', 'PieDAO ExperiPies'],
				}
			}
		]
	},
	{
		name: 'Pods',
		slug: 'pods',
		links: ['https://www.pods.finance'],
        colors: ['#b7156b', '#C41857', '#df1d2c'], // https://docs.pods.finance/interfacing-with-pods/brand-assets
		views: [
			// https://docs.pods.finance/developers/deployed-contracts
			{
				chainId: 137,
				contracts: [
					'0x2971c946d793f3b846A5AEC2Ac9EC945763a82a9', // ConfigurationManager
					'0x4Add3C66196945ad9c9B35Bf8391D145A65E3337', // EmergencyStop
					'0x3b2f5264ef121F7e269Be54b2A75d3E1c04b5430', // CapProvider
					'0x19Cd96c3412E42EE1cAbD023e443aEdE7d209826', // PodPutBuilder
					'0x70a21cbB30DE94E21A84A62f5F060C2Cd4daf824', // WPodPutBuilder
					'0x343E548a47c386C73fa8738bc3488F32b0bBbeec', // PodCallBuilder
					'0x3177D77699358e8015eFE1fFCB68a3C4ACa35547', // WPodCallBuilder
					'0x35601f9C2458172D8d9f4B3Fa2CC33620af632f3', // OptionFactory
					'0x94ea57A96e02f2F1b3dcB18105Cd6cFa36FB8Ab2', // NormalDistribution
					'0xC6AB9Cdf5aaFDa905D9e2BE0692e5F575fcDc849', // BlackScholes
					'0xab5627f4ECb905cE535ECf704eBB1Dc9405D66eA', // IVGuesser
					'0xC51e13FdcEfc232bFc4741B2C0C24483110B5028', // IVProvider
					'0x7f105cC52d66d8664cDdC935f8A8AE7941032d18', // PriceProvider
					'0x712a6E19Dc4e709E025DDB22C030f51CDeFdbC43', // FeePoolBuilder
					'0x7B4401FD0070cA78C7C93aa335D6000Ee0D629F7', // OptionAMMFactory
					'0xB7dEF03006eC72Ef409C41fAEE2619e4bFdB547F', // OptionHelper
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/pods-finance/pods'
				}
			}
		]
	},
	{
		name: 'Polywhale',
		slug: 'polywhale',
		links: ['https://polywhale.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'polywhale',
				}
			}
		]
	},
	{
		name: 'PoolTogether',
		slug: 'pooltogether',
		links: ['https://pooltogether.com'],
        colors: ['#4a31a5'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['POOL'],
					erc20TokensBySymbol['PCUSDC'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/pooltogether/pooltogether',
					zapper: 'pooltogether',
					zerionDefiSDK: ['PoolTogether', 'PoolTogether V3'],
				}
			}
		]
	},
	{
		name: 'Popsicle Finance',
		slug: 'popsicle',
		links: ['https://popsicle.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ICE']
				],
				providers: {
					zapper: 'popsicle',
				}
			}
		]
	},
	{
		name: 'PowerPool',
		slug: 'powerpool',
		links: ['https://powerpool.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['CVP'] // PowerPool Concentra
				],
				providers: {
					zapper: 'powerpool',
				}
			}
		]
	},
	{
		name: 'QuickSwap',
		slug: 'quickswap',
		links: ['https://quickswap.exchange'],
		views: [
			{
				chainId: 137,
				erc20Tokens: [],
				providers: {
					zapper: 'quickswap',
				}
			}
		]
	},
	{
		name: 'Rari Capital',
		slug: 'rari',
		links: ['https://www.rari.capital'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['RGT'],
				],
				providers: {
					zapper: 'rari',
				}
			}
		]
	},
	{
		name: 'Rally',
		slug: 'rally',
		links: ['https://rally.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['RLY']
				],
				providers: {
					zapper: 'rally',
				}
			}
		]
	},
	{
		name: 'Rari Capital',
		slug: 'rari',
		links: ['https://rari.capital'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['RGT']
				],
				providers: {
					zapper: 'rari',
				}
			},
			{
				name: 'Rari Fuse',
				slug: 'fuse',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FUSE']
				],
				providers: {
					zapper: 'rari-fuse',
				}
			}
		]
	},
	{
		name: 'Rarible',
		slug: 'rarible',
		links: ['https://rarible.com'],
		colors: ['#FEDA03'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['RARI'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/rarible/protocol',
				}
			}
		]
	},
	{
		name: 'RealT',
		slug: 'realt',
		links: ['https://realt.co'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'realt',
				}
			}
		]
	},
	{
		name: 'Reflexer',
		slug: 'reflexer',
		links: ['https://reflexer.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['FLX'],
				],
				providers: {
					zapper: 'reflexer',
					zerionDefiSDK: ['Reflexer'],
				}
			}
		]
	},
	{
		name: 'Ribbon',
		slug: 'ribbon',
		links: ['https://www.ribbon.finance', 'https://app.ribbon.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'ribbon',
				}
			}
		]
	},
	{
		name: 'Sablier',
		slug: 'sablier',
		links: ['https://sablier.finance'],
		colors: ['#f77423', '#fbce5b'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'sablier',
					theGraph: 'https://api.thegraph.com/subgraphs/name/sablierhq/sablier',
				}
			}
		]
	},
	{
		name: 'Saddle',
		slug: 'saddle',
		links: ['https://saddle.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'saddle',
					zerionDefiSDK: ['Saddle'],
				}
			}
		]
	},
	{
		name: 'SashimiSwap',
		slug: 'sashimiswap',
		links: ['https://sashimi.cool'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['SASHIMI'],
				],
				providers: {
					zerionDefiSDK: ['SashimiSwap'],
				}
			}
		]
	},
	{
		name: 'S.finance',
		slug: 'sfinance',
		links: ['https://s.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'sfinance',
				}
			},
			{
				chainId: 66,
				erc20Tokens: [],
				providers: {
					zapper: 'sfinance',
				}
			}
		]
	},
	{
		name: 'Shapeshift',
		slug: 'shapeshift',
		links: ['https://shapeshift.com/'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					// erc20TokensBySymbol['FOX']
				],
				providers: {
					zapper: 'shapeshift',
				}
			}
		]
	},
	{
		name: 'SharedStake',
		slug: 'sharedstake',
		links: ['https://www.sharedstake.org/'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x84810bcf08744d5862b8181f12d17bfd57d3b078'] // SharedStake Governance Token (SGT)
				],
				providers: {
					zapper: 'shared-stake',
				}
			}
		]
	},
	{
		name: 'Shell',
		slug: 'shell',
		links: ['https://www.shellprotocol.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'shell',
				}
			}
		]
	},
	{
		name: 'Smoothy',
		slug: 'smoothy',
		links: ['https://www.smoothy.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['SMTY'],
				],
				providers: {
					zapper: 'smoothy',
				}
			}
		]
	},
	{
		name: 'Snowball',
		slug: 'snowball',
		links: ['https://snowball.network/'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'snowball',
				}
			}
		]
	},
	{
		name: 'SnowSwap',
		slug: 'snowswap',
		links: ['https://snowswap.org'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['SNOW'],
				],
				providers: {
					zapper: 'snowswap',
					zerionDefiSDK: ['SnowSwap'],
				}
			}
		]
	},
	{
		name: 'SpiritSwap',
		slug: 'spiritswap',
		links: ['https://www.spiritswap.finance'],
		views: [
			{
				chainId: 250,
				erc20Tokens: [],
				providers: {
					zapper: 'spiritswap',
				}
			}
		]
	},
	{
		name: 'SpookySwap',
		slug: 'spookyswap',
		links: ['https://spookyswap.finance'],
		views: [
			{
				chainId: 250,
				erc20Tokens: [],
				providers: {
					zapper: 'spookyswap',
				}
			}
		]
	},
	{
		name: 'Stake DAO',
		slug: 'stake-dao',
		links: ['https://stakedao.org'],
		colors: ['#7c3aed'], // unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['SDT'],
				],
				providers: {
					zapper: 'stake-dao',
					zerionDefiSDK: ['Stake DAO'],
				}
			}
		]
	},
	{
		name: 'Streamr',
		slug: 'streamr',
		links: ['https://streamr.network'],
		colors: ['#FF5C00', '#0D009A'], // https://streamr.network/design/#colours
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x0cf0ee63788a0849fe5297f3407f701e122cc023'], // DATA
				],
			}
		]
	},
	{
		name: 'Strudel Finance',
		slug: 'strudel',
		links: ['https://strudel.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['TRDL']
				],
				providers: {
					zapper: 'snowball',
				}
			}
		]
	},
	{
		// https://docs.superfluid.finance/superfluid/networks/networks
		name: 'Superfluid',
		slug: 'superfluid',
		links: ['https://www.superfluid.finance/home'],
		colors: ['#10BB34', '#12141E'],
		views: [
			{
				chainId: 137,
				erc20Tokens: [
					{
						chainId: 137,
						address: '0x3aD736904E9e65189c3000c7DD2c8AC8bB7cD4e3',
						name: 'Super MATIC',
						symbol: 'MATICx',
						decimals: 18,
					},
					{
						chainId: 137,
						address: '0x27e1e4E6BC79D93032abef01025811B7E4727e85',
						name: 'Super WETH (PoS)',
						symbol: 'ETHx',
						decimals: 18,
					},
					{
						chainId: 137,
						address: '0xCAa7349CEA390F89641fe306D93591f87595dc1F',
						name: 'Super USDC (PoS)',
						symbol: 'USDCx',
						decimals: 18,
					},
					{
						chainId: 137,
						address: '0x1305F6B6Df9Dc47159D12Eb7aC2804d4A33173c2',
						name: 'Super DAI (PoS)',
						symbol: 'DAIx',
						decimals: 18,
					},
					{
						chainId: 137,
						address: '0x4086eBf75233e8492F1BCDa41C7f2A8288c2fB92',
						name: 'Super WBTC (PoS)',
						symbol: 'WBTCx',
						decimals: 18,
					},
				],
				contracts: [
					'0xE0cc76334405EE8b39213E620587d815967af39C', // Resolver
					'0x3E14dC1b13c488a8d5D310918780c983bD5982E7', // Host
					'0x6EeE6060f715257b970700bc2656De21dEdF074C', // CFAv1
					'0xB0aABBA4B2783A72C52956CDEF62d438ecA2d7a1', // IDAv1
					'0x2C90719f25B10Fc5646c82DA3240C76Fa5BcCF34', // SuperTokenFactory
				],
				providers: {
					zapper: 'superfluid'
				}
			},
			{
				chainId: 100,
				erc20Tokens: [
					{
						chainId: 100,
						address: '0x59988e47A3503AaFaA0368b9deF095c818Fdca01',
						name: 'Super xDAI',
						symbol: 'xDAIx',
						decimals: 18,
					}
				],
				contracts: [
					'0xD2009765189164b495c110D61e4D301729079911', // Resolver
					'0x2dFe937cD98Ab92e59cF3139138f18c823a4efE7', // Host
					'0xEbdA4ceF883A7B12c4E669Ebc58927FBa8447C7D', // CFAv1
					'0x7888ac96F987Eb10E291F34851ae0266eF912081', // IDAv1
					'0x23410e2659380784498509698ed70E414D384880', // SuperTokenFactory

					'0x0872d200f74e4a45e830eccc9e8b8f605df7ce06', // WORK SuperToken
				],
				providers: {
					zapper: 'superfluid'
				}
			},
		]
	},
	{
		name: 'Sushi',
		slug: 'sushi',
		links: ['https://sushi.com'],
        colors: ['#016eda', '#d900c0'],
		views: [
			{
				name: 'Ethereum',
				slug: 'ethereum',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['SUSHI'],
				],
				providers: {
					zapper: 'sushiswap',
					zerionDefiSDK: ['SushiSwap', 'SushiSwap • Staking'],
				}
			},
			{
				name: 'Bentobox',
				slug: 'bentobox',
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap-bentobox'
				}
			},
			{
				name: 'Kashi',
				slug: 'kashi',
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap-kashi'
				}
			},
			{
				name: 'Fantom',
				slug: 'fantom',
				chainId: 250,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap',
				}
			},
			{
				name: 'Binance Smart Chain',
				slug: 'bsc',
				chainId: 56,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap',
				}
			},
			{
				name: 'Polygon',
				slug: 'polygon',
				chainId: 137,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap',
				}
			},
			{
				name: 'HECO',
				slug: 'heco',
				chainId: 128,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap',
				}
			},
			{
				name: 'Gnosis Chain',
				slug: 'gnosis',
				chainId: 100,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap',
				}
			},
			{
				name: 'Harmony',
				slug: 'harmony',
				chainId: 1666600000,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap',
				}
			},
			{
				name: 'Avalanche',
				slug: 'avalanche',
				chainId: 43114,
				erc20Tokens: [],
				providers: {
					zapper: 'sushiswap',
				}
			}
		]
	},
	{
		name: 'Swerve',
		slug: 'swerve',
		links: ['https://swerve.fi'],
        colors: ['#86fce7'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['SWRV'],
				],
				providers: {
					zapper: 'swerve',
					zerionDefiSDK: ['Swerve', 'Swerve • Liquidity Gauges'],
				}
			}
		]
	},
	{
		name: 'Synthetix',
        colors: ['#00d1ff', '#1e1a31'],
		slug: 'synthetix',
		links: ['https://www.synthetix.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['SNX'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/synthetixio-team/synthetix',
					zapper: 'synthetix',
					zerionDefiSDK: ['Synthetix'],
				}
			},
			{
				name: 'Synthetix Mintr',
				slug: 'mintr',
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'mintr',
				}
			}
		]
	},
	{
		// https://docs.tellor.io/tellor/integration/reference-page
		name: 'Tellor',
		slug: 'tellor',
		links: ['https://tellor.io'],
		colors: ['#20f092'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['TRB'],
				],
				contracts: [
					'0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0', // Oracle
					'0xB2b6c6232d38faE21656703cAC5A74e5314741D4', // Lens
					'0xCA240cf523cD9163C2A8465B2642B04749704625', // Fellowship (trusted addresses)
					'0xd53412ff046B13318C05e923919d8dB07C3cB3E9', // Rivendell (voting logic)
				]
			}
		]
	},
	{
		name: 'The Graph',
		slug: 'the-graph',
		links: ['https://thegraph.com'],
		colors: ['#4ca4ff', '#6f4cff'], // unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0xc944e90c64b2c07662a292be6244bdf05cda44a7'], // GRT
				],
				providers: {
					zapper: 'the-graph'
				}
			}
		]
	},
	{
		name: 'Tokemak',
		slug: 'tokemak',
		links: ['https://www.tokemak.xyz'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'tokemak',
				}
			}
		]
	},
	{
		name: 'Tokenlon',
		slug: 'tokenlon',
		links: ['https://tokenlon.im'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['LON']
				],
				providers: {
					zapper: 'tokenlon',
				}
			}
		]
	},
	{
		name: 'TokenSets',
		slug: 'tokensets',
		links: ['https://www.tokensets.com'],
        colors: ['#2D2CE5'/*, '#6BB1FF'*/],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['DPI'],
				],
				providers: {
					zapper: 'tokensets',
					zerionDefiSDK: ['TokenSets', 'SetToken V2'],
				}
			}
		]
	},
	{
		name: 'Tornado Cash',
		slug: 'tornado-cash',
		links: ['https://tornado.cash'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['TORN']
				],
				providers: {
					zapper: 'tornado-cash',
				}
			}
		]
	},
	{
		name: 'Trader Joe',
		slug: 'traderjoe',
		links: ['https://traderjoexyz.com'],
		views: [
			{
				chainId: 43114,
				erc20Tokens: [],
				providers: {
					zapper: 'traderjoe',
				}
			}
		]
	},
	{
		name: 'UMA',
		slug: 'uma',
		links: ['https://umaproject.org'],
		colors: ['#ff4a4a'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['UMA'],
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/umaprotocol/uma',
				}
			}
		]
	},
	{
		// https://umbrella-network.readme.io/docs/umb-token-contracts
		name: 'Umbrella',
		slug: 'umbrella',
		links: ['https://www.umb.network'],
		colors: ['#2B28B7', '#000000'], // #06f398
		views: [
			{
				name: 'Ethereum',
				slug: 'ethereum',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['UMB'],
					{
						name: 'Umbrella Reward #1',
						address: '0x1b17dbb40fbed8735e7fe8c9eb02c20984fadfd6',
						symbol: 'rUMB1',
						decimals: 18
					}
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/cfengliu/umbrella'
				}
			},
			{
				name: 'Binance Smart Chain',
				slug: 'bsc',
				chainId: 56,
				erc20Tokens: [
				],
				contracts: [
					'0xb2C6c4162c0d2B6963C62A9133331b4D0359AA34', // Contract Registry
				]
			}
		]
	},
	{
		name: 'Uniswap',
		slug: 'uniswap',
		links: ['https://uniswap.org', 'https://app.uniswap.org'],
        colors: ['#ff007a'],
		views: [
			{
				name: 'Uniswap V3',
				slug: 'v3',
				chainId: 1,
				erc20Tokens: [],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v3-testing',
					zapper: 'uniswap-v3',
					zerionDefiSDK: ['Uniswap V3'],
				}
			},
			{
				name: 'Uniswap V2',
				slug: 'v2',
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x1f9840a85d5af5bf1d1762f925bdaddc4201f984'], // UNI
				],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
					zapper: 'uniswap-v2',
					zerionDefiSDK: ['Uniswap V2'],
				}
			},
			{
				name: 'Uniswap V1',
				slug: 'v1',
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'uniswap',
					zerionDefiSDK: ['Uniswap V1'],
				}
			},
		]
	},
	{
		// https://github.com/unitprotocol/core/blob/master/CONTRACTS.md
		name: 'Unit Protocol',
		slug: 'unit',
		links: ['https://unit.xyz'],
		views: [
			{
				name: 'Ethereum',
				slug: 'ethereum',
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x92e187a03b6cd19cb6af293ba17f2745fd2357d5'], // DUCK
					erc20TokensBySymbol['USDP'],
				],
				contracts: [
					// Core
					'0xb1cFF81b9305166ff1EFc49A129ad2AfCd7BCf19', // Vault
					'0x1456688345527bE1f37E9e627DA0837D6f08C925', // USDP
					'0xB46F8CF42e504Efe8BEf895f848741daA55e9f1D', // VaultParameters
					'0x203153522B9EAef4aE17c6e99851EE7b2F7D312E', // VaultManagerParameters
					'0xaEF1ed4C492BF4C57221bE0706def67813D79955', // LiquidationAuction02
					'0x0e13ab042eC5AB9Fc6F43979406088B9028F66fA', // CDPManager01
					'0xaD3617D11f4c1d30603551eA75e9Ace9CB386e15', // CDPManager01_Fallback

					// Helpers & Registries
					'0x75fBFe26B21fd3EA008af0C764949f8214150C8f', // OracleRegistry
					'0x4DD1A6DB148BEcDADAdFC407D23b725eDd3cfB6f', // ParametersBatchUpdater
					'0xd51F509Fb80b4fF4D4Bfb4144eEd877F0F499AF6', // AssetParametersViewer
					'0x3DB39B538Db1123389c77F888a213F1A6dd22EF3', // CollateralRegistry
					'0x1a5Ff58BC3246Eb233fEA20D32b79B5F01eC650c', // CDPRegistry
					'0xF7633FA353E74Edb211B1d22e23c96aE4d7b24C0', // ForceTransferAssetStore
				],
				providers: {
					zapper: 'unit',
				}
			},
			{
				name: 'Binance Smart Chain',
				slug: 'bsc',
				chainId: 56,
				erc20Tokens: [
				],
				contracts: [
					// Core
					'0xdacfeed000e12c356fb72ab5089e7dd80ff4dd93', // Vault
					'0xdacd011a71f8c9619642bf482f1d4ceb338cffcf', // USDP
					'0x56c7CA666d192332F72a5842E72eED5f59F0fb48', // VaultParameters
					'0x99f2B13C28A4183a5d5e0fe02B1B5aeEe85FAF5A', // VaultManagerParameters
					'0x852de08f3cD5b92dD8b3B92b321363D04EeEc39E', // LiquidationAuction02
					'0x1337daC01Fc21Fa21D17914f96725f7a7b73868f', // CDPManager01
					
					// Helpers & Registries
					'0xbea721ACe12e881cb44Dbe9361ffEd9141CE547F', // OracleRegistry
					'0xA1ad3602697c15113E089C2723c15eBF3038465C', // CollateralRegistry
					'0xE8372dcef80189c0F88631507f6466b3f60E24A4', // CDPRegistry
					'0x7815ed0f9B00E7b34f52543779783023c7621fA1', // ForceTransferAssetStore
					'0x11b1bd923f4D0669958e16A511567f540Bc21d2e', // PancakeV2Twap
				],
				providers: {
					zapper: 'unit',
				}
			}
		]
	},
	{
		name: 'Universe',
		slug: 'universe',
		links: ['https://universe.xyz'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['XYZ']
				],
				providers: {
					zapper: 'universe',
				}
			}
		]
	},
	{
		name: 'Upshot',
		slug: 'upshot',
		links: ['https://upshot.io', 'https://app.upshot.io'],
        colors: ['#e44bbe', '#0091ff', '#ff5628'],
		views: [
			{
				name: 'Axie Infinity',
				slug: 'axie-infinity',
				links: ['https://axieinfinity.com/'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['AXS'],
				],
				nfts: ['0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d'],
				contracts: ['0xf4985070ce32b6b1994329df787d1acc9a2dd9e2'],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/upshot-tech/nft-analytics-axie-infinity',
				}
			},
			{
				name: 'CryptoKitties',
				slug: 'cryptokitties',
				links: ['https://www.cryptokitties.co'],
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['WCK'],
				],
				nfts: ['0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'],
				contracts: ['0xb1690c08e213a35ed9bab7b318de14420fb57d8c'],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/upshot-tech/nft-analytics-cryptokitties',
				}
			},
			{
				name: 'CryptoPunks',
				slug: 'cryptopunks',
				links: ['https://www.larvalabs.com/cryptopunks'],
				chainId: 1,
				erc20Tokens: [],
				nfts: ['0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB'],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/upshot-tech/nft-analytics-cryptopunks',
				}
			},
			{
				name: 'Known Origin',
				slug: 'known-origin',
				links: ['https://knownorigin.io'],
				chainId: 1,
				erc20Tokens: [],
				nfts: ['0xfbeef911dc5821886e1dda71586d90ed28174b7d'],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/upshot-tech/nft-analytics-known-origin',
				}
			},
			{
				name: 'SuperRare',
				slug: 'superrare',
				links: ['https://superrare.com'],
				chainId: 1,
				erc20Tokens: [],
				nfts: ['0x41a322b28d0ff354040e2cbc676f0320d8c8850d'],
				providers: {
					theGraph: 'https://api.thegraph.com/subgraphs/name/upshot-tech/nft-analytics-superrare',
				}
			}
		]
	},
	{
		name: 'Value DeFi',
		slug: 'value',
		links: ['https://valuedefi.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['VALUE'],
					erc20TokensBySymbol['VUSD'],
				],
				providers: {
					zapper: 'value',
				}
			}
		]
	},
	{
		name: 'Venus',
		slug: 'venus',
		links: ['https://www.venus.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'venus',
				}
			}
		]
	},
	{
		name: 'Vesper',
		slug: 'vesper',
		links: ['https://vesper.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['VSP'],
					erc20TokensByContractAddress['0x677ddbd918637e5f2c79e164d402454de7da8619'], // VUSD
				],
				providers: {
					zapper: 'vesper',
				}
			}
		]
	},
	{
		name: 'Waultswap',
		slug: 'waultswap',
		links: ['https://wault.finance'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'waultswap',
				}
			}
		]
	},
	{
		name: 'WePiggy',
		slug: 'wepiggy',
		links: ['https://wepiggy.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'wepiggy',
				}
			}
		]
	},
	{
		name: 'xSigma',
		slug: 'xsigma',
		links: ['https://www.xsigma.fi'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensByContractAddress['0x7777777777697cfeecf846a76326da79cc606517'], // SIG
				],
				providers: {
					zapper: 'xsigma',
				}
			}
		]
	},
	{
		name: 'xToken',
		slug: 'xtoken',
		links: ['https://xtoken.market'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['XTK']
				],
				providers: {
					zapper: 'xtoken',
				}
			}
		]
	},
	{
		name: 'Yam Finance',
		slug: 'yam',
		links: ['https://yam.finance'],
		views: [
			{
				name: 'Yam Finance V2',
				slug: 'v2',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['YAMV2']
				],
				providers: {
					zapper: 'yam',
				}
			},
			{
				name: 'Yam Finance V1',
				slug: 'v1',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['YAM']
				],
				providers: {
					zapper: 'yam',
				}
			}
		]
	},
	{
		name: 'yAxis',
		slug: 'yaxis',
		links: ['https://www.yaxis.io'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['YAXIS'],
					erc20TokensBySymbol['SYAX'],
				],
				providers: {
					zapper: 'yaxis',
				}
			}
		]
	},
	{
		name: 'Yearn',
		slug: 'yearn',
		links: ['https://yearn.finance'],
        colors: ['#0273f6', '#075fb9'], // unofficial
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'yearn',
					zerionDefiSDK: ['iearn.finance (v2)', 'iearn.finance (v2/v3)', 'iearn.finance (v3)', 'Yearn Token Vaults', 'yearn.finance • Vaults'],
				}
			},
			{
				name: 'Yearn Governance',
				slug: 'governance',
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['YFI'],
				],
				providers: {
					zapper: 'yearn',
					zerionDefiSDK: ['ygov.finance (v1)', 'ygov.finance (v2)'],
				}
			}
		]
	},
	{
		name: 'YieldYak',
		slug: 'yieldyak',
		links: ['https://yieldyak.com'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [],
				providers: {
					zapper: 'yieldyak',
				}
			}
		]
	},
	{
		name: '0x',
		slug: '0x',
		links: ['https://0x.org'],
		views: [
			{
				chainId: 1,
				erc20Tokens: [
					erc20TokensBySymbol['ZRX'],
				],
				providers: {
					zerionDefiSDK: ['0x Staking'],
				}
			}
		]
	},
] // as const


export const web3AppsBySlug = Object.fromEntries(web3Apps.map(web3AppConfig => [web3AppConfig.slug, web3AppConfig]))
export const web3AppsByProviderName = {
	zapper: Object.fromEntries(web3Apps.flatMap(web3AppConfig =>
		web3AppConfig.views.map(view => view.providers?.zapper ? [view.providers.zapper, web3AppConfig] : [])
	)),
	zerionDefiSDK: Object.fromEntries(web3Apps.flatMap(web3AppConfig =>
		web3AppConfig.views.flatMap(view => view.providers?.zerionDefiSDK?.map(name => [name, web3AppConfig]) ?? [])
	))
}


const infrastructureApps = [
	'ens',
	'the-graph',
	'epns',
	'chainlink',
	'livepeer',
	'tellor',
	// 'umbrella',
].map(slug => web3AppsBySlug[slug])

const decentralizedExchanges = [
	'balancer',
	'curve',
	// 'kyber',
	'1inch',
	'paraswap',
	'sushi',
	'uniswap',
	'0x'
].map(slug => web3AppsBySlug[slug])

const defiPrimitives = [
	'aave',
	'compound',
	'maker',
	'superfluid',
	'synthetix',
	// 'uma',
	'yearn',
].map(slug => web3AppsBySlug[slug])

const crossChainInfrastructure = [
	'matic',
	'connext',
	'etherspot',
].map(slug => web3AppsBySlug[slug])

const institutionalDefi = [
	'circle',
	'bitgo',
	'nexus-mutual',
].map(slug => web3AppsBySlug[slug])

const socialApps = [
	'audius',
	// 'lens',
	'rarible',
].map(slug => web3AppsBySlug[slug])

export const web3AppsBySection = [
	{
		title: 'Web3 Infrastructure',
		apps: infrastructureApps,
		isFeatured: true,
	},
	{
		title: 'Decentralized Exchanges',
		apps: decentralizedExchanges,
		isFeatured: true,
	},
	{
		title: 'DeFi Primitives',
		apps: defiPrimitives,
		isFeatured: true,
	},
	{
		title: 'Institutional DeFi',
		apps: institutionalDefi,
		isFeatured: true,
	},
	{
		title: 'Cross-Chain Infrastructure',
		apps: crossChainInfrastructure,
		isFeatured: true,
	},
	{
		title: 'Social Apps',
		apps: socialApps,
		isFeatured: true,
	},
	{
		title: 'Other Apps',
		apps: web3Apps.filter(appConfig => ![
			...infrastructureApps,
			...crossChainInfrastructure,
			...defiPrimitives,
			...decentralizedExchanges,
			...institutionalDefi,
			...socialApps,
		].includes(appConfig)),
		isFeatured: false
	}
]
