import Image from 'next/image'
import classes from './navbar.module.css'

export const Navbar = () => {
    return (
        <div   className={classes.navbar}>
            <a
                href='https://t.me/CryptoBlockPeru'
                target="_blank"
                rel="noopener noreferrer"
            >

                <Image
                    src='/img/logos/crypto-block-logo.png'
                    width={240}
                    height={110}
                    alt="Cripto Block Perú"
                />
            </a>
        </div>
    )
}
