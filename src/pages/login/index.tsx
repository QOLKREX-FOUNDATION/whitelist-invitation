import type { NextPage } from "next";
import Head from "next/head";
import { Container, Login } from "../../components";

const LoginPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>Login</title>
				<meta name="description" content="Obten tu NFT" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Container>
				<Login />
			</Container>
		</>
	);
};

export default LoginPage;
