import { CgArrowBottomLeftO } from 'react-icons/cg'
import styles from './introduction.module.scss'

export function Introduction() {
    return(
        <section className={styles.introduction_section}>
            <div className="container">
            <div className="row">
                <div className={styles.col_12}>
                <div className={styles.introduction_major_content}>
                    <h1>Treinos <span>ao vivo</span> <br /> comigo no meu <br /> perfil privado</h1>
                    <a href="#form">Clique e treine comigo!</a>
                </div>
                </div>
            </div>
            </div>
            <CgArrowBottomLeftO />
        </section>
    )
}

