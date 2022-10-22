import { FormEvent, useState } from "react";
import Swal from "sweetalert2";
import { getWinners, pickWinner } from "../utils/lotery";
import { setRewardFetch } from "../utils/participants";

interface ISortear {
	e: FormEvent;
	web3: any;
	handlePreloader: any;
	setOpen: any;
	token: string;
}

export const useLotery = () => {
	const [reward, setReward] = useState("");
	const [contract, setContract] = useState("");

	const sortear = ({ e, web3, handlePreloader, setOpen, token }: ISortear) => {
		e.preventDefault();
		handlePreloader(true);
		pickWinner(web3.wallet, web3.account, reward, contract)
			.then((response: any) => {
				if (response?.transactionHash) {
					getWinners(web3.wallet, contract).then((winners) => {
						setRewardFetch(
							String(winners[0][winners[0].length - 1]).toUpperCase(),
							reward,
							token
						).then((participant: any) => {
							setReward("");
							Swal.fire(
								"GANADOR",
								`El Ganador de ${reward} es ${participant.nickName} `,
								"success"
							);
							setOpen(false);
							handlePreloader(false);
						});
					});
				} else {
					handlePreloader(false);
					setOpen(false);

					Swal.fire("Error ", "No pudo generarse un ganador", "error");
				}
			})
			.catch((e) => {
				Swal.fire("Error", "No pudo generarse un ganador", "error");
				handlePreloader(false);
				setOpen(false);
			});
	};

	return {
		contract,
		reward,
		setContract,
		setReward,
		sortear,
	};
};
