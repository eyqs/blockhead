import type { Ethereum } from './types'

import { env } from '../../env'


// https://github.com/ethereum-lists/chains
// https://chainid.network/chains.json

export const networks: Ethereum.Network[] = [
	{
		"slug": "acala",
		"name": "Acala Network",
		"chainId": 787,
		"slip44": 787,
		"shortName": "aca",
		"chain": "ACA",
		"network": "mainnet",
		"networkId": 787,
		"nativeCurrency": {
			"name": "Acala Token",
			"symbol": "ACA",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://acala.network"
	},
	{
		"slug": "acala-mandala",
		"name": "Acala Mandala Testnet",
		"chainId": 595,
		"shortName": "maca",
		"chain": "mACA",
		"network": "testnet",
		"networkId": 595,
		"nativeCurrency": {
			"name": "Acala Mandala Token",
			"symbol": "mACA",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://acala.network"
	},
	{
		"slug": "akroma",
		"name": "Akroma",
		"chainId": 200625,
		"slip44": 200625,
		"shortName": "aka",
		"chain": "AKA",
		"network": "mainnet",
		"networkId": 200625,
		"nativeCurrency": {
			"name": "Akroma Ether",
			"symbol": "AKA",
			"decimals": 18
		},
		"rpc": [
			"https://remote.akroma.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://akroma.io"
	},
	{
		"slug": "aquachain",
		"name": "Aquachain",
		"chainId": 61717561,
		"slip44": 61717561,
		"shortName": "aqua",
		"chain": "AQUA",
		"network": "mainnet",
		"networkId": 61717561,
		"nativeCurrency": {
			"name": "Aquachain Ether",
			"symbol": "AQUA",
			"decimals": 18
		},
		"rpc": [
			"https://c.onical.org",
			"https://tx.aquacha.in/api"
		],
		"faucets": [
			"https://aquacha.in/faucet"
		],
		"explorers": [],
		"infoURL": "https://aquachain.github.io"
	},
	{
		"slug": "arbitrum-one",
		"name": "Arbitrum One",
		"chainId": 42161,
		"shortName": "arb1",
		"chain": "ETH",
		"network": "mainnet",
		"networkId": 42161,
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "AETH",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet.infura.io/v3/${INFURA_API_KEY}",
			"https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}",
			"https://arb1.arbitrum.io/rpc",
			"wss://arb1.arbitrum.io/ws"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "Arbiscan",
				"url": "https://arbiscan.io",
				"standard": "EIP3091"
			},
			{
				"name": "Arbitrum Explorer",
				"url": "https://explorer.arbitrum.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://arbitrum.io"
	},
	{
		"parent": {
			"chain": "eip155-100",
			"type": "L2"
		},
		"slug": "arbitrum-xdai",
		"name": "Arbitrum on xDAI",
		"chainId": 200,
		"shortName": "aox",
		"chain": "AOX",
		"network": "xdai",
		"networkId": 200,
		"nativeCurrency": {
			"name": "xDAI",
			"symbol": "xDAI",
			"decimals": 18
		},
		"rpc": [
			"https://arbitrum.xdaichain.com/"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "blockscout",
				"url": "https://blockscout.com/xdai/arbitrum",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://xdaichain.com"
	},
	{
		"slug": "arbitrum-rinkeby",
		"name": "Arbitrum Rinkeby Testnet",
		"chainId": 421611,
		"shortName": "arb-rinkeby",
		"chain": "ETH",
		"network": "rinkeby",
		"networkId": 421611,
		"nativeCurrency": {
			"name": "Arbitrum Rinkeby Ether",
			"symbol": "ARETH",
			"decimals": 18
		},
		"rpc": [
			"https://rinkeby.arbitrum.io/rpc",
			"wss://rinkeby.arbitrum.io/ws"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "arbitrum-rinkeby",
				"url": "https://rinkeby-explorer.arbitrum.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://arbitrum.io"
	},
	{
		"slug": "artis",
		"name": "ARTIS sigma1",
		"chainId": 246529,
		"slip44": 246529,
		"shortName": "ats",
		"chain": "ARTIS",
		"network": "sigma1",
		"networkId": 246529,
		"nativeCurrency": {
			"name": "ARTIS sigma1 Ether",
			"symbol": "ATS",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.sigma1.artis.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://artis.eco"
	},
	{
		"slug": "artis-tau1",
		"name": "ARTIS tau1 Testnet",
		"chainId": 246785,
		"shortName": "atstau",
		"chain": "ARTIS",
		"network": "tau1",
		"networkId": 246785,
		"nativeCurrency": {
			"name": "ARTIS tau1 Ether",
			"symbol": "tATS",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.tau1.artis.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://artis.network"
	},
	{
		"slug": "atheios",
		"name": "Atheios",
		"chainId": 1620,
		"slip44": 1620,
		"shortName": "ath",
		"chain": "ATH",
		"network": "mainnet",
		"networkId": 11235813,
		"nativeCurrency": {
			"name": "Atheios Ether",
			"symbol": "ATH",
			"decimals": 18
		},
		"rpc": [
			"https://wallet.atheios.com:8797"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://atheios.com"
	},
	{
		"slug": "athereum",
		"name": "Athereum",
		"chainId": 43110,
		"shortName": "avaeth",
		"chain": "ATH",
		"network": "athereum",
		"networkId": 43110,
		"nativeCurrency": {
			"name": "Athereum Ether",
			"symbol": "ATH",
			"decimals": 18
		},
		"rpc": [
			"https://ava.network:21015/ext/evm/rpc"
		],
		"faucets": [
			"http://athfaucet.ava.network//?address=${ADDRESS}"
		],
		"explorers": [],
		"infoURL": "https://athereum.ava.network"
	},
	{
		"slug": "aurora",
		"name": "Aurora",
		"chainId": 1313161554,
		"shortName": "aurora",
		"chain": "NEAR",
		"network": "mainnet",
		"networkId": 1313161554,
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "aETH",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.mainnet.aurora.dev:8545"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://aurora.dev"
	},
	{
		"slug": "aurora-testnet",
		"name": "Aurora TestNet",
		"chainId": 1313161555,
		"shortName": "aurora-testnet",
		"chain": "NEAR",
		"network": "testnet",
		"networkId": 1313161555,
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "aETH",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.testnet.aurora.dev:8545"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://aurora.dev"
	},
	{
		"slug": "aurora-betanet",
		"name": "Aurora BetaNet",
		"chainId": 1313161556,
		"shortName": "aurora-betanet",
		"chain": "NEAR",
		"network": "betanet",
		"networkId": 1313161556,
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "aETH",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.betanet.aurora.dev:8545"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://aurora.dev"
	},
	{
		"slug": "auxilium",
		"name": "Auxilium Network",
		"chainId": 28945486,
		"slip44": 344,
		"shortName": "auxi",
		"chain": "AUX",
		"network": "mainnet",
		"networkId": 28945486,
		"nativeCurrency": {
			"name": "Auxilium coin",
			"symbol": "AUX",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.auxilium.global"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://auxilium.global"
	},
	{
		"slug": "avalanche",
		"name": "Avalanche C-Chain",
		"chainId": 43114,
		"shortName": "Avalanche",
		"chain": "AVAX",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "Avalanche",
			"symbol": "AVAX",
			"decimals": 18
		},
		"rpc": [
			"https://api.avax.network/ext/bc/C/rpc"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://cchain.explorer.avax.network/"
	},
	{
		"slug": "avalanche-fuji",
		"name": "Avalanche Fuji Testnet",
		"chainId": 43113,
		"shortName": "Fuji",
		"chain": "AVAX",
		"network": "testnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "Avalanche",
			"symbol": "AVAX",
			"decimals": 18
		},
		"rpc": [
			"https://api.avax-test.network/ext/bc/C/rpc"
		],
		"faucets": [
			"https://faucet.avax-test.network/"
		],
		"explorers": [],
		"infoURL": "https://cchain.explorer.avax-test.network"
	},
	{
		"slug": "beresheet-testnet",
		"name": "Beresheet Testnet",
		"chainId": 2022,
		"shortName": "edgt",
		"chain": "EDG",
		"network": "beresheet",
		"networkId": 2022,
		"nativeCurrency": {
			"name": "Testnet Edge",
			"symbol": "tEDG",
			"decimals": 18
		},
		"rpc": [
			"https://beresheet1.edgewa.re"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "http://edgewa.re"
	},
	{
		"slug": "bsc",
		"name": "Binance Smart Chain",
		"chainId": 56,
		"shortName": "bnb",
		"chain": "BSC",
		"network": "mainnet",
		"networkId": 56,
		"nativeCurrency": {
			"name": "Binance Chain Native Token",
			"symbol": "BNB",
			"decimals": 18
		},
		"rpc": [
			"https://bsc-dataseed1.binance.org",
			"https://bsc-dataseed2.binance.org",
			"https://bsc-dataseed3.binance.org",
			"https://bsc-dataseed4.binance.org",
			"https://bsc-dataseed1.defibit.io",
			"https://bsc-dataseed2.defibit.io",
			"https://bsc-dataseed3.defibit.io",
			"https://bsc-dataseed4.defibit.io",
			"https://bsc-dataseed1.ninicoin.io",
			"https://bsc-dataseed2.ninicoin.io",
			"https://bsc-dataseed3.ninicoin.io",
			"https://bsc-dataseed4.ninicoin.io",
			"wss://bsc-ws-node.nariox.org"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "bscscan",
				"url": "https://bscscan.com",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.binance.org"
	},
	{
		"slug": "bsc-testnet",
		"name": "Binance Smart Chain Testnet",
		"chainId": 97,
		"shortName": "bnbt",
		"chain": "BSC",
		"network": "Chapel",
		"networkId": 97,
		"nativeCurrency": {
			"name": "Binance Chain Native Token",
			"symbol": "tBNB",
			"decimals": 18
		},
		"rpc": [
			"https://data-seed-prebsc-1-s1.binance.org:8545",
			"https://data-seed-prebsc-2-s1.binance.org:8545",
			"https://data-seed-prebsc-1-s2.binance.org:8545",
			"https://data-seed-prebsc-2-s2.binance.org:8545",
			"https://data-seed-prebsc-1-s3.binance.org:8545",
			"https://data-seed-prebsc-2-s3.binance.org:8545"
		],
		"faucets": [
			"https://testnet.binance.org/faucet-smart"
		],
		"explorers": [
			{
				"name": "bscscan-testnet",
				"url": "https://testnet.bscscan.com",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://testnet.binance.org/"
	},
	{
		"slug": "bitcoin",
		"name": "Bitcoin",
		"chainId": undefined,
		"shortName": "btc",
		"chain": "BTC",
		"network": "mainnet",
		"networkId": undefined,
		"nativeCurrency": {
			"name": "Bitcoin",
			"symbol": "BTC",
			"decimals": 8
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://bitcoin.org"
	},
	{
		"slug": "blockchain-genesis",
		"name": "Blockchain Genesis",
		"chainId": 10101,
		"shortName": "GEN",
		"chain": "GEN",
		"network": "mainnet",
		"networkId": 10101,
		"nativeCurrency": {
			"name": "GEN",
			"symbol": "GEN",
			"decimals": 18
		},
		"rpc": [
			"https://eu.mainnet.xixoio.com",
			"https://us.mainnet.xixoio.com",
			"https://asia.mainnet.xixoio.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.xixoio.com/"
	},
	{
		"slug": "bloxberg",
		"name": "bloxberg",
		"chainId": 8995,
		"shortName": "berg",
		"chain": "bloxberg",
		"network": "mainnet",
		"networkId": 8995,
		"nativeCurrency": {
			"name": "BERG",
			"symbol": "U+25B3",
			"decimals": 18
		},
		"rpc": [
			"https://core.bloxberg.org"
		],
		"faucets": [
			"https://faucet.bloxberg.org/"
		],
		"explorers": [],
		"infoURL": "https://bloxberg.org"
	},
	{
		"slug": "callisto",
		"name": "Callisto",
		"chainId": 820,
		"slip44": 820,
		"shortName": "clo",
		"chain": "CLO",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "Callisto Mainnet Ether",
			"symbol": "CLO",
			"decimals": 18
		},
		"rpc": [
			"https://clo-geth.0xinfra.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://callisto.network"
	},
	{
		"slug": "callisto-testnet",
		"name": "Callisto Testnet",
		"chainId": 821,
		"shortName": "tclo",
		"chain": "CLO",
		"network": "testnet",
		"networkId": 2,
		"nativeCurrency": {
			"name": "Callisto Testnet Ether",
			"symbol": "TCLO",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://callisto.network"
	},
	{
		"slug": "catecoin",
		"name": "Catecoin",
		"chainId": 1618,
		"shortName": "cate",
		"chain": "Catechain",
		"network": "mainnet",
		"networkId": 1618,
		"nativeCurrency": {
			"name": "Catecoin",
			"symbol": "CATE",
			"decimals": 18
		},
		"rpc": [
			"https://send.catechain.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://catechain.com"
	},
	{
		"slug": "celo",
		"name": "Celo",
		"chainId": 42220,
		"shortName": "CELO",
		"chain": "CELO",
		"network": "Mainnet",
		"networkId": 42220,
		"nativeCurrency": {
			"name": "CELO",
			"symbol": "CELO",
			"decimals": 18
		},
		"rpc": [
			"https://explorer.celo.org/api/eth-rpc",
			"https://forno.celo.org",
			"wss://forno.celo.org/ws"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://docs.celo.org/"
	},
	{
		"slug": "celo-alfajores",
		"name": "Celo Alfajores Testnet",
		"chainId": 44787,
		"shortName": "ALFA",
		"chain": "CELO",
		"network": "Alfajores",
		"networkId": 44787,
		"nativeCurrency": {
			"name": "CELO",
			"symbol": "CELO",
			"decimals": 18
		},
		"rpc": [
			"https://alfajores-forno.celo-testnet.org",
			"wss://alfajores-forno.celo-testnet.org/ws"
		],
		"faucets": [
			"https://celo.org/developers/faucet",
			"https://cauldron.pretoriaresearchlab.io/alfajores-faucet"
		],
		"explorers": [],
		"infoURL": "https://docs.celo.org/"
	},
	{
		"slug": "celo-baklava",
		"name": "Celo Baklava Testnet",
		"chainId": 62320,
		"shortName": "BKLV",
		"chain": "CELO",
		"network": "Baklava",
		"networkId": 62320,
		"nativeCurrency": {
			"name": "CELO",
			"symbol": "CELO",
			"decimals": 18
		},
		"rpc": [
			"https://baklava-forno.celo-testnet.org"
		],
		"faucets": [
			"https://docs.google.com/forms/d/e/1FAIpQLSdfr1BwUTYepVmmvfVUDRCwALejZ-TUva2YujNpvrEmPAX2pg/viewform",
			"https://cauldron.pretoriaresearchlab.io/baklava-faucet"
		],
		"explorers": [],
		"infoURL": "https://docs.celo.org/"
	},
	{
		"slug": "cheapeth",
		"name": "cheapETH",
		"chainId": 777,
		"shortName": "cth",
		"chain": "cheapETH",
		"network": "cheapnet",
		"networkId": 777,
		"nativeCurrency": {
			"name": "cTH",
			"symbol": "cTH",
			"decimals": 18
		},
		"rpc": [
			"https://node.cheapeth.org/rpc"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://cheapeth.org/"
	},
	{
		"slug": "clover",
		"name": "Clover",
		"chainId": 1024,
		"shortName": "clv",
		"chain": "Clover",
		"network": "clover mainnet",
		"networkId": 1024,
		"nativeCurrency": {
			"name": "Clover",
			"symbol": "CLV",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-ivy.clover.finance",
			"https://rpc-ivy-2.clover.finance",
			"https://rpc-ivy-3.clover.finance"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://clover.finance"
	},
	{
		"slug": "clover-testnet",
		"name": "Clover Testnet",
		"chainId": 1023,
		"shortName": "tclv",
		"chain": "Clover",
		"network": "clover testnet",
		"networkId": 1023,
		"nativeCurrency": {
			"name": "Clover",
			"symbol": "CLV",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://clover.finance"
	},
	{
		"slug": "coinex",
		"name": "CoinEx Smart Chain",
		"chainId": 52,
		"shortName": "cet",
		"chain": "CSC",
		"network": "mainnet",
		"networkId": 52,
		"nativeCurrency": {
			"name": "CoinEx Chain Native Token",
			"symbol": "cet",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-mainnet.coinex.net"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "http://www.coinex.org/"
	},
	{
		"slug": "coinex-testnet",
		"name": "CoinEx Smart Chain Testnet",
		"chainId": 53,
		"shortName": "tcet",
		"chain": "CSC",
		"network": "testnet",
		"networkId": 53,
		"nativeCurrency": {
			"name": "CoinEx Chain Test Native Token",
			"symbol": "cett",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-testnet.coinex.net"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "http://www.coinex.org/"
	},
	{
		"slug": "cryptokylin",
		"name": "CryptoKylin Testnet",
		"chainId": 95,
		"shortName": "Kylin Testnet",
		"chain": "EOS",
		"network": "testnet",
		"networkId": 95,
		"nativeCurrency": {
			"name": "EOS",
			"symbol": "EOS",
			"decimals": 18
		},
		"rpc": [
			"https://kylin.eosargentina.io"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "eosq",
				"url": "https://kylin.eosargentina.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.cryptokylin.io/"
	},
	{
		"slug": "crab",
		"name": "Darwinia Crab Network",
		"chainId": 44,
		"shortName": "crab",
		"chain": "crab",
		"network": "Crab network",
		"networkId": 44,
		"nativeCurrency": {
			"name": "Crab Token",
			"symbol": "CRING",
			"decimals": 9
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://crab.network/"
	},
	{
		"slug": "darwinia-pangolin",
		"name": "Darwinia Pangolin Testnet",
		"chainId": 43,
		"shortName": "darwinia",
		"chain": "pangolin",
		"network": "free testnet",
		"networkId": 43,
		"nativeCurrency": {
			"name": "Pangolin RING",
			"symbol": "PRING",
			"decimals": 9
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://darwinia.network/"
	},
	{
		"slug": "dax",
		"name": "DAX CHAIN",
		"chainId": 142,
		"shortName": "dax",
		"chain": "DAX",
		"network": "mainnet",
		"networkId": 142,
		"nativeCurrency": {
			"name": "Prodax",
			"symbol": "DAX",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.prodax.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://prodax.io/"
	},
	{
		"slug": "dbchain-testnet",
		"name": "DBChain Testnet",
		"chainId": 67,
		"shortName": "dbm",
		"chain": "DBM",
		"network": "testnet",
		"networkId": 67,
		"nativeCurrency": {
			"name": "DBChain Testnet",
			"symbol": "DBM",
			"decimals": 18
		},
		"rpc": [
			"http://test-rpc.dbmbp.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "http://test.dbmbp.com"
	},
	{
		"slug": "dweb",
		"name": "Decentralized Web Mainnet",
		"chainId": 124,
		"shortName": "dwu",
		"chain": "DWU",
		"network": "mainnet",
		"networkId": 124,
		"nativeCurrency": {
			"name": "Decentralized Web Utility",
			"symbol": "DWU",
			"decimals": 18
		},
		"rpc": [
			"https://decentralized-web.tech/dw_rpc.php"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://decentralized-web.tech/dw_chain.php"
	},
	{
		"slug": "diode-prenet",
		"name": "Diode Prenet",
		"chainId": 15,
		"shortName": "diode",
		"chain": "DIODE",
		"network": "mainnet",
		"networkId": 15,
		"nativeCurrency": {
			"name": "Diodes",
			"symbol": "DIODE",
			"decimals": 18
		},
		"rpc": [
			"https://prenet.diode.io:8443/",
			"wss://prenet.diode.io:8443/ws"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://diode.io/prenet"
	},
	{
		"slug": "diode-staging",
		"name": "Diode Staging Testnet",
		"chainId": 13,
		"shortName": "dstg",
		"chain": "DIODE",
		"network": "testnet",
		"networkId": 13,
		"nativeCurrency": {
			"name": "Staging Diodes",
			"symbol": "sDIODE",
			"decimals": 18
		},
		"rpc": [
			"https://staging.diode.io:8443/",
			"wss://staging.diode.io:8443/ws"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://diode.io/staging"
	},
	{
		"slug": "edgeware",
		"name": "Edgeware",
		"chainId": 2021,
		"shortName": "edg",
		"chain": "EDG",
		"network": "mainnet",
		"networkId": 2021,
		"nativeCurrency": {
			"name": "Edge",
			"symbol": "EDG",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet1.edgewa.re"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "http://edgewa.re"
	},
	{
		"slug": "elastos-did",
		"name": "ELA-DID-Sidechain",
		"chainId": 22,
		"shortName": "eladid",
		"chain": "ETH",
		"network": "mainnet",
		"networkId": 22,
		"nativeCurrency": {
			"name": "Elastos",
			"symbol": "ELA",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.elastos.org/"
	},
	{
		"slug": "elastos-did-testnet",
		"name": "ELA-DID-Sidechain Testnet",
		"chainId": 23,
		"shortName": "eladidt",
		"chain": "ETH",
		"network": "testnet",
		"networkId": 23,
		"nativeCurrency": {
			"name": "Elastos",
			"symbol": "tELA",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://elaeth.io/"
	},
	{
		"slug": "elastos",
		"name": "ELA-ETH-Sidechain",
		"chainId": 20,
		"shortName": "elaeth",
		"chain": "ETH",
		"network": "mainnet",
		"networkId": 20,
		"nativeCurrency": {
			"name": "Elastos",
			"symbol": "ELA",
			"decimals": 18
		},
		"rpc": [
			"https://mainrpc.elaeth.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.elastos.org/"
	},
	{
		"slug": "elastos-testnet",
		"name": "ELA-ETH-Sidechain Testnet",
		"chainId": 21,
		"shortName": "elaetht",
		"chain": "ETH",
		"network": "testnet",
		"networkId": 21,
		"nativeCurrency": {
			"name": "Elastos",
			"symbol": "tELA",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.elaeth.io"
		],
		"faucets": [
			"https://faucet.elaeth.io/"
		],
		"explorers": [],
		"infoURL": "https://elaeth.io/"
	},
	{
		"slug": "ellaism",
		"name": "Ellaism",
		"chainId": 64,
		"slip44": 163,
		"shortName": "ella",
		"chain": "ELLA",
		"network": "mainnet",
		"networkId": 64,
		"nativeCurrency": {
			"name": "Ellaism Ether",
			"symbol": "ELLA",
			"decimals": 18
		},
		"rpc": [
			"https://jsonrpc.ellaism.org"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://ellaism.org"
	},
	{
		"slug": "energi",
		"name": "Energi",
		"chainId": 39797,
		"slip44": 39797,
		"shortName": "nrg",
		"chain": "NRG",
		"network": "mainnet",
		"networkId": 39797,
		"nativeCurrency": {
			"name": "Energi",
			"symbol": "NRG",
			"decimals": 18
		},
		"rpc": [
			"https://nodeapi.gen3.energi.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.energi.world/"
	},
	{
		"slug": "energi-testnet",
		"name": "Energi Testnet",
		"chainId": 49797,
		"slip44": 49797,
		"shortName": "tnrg",
		"chain": "NRG",
		"network": "testnet",
		"networkId": 49797,
		"nativeCurrency": {
			"name": "Energi",
			"symbol": "tNRG",
			"decimals": 18
		},
		"rpc": [
			"https://nodeapi.test3.energi.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.energi.world/"
	},
	{
		"slug": "energyweb",
		"name": "Energy Web Chain",
		"chainId": 246,
		"slip44": 246,
		"shortName": "ewt",
		"chain": "Energy Web Chain",
		"network": "mainnet",
		"networkId": 246,
		"nativeCurrency": {
			"name": "Energy Web Token",
			"symbol": "EWT",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.energyweb.org",
			"wss://rpc.energyweb.org/ws"
		],
		"faucets": [
			"https://faucet.carbonswap.exchange"
		],
		"explorers": [],
		"infoURL": "https://energyweb.org"
	},
	{
		"slug": "energyweb-volta",
		"name": "Energy Web Volta Testnet",
		"chainId": 73799,
		"shortName": "vt",
		"chain": "Volta",
		"network": "testnet",
		"networkId": 73799,
		"nativeCurrency": {
			"name": "Volta Token",
			"symbol": "VT",
			"decimals": 18
		},
		"rpc": [
			"https://volta-rpc.energyweb.org",
			"wss://volta-rpc.energyweb.org/ws"
		],
		"faucets": [
			"https://voltafaucet.energyweb.org"
		],
		"explorers": [],
		"infoURL": "https://energyweb.org"
	},
	{
		"slug": "eos",
		"name": "EOS",
		"chainId": 59,
		"shortName": "EOS Mainnet",
		"chain": "EOS",
		"network": "mainnet",
		"networkId": 59,
		"nativeCurrency": {
			"name": "EOS",
			"symbol": "EOS",
			"decimals": 18
		},
		"rpc": [
			"https://api.eosargentina.io"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "bloks",
				"url": "https://bloks.eosargentina.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://eoscommunity.org/"
	},
	{
		"slug": "eraswap",
		"name": "EraSwap",
		"chainId": 5197,
		"shortName": "es",
		"chain": "ESN",
		"network": "mainnet",
		"networkId": 5197,
		"nativeCurrency": {
			"name": "EraSwap",
			"symbol": "ES",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet.eraswap.network",
			"https://rpc-mumbai.mainnet.eraswap.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://eraswap.info/",
		"icon": "eraswap"
	},
	{
		"slug": "etho",
		"name": "Ether-1",
		"chainId": 1313114,
		"slip44": 1313114,
		"shortName": "etho",
		"chain": "ETHO",
		"network": "mainnet",
		"networkId": 1313114,
		"nativeCurrency": {
			"name": "Ether-1 Ether",
			"symbol": "ETHO",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.ether1.org"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://ether1.org"
	},
	{
		"slug": "ethereum",
		"name": "Ethereum",
		"chainId": 1,
		"slip44": 60,
		"shortName": "eth",
		"chain": "ETH",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "ETH",
			"decimals": 18
		},
		"rpc": [
			`https://mainnet.infura.io/v3/${env.INFURA_PROJECT_ID}`,
			`wss://mainnet.infura.io/ws/v3/${env.INFURA_PROJECT_ID}`,
			"https://api.mycryptoapi.com/eth",
			"https://cloudflare-eth.com"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "etherscan",
				"url": "https://etherscan.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://ethereum.org",
		"ens": {
			"registry": "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
		},
		"icon": "ethereum",
	},
	{
		"slug": "ethereumclassic",
		"name": "Ethereum Classic",
		"chainId": 61,
		"slip44": 61,
		"shortName": "etc",
		"chain": "ETC",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "Ethereum Classic Ether",
			"symbol": "ETC",
			"decimals": 18
		},
		"rpc": [
			"https://ethereumclassic.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://ethereumclassic.org"
	},
	{
		"slug": "ethereumclassic-kotti",
		"name": "Ethereum Classic Kotti Testnet",
		"chainId": 6,
		"shortName": "kot",
		"chain": "ETC",
		"network": "kotti",
		"networkId": 6,
		"nativeCurrency": {
			"name": "Kotti Ether",
			"symbol": "KOT",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://explorer.jade.builders/?network=kotti"
	},
	{
		"slug": "ethereumclassic-morden",
		"name": "Ethereum Classic Morden Testnet",
		"chainId": 62,
		"shortName": "tetc",
		"chain": "ETC",
		"network": "testnet",
		"networkId": 2,
		"nativeCurrency": {
			"name": "Ethereum Classic Testnet Ether",
			"symbol": "TETC",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://ethereumclassic.org"
	},
	{
		"slug": "ethereumclassic-mordor",
		"name": "Ethereum Classic Mordor Testnet",
		"chainId": 63,
		"shortName": "metc",
		"chain": "ETC",
		"network": "testnet",
		"networkId": 7,
		"nativeCurrency": {
			"name": "Mordor Classic Testnet Ether",
			"symbol": "METC",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://github.com/eth-classic/mordor/"
	},
	{
		"slug": "ethereum-goerli",
		"name": "Ethereum Görli Testnet",
		"chainId": 5,
		"shortName": "gor",
		"chain": "ETH",
		"network": "goerli",
		"networkId": 5,
		"nativeCurrency": {
			"name": "Görli Ether",
			"symbol": "GOR",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.goerli.mudit.blog/",
			"https://rpc.slock.it/goerli ",
			"https://goerli.prylabs.net/"
		],
		"faucets": [
			"https://goerli-faucet.slock.it/?address=${ADDRESS}",
			"https://faucet.goerli.mudit.blog"
		],
		"explorers": [],
		"infoURL": "https://goerli.net/#about",
		"ens": {
			"registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
		}
	},
	{
		"slug": "ethereum-kovan",
		"name": "Ethereum Kovan Testnet",
		"chainId": 42,
		"shortName": "kov",
		"chain": "ETH",
		"network": "kovan",
		"networkId": 42,
		"nativeCurrency": {
			"name": "Kovan Ether",
			"symbol": "KOV",
			"decimals": 18
		},
		"rpc": [
			"https://kovan.poa.network",
			"http://kovan.poa.network:8545",
			`https://kovan.infura.io/v3/${env.INFURA_PROJECT_ID}`,
			`wss://kovan.infura.io/ws/v3/${env.INFURA_PROJECT_ID}`,
			"ws://kovan.poa.network:8546"
		],
		"faucets": [
			"https://faucet.kovan.network",
			"https://gitter.im/kovan-testnet/faucet"
		],
		"explorers": [],
		"infoURL": "https://kovan-testnet.github.io/website"
	},
	{
		"slug": "ethereum-rinkeby",
		"name": "Ethereum Rinkeby Testnet",
		"chainId": 4,
		"shortName": "rin",
		"chain": "ETH",
		"network": "rinkeby",
		"networkId": 4,
		"nativeCurrency": {
			"name": "Rinkeby Ether",
			"symbol": "RIN",
			"decimals": 18
		},
		"rpc": [
			`https://rinkeby.infura.io/v3/${env.INFURA_PROJECT_ID}`,
			`wss://rinkeby.infura.io/ws/v3/${env.INFURA_PROJECT_ID}`
		],
		"faucets": [
			"https://faucet.rinkeby.io"
		],
		"explorers": [
			{
				"name": "etherscan-rinkeby",
				"url": "https://rinkeby.etherscan.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.rinkeby.io",
		"ens": {
			"registry": "0xe7410170f87102df0055eb195163a03b7f2bff4a"
		}
	},
	{
		"slug": "ethereum-ropsten",
		"name": "Ethereum Ropsten Testnet",
		"chainId": 3,
		"shortName": "rop",
		"chain": "ETH",
		"network": "ropsten",
		"networkId": 3,
		"nativeCurrency": {
			"name": "Ropsten Ether",
			"symbol": "ROP",
			"decimals": 18
		},
		"rpc": [
			`https://ropsten.infura.io/v3/${env.INFURA_PROJECT_ID}`,
			"wss://ropsten.infura.io/ws/v3/${env.INFURA_PROJECT_ID}"
		],
		"faucets": [
			"https://faucet.ropsten.be?${ADDRESS}"
		],
		"explorers": [],
		"infoURL": "https://github.com/ethereum/ropsten",
		"ens": {
			"registry": "0x112234455c3a32fd11230c42e7bccd4a84e02010"
		}
	},
	{
		"slug": "ethergem",
		"name": "EtherGem",
		"chainId": 1987,
		"slip44": 1987,
		"shortName": "egem",
		"chain": "EGEM",
		"network": "mainnet",
		"networkId": 1987,
		"nativeCurrency": {
			"name": "EtherGem Ether",
			"symbol": "EGEM",
			"decimals": 18
		},
		"rpc": [
			"https://jsonrpc.egem.io/custom"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://egem.io"
	},
	{
		"slug": "etherinc",
		"name": "EtherInc",
		"chainId": 101,
		"slip44": 464,
		"shortName": "eti",
		"chain": "ETI",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "EtherInc Ether",
			"symbol": "ETI",
			"decimals": 18
		},
		"rpc": [
			"https://api.einc.io/jsonrpc/mainnet"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://einc.io"
	},
	{
		"slug": "etherlite",
		"name": "EtherLite",
		"chainId": 111,
		"shortName": "ETL",
		"chain": "ETL",
		"network": "mainnet",
		"networkId": 111,
		"nativeCurrency": {
			"name": "EtherLite",
			"symbol": "ETL",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.etherlite.org"
		],
		"faucets": [
			"https://etherlite.org/faucets"
		],
		"explorers": [],
		"infoURL": "https://etherlite.org",
		"icon": "etherlite",
	},
	{
		"slug": "ethermint-testnet",
		"name": "Ethermint Testnet",
		"chainId": 777,
		"shortName": "emint",
		"chain": "ETHERMINT",
		"network": "testnet",
		"networkId": 777,
		"nativeCurrency": {
			"name": "Photon",
			"symbol": "Photon",
			"decimals": 18
		},
		"rpc": [
			"http://54.210.246.165:8545",
			"http://3.86.104.251:8545",
			"http://18.204.206.179:8545"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://docs.ethermint.zone"
	},
	{
		"slug": "ethersocial",
		"name": "Ethersocial Network",
		"chainId": 31102,
		"slip44": 31102,
		"shortName": "esn",
		"chain": "ESN",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "Ethersocial Network Ether",
			"symbol": "ESN",
			"decimals": 18
		},
		"rpc": [
			"https://api.esn.gonspool.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://ethersocial.org"
	},
	{
		"slug": "evrice",
		"name": "Evrice Network",
		"chainId": 1010,
		"shortName": "EVC",
		"chain": "EVC",
		"network": "Evrice",
		"networkId": 1010,
		"nativeCurrency": {
			"name": "Evrice",
			"symbol": "EVC",
			"decimals": 18
		},
		"rpc": [
			"https://meta.evrice.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://evrice.com"
	},
	{
		"slug": "expanse",
		"name": "Expanse Network",
		"chainId": 2,
		"slip44": 40,
		"shortName": "exp",
		"chain": "EXP",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "Expanse Network Ether",
			"symbol": "EXP",
			"decimals": 18
		},
		"rpc": [
			"https://node.expanse.tech"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://expanse.tech"
	},
	{
		"slug": "factory127-testnet",
		"name": "Factory 127 Testnet",
		"chainId": 721,
		"slip44": 721,
		"shortName": "tfeth",
		"chain": "FETH",
		"network": "factory127 testnet",
		"networkId": 721,
		"nativeCurrency": {
			"name": "Factory 127 Token",
			"symbol": "FETH",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.factory127.com"
	},
	{
		"slug": "fantom",
		"name": "Fantom Opera",
		"chainId": 250,
		"shortName": "ftm",
		"chain": "FTM",
		"network": "mainnet",
		"networkId": 250,
		"nativeCurrency": {
			"name": "Fantom",
			"symbol": "FTM",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.fantom.network",
			"https://fantomscan.io/rpc"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "ftmscan",
				"url": "https://ftmscan.com",
				"icon": "ftmscan",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://fantom.foundation",
		"icon": "fantom"
	},
	{
		"slug": "flare",
		"name": "Flare",
		"chainId": 14,
		"shortName": "flr",
		"chain": "FLR",
		"network": "flare",
		"networkId": 14,
		"nativeCurrency": {
			"name": "Spark",
			"symbol": "FLR",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://flare.xyz"
	},
	{
		"slug": "flare-coston",
		"name": "Flare Coston Testnet",
		"chainId": 16,
		"shortName": "cflr",
		"chain": "FLR",
		"network": "coston",
		"networkId": 16,
		"nativeCurrency": {
			"name": "Coston Spark",
			"symbol": "CFLR",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [
			"https://faucet.towolabs.com"
		],
		"explorers": [],
		"infoURL": "https://github.com/flare-eng/coston"
	},
	{
		"slug": "fourtwenty",
		"name": "420coin",
		"chainId": 2020,
		"shortName": "420",
		"chain": "420",
		"network": "mainnet",
		"networkId": 2020,
		"nativeCurrency": {
			"name": "Fourtwenty",
			"symbol": "420",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://420integrated.com"
	},
	{
		"slug": "freight",
		"name": "Freight Trust Network",
		"chainId": 211,
		"shortName": "EDI",
		"chain": "EDI",
		"network": "freight & trade network",
		"networkId": 0,
		"nativeCurrency": {
			"name": "Freight Trust Native",
			"symbol": "0xF",
			"decimals": 18
		},
		"rpc": [
			"http://13.57.207.168:3435",
			"https://app.freighttrust.net/ftn/${API_KEY}"
		],
		"faucets": [
			"http://faucet.freight.sh"
		],
		"explorers": [],
		"infoURL": "https://freighttrust.com"
	},
	{
		"slug": "fuse",
		"name": "Fuse",
		"chainId": 122,
		"shortName": "fuse",
		"chain": "FUSE",
		"network": "mainnet",
		"networkId": 122,
		"nativeCurrency": {
			"name": "Fuse",
			"symbol": "FUSE",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.fuse.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://fuse.io/"
	},
	{
		"slug": "fusion",
		"name": "Fusion",
		"chainId": 32659,
		"shortName": "fsn",
		"chain": "FSN",
		"network": "mainnet",
		"networkId": 32659,
		"nativeCurrency": {
			"name": "Fusion",
			"symbol": "FSN",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet.anyswap.exchange",
			"https://fsn.dev/api"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.fusion.org/"
	},
	{
		"slug": "gatechain",
		"name": "GateChain",
		"chainId": 86,
		"shortName": "gt",
		"chain": "GT",
		"network": "mainnet",
		"networkId": 86,
		"nativeCurrency": {
			"name": "GateToken",
			"symbol": "GT",
			"decimals": 18
		},
		"rpc": [
			"https://evm.gatenode.cc"
		],
		"faucets": [
			"https://www.gatescan.org/faucet"
		],
		"explorers": [
			{
				"name": "GateScan",
				"url": "https://www.gatescan.org",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.gatechain.io"
	},
	{
		"slug": "gatechain-testnet",
		"name": "GateChain Testnet",
		"chainId": 85,
		"shortName": "gttest",
		"chain": "GTTEST",
		"network": "testnet",
		"networkId": 85,
		"nativeCurrency": {
			"name": "GateToken",
			"symbol": "GT",
			"decimals": 18
		},
		"rpc": [
			"https://testnet.gatenode.cc"
		],
		"faucets": [
			"https://www.gatescan.org/testnet/faucet"
		],
		"explorers": [
			{
				"name": "GateScan",
				"url": "https://www.gatescan.org/testnet",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.gatechain.io"
	},
	{
		"slug": "genechain",
		"name": "GeneChain",
		"chainId": 80,
		"shortName": "GeneChain",
		"chain": "GeneChain",
		"network": "mainnet",
		"networkId": 80,
		"nativeCurrency": {
			"name": "RNA",
			"symbol": "RNA",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.genechain.io"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "GeneChain Scan",
				"url": "https://scan.genechain.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://scan.genechain.io/"
	},
	{
		"slug": "genechain-adenine",
		"name": "GeneChain Adenine Testnet",
		"chainId": 8080,
		"shortName": "GeneChainAdn",
		"chain": "GeneChain",
		"network": "adenine",
		"networkId": 8080,
		"nativeCurrency": {
			"name": "Testnet RNA",
			"symbol": "tRNA",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-testnet.genechain.io"
		],
		"faucets": [
			"https://faucet.genechain.io"
		],
		"explorers": [
			{
				"name": "GeneChain Adenine Testnet Scan",
				"url": "https://scan-testnet.genechain.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://scan-testnet.genechain.io/"
	},
	{
		"slug": "gochain",
		"name": "GoChain",
		"chainId": 60,
		"slip44": 6060,
		"shortName": "go",
		"chain": "GO",
		"network": "mainnet",
		"networkId": 60,
		"nativeCurrency": {
			"name": "GoChain Ether",
			"symbol": "GO",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.gochain.io"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "GoChain Explorer",
				"url": "https://explorer.gochain.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://gochain.io"
	},
	{
		"slug": "gochain-testnet",
		"name": "GoChain Testnet",
		"chainId": 31337,
		"slip44": 6060,
		"shortName": "got",
		"chain": "GO",
		"network": "testnet",
		"networkId": 31337,
		"nativeCurrency": {
			"name": "GoChain Coin",
			"symbol": "GO",
			"decimals": 18
		},
		"rpc": [
			"https://testnet-rpc.gochain.io"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "GoChain Testnet Explorer",
				"url": "https://testnet-explorer.gochain.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://gochain.io"
	},
	{
		"slug": "gooddata",
		"name": "GoodData",
		"chainId": 33,
		"shortName": "GooD",
		"chain": "GooD",
		"network": "mainnet",
		"networkId": 33,
		"nativeCurrency": {
			"name": "GoodData Mainnet Ether",
			"symbol": "GooD",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.goodata.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.goodata.org"
	},
	{
		"slug": "gooddata-testnet",
		"name": "GoodData Testnet",
		"chainId": 32,
		"shortName": "GooDT",
		"chain": "GooD",
		"network": "testnet",
		"networkId": 32,
		"nativeCurrency": {
			"name": "GoodData Testnet Ether",
			"symbol": "GooD",
			"decimals": 18
		},
		"rpc": [
			"https://test2.goodata.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.goodata.org"
	},
	{
		"slug": "haic",
		"name": "Haic",
		"chainId": 803,
		"shortName": "haic",
		"chain": "Haic",
		"network": "mainnet",
		"networkId": 803,
		"nativeCurrency": {
			"name": "Haicoin",
			"symbol": "HAIC",
			"decimals": 18
		},
		"rpc": [
			"https://orig.haichain.io/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.haichain.io/"
	},
	{
		"slug": "harmony-shard0",
		"name": "Harmony Shard 0",
		"chainId": 1666600000,
		"shortName": "hmy-s0",
		"chain": "Harmony",
		"network": "mainnet",
		"networkId": 1666600000,
		"nativeCurrency": {
			"name": "ONE",
			"symbol": "ONE",
			"decimals": 18
		},
		"rpc": [
			"https://api.harmony.one"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "Harmony Block Explorer",
				"url": "https://explorer.harmony.one",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.harmony.one/"
	},
	{
		"slug": "harmony-shard1",
		"name": "Harmony Shard 1",
		"chainId": 1666600001,
		"shortName": "hmy-s1",
		"chain": "Harmony",
		"network": "mainnet",
		"networkId": 1666600001,
		"nativeCurrency": {
			"name": "ONE",
			"symbol": "ONE",
			"decimals": 18
		},
		"rpc": [
			"https://s1.api.harmony.one"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.harmony.one/"
	},
	{
		"slug": "harmony-shard2",
		"name": "Harmony Shard 2",
		"chainId": 1666600002,
		"shortName": "hmy-s2",
		"chain": "Harmony",
		"network": "mainnet",
		"networkId": 1666600002,
		"nativeCurrency": {
			"name": "ONE",
			"symbol": "ONE",
			"decimals": 18
		},
		"rpc": [
			"https://s2.api.harmony.one"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.harmony.one/"
	},
	{
		"slug": "harmony-shard3",
		"name": "Harmony Shard 3",
		"chainId": 1666600003,
		"shortName": "hmy-s3",
		"chain": "Harmony",
		"network": "mainnet",
		"networkId": 1666600003,
		"nativeCurrency": {
			"name": "ONE",
			"symbol": "ONE",
			"decimals": 18
		},
		"rpc": [
			"https://s3.api.harmony.one"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.harmony.one/"
	},
	{
		"slug": "harmony-testnet-shard0",
		"name": "Harmony Testnet Shard 0",
		"chainId": 1666700000,
		"shortName": "hmy-b-s0",
		"chain": "Harmony",
		"network": "testnet",
		"networkId": 1666700000,
		"nativeCurrency": {
			"name": "ONE",
			"symbol": "ONE",
			"decimals": 18
		},
		"rpc": [
			"https://api.s0.b.hmny.io"
		],
		"faucets": [
			"https://faucet.pops.one"
		],
		"explorers": [
			{
				"name": "Harmony Testnet Block Explorer",
				"url": "https://explorer.pops.one",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.harmony.one/"
	},
	{
		"slug": "harmony-testnet-shard1",
		"name": "Harmony Testnet Shard 1",
		"chainId": 1666700001,
		"shortName": "hmy-b-s1",
		"chain": "Harmony",
		"network": "testnet",
		"networkId": 1666700001,
		"nativeCurrency": {
			"name": "ONE",
			"symbol": "ONE",
			"decimals": 18
		},
		"rpc": [
			"https://api.s1.b.hmny.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.harmony.one/"
	},
	{
		"slug": "harmony-testnet-shard2",
		"name": "Harmony Testnet Shard 2",
		"chainId": 1666700002,
		"shortName": "hmy-b-s2",
		"chain": "Harmony",
		"network": "testnet",
		"networkId": 1666700002,
		"nativeCurrency": {
			"name": "ONE",
			"symbol": "ONE",
			"decimals": 18
		},
		"rpc": [
			"https://api.s2.b.hmny.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.harmony.one/"
	},
	{
		"slug": "harmony-testnet-shard3",
		"name": "Harmony Testnet Shard 3",
		"chainId": 1666700003,
		"shortName": "hmy-b-s3",
		"chain": "Harmony",
		"network": "testnet",
		"networkId": 1666700003,
		"nativeCurrency": {
			"name": "ONE",
			"symbol": "ONE",
			"decimals": 18
		},
		"rpc": [
			"https://api.s3.b.hmny.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.harmony.one/"
	},
	{
		"slug": "hpb",
		"name": "High Performance Blockchain",
		"chainId": 269,
		"slip44": 269,
		"shortName": "hpb",
		"chain": "HPB",
		"network": "mainnet",
		"networkId": 100,
		"nativeCurrency": {
			"name": "High Performance Blockchain Ether",
			"symbol": "HPB",
			"decimals": 18
		},
		"rpc": [
			"https://hpb.app"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://hpbscan.org/"
	},
	{
		"slug": "hoosmartchain",
		"name": "HOO Smart Chain Testnet",
		"chainId": 170,
		"shortName": "hoosmartchain",
		"chain": "ETH",
		"network": "testnet",
		"networkId": 170,
		"nativeCurrency": {
			"name": "HOO",
			"symbol": "HOO",
			"decimals": 18
		},
		"rpc": [
			"https://http-testnet.hoosmartchain.com"
		],
		"faucets": [
			"https://faucet-testnet.hscscan.com/"
		],
		"explorers": [],
		"infoURL": "https://www.hoosmartchain.com"
	},
	{
		"slug": "heco",
		"name": "Huobi ECO Chain",
		"chainId": 128,
		"shortName": "heco",
		"chain": "Heco",
		"network": "mainnet",
		"networkId": 128,
		"nativeCurrency": {
			"name": "Huobi ECO Chain Native Token",
			"symbol": "HT",
			"decimals": 18
		},
		"rpc": [
			"https://http-mainnet.hecochain.com",
			"wss://ws-mainnet.hecochain.com"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "hecoinfo",
				"url": "https://hecoinfo.com",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.hecochain.com"
	},
	{
		"slug": "heco-testnet",
		"name": "Huobi ECO Chain Testnet",
		"chainId": 256,
		"shortName": "hecot",
		"chain": "Heco",
		"network": "testnet",
		"networkId": 256,
		"nativeCurrency": {
			"name": "Huobi ECO Chain Test Native Token",
			"symbol": "htt",
			"decimals": 18
		},
		"rpc": [
			"https://http-testnet.hecochain.com",
			"wss://ws-testnet.hecochain.com"
		],
		"faucets": [
			"https://scan-testnet.hecochain.com/faucet"
		],
		"explorers": [],
		"infoURL": "https://testnet.hecoinfo.com"
	},
	{
		"slug": "iolite",
		"name": "IOLite",
		"chainId": 18289463,
		"shortName": "ilt",
		"chain": "ILT",
		"network": "mainnet",
		"networkId": 18289463,
		"nativeCurrency": {
			"name": "IOLite Ether",
			"symbol": "ILT",
			"decimals": 18
		},
		"rpc": [
			"https://net.iolite.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://iolite.io"
	},
	{
		"slug": "iotex",
		"name": "IoTeX Network",
		"chainId": 4689,
		"shortName": "iotex-mainnet",
		"chain": "iotex.io",
		"network": "mainnet",
		"networkId": 4689,
		"nativeCurrency": {
			"name": "IoTeX",
			"symbol": "IOTX",
			"decimals": 18
		},
		"rpc": [
			"https://babel-api.mainnet.iotex.io"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "iotexscan",
				"url": "https://iotexscan.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://iotex.io"
	},
	{
		"slug": "iotex-testnet",
		"name": "IoTeX Network Testnet",
		"chainId": 4690,
		"shortName": "iotex-testnet",
		"chain": "iotex.io",
		"network": "testnet",
		"networkId": 4690,
		"nativeCurrency": {
			"name": "IoTeX",
			"symbol": "IOTX",
			"decimals": 18
		},
		"rpc": [
			"https://babel-api.testnet.iotex.io"
		],
		"faucets": [
			"https://faucet.iotex.io/"
		],
		"explorers": [
			{
				"name": "testnet iotexscan",
				"url": "https://testnet.iotexscan.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://iotex.io"
	},
	{
		"slug": "ipos",
		"name": "IPOS Network",
		"chainId": 1122334455,
		"shortName": "ipos",
		"chain": "IPOS",
		"network": "mainnet",
		"networkId": 1122334455,
		"nativeCurrency": {
			"name": "IPOS Network Ether",
			"symbol": "IPOS",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.iposlab.com",
			"https://rpc2.iposlab.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://iposlab.com"
	},
	{
		"slug": "joys",
		"name": "Joys Digital",
		"chainId": 35855456,
		"shortName": "JOYS",
		"chain": "JOYS",
		"network": "mainnet",
		"networkId": 35855456,
		"nativeCurrency": {
			"name": "JOYS",
			"symbol": "JOYS",
			"decimals": 18
		},
		"rpc": [
			"https://node.joys.digital"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://joys.digital"
	},
	{
		"slug": "joys-testnet",
		"name": "Joys Digital Testnet",
		"chainId": 99415706,
		"shortName": "TOYS",
		"chain": "TOYS",
		"network": "testnet",
		"networkId": 99415706,
		"nativeCurrency": {
			"name": "TOYS",
			"symbol": "TOYS",
			"decimals": 18
		},
		"rpc": [
			"https://toys.joys.cash/"
		],
		"faucets": [
			"https://faucet.joys.digital/"
		],
		"explorers": [],
		"infoURL": "https://joys.digital"
	},
	{
		"slug": "karura",
		"name": "Karura Network",
		"chainId": 686,
		"slip44": 686,
		"shortName": "kar",
		"chain": "KAR",
		"network": "mainnet",
		"networkId": 686,
		"nativeCurrency": {
			"name": "Karura Token",
			"symbol": "KAR",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://karura.network"
	},
	{
		"slug": "kcc",
		"name": "KCC",
		"chainId": 321,
		"shortName": "kcs",
		"chain": "KCC",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "KuCoin Token",
			"symbol": "KCS",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-mainnet.kcc.network",
			"wss://rpc-ws-mainnet.kcc.network"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "KCC Explorer",
				"url": "https://explorer.kcc.io/en",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://kcc.io"
	},
	{
		"slug": "kcc-testnet",
		"name": "KCC Testnet",
		"chainId": 322,
		"shortName": "kcst",
		"chain": "KCC",
		"network": "testnet",
		"networkId": 322,
		"nativeCurrency": {
			"name": "KuCoin Testnet Token",
			"symbol": "tKCS",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-testnet.kcc.network",
			"wss://rpc-ws-testnet.kcc.network"
		],
		"faucets": [
			"https://faucet-testnet.kcc.network"
		],
		"explorers": [
			{
				"name": "kcc-scan",
				"url": "https://scan-testnet.kcc.network",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://scan-testnet.kcc.network"
	},
	{
		"slug": "klaytn-cypress",
		"name": "Klaytn Cypress",
		"chainId": 8217,
		"slip44": 8217,
		"shortName": "Cypress",
		"chain": "KLAY",
		"network": "cypress",
		"networkId": 8217,
		"nativeCurrency": {
			"name": "KLAY",
			"symbol": "KLAY",
			"decimals": 18
		},
		"rpc": [
			"https://node-api.klaytnapi.com/v1/klaytn"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.klaytn.com/"
	},
	{
		"slug": "klaytn-baobab",
		"name": "Klaytn Baobab Testnet",
		"chainId": 1001,
		"shortName": "Baobab",
		"chain": "KLAY",
		"network": "baobab",
		"networkId": 1001,
		"nativeCurrency": {
			"name": "KLAY",
			"symbol": "KLAY",
			"decimals": 18
		},
		"rpc": [
			"https://node-api.klaytnapi.com/v1/klaytn"
		],
		"faucets": [
			"https://baobab.wallet.klaytn.com/access?next=faucet"
		],
		"explorers": [],
		"infoURL": "https://www.klaytn.com/"
	},
	{
		"slug": "kortho",
		"name": "Kortho",
		"chainId": 2559,
		"shortName": "ktoc",
		"chain": "Kortho Chain",
		"network": "mainnet",
		"networkId": 2559,
		"nativeCurrency": {
			"name": "KorthoChain",
			"symbol": "KTO",
			"decimals": 11
		},
		"rpc": [
			"https://www.kortho-chain.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.kortho.io/"
	},
	{
		"slug": "kortho-testnet",
		"name": "KorthoTest",
		"chainId": 8285,
		"shortName": "Kortho",
		"chain": "Kortho",
		"network": "Test",
		"networkId": 8285,
		"nativeCurrency": {
			"name": "Kortho Test",
			"symbol": "KTO",
			"decimals": 11
		},
		"rpc": [
			"https://www.krotho-test.net"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.kortho.io/"
	},
	{
		"slug": "latam-resil",
		"name": "Latam-Blockchain Resil Testnet",
		"chainId": 172,
		"shortName": "resil",
		"chain": "Resil",
		"network": "testnet",
		"networkId": 172,
		"nativeCurrency": {
			"name": "Latam-Blockchain Resil Test Native Token",
			"symbol": "usd",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.latam-blockchain.com",
			"wss://ws.latam-blockchain.com"
		],
		"faucets": [
			"https://faucet.latam-blockchain.com"
		],
		"explorers": [],
		"infoURL": "https://latam-blockchain.com"
	},
	{
		"slug": "lightstreams",
		"name": "Lightstreams",
		"chainId": 163,
		"shortName": "pht",
		"chain": "PHT",
		"network": "mainnet",
		"networkId": 163,
		"nativeCurrency": {
			"name": "Lightstreams PHT",
			"symbol": "PHT",
			"decimals": 18
		},
		"rpc": [
			"https://node.mainnet.lightstreams.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://explorer.lightstreams.io"
	},
	{
		"slug": "lightstreams-testnet",
		"name": "Lightstreams Testnet",
		"chainId": 162,
		"shortName": "tpht",
		"chain": "PHT",
		"network": "sirius",
		"networkId": 162,
		"nativeCurrency": {
			"name": "Lightstreams PHT",
			"symbol": "PHT",
			"decimals": 18
		},
		"rpc": [
			"https://node.sirius.lightstreams.io"
		],
		"faucets": [
			"https://discuss.lightstreams.network/t/request-test-tokens"
		],
		"explorers": [],
		"infoURL": "https://explorer.sirius.lightstreams.io"
	},
	{
		"slug": "lisinski",
		"name": "Lisinski",
		"chainId": 385,
		"shortName": "lisinski",
		"chain": "CRO",
		"network": "mainnet",
		"networkId": 385,
		"nativeCurrency": {
			"name": "Lisinski Ether",
			"symbol": "LISINSKI",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-bitfalls1.lisinski.online"
		],
		"faucets": [
			"https://pipa.lisinski.online"
		],
		"explorers": [],
		"infoURL": "https://lisinski.online"
	},
	{
		"slug": "mathchain",
		"name": "MathChain",
		"chainId": 1139,
		"shortName": "MATH",
		"chain": "MATH",
		"network": "mainnet",
		"networkId": 1139,
		"nativeCurrency": {
			"name": "MathChain",
			"symbol": "MATH",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://mathchain.org"
	},
	{
		"slug": "mathchain-testnet",
		"name": "MathChain Testnet",
		"chainId": 1140,
		"shortName": "tMATH",
		"chain": "MATH",
		"network": "testnet",
		"networkId": 1140,
		"nativeCurrency": {
			"name": "MathChain",
			"symbol": "MATH",
			"decimals": 18
		},
		"rpc": [
			"https://galois-hk.maiziqianbao.net/rpc"
		],
		"faucets": [
			"https://scan.boka.network/#/Galois/faucet"
		],
		"explorers": [],
		"infoURL": "https://mathchain.org"
	},
	{
		"slug": "mdgl-testnet",
		"name": "MDGL Testnet",
		"chainId": 8029,
		"shortName": "mdgl",
		"chain": "MDGL",
		"network": "testnet",
		"networkId": 8029,
		"nativeCurrency": {
			"name": "MDGL Token",
			"symbol": "MDGLT",
			"decimals": 18
		},
		"rpc": [
			"https://testnet.mdgl.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://mdgl.io"
	},
	{
		"slug": "metadium",
		"name": "Metadium",
		"chainId": 11,
		"slip44": 916,
		"shortName": "meta",
		"chain": "META",
		"network": "mainnet",
		"networkId": 11,
		"nativeCurrency": {
			"name": "Metadium Mainnet Ether",
			"symbol": "META",
			"decimals": 18
		},
		"rpc": [
			"https://api.metadium.com/prod"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://metadium.com"
	},
	{
		"slug": "metadium-testnet",
		"name": "Metadium Testnet",
		"chainId": 12,
		"shortName": "kal",
		"chain": "META",
		"network": "testnet",
		"networkId": 12,
		"nativeCurrency": {
			"name": "Metadium Testnet Ether",
			"symbol": "KAL",
			"decimals": 18
		},
		"rpc": [
			"https://api.metadium.com/dev"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://metadium.com"
	},
	{
		"slug": "metadot",
		"name": "MetaDot",
		"chainId": 16000,
		"shortName": "mtt",
		"chain": "MTT",
		"network": "mainnet",
		"networkId": 16000,
		"nativeCurrency": {
			"name": "MetaDot Token",
			"symbol": "MTT",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet.metadot.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://metadot.network"
	},
	{
		"slug": "metadot-testnet",
		"name": "MetaDot Testnet",
		"chainId": 16001,
		"shortName": "mtttest",
		"chain": "MTTTest",
		"network": "devnet",
		"networkId": 16001,
		"nativeCurrency": {
			"name": "MetaDot Token Testnet",
			"symbol": "MTT-test",
			"decimals": 18
		},
		"rpc": [
			"https://testnet.metadot.network"
		],
		"faucets": [
			"https://faucet.metadot.network/"
		],
		"explorers": [],
		"infoURL": "https://metadot.network"
	},
	{
		"slug": "meter",
		"name": "Meter",
		"chainId": 82,
		"shortName": "Meter",
		"chain": "METER",
		"network": "mainnet",
		"networkId": 82,
		"nativeCurrency": {
			"name": "Meter",
			"symbol": "MTR",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.meter.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.meter.io"
	},
	{
		"slug": "metis",
		"name": "Metis",
		"chainId": 488, // 435
		"nativeCurrency": {
			"name": "Metis",
			"symbol": "METIS",
			"decimals": 18
		},
		"rpc": [
			"https://dragonfire.metis.io/?owner=488",
			// "https://rocketfuel.metis.io/?owner=435"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.metis.io"
	},
	{
		"slug": "mintme",
		"name": "MintMe.com Coin",
		"chainId": 24734,
		"shortName": "mintme",
		"chain": "MINTME",
		"network": "mainnet",
		"networkId": 37480,
		"nativeCurrency": {
			"name": "MintMe.com Coin",
			"symbol": "MINTME",
			"decimals": 18
		},
		"rpc": [
			"https://node1.mintme.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.mintme.com"
	},
	{
		"slug": "mix",
		"name": "Mix",
		"chainId": 76,
		"slip44": 76,
		"shortName": "mix",
		"chain": "MIX",
		"network": "mainnet",
		"networkId": 76,
		"nativeCurrency": {
			"name": "Mix Ether",
			"symbol": "MIX",
			"decimals": 18
		},
		"rpc": [
			"https://rpc2.mix-blockchain.org:8647"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://mix-blockchain.org"
	},
	{
		"slug": "moonbeam",
		"name": "Moonbeam (Polkadot)",
		"chainId": 1284,
		"shortName": "mbeam",
		"chain": "MOON",
		"network": "moonbeam",
		"networkId": 1284,
		"nativeCurrency": {
			"name": "Glimmer",
			"symbol": "GLMR",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://moonbeam.network/networks/moonbeam/"
	},
	{
		"slug": "moonbeam-moonbase-alpha",
		"name": "Moonbeam Moonbase Alpha Testnet",
		"chainId": 1287,
		"shortName": "mbase",
		"chain": "MOON",
		"network": "moonbase",
		"networkId": 1287,
		"nativeCurrency": {
			"name": "Dev",
			"symbol": "DEV",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.testnet.moonbeam.network",
			"wss://wss.testnet.moonbeam.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://docs.moonbeam.network/networks/testnet/"
	},
	{
		"slug": "moonriver",
		"name": "Moonriver (Kusama)",
		"chainId": 1285,
		"shortName": "mriver",
		"chain": "MOON",
		"network": "moonriver",
		"networkId": 1285,
		"nativeCurrency": {
			"name": "Moonriver",
			"symbol": "MOVR",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.moonriver.moonbeam.network",
			"wss://wss.moonriver.moonbeam.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://moonbeam.network/networks/moonriver/"
	},
	{
		"slug": "moonrock",
		"name": "Moonrock (Rococo)",
		"chainId": 1286,
		"shortName": "mrock",
		"chain": "MOON",
		"network": "moonrock",
		"networkId": 1286,
		"nativeCurrency": {
			"name": "Rocs",
			"symbol": "ROC",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": ""
	},
	{
		"slug": "moonshadow",
		"name": "Moonshadow",
		"chainId": 1288,
		"shortName": "mshadow",
		"chain": "MOON",
		"network": "moonshadow",
		"networkId": 1288,
		"nativeCurrency": {
			"name": "Moonshadow",
			"symbol": "MSHD",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://docs.moonbeam.network/networks/overview/"
	},
	{
		"slug": "musicoin",
		"name": "Musicoin",
		"chainId": 7762959,
		"slip44": 184,
		"shortName": "music",
		"chain": "MUSIC",
		"network": "mainnet",
		"networkId": 7762959,
		"nativeCurrency": {
			"name": "Musicoin",
			"symbol": "MUSIC",
			"decimals": 18
		},
		"rpc": [
			"https://mewapi.musicoin.tw"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://musicoin.tw"
	},
	{
		"slug": "near-betanet",
		"name": "NEAR BetaNet",
		"chainId": 1313161556,
		"shortName": "nearb",
		"chain": "NEAR",
		"network": "betanet",
		"networkId": 1313161556,
		"nativeCurrency": {
			"name": "NEAR",
			"symbol": "bNEAR",
			"decimals": 24
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://near.org/"
	},
	{
		"slug": "near",
		"name": "NEAR",
		"chainId": 1313161554,
		"shortName": "near",
		"chain": "NEAR",
		"network": "mainnet",
		"networkId": 1313161554,
		"nativeCurrency": {
			"name": "NEAR",
			"symbol": "NEAR",
			"decimals": 24
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://near.org/"
	},
	{
		"slug": "near-testnet",
		"name": "NEAR Testnet",
		"chainId": 1313161555,
		"shortName": "neart",
		"chain": "NEAR",
		"network": "testnet",
		"networkId": 1313161555,
		"nativeCurrency": {
			"name": "NEAR",
			"symbol": "tNEAR",
			"decimals": 24
		},
		"rpc": [],
		"faucets": [
			"https://wallet.testnet.near.org"
		],
		"explorers": [],
		"infoURL": "https://near.org/"
	},
	{
		"slug": "nepal",
		"name": "Nepal Blockchain Network",
		"chainId": 977,
		"shortName": "yeti",
		"chain": "YETI",
		"network": "mainnet",
		"networkId": 977,
		"nativeCurrency": {
			"name": "Nepal Blockchain Network Ether",
			"symbol": "YETI",
			"decimals": 18
		},
		"rpc": [
			"https://api.nepalblockchain.dev",
			"https://api.nepalblockchain.network"
		],
		"faucets": [
			"https://faucet.nepalblockchain.network"
		],
		"explorers": [],
		"infoURL": "https://nepalblockchain.network"
	},
	{
		"slug": "newton",
		"name": "Newton",
		"chainId": 1012,
		"shortName": "new",
		"chain": "NEW",
		"network": "mainnet",
		"networkId": 1012,
		"nativeCurrency": {
			"name": "Newton",
			"symbol": "NEW",
			"decimals": 18
		},
		"rpc": [
			"https://global.rpc.mainnet.newtonproject.org"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.newtonproject.org/"
	},
	{
		"slug": "newton-testnet",
		"name": "Newton Testnet",
		"chainId": 1007,
		"shortName": "tnew",
		"chain": "NEW",
		"network": "testnet",
		"networkId": 1007,
		"nativeCurrency": {
			"name": "Newton",
			"symbol": "NEW",
			"decimals": 18
		},
		"rpc": [
			"https://rpc1.newchain.newtonproject.org"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.newtonproject.org/"
	},
	{
		"slug": "oasis-paratime",
		"name": "Oasis Ethereum ParaTime",
		"chainId": 69,
		"shortName": "oasis",
		"chain": "ETH",
		"network": "mainnet",
		"networkId": 69,
		"nativeCurrency": {
			"name": "Oasis Ether",
			"symbol": "OETH",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.oasiseth.org:8545"
		],
		"faucets": [
			"http://faucet.oasiseth.org"
		],
		"explorers": [],
		"infoURL": "https://www.oasiseth.org"
	},
	{
		"slug": "okexchain",
		"name": "OKExChain",
		"chainId": 66,
		"shortName": "okt",
		"chain": "okexchain",
		"network": "mainnet",
		"networkId": 66,
		"nativeCurrency": {
			"name": "OKExChain Global Utility Token",
			"symbol": "OKT",
			"decimals": 18
		},
		"rpc": [
			"https://exchainrpc.okex.org"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "OKLink",
				"url": "https://www.oklink.com/okexchain",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.okex.com/okexchain"
	},
	{
		"slug": "okexchain-testnet",
		"name": "OKExChain Testnet",
		"chainId": 65,
		"shortName": "tokt",
		"chain": "okexchain",
		"network": "testnet",
		"networkId": 65,
		"nativeCurrency": {
			"name": "OKExChain Global Utility Token in testnet",
			"symbol": "OKT",
			"decimals": 18
		},
		"rpc": [
			"https://exchaintestrpc.okex.org"
		],
		"faucets": [
			"https://www.okex.com/drawdex"
		],
		"explorers": [
			{
				"name": "OKLink",
				"url": "https://www.oklink.com/okexchain-test",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.okex.com/okexchain"
	},
	{
		"slug": "ontology",
		"name": "Ontology",
		"chainId": 58,
		"shortName": "Ontology Mainnet",
		"chain": "Ontology",
		"network": "mainnet",
		"networkId": 58,
		"nativeCurrency": {
			"name": "ONG",
			"symbol": "ONG",
			"decimals": 9
		},
		"rpc": [
			"https://dappnode1.ont.io:20339",
			"https://dappnode2.ont.io:20339",
			"https://dappnode3.ont.io:20339",
			"https://dappnode4.ont.io:20339"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "explorer",
				"url": "https://explorer.ont.io/",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://ont.io/"
	},
	{
		"slug": "ontology-testnet",
		"name": "Ontology Testnet",
		"chainId": 5851,
		"shortName": "Ontology Testnet",
		"chain": "Ontology",
		"network": "testnet",
		"networkId": 5851,
		"nativeCurrency": {
			"name": "ONG",
			"symbol": "ONG",
			"decimals": 9
		},
		"rpc": [
			"https://polaris1.ont.io:20339",
			"https://polaris2.ont.io:20339",
			"https://polaris3.ont.io:20339",
			"https://polaris4.ont.io:20339"
		],
		"faucets": [
			"https://developer.ont.io/"
		],
		"explorers": [
			{
				"name": "explorer",
				"url": "https://explorer.ont.io/testnet",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://ont.io/"
	},
	{
		"slug": "optimism",
		"name": "Optimism",
		"chainId": 10,
		"shortName": "oeth",
		"chain": "ETH",
		"network": "mainnet",
		"networkId": 10,
		"nativeCurrency": {
			"name": "Ether",
			"symbol": "OETH",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet.optimism.io/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://optimism.io"
	},
	{
		"slug": "optimistic-goerli",
		"name": "Optimism Goerli Testnet",
		"chainId": 420,
		"shortName": "ogor",
		"chain": "ETH",
		"network": "goerli",
		"networkId": 420,
		"nativeCurrency": {
			"name": "Görli Ether",
			"symbol": "GOR",
			"decimals": 18
		},
		"rpc": [
			"https://goerli.optimism.io/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://optimism.io"
	},
	{
		"slug": "optimistic-kovan",
		"name": "Optimism Kovan Testnet",
		"chainId": 69,
		"shortName": "okov",
		"chain": "ETH",
		"network": "kovan",
		"networkId": 69,
		"nativeCurrency": {
			"name": "Kovan Ether",
			"symbol": "KOR",
			"decimals": 18
		},
		"rpc": [
			"https://kovan.optimism.io/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://optimism.io"
	},
	{
		"slug": "palm",
		"name": "Palm",
		"chainId": 11297108109,
		"shortName": "palm",
		"chain": "Palm",
		"network": "mainnet",
		"networkId": 11297108109,
		"nativeCurrency": {
			"name": "PALM",
			"symbol": "PALM",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://palm.io"
	},
	{
		"slug": "palm-testnet",
		"name": "Palm Testnet",
		"chainId": 11297108099,
		"shortName": "tpalm",
		"chain": "Palm",
		"network": "testnet",
		"networkId": 11297108099,
		"nativeCurrency": {
			"name": "PALM",
			"symbol": "PALM",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://palm.io"
	},
	{
		"slug": "pegglecoin",
		"name": "pegglecoin",
		"chainId": 42069,
		"shortName": "PC",
		"chain": "42069",
		"network": "mainnet",
		"networkId": 42069,
		"nativeCurrency": {
			"name": "pegglecoin",
			"symbol": "peggle",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://teampeggle.com"
	},
	{
		"slug": "pepchain-churchill",
		"name": "PepChain Churchill",
		"chainId": 13371337,
		"shortName": "tpep",
		"chain": "PEP",
		"network": "testnet",
		"networkId": 13371337,
		"nativeCurrency": {
			"name": "PepChain Churchill Ether",
			"symbol": "TPEP",
			"decimals": 18
		},
		"rpc": [
			"https://churchill-rpc.pepchain.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://pepchain.io"
	},
	{
		"slug": "pirl",
		"name": "Pirl",
		"chainId": 3125659152,
		"slip44": 164,
		"shortName": "pirl",
		"chain": "PIRL",
		"network": "mainnet",
		"networkId": 3125659152,
		"nativeCurrency": {
			"name": "Pirl Ether",
			"symbol": "PIRL",
			"decimals": 18
		},
		"rpc": [
			"https://wallrpc.pirl.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://pirl.io"
	},
	{
		"slug": "poa",
		"name": "POA Network Core",
		"chainId": 99,
		"shortName": "skl",
		"chain": "POA",
		"network": "core",
		"networkId": 99,
		"nativeCurrency": {
			"name": "POA Network Core Ether",
			"symbol": "SKL",
			"decimals": 18
		},
		"rpc": [
			"https://core.poanetwork.dev",
			"http://core.poanetwork.dev:8545",
			"https://core.poa.network",
			"ws://core.poanetwork.dev:8546"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://poa.network"
	},
	{
		"slug": "poa-sokol",
		"name": "POA Network Sokol",
		"chainId": 77,
		"shortName": "poa",
		"chain": "POA",
		"network": "sokol",
		"networkId": 77,
		"nativeCurrency": {
			"name": "POA Sokol Ether",
			"symbol": "POA",
			"decimals": 18
		},
		"rpc": [
			"https://sokol.poa.network",
			"wss://sokol.poa.network/wss",
			"ws://sokol.poa.network:8546"
		],
		"faucets": [
			"https://faucet-sokol.herokuapp.com"
		],
		"explorers": [],
		"infoURL": "https://poa.network"
	},
	{
		"slug": "polis-olympus",
		"name": "Polis Olympus",
		"chainId": 333999,
		"shortName": "olympus",
		"chain": "Olympus",
		"network": "mainnet",
		"networkId": 333999,
		"nativeCurrency": {
			"name": "Polis",
			"symbol": "POLIS",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.polis.tech"
		],
		"faucets": [
			"https://faucet.polis.tech"
		],
		"explorers": [],
		"infoURL": "https://polis.tech",
		"icon": "polis"
	},
	{
		"slug": "polis-sparta",
		"name": "Polis Sparta Testnet",
		"chainId": 333888,
		"shortName": "sparta",
		"chain": "Sparta",
		"network": "testnet",
		"networkId": 333888,
		"nativeCurrency": {
			"name": "tPolis",
			"symbol": "tPOLIS",
			"decimals": 18
		},
		"rpc": [
			"https://sparta-rpc.polis.tech"
		],
		"faucets": [
			"https://faucet.polis.tech"
		],
		"explorers": [],
		"infoURL": "https://polis.tech",
		"icon": "polis"
	},
	{
		"slug": "polygon",
		"name": "Polygon",
		"chainId": 137,
		"shortName": "polygon",
		"chain": "Polygon",
		"network": "mainnet",
		"networkId": 137,
		"nativeCurrency": {
			"name": "Matic",
			"symbol": "MATIC",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-mainnet.matic.network",
			"wss://ws-mainnet.matic.network",
			"https://rpc-mainnet.matic.quiknode.pro",
			"https://matic-mainnet.chainstacklabs.com"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "polygonscan",
				"url": "https://polygonscan.com",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://polygon.technology"
	},
	{
		"slug": "polygon-mumbai",
		"name": "Polygon Mumbai Testnet",
		"chainId": 80001,
		"shortName": "maticmum",
		"chain": "Polygon",
		"network": "testnet",
		"networkId": 80001,
		"nativeCurrency": {
			"name": "Matic",
			"symbol": "tMATIC",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-mumbai.matic.today",
			"wss://ws-mumbai.matic.today"
		],
		"faucets": [
			"https://faucet.matic.network/"
		],
		"explorers": [
			{
				"name": "polygonscan",
				"url": "https://mumbai.polygonscan.com/",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://matic.network/"
	},
	{
		"slug": "polyjuice-testnet",
		"name": "Polyjuice Testnet",
		"chainId": 71393,
		"shortName": "ckb",
		"chain": "CKB",
		"network": "testnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "CKB",
			"symbol": "CKB",
			"decimals": 8
		},
		"rpc": [
			"https://godwoken-testnet-web3-rpc.ckbapp.dev",
			"ws://godwoken-testnet-web3-rpc.ckbapp.dev/ws"
		],
		"faucets": [
			"https://faucet.nervos.org/"
		],
		"explorers": [],
		"infoURL": "https://github.com/nervosnetwork/godwoken",
		"icon": "polyjuice"
	},
	{
		"slug": "primuschain",
		"name": "PrimusChain",
		"chainId": 78,
		"shortName": "primuschain",
		"chain": "PC",
		"network": "mainnet",
		"networkId": 78,
		"nativeCurrency": {
			"name": "Primus Ether",
			"symbol": "PETH",
			"decimals": 18
		},
		"rpc": [
			"https://ethnode.primusmoney.com/mainnet"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://primusmoney.com"
	},
	{
		"slug": "primuschain-firenze",
		"name": "PrimusChain Firenze Testnet",
		"chainId": 78110,
		"shortName": "firenze",
		"chain": "ETH",
		"network": "testnet",
		"networkId": 78110,
		"nativeCurrency": {
			"name": "Firenze Ether",
			"symbol": "FIN",
			"decimals": 18
		},
		"rpc": [
			"https://ethnode.primusmoney.com/firenze"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://primusmoney.com"
	},
	{
		"slug": "proton-testnet",
		"name": "Proton Testnet",
		"chainId": 110,
		"shortName": "xpr",
		"chain": "XPR",
		"network": "testnet",
		"networkId": 110,
		"nativeCurrency": {
			"name": "Proton",
			"symbol": "XPR",
			"decimals": 4
		},
		"rpc": [
			"https://protontestnet.greymass.com/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://protonchain.com"
	},
	{
		"slug": "quarkblockchain",
		"name": "quarkblockchain",
		"chainId": 20181205,
		"shortName": "qki",
		"chain": "QKI",
		"network": "mainnet",
		"networkId": 20181205,
		"nativeCurrency": {
			"name": "quarkblockchain Native Token",
			"symbol": "QKI",
			"decimals": 18
		},
		"rpc": [
			"https://hz.rpc.qkiscan.cn",
			"https://jp.rpc.qkiscan.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://quarkblockchain.org/"
	},
	{
		"slug": "quarkchain-root",
		"name": "QuarkChain Root",
		"chainId": 100000,
		"shortName": "qkc-r",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100000,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:38391/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-shard0",
		"parent": {
			"chain": "eip155-100000",
			"type": "shard"
		},
		"name": "QuarkChain Shard 0",
		"chainId": 100001,
		"shortName": "qkc-s0",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100001,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:39000/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-shard1",
		"parent": {
			"chain": "eip155-100000",
			"type": "shard"
		},
		"name": "QuarkChain Shard 1",
		"chainId": 100002,
		"shortName": "qkc-s1",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100002,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:39001/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-shard2",
		"parent": {
			"chain": "eip155-100000",
			"type": "shard"
		},
		"name": "QuarkChain Shard 2",
		"chainId": 100003,
		"shortName": "qkc-s2",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100003,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:39002/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-shard3",
		"parent": {
			"chain": "eip155-100000",
			"type": "shard"
		},
		"name": "QuarkChain Shard 3",
		"chainId": 100004,
		"shortName": "qkc-s3",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100004,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:39003/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-shard4",
		"parent": {
			"chain": "eip155-100000",
			"type": "shard"
		},
		"name": "QuarkChain Shard 4",
		"chainId": 100005,
		"shortName": "qkc-s4",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100005,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:39004/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-shard4",
		"parent": {
			"chain": "eip155-100000",
			"type": "shard"
		},
		"name": "QuarkChain Shard 5",
		"chainId": 100006,
		"shortName": "qkc-s5",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100006,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:39005/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-shard6",
		"parent": {
			"chain": "eip155-100000",
			"type": "shard"
		},
		"name": "QuarkChain Shard 6",
		"chainId": 100007,
		"shortName": "qkc-s6",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100007,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:39006/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-shard7",
		"parent": {
			"chain": "eip155-100000",
			"type": "shard"
		},
		"name": "QuarkChain Shard 7",
		"chainId": 100008,
		"shortName": "qkc-s7",
		"chain": "QuarkChain",
		"network": "mainnet",
		"networkId": 100008,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.mainnet.quarkchain.io:39007/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-root",
		"name": "QuarkChain Devnet Root",
		"chainId": 110000,
		"shortName": "qkc-d-r",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110000,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:38391/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-shard0",
		"parent": {
			"chain": "eip155-110000",
			"type": "shard"
		},
		"name": "QuarkChain Devnet Shard 0",
		"chainId": 110001,
		"shortName": "qkc-d-s0",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110001,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:39000/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-shard1",
		"parent": {
			"chain": "eip155-110000",
			"type": "shard"
		},
		"name": "QuarkChain Devnet Shard 1",
		"chainId": 110002,
		"shortName": "qkc-d-s1",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110002,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:39001/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-shard2",
		"parent": {
			"chain": "eip155-110000",
			"type": "shard"
		},
		"name": "QuarkChain Devnet Shard 2",
		"chainId": 110003,
		"shortName": "qkc-d-s2",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110003,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:39002/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-shard3",
		"parent": {
			"chain": "eip155-110000",
			"type": "shard"
		},
		"name": "QuarkChain Devnet Shard 3",
		"chainId": 110004,
		"shortName": "qkc-d-s3",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110004,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:39003/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-shard4",
		"parent": {
			"chain": "eip155-110000",
			"type": "shard"
		},
		"name": "QuarkChain Devnet Shard 4",
		"chainId": 110005,
		"shortName": "qkc-d-s4",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110005,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:39004/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-shard5",
		"parent": {
			"chain": "eip155-110000",
			"type": "shard"
		},
		"name": "QuarkChain Devnet Shard 5",
		"chainId": 110006,
		"shortName": "qkc-d-s5",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110006,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:39005/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-shard6",
		"parent": {
			"chain": "eip155-110000",
			"type": "shard"
		},
		"name": "QuarkChain Devnet Shard 6",
		"chainId": 110007,
		"shortName": "qkc-d-s6",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110007,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:39006/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "quarkchain-devnet-shard7",
		"parent": {
			"chain": "eip155-110000",
			"type": "shard"
		},
		"name": "QuarkChain Devnet Shard 7",
		"chainId": 110008,
		"shortName": "qkc-d-s7",
		"chain": "QuarkChain",
		"network": "devnet",
		"networkId": 110008,
		"nativeCurrency": {
			"name": "QKC",
			"symbol": "QKC",
			"decimals": 18
		},
		"rpc": [
			"http://jrpc.devnet.quarkchain.io:39007/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.quarkchain.io/"
	},
	{
		"slug": "rsk",
		"name": "RSK",
		"chainId": 30,
		"slip44": 137,
		"shortName": "rsk",
		"chain": "RSK",
		"network": "mainnet",
		"networkId": 30,
		"nativeCurrency": {
			"name": "RSK Mainnet Ether",
			"symbol": "RBTC",
			"decimals": 18
		},
		"rpc": [
			"https://public-node.rsk.co",
			"https://mycrypto.rsk.co"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://rsk.co"
	},
	{
		"slug": "rsk-testnet",
		"name": "RSK Testnet",
		"chainId": 31,
		"shortName": "trsk",
		"chain": "RSK",
		"network": "testnet",
		"networkId": 31,
		"nativeCurrency": {
			"name": "RSK Testnet Ether",
			"symbol": "tRBTC",
			"decimals": 18
		},
		"rpc": [
			"https://public-node.testnet.rsk.co",
			"https://mycrypto.testnet.rsk.co"
		],
		"faucets": [
			"https://faucet.testnet.rsk.co"
		],
		"explorers": [],
		"infoURL": "https://rsk.co"
	},
	{
		"slug": "rupaya",
		"name": "Rupaya",
		"chainId": 499,
		"slip44": 499,
		"shortName": "rupx",
		"chain": "RUPX",
		"network": "mainnet",
		"networkId": 499,
		"nativeCurrency": {
			"name": "Rupaya",
			"symbol": "RUPX",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.rupx.io"
	},
	{
		"slug": "sakura",
		"name": "Sakura",
		"chainId": 1022,
		"shortName": "sku",
		"chain": "Sakura",
		"network": "sakura",
		"networkId": 1022,
		"nativeCurrency": {
			"name": "Sakura",
			"symbol": "SKU",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://clover.finance/sakura"
	},
	{
		"slug": "sgc",
		"name": "SGC Testnet",
		"chainId": 102,
		"shortName": "sgc",
		"chain": "SGC",
		"network": "SGC testnet",
		"networkId": 102,
		"nativeCurrency": {
			"name": "SGC",
			"symbol": "SGC",
			"decimals": 18
		},
		"rpc": [
			"https://substrate.org.cn"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://web3games.blockspaper.com/en/"
	},
	{
		"slug": "skale-testnet",
		"name": "SKALE Network Testnet",
		"chainId": 344435,
		"nativeCurrency": {
			"name": "SKALE ETH",
			"symbol": "skETH",
			"decimals": 18
		},
		"rpc": [
			"https://dev-testnet-v1-0.skalelabs.com"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "Expedition",
				"url": "https://expedition.dev/?rpcUrl=https://dev-testnet-v1-0.skalelabs.com"
			}
			
		],
		"infoURL": "https://skale.network/"
	},
	{
		"slug": "smartbch",
		"name": "Smart Bitcoin Cash",
		"chainId": 10000,
		"shortName": "smartbch",
		"chain": "smartBCH",
		"network": "mainnet",
		"networkId": 10000,
		"nativeCurrency": {
			"name": "Bitcoin Cash",
			"symbol": "BCH",
			"decimals": 18
		},
		"rpc": [
			"https://smartbch.greyh.at",
			"https://rpc-mainnet.smartbch.org",
			"https://smartbch.fountainhead.cash/mainnet"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://smartbch.org/"
	},
	{
		"slug": "smartbch-testnet",
		"name": "Smart Bitcoin Cash Testnet",
		"chainId": 10001,
		"shortName": "smartbchtest",
		"chain": "smartBCHTest",
		"network": "testnet",
		"networkId": 10001,
		"nativeCurrency": {
			"name": "Bitcoin Cash Test Token",
			"symbol": "BCHT",
			"decimals": 18
		},
		"rpc": [
			"https://rpc-testnet.smartbch.org"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "http://smartbch.org/"
	},
	{
		"slug": "songbird-canary",
		"name": "Songbird Canary-Network",
		"chainId": 19,
		"shortName": "sgb",
		"chain": "SGB",
		"network": "songbird",
		"networkId": 19,
		"nativeCurrency": {
			"name": "Songbird",
			"symbol": "SGB",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://flare.xyz"
	},
	{
		"slug": "soterone",
		"name": "SoterOne",
		"chainId": 68,
		"shortName": "SO1",
		"chain": "SOTER",
		"network": "mainnet",
		"networkId": 68,
		"nativeCurrency": {
			"name": "SoterOne Mainnet Ether",
			"symbol": "SOTER",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.soter.one"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.soterone.com"
	},
	{
		"slug": "syscoin",
		"name": "Syscoin",
		"chainId": 57,
		"shortName": "sys",
		"chain": "SYS",
		"network": "mainnet",
		"networkId": 57,
		"nativeCurrency": {
			"name": "Syscoin",
			"symbol": "SYS",
			"decimals": 18
		},
		"rpc": [
			"https://nevm.syscoin.org/api/eth-rpc",
			"https://web3.syscoin.org",
			"wss://web3.syscoin.org"
		],
		"faucets": [
			"https://faucet.syscoin.org"
		],
		"explorers": [],
		"infoURL": "https://www.syscoin.org"
	},
	{
		"slug": "syscoin-tanenbaum",
		"name": "Syscoin Tanenbaum Testnet",
		"chainId": 5700,
		"shortName": "tsys",
		"chain": "SYS",
		"network": "testnet",
		"networkId": 5700,
		"nativeCurrency": {
			"name": "Testnet Syscoin",
			"symbol": "tSYS",
			"decimals": 18
		},
		"rpc": [
			"https://tanenbaum.io/api/eth-rpc"
		],
		"faucets": [
			"https://faucet.tanenbaum.io"
		],
		"explorers": [],
		"infoURL": "https://syscoin.org"
	},
	{
		"slug": "tao",
		"name": "Tao Network",
		"chainId": 558,
		"shortName": "tao",
		"chain": "TAO",
		"network": "core",
		"networkId": 558,
		"nativeCurrency": {
			"name": "Tao",
			"symbol": "TAO",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.testnet.tao.network",
			"http://rpc.testnet.tao.network:8545",
			"https://rpc.tao.network",
			"wss://rpc.tao.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://tao.network"
	},
	{
		"slug": "tbwg",
		"name": "TBWG Chain",
		"chainId": 35,
		"shortName": "tbwg",
		"chain": "TBWG",
		"network": "mainnet",
		"networkId": 35,
		"nativeCurrency": {
			"name": "TBWG Ether",
			"symbol": "TBG",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.tbwg.io"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://tbwg.io"
	},
	{
		"slug": "telos",
		"name": "Telos EVM",
		"chainId": 40,
		"shortName": "Telos EVM",
		"chain": "TLOS",
		"network": "mainnet",
		"networkId": 40,
		"nativeCurrency": {
			"name": "Telos",
			"symbol": "TLOS",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet.telos.net/evm"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://telos.net"
	},
	{
		"slug": "telos-testnet",
		"name": "Telos EVM Testnet",
		"chainId": 41,
		"shortName": "Telos EVM Testnet",
		"chain": "TLOS",
		"network": "testnet",
		"networkId": 41,
		"nativeCurrency": {
			"name": "Telos",
			"symbol": "TLOS",
			"decimals": 18
		},
		"rpc": [
			"https://testnet.telos.net/evm"
		],
		"faucets": [
			"https://app.telos.net/testnet/developers"
		],
		"explorers": [],
		"infoURL": "https://telos.net"
	},
	{
		"slug": "teslafunds",
		"name": "Teslafunds",
		"chainId": 1856,
		"shortName": "tsf",
		"chain": "TSF",
		"network": "mainnet",
		"networkId": 1,
		"nativeCurrency": {
			"name": "Teslafunds Ether",
			"symbol": "TSF",
			"decimals": 18
		},
		"rpc": [
			"https://tsfapi.europool.me"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://teslafunds.io"
	},
	{
		"slug": "thaichain",
		"name": "ThaiChain",
		"chainId": 7,
		"shortName": "tch",
		"chain": "TCH",
		"network": "mainnet",
		"networkId": 7,
		"nativeCurrency": {
			"name": "ThaiChain Ether",
			"symbol": "TCH",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.dome.cloud"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://thaichain.io"
	},
	{
		"slug": "thaifi",
		"name": "ThaiChain 2.0 ThaiFi",
		"chainId": 17,
		"shortName": "tfi",
		"chain": "TCH",
		"network": "thaifi",
		"networkId": 17,
		"nativeCurrency": {
			"name": "Thaifi Ether",
			"symbol": "TFI",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.thaifi.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://exp.thaifi.com"
	},
	{
		"slug": "theta",
		"name": "Theta",
		"chainId": 361,
		"shortName": "theta-mainnet",
		"chain": "Theta",
		"network": "mainnet",
		"networkId": 361,
		"nativeCurrency": {
			"name": "Theta Fuel",
			"symbol": "TFUEL",
			"decimals": 18
		},
		"rpc": [
			"https://eth-rpc-api.thetatoken.org/rpc"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "Theta Mainnet Explorer",
				"url": "https://explorer.thetatoken.org",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.thetatoken.org/"
	},
	{
		"slug": "theta-amber",
		"name": "Theta Amber Testnet",
		"chainId": 364,
		"shortName": "theta-amber",
		"chain": "Theta",
		"network": "testnet_amber",
		"networkId": 364,
		"nativeCurrency": {
			"name": "Theta Fuel",
			"symbol": "TFUEL",
			"decimals": 18
		},
		"rpc": [
			"https://eth-rpc-api-amber.thetatoken.org/rpc"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "Theta Amber Testnet Explorer",
				"url": "https://guardian-testnet-amber-explorer.thetatoken.org",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.thetatoken.org/"
	},
	{
		"slug": "theta-sapphire",
		"name": "Theta Sapphire Testnet",
		"chainId": 363,
		"shortName": "theta-sapphire",
		"chain": "Theta",
		"network": "testnet_sapphire",
		"networkId": 363,
		"nativeCurrency": {
			"name": "Theta Fuel",
			"symbol": "TFUEL",
			"decimals": 18
		},
		"rpc": [
			"https://eth-rpc-api-sapphire.thetatoken.org/rpc"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "Theta Sapphire Testnet Explorer",
				"url": "https://guardian-testnet-sapphire-explorer.thetatoken.org",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.thetatoken.org/"
	},
	{
		"slug": "theta-testnet",
		"name": "Theta Testnet",
		"chainId": 365,
		"shortName": "theta-testnet",
		"chain": "Theta",
		"network": "testnet",
		"networkId": 365,
		"nativeCurrency": {
			"name": "Theta Fuel",
			"symbol": "TFUEL",
			"decimals": 18
		},
		"rpc": [
			"https://eth-rpc-api-testnet.thetatoken.org/rpc"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "Theta Testnet Explorer",
				"url": "https://testnet-explorer.thetatoken.org",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://www.thetatoken.org/"
	},
	{
		"slug": "thundercore",
		"name": "ThunderCore",
		"chainId": 108,
		"shortName": "TT",
		"chain": "TT",
		"network": "mainnet",
		"networkId": 108,
		"nativeCurrency": {
			"name": "ThunderCore Mainnet Ether",
			"symbol": "TT",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet-rpc.thundercore.com"
		],
		"faucets": [
			"https://faucet.thundercore.com"
		],
		"explorers": [],
		"infoURL": "https://thundercore.com"
	},
	{
		"slug": "thundercore-testnet",
		"name": "ThunderCore Testnet",
		"chainId": 18,
		"shortName": "TST",
		"chain": "TST",
		"network": "testnet",
		"networkId": 18,
		"nativeCurrency": {
			"name": "ThunderCore Testnet Ether",
			"symbol": "TST",
			"decimals": 18
		},
		"rpc": [
			"https://testnet-rpc.thundercore.com"
		],
		"faucets": [
			"https://faucet-testnet.thundercore.com"
		],
		"explorers": [],
		"infoURL": "https://thundercore.com"
	},
	{
		"slug": "tomochain",
		"name": "TomoChain",
		"chainId": 88,
		"shortName": "tomo",
		"chain": "TOMO",
		"network": "mainnet",
		"networkId": 88,
		"nativeCurrency": {
			"name": "TomoChain Ether",
			"symbol": "TOMO",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.tomochain.com"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://tomocoin.io"
	},
	{
		"slug": "tool-global",
		"name": "TOOL Global",
		"chainId": 8723,
		"slip44": 479,
		"shortName": "olo",
		"chain": "OLO",
		"network": "mainnet",
		"networkId": 8723,
		"nativeCurrency": {
			"name": "TOOL Global",
			"symbol": "OLO",
			"decimals": 18
		},
		"rpc": [
			"https://mainnet-web3.wolot.io"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "OLO Block Explorer",
				"url": "https://www.olo.network",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://ibdt.io"
	},
	{
		"slug": "tool-global-testnet",
		"name": "TOOL Global Testnet",
		"chainId": 8724,
		"slip44": 479,
		"shortName": "tolo",
		"chain": "OLO",
		"network": "testnet",
		"networkId": 8724,
		"nativeCurrency": {
			"name": "TOOL Global",
			"symbol": "OLO",
			"decimals": 18
		},
		"rpc": [
			"https://testnet-web3.wolot.io"
		],
		"faucets": [
			"https://testnet-explorer.wolot.io"
		],
		"explorers": [],
		"infoURL": "https://testnet-explorer.wolot.io"
	},
	{
		"slug": "ubiq",
		"name": "Ubiq",
		"chainId": 8,
		"slip44": 108,
		"shortName": "ubq",
		"chain": "UBQ",
		"network": "mainnet",
		"networkId": 88,
		"nativeCurrency": {
			"name": "Ubiq Ether",
			"symbol": "UBQ",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.octano.dev",
			"https://pyrus2.ubiqscan.io"
		],
		"faucets": [],
		"explorers": [
			{
				"name": "ubiqscan",
				"url": "https://ubiqscan.io",
				"standard": "EIP3091"
			}
		],
		"infoURL": "https://ubiqsmart.com"
	},
	{
		"slug": "ubiq-testnet",
		"name": "Ubiq Testnet",
		"chainId": 9,
		"shortName": "tubq",
		"chain": "UBQ",
		"network": "mainnet",
		"networkId": 2,
		"nativeCurrency": {
			"name": "Ubiq Testnet Ether",
			"symbol": "TUBQ",
			"decimals": 18
		},
		"rpc": [],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://ethersocial.org"
	},
	{
		"slug": "valorbit",
		"name": "Valorbit",
		"chainId": 38,
		"slip44": 538,
		"shortName": "val",
		"chain": "VAL",
		"network": "mainnet",
		"networkId": 38,
		"nativeCurrency": {
			"name": "Valorbit",
			"symbol": "VAL",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.valorbit.com/v2"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://valorbit.com"
	},
	{
		"slug": "wanchain",
		"name": "Wanchain",
		"chainId": 888,
		"slip44": 5718350,
		"shortName": "wan",
		"chain": "WAN",
		"network": "mainnet",
		"networkId": 888,
		"nativeCurrency": {
			"name": "Wancoin",
			"symbol": "WAN",
			"decimals": 18
		},
		"rpc": [
			"https://gwan-ssl.wandevs.org:56891/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://www.wanscan.org"
	},
	{
		"slug": "wanchain-testnet",
		"name": "Wanchain Testnet",
		"chainId": 999,
		"shortName": "twan",
		"chain": "WAN",
		"network": "testnet",
		"networkId": 999,
		"nativeCurrency": {
			"name": "Wancoin",
			"symbol": "WAN",
			"decimals": 18
		},
		"rpc": [
			"https://gwan-ssl.wandevs.org:46891/"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://testnet.wanscan.org"
	},
	{
		"slug": "web3games-testnet",
		"name": "Web3Games Testnet",
		"chainId": 102,
		"shortName": "w3g",
		"chain": "Web3Games",
		"network": "testnet",
		"networkId": 102,
		"nativeCurrency": {
			"name": "Web3Games",
			"symbol": "W3G",
			"decimals": 18
		},
		"rpc": [
			"https://substrate.org.cn"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://web3games.org/"
	},
	{
		"slug": "webchain",
		"name": "Webchain",
		"chainId": 24484,
		"shortName": "web",
		"chain": "WEB",
		"network": "mainnet",
		"networkId": 37129,
		"nativeCurrency": {
			"name": "Webchain Ether",
			"symbol": "WEB",
			"decimals": 18
		},
		"rpc": [
			"https://node1.webchain.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://webchain.network"
	},
	{
		"slug": "wegochain",
		"name": "Wegochain Rubidium",
		"chainId": 5869,
		"shortName": "rbd",
		"chain": "RBD",
		"network": "mainnet",
		"networkId": 5869,
		"nativeCurrency": {
			"name": "Rubid",
			"symbol": "RBD",
			"decimals": 18
		},
		"rpc": [
			"https://proxy.wegochain.io",
			"http://wallet.wegochain.io:7764"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "http://wegochain.io"
	},
	{
		"slug": "gnosis",
		"name": "Gnosis Chain",
		"chainId": 100,
		"slip44": 700,
		"shortName": "gno",
		"chain": "Gnosis",
		"network": "mainnet",
		"networkId": 100,
		"nativeCurrency": {
			"name": "xDAI",
			"symbol": "xDAI",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.gnosischain.com",
			"https://xdai.poanetwork.dev",
			"https://dai.poa.network",
			"https://rpc.ankr.com/gnosis",
			"https://gnosischain-rpc.gateway.pokt.network",
			"wss://rpc.gnosischain.com/wss",
			"wss://xdai.poanetwork.dev/wss",
			"ws://xdai.poanetwork.dev:8546"
		],
		"faucets": [
			"https://faucet.gimlu.com/gnosis",
			"https://stakely.io/faucet/gnosis-chain-xdai",
			"https://faucet.prussia.dev/xdai"
		],
		"explorers": [{
			"name": "blockscout",
			"url": "https://blockscout.com/xdai/mainnet",
			"icon": "blockscout",
			"standard": "EIP3091"
		}],
		"infoURL": "https://developers.gnosischain.com",
	},
	{
		"slug": "xerom",
		"name": "Xerom",
		"chainId": 1313500,
		"shortName": "xero",
		"chain": "XERO",
		"network": "mainnet",
		"networkId": 1313500,
		"nativeCurrency": {
			"name": "Xerom Ether",
			"symbol": "XERO",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.xerom.org"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://xerom.org"
	},
	{
		"slug": "xinfin",
		"name": "XinFin",
		"chainId": 50,
		"shortName": "xdc",
		"chain": "XDC",
		"network": "mainnet",
		"networkId": 50,
		"nativeCurrency": {
			"name": "XinFin",
			"symbol": "XDC",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.xinfin.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://xinfin.org"
	},
	{
		"slug": "xinfin-apothem",
		"name": "XinFin Apothem Testnet",
		"chainId": 51,
		"shortName": "TXDC",
		"chain": "TXDC",
		"network": "testnet",
		"networkId": 51,
		"nativeCurrency": {
			"name": "XinFinTest",
			"symbol": "TXDC",
			"decimals": 18
		},
		"rpc": [
			"https://rpc.apothem.network"
		],
		"faucets": [],
		"explorers": [],
		"infoURL": "https://xinfin.org"
	}
]

export const networksByChainID: Record<Ethereum.ChainID, Ethereum.Network> = {}
for(const network of networks)
	networksByChainID[network.chainId] = network

export const networksBySlug: Record<string, Ethereum.Network> = {}
for(const network of networks)
	networksBySlug[network.slug] = network

export const networksBySlip44: Record<number, Ethereum.Network> = {}
for(const network of networks)
	if(network.slip44)
		networksBySlip44[network.slip44] = network


const testnetSlugsForMainnetSlugs = {
	'ethereum': [
		'ethereum-kovan',
		'ethereum-rinkeby',
		'ethereum-ropsten',
		'ethereum-goerli',
	],
	'polygon': [
		'polygon-mumbai',
	],
	'arbitrum-one': [
		'arbitrum-rinkeby',
	],
	'optimism': [
		'optimistic-goerli',
		'optimistic-kovan',
	],
	'avalanche': [
		'avalanche-fuji',
	],
	'bsc': [
		'bsc-testnet',
	],
	'celo': [
		'celo-alfajores',
		'celo-baklava',
	],
	// 'nahmii': [
	// 	'nahmii-testnet',
	// ],
	// 'metis': [
	// 	'metis-stardust',
	// ],
	// 'reef': [
	// 	'reef-testnet',
	// ],
	// 'skale': [
	// 	'skale-testnet',
	// ],
	// 'aurora': [
	// 	'aurora-testnet',
	// ],
	// 'nervos': [
	// 	'nervos-godwoken',
	// ],
}

export const testnetsForMainnets = Object.fromEntries<Ethereum.Network[]>(
	Object.entries(testnetSlugsForMainnetSlugs).map(([mainnetSlug, testnetSlugs]) =>
		[mainnetSlug, testnetSlugs.map(slug => networksBySlug[slug])]
	)
)

export const mainnetForTestnet = Object.fromEntries(
	Object.entries(testnetSlugsForMainnetSlugs).flatMap(([mainnetSlug, testnetSlugs]) =>
		testnetSlugs.map(slug => [slug, networksBySlug[mainnetSlug]])
	)
)

export const testnetNetworks = Object.values(testnetsForMainnets).flat()

export function isTestnet(network: Ethereum.Network){
	return network.network?.includes('test')
		|| network.slug?.includes('testnet')
		|| network.name?.toLowerCase().includes('testnet')
		|| testnetNetworks.includes(network)
}


export const availableNetworks = [1, 137, 43114, 56, 250].map(chainID => networksByChainID[chainID])


export const ethereumAndL2Networks = [
	'ethereum',
	'polygon',
	'arbitrum-one',
	'optimism',
	'gnosis',
	// 'skale-testnet',
	// 'arbitrum-xdai',
	// 'metis',
	// 'oasis-paratime',
].map(slug => networksBySlug[slug])

export const evmL1Networks = [
	'avalanche',
	'bsc',
	'celo',
	// 'fantom',
].map(slug => networksBySlug[slug])

export const otherNetworks = networks.filter(network =>
	!ethereumAndL2Networks.includes(network)
	&& !evmL1Networks.includes(network)
	&& !Object.values(testnetsForMainnets).some(testnetNetworks => testnetNetworks.includes(network))
)

export const networksBySection = [
	{
		title: 'Ethereum + Layer-Two Networks',
		networks: ethereumAndL2Networks,
		isFeatured: true,
	},
	{
		title: 'EVM-Based Layer-One Networks',
		networks: evmL1Networks,
		isFeatured: true,
	},
	{
		title: 'Other Networks',
		networks: otherNetworks,
		isFeatured: false,
	},
]


export const networkColors = {
	'arbitrum-one': '#28a0f0',
	'aurora': '#92D36F',
	'avalanche': '#f9273c',
	'bsc': '#FCD535',
	'celo': '#35D07F', // #fbcc5c
	'ethereum': '#627eea',
	'fantom': '#1969ff',
	'gnosis': '#04795B',
	'harmony': '#00AEE9',
	'metis': '#00dacd',
	'nahmii': '#E952AC',
	'nervos': '#3CC68A',
	'optimism': '#f01a37',
	'polygon': '#8248e5',
	'reef': '#962EE5',
	'skale': '#393939',
}

export const getNetworkColor = network =>
	networkColors[network.slug] ?? networkColors[mainnetForTestnet[network.slug]?.slug] ?? ''


export function getNetworkRPC(network: Ethereum.Network){
	return network.rpc[0]?.replace('${env.INFURA_PROJECT_ID}', env.INFURA_PROJECT_ID) ?? ''
}
