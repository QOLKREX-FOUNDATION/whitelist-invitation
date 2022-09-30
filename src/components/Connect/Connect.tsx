import Image from "next/image";
import { useContext } from "react";
import { Web3Context } from "../../contexts/Web3/Web3Context";
import { web3Provider } from "../../utils";
import { Informative } from "../Informative/Informative";
import classes from './connect.module.css'

interface IConnect {
    handleClose: () => void;
}
export const Connect = ({ handleClose }: IConnect) => {
    const { handleWeb3 } =
        useContext(Web3Context);

    const validate = (providerString: string) => {
        web3Provider(handleWeb3, providerString);
        handleClose()
    }

    const style = {
        border: "1000 1000 1000 1000 rgb(206, 208, 217)",
        borderRadius: 10,
        fontSize: ".8rem",
        margin: 5,
        padding: "4px 6px ",
        color:'#222'
    };

    return (
        <Informative handleClose={handleClose}>
            <div >
                <h4 style={{color:'#000'}}>
                    Conectar
                </h4>
                <p style={{ fontSize: ".8rem" }}>
                    Al conectar una billetera, acepta los Términos de servicio de Firulaix
                    Labs y reconoce que ha leído y entendido el Protocolo de exención de
                    responsabilidad.
                </p>

                <div
                    className={classes.wallet}
                    style={style}
                    onClick={() => validate("metamask")}>
                    Metamask
                    <div
                        style={{
                            height: 50,
                            width: 50,
                        }}>
                        <div className="relative">
                            <Image
                                src="/img/icons/metamask.png"
                                layout="fill"
                                objectFit="contain"
                                alt="metamask"
                            />
                        </div>
                    </div>
                </div>
                <div className={classes.wallet} style={style}
                    onClick={() => validate("walletconnect")}>
                    WalletConnect
                    <div
                        style={{
                            height: 50,
                            width: 50,
                        }}>
                        <div className="relative">
                            <Image
                                src="/img/icons/walletconnect.png"
                                layout="fill"
                                objectFit="contain"
                                alt="WalletConnect"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Informative>

    );
};
