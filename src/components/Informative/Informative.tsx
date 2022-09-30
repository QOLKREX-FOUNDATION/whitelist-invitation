import classes from "./informative.module.css";


interface IInformative {
    children: React.ReactNode;
    handleClose: () => void;
    w?: number;
    transparent?: boolean;
}

export const Informative = ({
    children,
    w = 0,
    transparent = false,
    handleClose,
}: IInformative) => {
    return (
        <div className={classes.modal}>
            <div className={classes.modalDialog} onClick={handleClose}></div>
            <div className={classes.flex}>
                <div
                    className={classes.content}
                    style={{
                        background: `${transparent ? "transparent" : "#fff"}`,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
