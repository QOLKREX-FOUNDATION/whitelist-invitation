import Swal from "sweetalert2";
import { api } from "../config";

export const getRecord = async () => {
	const content = await fetch(`${api}/contracts`);
	const response = await content.json();
	return response;
};

export const save = async (address: string, token: string) => {
	address = address.toUpperCase();
	try {
		const content = await fetch(`${api}/contracts`, {
			body: JSON.stringify({ address }),
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
