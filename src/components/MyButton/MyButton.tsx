import { ReactNode } from 'react';
import classes from './myButton.module.css'

interface IMyButton {
    children: ReactNode;
    onClick?: any;
    type?: 'button' | 'submit';
    filter?: string
    size?: string

}

export const MyButton = ({
    children,
    onClick = () => false,
    type = 'button',
    filter = '100%',
    size = 'medium'
}: IMyButton) => {
    return (
        <button
            className={classes.button}
            type={type}
            onClick={onClick}
            style={{
                filter: `saturate(${filter})`,
                fontSize: size === 'medium' ? '1rem' : '.7rem',
                padding: size === 'medium' ? '1rem 2rem' : '1rem 1rem',
                width: size === 'medium' ? '100%' : '50%',

            }}
        >
            {children}
        </button>
    )
}
