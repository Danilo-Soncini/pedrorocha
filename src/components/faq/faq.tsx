import { useState } from 'react'
import styles from './faq.module.scss'
import { BsArrowDownShort } from 'react-icons/bs'

interface FaqInterface {
    question: string,
    answer: string,
    open: boolean
}

export function Faq() {
    const [faqs, setFaqs] = useState<FaqInterface[]>([
        {
            question: 'Consigo treinar com Gravação?',
            answer: 'Pode ser acompanhado o treino gravado, repetir os pontos específicos, aumentar ou diminuir a velocidade e no final do treino tem as perguntas e respostas.',
            open: false
        },
        {
            question: 'Como acessar o treino?',
            answer: 'Acesso por qualquer dispositivo com internet o perfil privado do Insta e o portal de acesso aos alunos.',
            open: false
        },
        {
            question: 'Como receber notificações dos Treinos?',
            answer: 'Acessar os ... do canto superior direito e ativar todas as notificações do perfil.',
            open: false
        },
        {
            question: 'Como funciona o Reembolso?',
            answer: 'Reembolso somente na primeira vez que é contratado o Treinamento.',
            open: false
        },
    ]);

    const toggleFAQ = (index: number) => {
        const updatedFAQ = [...faqs] 

        const newFaqs = updatedFAQ.map((faq, i) => {
            if(i === index){
                faq.open = !faq.open
            }

            return faq;
        })

        setFaqs(newFaqs);
    }

    return(
        <section className={styles.faq_section}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.faq_major_content}>
                            <h3>Perguntas Frequentes</h3>
                            {faqs.map(({ question, answer, open }, i) => (
                                <div 
                                    key={i}
                                    className={`${styles.single_faq} ${open ? styles.open : styles.closed}` }
                                    onClick={() => {toggleFAQ(i)}}
                                >
                                    <h6>{question} <BsArrowDownShort /></h6>
                                    <p>{answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}