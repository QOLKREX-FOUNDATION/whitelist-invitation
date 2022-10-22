import Swal from "sweetalert2";
import { api, linkReferred } from "../config";

export const getCount = async () => {
	const content = await fetch(`${api}/participants`);
	const response = await content.json();
	return response.count;
};

export const getRecordRef = async (publicAddress: string) => {
	try {
		const content = await fetch(
			`${api}/participants/referred/${publicAddress}`
		);
		const response = await content.json();
		return { ...response, ref: `${linkReferred}${response.participant._id}` };
	} catch (error) {}
};

export const getRecordAll = async (token: string) => {
	try {
		const content = await fetch(`${api}/participants/all`, {
			headers: {
				"x-token": token,
			},
		});
		const response = await content.json();
		return response;
	} catch (error) {}
};

export const getRecordAllReferred = async (token: string) => {
	try {
		const content = await fetch(`${api}/participants/all/referred`, {
			headers: {
				"x-token": token,
			},
		});
		const response = await content.json();
		return response;
	} catch (error) {}
};

export const saveParticipants = async ({
	email = "",
	nickName = "",
	publicAddress = "",
	referred = "",
}) => {
	const data =
		referred != ""
			? { email, publicAddress, nickName, referred }
			: { email, publicAddress, nickName };

	try {
		const content = await fetch(`${api}/participants/`, {
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});
		const response = await content.json();
		return { ...response, ref: `${linkReferred}${response.participant._id}` };
	} catch (error) {
		Swal.fire("Error", "Los datos son incorrectos", "error");
	}
};

export const updateChilcano = async (publicAddress: string, token: string) => {
	try {
		const content = await fetch(`${api}/participants/round`, {
			body: JSON.stringify({ publicAddress }),
			headers: {
				"Content-Type": "application/json",
				"x-token": token,
			},
			method: "POST",
		});
		const response = await content.json();
		return response;
	} catch (error) {
		Swal.fire("Error", "Los datos son incorrectos", "error");
	}
};

export const setRewardFetch = async (
	publicAddress: string,
	reward: string,
	token: string
) => {
	try {
		const content = await fetch(`${api}/participants/reward`, {
			body: JSON.stringify({ publicAddress, reward }),
			headers: {
				"Content-Type": "application/json",
				"x-token": token,
			},
			method: "POST",
		});
		const response = await content.json();
		return response;
	} catch (error) {
		Swal.fire("Error", "Los datos son incorrectos", "error");
	}
};
