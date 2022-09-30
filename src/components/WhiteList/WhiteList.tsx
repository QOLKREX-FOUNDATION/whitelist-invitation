import { useForm } from '../../hooks';
import { MsgRegister, Form } from '../';
import { IWhiteList } from './IWhiteList';
import classes from './whitelist.module.css';

const initForm = {
    email: "",
    nickName: "",
};

export const WhiteList = ({ queryId }: IWhiteList) => {
    const { send, msg, form, handleChangeForm, onSubmit } = useForm({ initial: initForm, queryId });

    return (
        <div className={classes.content}>
            <h2 className={classes.title}>
                Registrate en nuestra whitelist y recibirás nuestro NFT de invitación.
            </h2>
            <p>* Pueden referir la invitación a 2 amigos no coiners  y ganar un chilcano por cada amigo (max referido 2 con premio).</p>

            <p>* Si por algún motivo no pueden asistir, pueden enviar el NFT de invitación a otro amigo.</p>
            <p>* Si tienen alguna marca, proyecto y desean ser auspiciadores, todos son bienvenidos, contactate con
                <a href='https://t.me/JulianVermelho' className={classes.link} target="_blank" rel="noopener noreferrer"> @JulianVermelho </a>
                en telegram.
            </p>
            {
                send ?
                    <MsgRegister msg={msg} />
                    :
                    <Form
                        form={form}
                        handleChangeForm={handleChangeForm}
                        onSubmit={onSubmit}
                    />
            }
        </div>
    )
}