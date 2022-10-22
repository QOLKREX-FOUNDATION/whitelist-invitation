import { ChangeEvent, FormEvent, useState, useContext } from "react";
import { Input, MyButton } from "../";
import Swal from "sweetalert2";
import { login } from "../../utils/users";
import { Web3Context } from "../../contexts/Web3/Web3Context";
import { useRouter } from "next/router";
import { PreloaderContext } from "../../contexts/Preloader/PreloaderContext";

export const Login = () => {
	const router = useRouter();
	const { web3, handleToken } = useContext(Web3Context);
	const { handlePreloader } = useContext(PreloaderContext);

	const [form, setForm] = useState({
		username: "",
		password: "",
	});

	const reset = () => {
		setForm({
			username: "",
			password: "",
		});
	};

	const handleChangeForm = ({ target }: ChangeEvent<HTMLInputElement>) => {
		setForm((f) => ({ ...f, [target.name]: target.value }));
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		handlePreloader(true);
		login(form.username.toUpperCase(), form.password)
			.then((response: any) => {
				if (response.ok) {
					handleToken(response.token, 86000);
					sessionStorage.setItem("token", response.token);
					sessionStorage.setItem("authToken", "86000");
					router.push("/lista");
				} else {
					Swal.fire("Error", "Los datos son incorrectos", "error");
				}
				handlePreloader(false);
				reset();
			})
			.catch((e: any) => {
				Swal.fire("Error", "Los datos son incorrectos", "error");
				handlePreloader(true);
				reset();
			});
	};

	if (web3.authToken) router.push("lista");

	return (
		<div
			style={{
				marginTop: "30%",
			}}
		>
			<h1> Ingresar al WhiteList </h1>
			<form onSubmit={onSubmit} style={{ position: "relative" }}>
				<Input
					type="text"
					value={form.username}
					name="username"
					handleChangeForm={handleChangeForm}
					placeHolder="USERNAME"
					required
				/>
				<Input
					type="password"
					value={form.password}
					name="password"
					handleChangeForm={handleChangeForm}
					placeHolder="PASSWORD"
					required
				/>
				<MyButton type="submit" filter="150%">
					Ingresar
				</MyButton>
			</form>
		</div>
	);
};
