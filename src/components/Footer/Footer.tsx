import Image from 'next/image';
import classes from './footer.module.css';

export const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <a
                    href='https://qolkrex.foundation/'
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <Image
                        src='/img/logos/estrella-andina.png'
                        width={150}
                        height={45}
                        alt="Estrella Andina"
                    />
                </a>

                <a
                    href='https://celo.org/es'
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <Image
                        src='/img/logos/celo-logo-color-reverse.png'
                        width={180}
                        height={50}
                        alt="Celo"
                    />
                </a>
            </div>

            <h3 className={classes.copyrigth}>© 2021-{new Date().getFullYear()} Qolkrex - All Rights Reserved.</h3>

        </div>
    )
}
