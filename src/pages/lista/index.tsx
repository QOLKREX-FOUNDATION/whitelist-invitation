import type { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import { Container } from "../../components";
import { List } from "../../components/List/List";
import { Web3Context } from "../../contexts/Web3/Web3Context";
import { getRecordAllReferred } from "../../utils/participants";

export interface ListState {
	nickName: string;
	publicAddress: string;
	count: number;
	msg?: string;
	reward?: string;
	chilcano: number;
}

const WhitelistPage: NextPage = () => {
	const { web3 } = useContext(Web3Context);
	const [list, setList] = useState<ListState[]>([]);
	useEffect(() => {
		getRecordAllReferred(web3.authToken).then((response) => {
			if (response.ok) setList(response.participants);
		});
		if (!!web3.authToken) {
			const interval = setInterval(() => {
				getRecordAllReferred(web3.authToken).then((response) => {
					if (response.ok) setList(response.participants);
				});
			}, 5000);
			return () => clearInterval(interval);
		}
	}, [web3.authToken]);

	if (!web3.authToken) return <></>;

	return (
		<>
			<Head>
				<title>WhiteLisk</title>
				<meta name="description" content="Obten tu NFT" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<Container overflow={"auto"}>
				<List list={list} />
			</Container>
		</>
	);
};

export default WhitelistPage;
