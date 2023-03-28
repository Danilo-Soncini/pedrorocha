import styles from "./pricing.module.scss"
import { MdAttachMoney } from "react-icons/md"

export function Pricing() {
  return (
    <section className={styles.pricing_section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.pricing_major_content}>
              <h3>NOSSOS PLANOS</h3>
              <div className={styles.pricing_card}>
                <div className={styles.pricing_card_top}>
                  <h5>Mensal</h5>
                  <p>
                    em até <b>1x</b> de R$<span> 69,90</span>
                  </p>
                </div>
                <a href="https://lastlink.com/p/CE081E7DE/checkout-payment" target="_blank">
                  Quero adquirir este plano!
                </a>
              </div>
              <div className={styles.pricing_card}>
                <div className={styles.pricing_card_top}>
                  <h5>Semestral</h5>
                  <p>
                    em até <b>6x</b> de R$<span> 60,22</span>
                  </p>
                  <p>Ou</p>
                  <p>
                    R$ <span>329,40</span> à vista
                  </p>
                </div>
                <a href="https://lastlink.com/p/CE081E7DE/checkout-payment" target="_blank">
                  Quero adquirir este plano!
                </a>
              </div>
              <div className={styles.pricing_card}>
                <div className={styles.pricing_card_top}>
                  <h5>Anual</h5>
                  <p>
                    em até <b>12x</b> de R$<span> 46,68</span>
                  </p>
                  <p>Ou</p>
                  <p>
                    R$ <span>478,80</span> à vista
                  </p>
                </div>
                <a href="https://lastlink.com/p/CE081E7DE/checkout-payment" target="_blank">
                  Quero adquirir este plano!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
