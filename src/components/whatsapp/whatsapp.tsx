import { BsWhatsapp } from 'react-icons/bs'
import styles from './whatsapp.module.scss'

export function Whatsapp() {
    return (
        <div className={styles.whatsapplink}>
          <a target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=553171551757">
            <BsWhatsapp />
          </a>
        </div>
    )
}