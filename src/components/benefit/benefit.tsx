import { useState } from "react";
import { TiInputChecked } from "react-icons/ti";
import styles from './benefit.module.scss'

interface benefitInterface {
    benefit: string
}

export function Benefit() {

    const [benefits, useBenefits] = useState<benefitInterface[]>([
        {
            benefit: 'Treine de onde você quiser!'
        },
        {
            benefit: 'Treinos online e ao vivo!'
        },
        {
            benefit: 'Lives salvas para sempre para assinantes ativos!'
        },
        {
            benefit: 'Treinos com e sem equipamentos!'
        },
        {
            benefit: 'Perfil exclusivo para assinantes!'
        },
        {
            benefit: 'Acompanhamento do progresso dos alunos!'
        },
        {
            benefit: 'Acesso a treinos exclusivos!'
        },
        {
            benefit: 'Possibilidade de tirar dúvidas com o professor durante as lives!'
        },
        
    ])

    return(
        <section className={styles.benefit_section} id="benefit">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.benefit_major_content}>
                            <small>Ficou interessado?</small>
                            <h3>Vantagens do perfil privado</h3>
                            <div className={styles.benefit_cards}>
                                <ul>
                                    {benefits.map(({ benefit }, i) => (
                                        <li>
                                        <TiInputChecked/>
                                        <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a href="#form">Clique e treine comigo!</a>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

