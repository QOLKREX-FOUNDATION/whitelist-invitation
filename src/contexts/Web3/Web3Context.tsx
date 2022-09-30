import { createContext } from "react";
import { Web3ContextProps } from "./interfaces";

const INIT = {
	web3: null,
	handleWeb3: null,
	handleAccount: null,
	handleChainId: null,
	handleToken:null
};

export const Web3Context = createContext<Web3ContextProps>(INIT);
