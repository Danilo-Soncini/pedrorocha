import { useState } from 'react';
import styles from './feedbacks.module.scss'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper";

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
                            <h3>Feedbacks</h3>

                            <Swiper
                                navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}

                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                    
                                modules={[Pagination, Navigation]}
                                breakpoints={{
                                    640: {
                                    slidesPerView: 1,
                                    },
                                    768: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                    },
                                    1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 10,
                                    },
                                }}

                                

                                className="mySwiper"
                            >
                                {feedbacks.map(({ name, objective, photo, results }, i) => {
                                    return(
                                        <SwiperSlide key={i}>
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
                                        </SwiperSlide>
                                    )   
                                })}
                            </Swiper>

                            <div className={styles.cotainer_buttons}>
                                <button id='swiper-back' className={styles.back_swiper_button}><IoIosArrowDropleftCircle/></button>
                                <button id='swiper-forward' className={styles.next_swiper_button}><IoIosArrowDroprightCircle/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};