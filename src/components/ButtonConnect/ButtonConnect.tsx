import { useContext, useEffect, useState } from 'react';
import { CHAIN_ID, NETWORK_MAINNET } from '../../config';
import { Web3Context } from '../../contexts/Web3/Web3Context';
import { useEventsProvider } from '../../hooks';
import { chainIdValidate, changeNetwork } from '../../utils';
import { Connect } from '../Connect/Connect';
import { MyButton } from '../MyButton/MyButton';
import classes from './MyButton.module.css';

export const ButtonConnect = () => {
    const [open, setOpen] = useState(false);
    const { web3, handleAccount, handleChainId } =
        useContext(Web3Context);

    const { accountsChanged, chainChanged } = useEventsProvider(
        handleAccount,
        handleChainId
    );

    useEffect(() => {
        web3?.provider?.on("accountsChanged", accountsChanged);
        return () =>
            web3?.provider?.removeListener("accountsChanged", accountsChanged);
    }, [handleAccount, web3?.provider, accountsChanged]);

    useEffect(() => {
        web3?.provider?.on("chainChanged", chainChanged);
        return () => web3?.provider?.removeListener("chainChanged", chainChanged);
    }, [handleChainId, web3?.provider, chainChanged]);


    return (
        <>

            {!web3.account && !chainIdValidate(web3.chainId, CHAIN_ID) && (
                <MyButton
                    filter='150%'
                    onClick={() => setOpen(true)} >
                    Conectar Wallet
                </MyButton>
            )}

            {web3.account && !chainIdValidate(web3.chainId, CHAIN_ID) && (
                <MyButton
                    filter='150%'
                    onClick={() =>
                        changeNetwork(web3.wallet, handleChainId, NETWORK_MAINNET)
                    }
                >
                    Cambiar a CELO
                </MyButton>
            )}

            {web3.account && chainIdValidate(web3.chainId, CHAIN_ID) && (
                <MyButton type="submit" filter='150%'>
                    Ingresa a la WhiteList
                </MyButton>
            )}

            {open &&
                <Connect handleClose={() => setOpen(false)} />
            }
        </>
    )
}
