import {
	CHAIN_ID_MAINNET,
	CHAIN_ID_TESTNET,
} from "./constants/networks";

/**
 * @ENTORNO
 */
export const PRODUCTION = false;

/**
 * @NETWORKS
 * @BLOCKCHAIN
 */
export const CHAIN_ID = PRODUCTION ? CHAIN_ID_MAINNET : CHAIN_ID_TESTNET;

export const NETWORK_MAINNET = PRODUCTION ? "mainnet" : "testnet";
