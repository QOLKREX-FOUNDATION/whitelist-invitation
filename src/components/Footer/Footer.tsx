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
                        width={140}
                        height={40}
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
                        width={150}
                        height={40}
                        alt="Celo"
                    />
                </a>

                
                <a
                    href='https://www.linkedin.com/company/coini-app/'
                    target="_blank"
                    rel="noopener noreferrer"
                >

                    <Image
                        src='/img/logos/coini.png'
                        width={150}
                        height={40}
                        alt="coini"
                    />
                </a>

                
                <a
                    href='#'
                    // target="_blank"
                    // rel="noopener noreferrer"
                >

                    <Image
                        src='/img/logos/comandante.png'
                        width={140}
                        height={40}
                        alt="comandante"
                    />
                </a>
            </div>

            <h3 className={classes.copyrigth}>© 2021-{new Date().getFullYear()} Qolkrex - All Rights Reserved.</h3>

        </div>
    )
}
