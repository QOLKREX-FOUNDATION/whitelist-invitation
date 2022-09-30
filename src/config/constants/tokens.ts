export const TOKEN_ARRAY = ["MOVR","FIRU","USDC","DAI", "BUSD", "USDT", "ETH", "BNB","WBTC","ZLK","vETH", "xcKSM", "xcRMRK", "xcKINT", "xcKAR"];
export interface IToken {
	type: string;
	address: string;
	symbol: string;
	decimals: number;
	image: string;
}
export interface ITokens {
	MOVR: IToken;
	FIRU: IToken;
	USDC: IToken;
	DAI: IToken;
	BUSD: IToken;
	USDT: IToken;
	ETH: IToken;
	BNB: IToken;
	WBTC: IToken;
	ZLK: IToken;
	vETH: IToken;
	xcKSM: IToken;
	xcRMRK: IToken;
	xcKINT: IToken;
	xcKAR: IToken;
}



export const TOKEN_MAINNET = {
	MOVR: {
		type: "crypto",
		address: "0x98878b06940ae243284ca214f92bb71a2b032b8a",
		symbol: "MOVR",
		decimals: 18,
		image: "",
	},
	FIRU: {
		type: "token",
		address: "0x2fbe6b6f1e3e2efc69495f0c380a01c003e47225",
		symbol: "FIRU",
		decimals: 8,
		image:
			"https://raw.githubusercontent.com/zenlinkpro/assets/master/blockchains/moonriver/assets/0x2FBE6b6F1e3e2EFC69495F0c380A01c003e47225/logo.png",
	},
	USDC: {
		type: "token",
		address: "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
		symbol: "USDC",
		decimals: 6,
		image:
			"https://raw.githubusercontent.com/zenlinkpro/assets/master/blockchains/moonriver/assets/0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D/logo.png",
	},
	DAI: {
		type: "token",
		address: "0x80A16016cC4A2E6a2CACA8a4a498b1699fF0f844",
		symbol: "DAI",
		decimals: 18,
		image: "",
	},
	BUSD: {
		type: "token",
		address: "0x5D9ab5522c64E1F6ef5e3627ECCc093f56167818",
		symbol: "BUSD",
		decimals: 18,
		image: "",
	},

	USDT: {
		type: "token",
		address: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
		symbol: "USDT",
		decimals: 6,
		image: "",
	},
	ETH: {
		type: "token",
		address: "0x639A647fbe20b6c8ac19E48E2de44ea792c62c5C",
		symbol: "ETH",
		decimals: 18,
		image: "",
	},
	BNB: {
		type: "token",
		address: "0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c",
		symbol: "BNB",
		decimals: 18,
		image: "",
	},
	WBTC: {
		type: "token",
		address: "0x6aB6d61428fde76768D7b45D8BFeec19c6eF91A8",
		symbol: "WBTC",
		decimals: 8,
		image: "",
	},
	ZLK: {
		type: "token",
		address: "0x0f47ba9d9Bde3442b42175e51d6A367928A1173B",
		symbol: "ZLK",
		decimals: 18,
		image: "",
	},
	vETH: {
		type: "token",
		address: "0x3b25BC1dC591D24d60560d0135D6750A561D4764",
		symbol: "vETH",
		decimals: 18,
		image: "",
	},
	xcKSM: {
		type: "token",
		address: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
		symbol: "xcKSM",
		decimals: 12,
		image: "",
	},
	xcRMRK: {
		type: "token",
		address: "0xffffffFF893264794d9d57E1E0E21E0042aF5A0A",
		symbol: "MOVR",
		decimals: 10,
		image: "",
	},
	xcKINT: {
		type: "token",
		address: "0xfffFFFFF83F4f317d3cbF6EC6250AeC3697b3fF2",
		symbol: "MOVR",
		decimals: 12,
		image: "",
	},
	xcKAR: {
		type: "token",
		address: "0xFfFFFFfF08220AD2E6e157f26eD8bD22A336A0A5",
		symbol: "xcKINT",
		decimals: 12,
		image: "",
	},
};

export const TOKEN_TESTNET = {
	MOVR: {
		type: "crypto",
		address: "0x1436aE0dF0A8663F18c0Ec51d7e2E46591730715",
		symbol: "MOVR",
		decimals: 18,
		image: "",
	},
	FIRU: {
		type: "token",
		address: "0xcBD619e2A77182353dbAe59000275C7c81d6f615",
		symbol: "FIRU",
		decimals: 8,
		image:
			"https://raw.githubusercontent.com/zenlinkpro/assets/master/blockchains/moonriver/assets/0x2FBE6b6F1e3e2EFC69495F0c380A01c003e47225/logo.png",
	},
	USDC: {
		type: "token",
		address: "0x4b5ad0a6bC440F0Fd8a445359d6BB2d921734cdE",
		symbol: "USDC",
		decimals: 18,
		image:
			"https://raw.githubusercontent.com/zenlinkpro/assets/master/blockchains/moonriver/assets/0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D/logo.png",
	},
	DAI: {
		type: "token",
		address: "0x0Ec449159B39e2df3154A0D01cdfB8C1111bDBE8",
		symbol: "DAI",
		decimals: 18,
		image: "",
	},
	BUSD: {
		type: "token",
		address: "0xC4f73f347699f4dd24Cdc353f891940094B88925",
		symbol: "BUSD",
		decimals: 18,
		image: "",
	},
	USDT: {
		type: "token",
		address: "0xBb5fa19E007086f3b9875387960FB1E80E4EF892",
		symbol: "USDT",
		decimals: 6,
		image: "",
	},
	ETH: {
		type: "token",
		address: "0x744eB7c95eCe05B849e84c45A3574e943EeF665B",
		symbol: "ETH",
		decimals: 18,
		image: "",
	},
	BNB: {
		type: "token",
		address: "0xf266a0B8d779d7B756BA288E2315a7eeEB644032",
		symbol: "BNB",
		decimals: 18,
		image: "",
	},
	WBTC: {
		type: "token",
		address: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
		symbol: "WBTC",
		decimals: 0,
		image: "",
	},
	ZLK: {
		type: "token",
		address: "0x744eB7c95eCe05B849e84c45A3574e943EeF665B",
		symbol: "ZLK",
		decimals: 18,
		image: "",
	},
	vETH: {
		type: "token",
		address: "",
		symbol: "vETH",
		decimals: 18,
		image: "",
	},
	xcKSM: {
		type: "token",
		address: "",
		symbol: "xcKSM",
		decimals: 12,
		image: "",
	},
	xcRMRK: {
		type: "token",
		address: "0xFFffffFfd2aaD7f60626608Fa4a5d34768F7892d",
		symbol: "MOVR",
		decimals: 10,
		image: "",
	},
	xcKINT: {
		type: "token",
		address: "",
		symbol: "MOVR",
		decimals: 12,
		image: "",
	},
	xcKAR: {
		type: "token",
		address: "",
		symbol: "xcKINT",
		decimals: 12,
		image: "",
	},
};