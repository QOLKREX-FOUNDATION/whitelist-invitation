import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3Provider } from '../contexts/Web3/Web3Provider';
import { PreloaderProvider } from '../contexts/Preloader/PreloaderProvider';

declare global {
	interface Window {
		ethereum: any;
	}
}


function MyApp({ Component, pageProps }: AppProps) {
	return <Web3Provider>
		<PreloaderProvider>
			<Component {...pageProps} />
		</PreloaderProvider>
	</Web3Provider>
}

export default MyApp
