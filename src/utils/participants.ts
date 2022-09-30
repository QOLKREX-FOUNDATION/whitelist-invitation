import Swal from "sweetalert2";

const api = "http://localhost:4000/api/participants";
const linkReferred = "http://localhost:3000?referred=";

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
