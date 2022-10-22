import ABI from "../config/abi/lotery.json";
import { toChecksumAddress } from "./toChecksumAddress";

export const pickWinner = async (
	web3: any,
	account: string,
	reward: string,
	lotery: string
) => {
	account = account;
	reward = reward.toUpperCase();
	lotery = toChecksumAddress(web3, lotery);

	try {
		const contract = new web3.eth.Contract(ABI, lotery);
		const response = await contract.methods
			.pickWinner(reward)
			.send({ from: account });
		return response;
	} catch (e) {
		console.log(e);
	}
};

export const getWinners = async (web3: any, lotery: string) => {
	try {
		const contract = new web3.eth.Contract(ABI, lotery);
		const response = await contract.methods.getWinners().call();
		return response;
	} catch (e) {
		console.log(e);
	}
};
