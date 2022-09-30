import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { PreloaderContext } from "../contexts/Preloader/PreloaderContext";
import { Web3Context } from "../contexts/Web3/Web3Context";
import { saveParticipants } from "../utils/participants";

interface IUseForm {
	initial: {
		email: string;
		nickName: string;
	};
	queryId: string;
}

export const useForm = ({ initial, queryId }:IUseForm) => {
	const [form, setForm] = useState(initial);

	const [send, setSend] = useState(false);
	const [msg, setMsg] = useState("");
	const { web3 } = useContext(Web3Context);
	const { handlePreloader } = useContext(PreloaderContext);

	const handleChangeForm = ({ target }: any) => {
		setForm({
			...form,
			[target.name]: target.value.trim(),
		});
	};

	const onSubmit = async (e: any) => {
		e.preventDefault();
		if (!!!web3.account) {
			Swal.fire("Error", "No se detecta tu Public Address", "error");
			return;
		}
		handlePreloader(true);
		saveParticipants({
			email: form.email.toUpperCase().trim(),
			nickName: form.nickName.toUpperCase().trim(),
			publicAddress: web3.account.toUpperCase(),
			referred: queryId,
		})
			.then((response) => {
				handlePreloader(false);
				if (response.ok) {
					setSend(true);
					setMsg(response.ref || "");
				} else {
					Swal.fire("Error", response.msg, "error");
				}
			})
			.catch((error) => {
				handlePreloader(false);
				Swal.fire("Error", "Los datos son incorrectos", "error");
			});
	};

	return {
		send,
		msg,
		form,
		handleChangeForm,
		onSubmit,
	};
};
