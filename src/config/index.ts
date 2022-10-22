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

export const URL = PRODUCTION
? "https://cryptoblockperu.qolkrex.foundation"
: "http://localhost:3000/";

export const api = PRODUCTION
	? "https://api1.cryptoblockperu.qolkrex.foundation/api"
	: "https://apitestnet.qolkrex.foundation/api";

export const linkReferred = PRODUCTION
	? "https://cryptoblockperu.qolkrex.foundation?referred="
	: "http://localhost:3000?referred=";


