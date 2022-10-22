import classes from "./body.module.css";
import { Content, Navbar, Footer, WFinalizad, WhiteList } from "../";
import { IBody } from "./IBody";
import { useEffect, useState } from "react";
import { getCount } from "../../utils/participants";

export const Body = ({ queryId }: IBody) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		getCount().then((response) => setCount(response));
	}, []);

	return (
		<>
			<Navbar />
			<div className={classes.content}>
				<div className={classes.overlay2} />
				{count === 200 ? (
					<WFinalizad count={count} />
				) : (
					<>
						<Content count={count} />
						<WhiteList queryId={queryId} />
					</>
				)}
			</div>
			<Footer />
		</>
	);
};
