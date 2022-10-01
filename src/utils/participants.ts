import Swal from "sweetalert2";
import { api, linkReferred } from "../config";

export const getCount = async () => {
	const content = await fetch(`${api}/`);
	const response = await content.json();
	return response.count;
};

export const getRecordRef = async (publicAddress: string) => {
	try {
		const content = await fetch(`${api}/referred/${publicAddress}`);
		const response = await content.json();
		return { ...response, ref: `${linkReferred}${response.participant._id}` };
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
		const content = await fetch(`${api}/`, {
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
