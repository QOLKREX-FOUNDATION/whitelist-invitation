import { useContext } from "react";
import { PreloaderContext } from "../../contexts/Preloader/PreloaderContext";
import Preloader from "../Preloader/Preloader";
import classes from "./container.module.css";

interface ContainerProps {
	children: JSX.Element | JSX.Element[];
	overflow?: string;
}

export const Container = ({
	children,
	overflow = "hidden",
}: ContainerProps) => {
	const { preloader } = useContext(PreloaderContext);

	return (
		<>
			<div className={classes.root} style={{ overflow }}>
				<div className={classes.overlay1} />
				<div className={classes.container}>{children}</div>
			</div>
			{preloader.preloader && <Preloader />}
		</>
	);
};
