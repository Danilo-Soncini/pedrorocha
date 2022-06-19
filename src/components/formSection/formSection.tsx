import { Form } from '../form/form'
import styles from './formSection.module.scss'

export function FormSection() {
    return (
        <section id="form" className={styles.form_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.form_major_content}>
                  <h3>INSCREVA-SE AGORA E RECEBA UM E-BOOK GRÁTIS!</h3>
                  <div className={styles.form}>
                    <Form />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}