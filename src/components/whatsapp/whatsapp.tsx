import { BsInstagram, BsWhatsapp } from "react-icons/bs"
import styles from "./whatsapp.module.scss"

export function Whatsapp() {
  return (
    <div className={styles.redessociais}>
      <a className={styles.whatsapp} target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=553171551757">
        <BsWhatsapp />
      </a>

      <a className={styles.instagram} target="_blank" href="https://www.instagram.com/pedrozrocha/">
        <BsInstagram />
      </a>
    </div>
  )
}
