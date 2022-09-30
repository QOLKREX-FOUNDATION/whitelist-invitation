import { NFT } from '../NFT/NFT';
import classes from './wfinalizad.module.css'
interface IWfinalizad {
    count: number;
}

export const WFinalizad = ({ count }: IWfinalizad) => {
    return (
        <div className={classes.root}>

            <div className={classes.container}>
                <div className={classes.content}>
                    <div >
                        <h1 className={classes.title}>
                            Se agotaron las invitaciones a traves del NFT
                        </h1>
                        <p>* Si tienen alguna marca, proyecto y desean ser auspiciadores, todos son bienvenidos, contactate con
                            <a href='https://t.me/JulianVermelho' className={classes.link} target="_blank" rel="noopener noreferrer"> @JulianVermelho </a>
                            en telegram.
                        </p>

                        <h1 className={classes.whitelist}>WHITELIST {count} / {count}</h1>
                    </div>
                    <div className={classes.nft}>
                        <div className={classes.nftW}>
                            <NFT />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
