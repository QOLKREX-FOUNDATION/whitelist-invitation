import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { QrReader } from "react-qr-reader";
import { PreloaderContext } from "../../contexts/Preloader/PreloaderContext";
import { updateChilcano } from "../../utils/participants";
import { Web3Context } from "../../contexts/Web3/Web3Context";
import { Container, MyButton } from "../../components";
import Swal from "sweetalert2";

export interface ListState {
	nickName: string;
	email: string;
	publicAddress: string;
	count: number;
	status?: string;
	chilcano: number;
}

const QrPage: NextPage = () => {
	const { web3 } = useContext(Web3Context);
	const { handlePreloader } = useContext(PreloaderContext);
	const [loading, setLoading] = useState(true);

	const handleQr = (publicAddress: string) => {
		setLoading(true);
		handlePreloader(true);
		updateChilcano(publicAddress.toUpperCase(), web3.authToken)
			.then((response: any) => {
				if (response?.ok) {
					Swal.fire("Escaneado", response.msg, "success");
				} else {
					Swal.fire("Escaneado", response.msg, "error");
				}
				handlePreloader(false);
			})
			.catch((e) => {
				Swal.fire(
					"Escaneado",
					"No se pudo verificar tu Public Address",
					"error"
				);

				handlePreloader(false);
			});
	};

	if (!web3.authToken) return <></>;

	return (
		<>
			<Head>
				<title>WhiteLisk</title>
				<meta name="description" content="Obten tu NFT" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<div style={{ margin: "auto", width: "100%", padding: 0 }}>
				{loading ? (
					<Container>
						<div
							style={{ display: "flex", alignItems: "center", height: "100vh" }}
						>
							<MyButton onClick={() => setLoading(false)}>Escanear</MyButton>
						</div>
					</Container>
				) : (
					<QrReader
						className="sin-margin"
						constraints={{ facingMode: "environment" }}
						onResult={(result: any, error) => {
							if (!!result && !loading) {
								handleQr(result?.text);
							}
						}}
						containerStyle={{
							padding: 0,
							margin: 0,
						}}
					/>
				)}
			</div>
		</>
	);
};

export default QrPage;
