import { useContext, useState } from 'react';
import classes from './content.module.css';
import { getRecordRef } from "../../utils/participants"
import { MyButton, MsgRegister, NFT } from '../';
import Swal from 'sweetalert2';
import { Web3Context } from '../../contexts/Web3/Web3Context';
import { IContent } from './IContent';

export const Content = ({ count }: IContent) => {
  const { web3 } = useContext(Web3Context);
  const [referred, setReferred] = useState(0);
  const [msg, setMsg] = useState("");

  const getRef = () => {
    if (!!!web3.account) {
      Swal.fire("Conecta tu Wallet", "Conecta tu Billetera para generarla", "error");
      return;
    }
    getRecordRef(web3.account.toUpperCase()).then((response) => {
      if (response.ok) {
        setMsg(response.ref)
        setReferred(response.referred);
      } else {
        Swal.fire("Registrate Primero", "No te has registrado aún", "error");
      }
    }).catch(() => {
      Swal.fire("Registrate Primero", "No te has registrado aún", "error");
    })
  }

  return (
    <div className={classes.content}>
      <NFT />
      <h4>Participantes totales {count} / 200 Invitaciones</h4>
      {
        msg != "" ?
          <MsgRegister msg={msg} onlyRef referred={referred} />
          :
          <MyButton size='small' onClick={getRef}>
            Obten Tu Link de Referido
          </MyButton>
      }
      <button>
      </button>
    </div>
  )
}
