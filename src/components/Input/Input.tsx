import classes from './input.module.css';
import { IInput } from './IInput';

export const Input = ({
    type = "text",
    name,
    value,
    handleChangeForm,
    required = false,
    placeHolder=""
}: IInput) => {
    return (
        <input
            className={classes.input}
            type={type}
            name={name}
            value={value}
            onChange={handleChangeForm}
            placeholder={placeHolder}
            required={required}
        />
    )
}
