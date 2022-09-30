import { useContext } from 'react';
import { Web3Context } from '../../contexts/Web3/Web3Context';
import { ButtonConnect, Input } from '../';
import classes from './form.module.css';
import { IForm } from './IForm';

export const Form = ({ form, handleChangeForm, onSubmit }: IForm) => {
    const { web3 } = useContext(Web3Context);

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <Input
                type="text"
                value={form.nickName}
                name="nickName"
                handleChangeForm={handleChangeForm}
                placeHolder="Tu NickName / Apodo"
                required
            />
            <Input
                type="email"
                value={form.email}
                name="email"
                handleChangeForm={handleChangeForm}
                placeHolder="Tu Correo Electrónico"
                required
            />
            {!!web3.account && <h4 className={classes.address} >Tu Public Address Conectada es  <span className={classes.span}>
                {web3.account} </span></h4>}

            <ButtonConnect />
        </form >
    )
}
