import { TiInputChecked } from "react-icons/ti";
import styles from './benefit.module.scss'


export function Benefit() {
    return(
        <section className={styles.benefit_section}>
            <div className="container">
            <div className="row">
                <div className="col-12">
                <div className={styles.benefit_major_content}>
                    <h3>Vantagens de adquirir um plano com Pedro Rocha</h3>
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
                    <a href="#form">Clique e treine comigo!</a>
                </div>
                </div> 
            </div>
            </div>
        </section>
    )
}

