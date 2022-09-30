export interface IProps {
	children: JSX.Element | JSX.Element[] 
}

export interface IWeb3 {
	account?: string,
    network?: any,
	wallet?: any,
	provider?: any,
	providerString?: string,
	chainId?: any,
}



export type Web3ContextProps = {
	web3: any;
	handleWeb3: any;
	handleAccount: any;
	handleChainId: any;
	handleToken:any;
};
