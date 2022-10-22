import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { Web3Context } from "../../contexts/Web3/Web3Context";
import { PreloaderContext } from "../../contexts/Preloader/PreloaderContext";
import { ListState } from "../../pages/lista";
import { Input, MyButton, Informative, ButtonConnect } from "../";
import { useLotery } from "../../hooks/useLotery";
import { getRecord } from "../../utils/contract";
import classes from "./list.module.css";

interface ListProps {
	list: ListState[];
}

export const List = ({ list }: ListProps) => {
	const { web3 } = useContext(Web3Context);
	const { handlePreloader } = useContext(PreloaderContext);
	const [open, setOpen] = useState(false);
	const { contract, reward, setContract, setReward, sortear } = useLotery();

	useEffect(() => {
		getRecord().then((response: any) => {
			setContract(response?.contract.address || "");
		});
	}, []);

	return (
		<div
			style={{
				alignItems: "center",
				gap: "2rem",
				width: "100%",
			}}
		>
			<div className={classes.title}>
				<h1> Participantes </h1>
				<div>
					<ButtonConnect>
						{contract != "" ? (
							<MyButton onClick={() => setOpen(true)}>Sortear</MyButton>
						) : (
							<Link href="/contrato">
								<MyButton>Configurar Contrato</MyButton>
							</Link>
						)}
					</ButtonConnect>
				</div>
			</div>

			<div className={classes.container} style={{ width: "100%" }}>
				<div>
					<table className={classes.table} border={0}>
						<thead>
							<tr>
								<th>Public Address</th>
								<th>Avatar</th>
								<th>Estado</th>
								<th>Referidos</th>
								<th>Rondas</th>
								<th>Sorteo</th>
							</tr>
						</thead>
						<tbody>
							{list.map((item) => (
								<tr key={item.nickName}>
									<td>{item.publicAddress}</td>
									<td>{item.nickName}</td>
									<td
										className={`
										${classes.status} 
										${item?.msg === "Sin Rondas Adicionales" && classes.statusN}  ${
											item?.msg === "Rondas Adicionales" && classes.statusS
										} `}
									>
										{item.msg}
										{item.count - item.chilcano > 0
											? `: ${item.count - item.chilcano}`
											: ""}
									</td>
									<td>{item.count}</td>
									<td>{item.chilcano ?? 0}</td>
									<td
										className={`
									${classes.status} 
									${item?.reward ? classes.statusR : ""} `}
									>
										{item?.reward ? item?.reward : "-"}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
			{open && (
				<Informative handleClose={() => setOpen(false)}>
					<h2 style={{ color: "#222" }}>Sortear Premio Smart Contract</h2>
					<hr />
					<Link href="/contrato">
						<a
							style={{
								color: "red",
								textAlign: "center",
								textDecoration: "underline",
							}}
						>
							<p>Configurar Contrato</p>
						</a>
					</Link>
					<form
						onSubmit={(e) =>
							sortear({
								e,
								web3,
								handlePreloader,
								setOpen,
								token: web3.authToken,
							})
						}
					>
						<div>
							<Input
								name="reward"
								value={reward}
								handleChangeForm={(e: any) =>
									setReward(String(e.target.value).toUpperCase())
								}
								placeHolder="Premio"
								required
							/>
						</div>
						<br />
						<div>
							<MyButton type="submit">Sortear</MyButton>
						</div>
					</form>
				</Informative>
			)}
		</div>
	);
};
