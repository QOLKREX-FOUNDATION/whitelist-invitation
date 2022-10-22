import { api } from "../config";

export const login = async (user: string, password: string) => {
	const content = await fetch(`${api}/users/`, {
		body: JSON.stringify({ user, password }),
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
	});
	const response = await content.json();
	return response;
};
