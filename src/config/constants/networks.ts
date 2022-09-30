export const NETWORKS = {
	mainnet: {
		chainId: `0x${Number(42220).toString(16)}`,
		chainName: "Celo",
		nativeCurrency: {
			name: "Celo",
			symbol: "CELO",
			decimals: 18,
		},
		rpcUrls: ["https://forno.celo.org"],
		blockExplorerUrls: ["https://explorer.celo.org"],
		iconUrls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png"],
	},
	testnet: {
		chainId: `0x${Number(42220).toString(16)}`,
		chainName: "Celo",
		nativeCurrency: {
			name: "CELO",
			symbol: "CELO",
			decimals: 18,
		},
		rpcUrls: ["https://forno.celo.org"],
		blockExplorerUrls: ["https://explorer.celo.org"],
		iconUrls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png"],
	},
};

export const WEB3_NETWORK_MAINNET =
	"https://moonriver.api.onfinality.io/rpc?apikey=4cc1072b-afe8-4d8d-b11b-53b298e6e6bc";
export const WEB3_NETWORK_TESTNET =
	"https://moonbeam-alpha.api.onfinality.io/rpc?apikey=4cc1072b-afe8-4d8d-b11b-53b298e6e6bc";

export const WEB3_NETWORKWAR_MAINNET =
	"https://moonriver.blastapi.io/f2852ea6-ff68-4a6b-a159-0c870b206601";

export const CHAIN_ID_MAINNET = `0x${Number(42220).toString(16)}`;
export const CHAIN_ID_TESTNET = `0x${Number(42220).toString(16)}`;

export interface INativeCurrency {
	name: string;
	symbol: string;
	decimals: number;
}
export interface INetwork {
	chainId: string;
	chainName: string;
	nativeCurrency: INativeCurrency;
	rpcUrls: string[];
	blockExplorerUrls: string[];
	iconUrls: string[];
}

export interface INetworks {
	mainnet: INetwork;
	testnet: INetwork;
}
