import styles from './pricing.module.scss'
import { MdAttachMoney } from 'react-icons/md'

export function Pricing(){

    return(
        <section className={styles.pricing_section}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.pricing_major_content}>
                            <h3>NOSSOS PLANOS</h3>
                            <div className={styles.pricing_card}>
                                <div className={styles.pricing_card_top}> 
                                    <h5>Mensal</h5>
                                    <p> R$  <b>5<span>0</span>,00</b>/Mês</p>
                                </div>
                                <div className={styles.pricing_card_middle}>
                                    <p>Este plano foi criado para o perfil de pessoal que ainda quer testar o perfil privado, esse será um teste para você conhecer o trabalho do treinador Pedro</p>
                                </div>
                                <a href="">Quero adquirir este plano!</a>
                            </div>
                            <div className={styles.pricing_card}>
                                <div className={styles.pricing_card_top}> 
                                    <h5>Anual</h5>
                                    <p> R$  <b>2<span>5</span>,00</b>/Mês</p>
                                </div>
                                <div className={styles.pricing_card_middle}>
                                    <p>Este plano foi criado para o perfil que já conhece o trabalho do treinador pedro, gostou do serviço e ele te ajudou de alguma forma, neste plano você terá um grande desconto nas mensalidades porém a assinatura é Anual!</p>
                                </div>
                                <a href="">Quero adquirir este plano!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}