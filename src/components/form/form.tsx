import styles from './form.module.scss'

export function ContactForm() {
    return (
        <section id="form" className={styles.form_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.form_major_content}>
                  <h3>INSCREVA-SE AGORA E RECEBA UM E-BOOK GRÁTIS!</h3>
                  <form action="" className={styles.form}>
                    <input type="email" placeholder="Seu melhor e-mail*" required/>
                    <input type="tel" placeholder="Seu Whatsapp*" required/>
                    <button type="submit">Enviar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}