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
                    em até <b>1x</b> de R$<span> 100,00</span>
                  </p>
                </div>
                <a href="https://lastlink.com/p/C2490E56A/checkout-payment" target="_blank">
                  Quero adquirir este plano!
                </a>
              </div>
              <div className={styles.pricing_card}>
                <div className={styles.pricing_card_top}>
                  <h5>Semestral</h5>
                  <p>
                    em até <b>6x</b> de R$<span> 87,75</span>
                  </p>
                  <p>Ou</p>
                  <p>
                    R$ <span>480,00</span> à vista
                  </p>
                </div>
                <a href="https://lastlink.com/p/C2490E56A/checkout-payment" target="_blank">
                  Quero adquirir este plano!
                </a>
              </div>
              <div className={styles.pricing_card}>
                <div className={styles.pricing_card_top}>
                  <h5>Anual</h5>
                  <p>
                    em até <b>12x</b> de R$<span> 70,20</span>
                  </p>
                  <p>Ou</p>
                  <p>
                    R$ <span>720,00</span> à vista
                  </p>
                </div>
                <a href="https://lastlink.com/p/C2490E56A/checkout-payment" target="_blank">
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
