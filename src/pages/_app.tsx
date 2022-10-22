import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Providers } from "../Providers";

declare global {
	interface Window {
		ethereum: any;
	}
}

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Providers>
			<Component {...pageProps} />
		</Providers>
	);
}

export default MyApp;
