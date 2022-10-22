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
		chainId: `0x${Number(1287).toString(16)}`,
		chainName: "Moombeam Alpha",
		nativeCurrency: {
			name: "DEV",
			symbol: "DEV",
			decimals: 18,
		},
		rpcUrls: ["https://rpc.api.moonbase.moonbeam.network"],
		blockExplorerUrls: ["https://moonbase.moonscan.io"],
	},
};


export const CHAIN_ID_MAINNET = `0x${Number(42220).toString(16)}`;
export const CHAIN_ID_TESTNET = `0x${Number(1287).toString(16)}`;

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
