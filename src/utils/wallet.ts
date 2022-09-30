import { INetworks, NETWORKS } from "../config/constants/networks";

type TToken = {
	address: string;
	symbol: string;
	decimals: number;
	image: string;
};

export const getAccounts = async (web3: any, handleAccount: any) => {
	try {
		const accounts = await web3.eth.getAccounts();
		handleAccount(accounts[0]);
	} catch (e) {
		return false;
	}
};

export const getChainId = async (web3: any) => await web3.eth.getChainId();

// Funciona solo en Metamask
export const addToken = async (token: TToken) => {
	try {
		await window.ethereum.request({
			method: "wallet_watchAsset",
			params: {
				type: "ERC20",
				options: {
					address: token.address,
					symbol: token.symbol,
					decimals: token.decimals,
					image: token.image,
				},
			},
		});
	} catch (e) {
		console.log(e);
	}
};

// Funciona solo en Metamask
export const changeNetwork = async (
	web3: any,
	handleChainId: any,
	network: string
) => {
	try {
		await web3.currentProvider.request({
			method: "wallet_addEthereumChain",
			params: [
				{
					...NETWORKS[network as keyof INetworks],
				},
			],
		});
		getChainId(web3).then(
			(resolve) =>
				resolve === NETWORKS[network as keyof INetworks].chainId &&
				handleChainId(NETWORKS[network as keyof INetworks].chainId)
		);
		return true;
	} catch (e) {
		console.log(e);
	}
};
