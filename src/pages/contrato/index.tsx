import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";
import Swal from "sweetalert2";
import Web3 from "web3";
import { Container, Input, MyButton } from "../../components";
import { Web3Context } from "../../contexts/Web3/Web3Context";
import { save } from "../../utils/contract";
import { getRecordAllReferred } from "../../utils/participants";
import { toChecksumAddress } from "../../utils/toChecksumAddress";
import { PreloaderContext } from "../../contexts/Preloader/PreloaderContext";

const ContratoPage: NextPage = () => {
	const router = useRouter();
	const { web3 } = useContext(Web3Context);
	const utils = new Web3();
	const { handlePreloader } = useContext(PreloaderContext);

	const [contract, setContract] = useState("");
	const [participantes, setParticipantes] = useState("");

	const handleForm = (e: FormEvent) => {
		e.preventDefault();
		handlePreloader(true);
		save(contract, web3.authToken)
			.then((response) => {
				if (response.ok) {
					Swal.fire(
						"Actualizado",
						"Contrado configurado correctamente",
						"success"
					);
					setTimeout(() => {
						router.push("/lista");
					}, 1500);
				} else {
					Swal.fire(
						"Error",
						"No se pudo configurar el Contrato con la aplicación",
						"error"
					);
				}
				handlePreloader(false);
			})
			.catch(() => {
				Swal.fire(
					"Error",
					"No se pudo configurar el Contrato con la aplicación",
					"error"
				);
				handlePreloader(false);
			});
	};

	const handleRecords = () => {
		if (!!web3.authToken) {
			getRecordAllReferred(web3.authToken).then((response) => {
				if (response.ok) {
					const data: string[] = [];
					for (const participant of response.participants) {
						data.push(
							`"${toChecksumAddress(utils, participant.publicAddress)}"`
						);
					}
					setParticipantes(`[${data.join(",")}]`);
				}
			});
		}
	};

	if (!web3.authToken) return <></>;

	return (
		<>
			<Head>
				<title>Contrato</title>
				<meta name="description" content="Obten tu NFT" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Container overflow={"auto"}>
				<div>
					<form onSubmit={handleForm}>
						<h1>Configurar Contrato con la Aplicación</h1>
						<div>
							<Input
								name="contract"
								value={contract}
								handleChangeForm={({ target }: any) =>
									setContract(target.value)
								}
								placeHolder="0x0C7efdfc95F5aeaDdbaCbf8c29eA862317809b63"
								required
							/>
						</div>
						<br />
						<MyButton type="submit">Guardar</MyButton>
					</form>

					<div style={{ marginTop: "5rem" }}>
						<MyButton onClick={handleRecords}>Obtener Participantes</MyButton>

						<textarea
							style={{
								width: "100%",
								minHeight: "10rem",
							}}
							value={participantes}
							onChange={() => setParticipantes(participantes)}
						/>
					</div>
				</div>
			</Container>
		</>
	);
};

export default ContratoPage;
