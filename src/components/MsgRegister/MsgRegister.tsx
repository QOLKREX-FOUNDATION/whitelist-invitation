
interface IMsgRegister {
    msg: string;
    onlyRef?: boolean
    referred?: number;
}

export const MsgRegister = ({ msg, onlyRef = false, referred = 0 }: IMsgRegister) => {
    return (
        <div>
            {
                !onlyRef &&
                <h2>Felicidades ya estas registrado en el WhiteList te avisaremos con un correo electronico para que puedas MINTEAR tu NFT en CELO</h2>
            }
            <h2 style={{ margin: 0, padding: 0 }}>Tu Link Para Referir :</h2>
            <p style={{ marginBottom: '1rem', whiteSpace: "break-spaces" }}>{msg}</p>
            <p>Máximo 2 referidos ({referred} actualmente) por cada uno, te obsequiamos un chilcano en nuestro próximo evento</p>
        </div>
    )
}
