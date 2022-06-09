import { useState } from 'react';
import Carousel from 'react-elastic-carousel';

import styles from './feedbacks.module.scss'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2},
    { width: 768, itemsToShow: 3 }
];

interface feedbacksInterface {
    name: string,
    objective: string,
    photo: string,
    results: string
}



  
export function Feedbacks() { 
    
    const [feedbacks, setFeedbacks] = useState<feedbacksInterface[]>([
        {
            name: 'João',
            objective: 'Emagrecimento',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Enmagreceu 10kg com o processo de perda de peso'
        },
        {
            name: 'Vitor',
            objective: 'Ganho de massa',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Ganhou 10kg de massa limpa no processo'
        },
        {
            name: 'Lucca',
            objective: 'Definição',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Fernando ganhou uma definição de massa sobrenatural em 2 dias treinando'
        },
        {
            name: 'João',
            objective: 'Emagrecimento',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Enmagreceu 10kg com o processo de perda de peso'
        },
        {
            name: 'Vitor',
            objective: 'Ganho de massa',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Ganhou 10kg de massa limpa no processo'
        },
        {
            name: 'Lucca',
            objective: 'Definição',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Fernando ganhou uma definição de massa sobrenatural em 2 dias treinando'
        },
        {
            name: 'João',
            objective: 'Emagrecimento',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Enmagreceu 10kg com o processo de perda de peso'
        },
        {
            name: 'Vitor',
            objective: 'Ganho de massa',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Ganhou 10kg de massa limpa no processo'
        },
        {
            name: 'Lucca',
            objective: 'Definição',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Fernando ganhou uma definição de massa sobrenatural em 2 dias treinando'
        },
        {
            name: 'João',
            objective: 'Emagrecimento',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Enmagreceu 10kg com o processo de perda de peso'
        },
        {
            name: 'Vitor',
            objective: 'Ganho de massa',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Ganhou 10kg de massa limpa no processo'
        },
        {
            name: 'Lucca',
            objective: 'Definição',
            photo: 'https://elitedamusculacao.com/wp-content/uploads/elementor/thumbs/23-peixm552fnkfgf0zyrh508iy11uo52zq3tyhkej36k.jpg',
            results: 'Fernando ganhou uma definição de massa sobrenatural em 2 dias treinando'
        },
    ]);

    return (
        <section className={styles.feedbacks_section}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.feedbacks_major_content}>
                            <Carousel breakPoints={breakPoints}>
                                {feedbacks.map(({ name, objective, photo, results }, i) => {
                                    return(
                                        <div className={styles.card}  key={i}>
                                            <div className={styles.card_front}>
                                                <img src={photo} alt="" />
                                            </div>
                                            <div className={styles.card_back}>
                                                <div>
                                                    <h5>Nome</h5><span>{name}</span>
                                                </div>
                                                <div>
                                                    <h5>Objetivo</h5><span>{objective}</span>
                                                </div>
                                                <div>
                                                    <h5>Resultados</h5><span>{results}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )   
                                })}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};