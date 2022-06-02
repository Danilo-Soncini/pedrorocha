import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { BsWhatsapp } from 'react-icons/bs'
import { TiInputChecked } from 'react-icons/ti'
import { CgArrowBottomLeftO } from 'react-icons/cg'

function Home() {
  return (
    <>
      <Head>
        <title>Home | PedroRocha</title>
      </Head>

      <main className={styles.main}>

        <div className={styles.logo}>
          <h2>Pedro <br /><span>Rocha</span></h2>
        </div>

        <section className={styles.introduction_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.introduction_major_content}>
                  <h3>Treinos <span>ao vivo</span> <br /> comigo no meu <br /> perfil privado</h3>
                  <a href="">Clique e treine comigo!</a>
                </div>
              </div>
            </div>
          </div>
          <CgArrowBottomLeftO />
        </section>

        <section className={styles.benefit_section}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className={styles.benefit_major_content}>
                  <h3>Vantagens de <br /> adquirir um <br /> plano com <br /> Pedro Rocha</h3>
                  <div className={styles.benefit_cards}>
                    <ul>
                      <li>
                        <TiInputChecked/>
                        <span>Treine de onde você quiser!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Treinos online e ao vivo!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Lives salvas para sempre para assinantes ativos!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Treinos de peso corporal!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Perfil exclusivo para assinantes!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>3 treinos ao vivo por dia!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Acesso a 8 links de treinos ao vivo e exclusivos!</span>
                      </li>
                    </ul>
                    <div className={styles.cards_prices}>
                        <small>Por apenas</small>
                        <div className={styles.prices_container}>
                          <div className={styles.price}>
                            <span>
                              R$ 39,99
                            </span>
                          </div>
                        </div>
                        <small>por mês</small>
                    </div>
                  </div>
                  <div className={styles.benefit_cards}>
                    <ul>
                      <li>
                        <TiInputChecked/>
                        <span>Treine de onde você quiser!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Treinos online e ao vivo!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Lives salvas para sempre para assinantes ativos!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Treinos de peso corporal!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Perfil exclusivo para assinantes!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>3 treinos ao vivo por dia!</span>
                      </li>
                      <li>
                        <TiInputChecked/>
                        <span>Acesso a 12 links de treinos ao vivo e exclusivos!</span>
                      </li>
                    </ul>
                    <div className={styles.cards_prices}>
                        <small>Por apenas</small>
                        <div className={styles.prices_container}>
                          <div className={styles.price}>
                            <span>
                              R$ 49,99
                            </span>
                          </div>
                        </div>
                        <small>por mês</small>
                    </div>
                  </div>
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
