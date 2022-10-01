import { CHAIN_ID_MAINNET, CHAIN_ID_TESTNET } from "./constants/networks";

/**
 * @ENTORNO
 */
export const PRODUCTION = true;

/**
 * @NETWORKS
 * @BLOCKCHAIN
 */
export const CHAIN_ID = PRODUCTION ? CHAIN_ID_MAINNET : CHAIN_ID_TESTNET;

export const NETWORK_MAINNET = PRODUCTION ? "mainnet" : "testnet";

export const api = PRODUCTION
	? "http://api1.cryptoblockperu.qolkrex.foundation/api/participants"
	: "http://localhost:4000/api/participants";

export const linkReferred = PRODUCTION
	? "https://cryptoblockperu.qolkrex.foundation?referred="
	: "http://localhost:3000?referred=";
