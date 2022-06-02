import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { BsWhatsapp } from 'react-icons/bs'

function Home() {
  return (
    <>
      <Head>
        <title>Home | PedroRocha</title>
      </Head>

      <main className={styles.main}>

        <div className={styles.logo}>
          <h1>Pedro <br /><span>Rocha</span></h1>
        </div>

        <section className={styles.introduction_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.introduction_major_content}>
                  <p>Treinos <span>ao vivo</span> <br /> comigo no meu <br /> perfil privado</p>
                  <a href="">Clique e treine comigo!</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.benefit_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.benefit_major_content}>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.introduction_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Pedro <span>Rocha</span></h1>
                <p></p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.introduction_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>Pedro <span>Rocha</span></h1>
                <p></p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.whatsapplink}>
          <a target="_blank" href="https://api.whatsapp.com/send?1=pt_BR&phone=553171551757">
            <BsWhatsapp />
          </a>
        </div>

      </main>
    </>
  )
}

export default Home
