import { ReactElement } from "react";
import { PreloaderProvider } from "./contexts/Preloader/PreloaderProvider";
import { Web3Provider } from "./contexts/Web3/Web3Provider";
import { ReactNode } from "react";

interface Props {
	children: ReactElement | JSX.Element | JSX.Element[];
}

export const Providers = ({ children }: Props) => {
	return (
		<Web3Provider>
			<PreloaderProvider>{children}</PreloaderProvider>
		</Web3Provider>
	);
};
