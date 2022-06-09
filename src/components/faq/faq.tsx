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
            question: 'Quero me inscrever no Perfil Privado do Norton, como faço?',
            answer: 'Acesse www.eutreinocomonorton.com.br, e preencha o formulário com seu nome de usuário de Instagram, seu e-mail e seu Whatsapp e clique no botão QUERO TREINAR COM O NORTON.',
            open: false
        },
        {
            question: 'Quais os planos existentes no Perfil Privado do Norton?',
            answer: 'O Perfil Privado do Norton oferece os planos:',
            open: false
        },
        {
            question: 'Qual a diferença entre os treinos das lives diárias para os treinos do Perfil Privado',
            answer: 'No Perfil Privado, o Norton passa conteúdos exclusivos, treinos específicos (ex: treino só de peitoral,',
            open: false
        },
        {
            question: 'Quero cancelar o meu acesso ao Perfil Privado do Norton. Como faço?',
            answer: 'Para cancelar, você deve acessar o endereço https://lastlink.com/p/TI2S2OA. Clique nos três pontinhos',
            open: false
        },
        {
            question: 'Minhas dúvidas não foram respondidas nessas FAQ, para onde devo encaminhá-las?',
            answer: 'Caso suas dúvidas não tenham sido respondidas nas questões acima, encaminhe um e-mail',
            open: false
        },
        {
            question: 'Quais as formas de pagamento do Perfil Privado do Norton?',
            answer: 'Você pode assinar o Perfil Privado do Norton apenas com via cartão de crédito. Não é mais permitido',
            open: false
        },
        {
            question: 'Estou inscrito. Como faço para ter acesso ao Perfil Privado do Norton?',
            answer: 'A plataforma Lastlink, utilizada para inscrição no Perfil Privado Eu Treino com o Norton, aguarda a',
            open: false
        },
        {
            question: 'No Perfil Privado do Norton, eu terei treinos personalizados?',
            answer: 'Caso suas dúvidas não tenham sido respondidas nas questões acima, encaminhe um e-mail',
            open: false
        },
        {
            question: 'Minhas dúvidas não foram respondidas nessas FAQ, para onde devo encaminhá-las?',
            answer: 'Não. No Perfil Privado, você conta com conteúdos exclusivos e específicos, além de suporte pelo direct e',
            open: false
        },
        {
            question: 'O cancelamento me dá direito ao reembolso do que paguei?',
            answer: 'O Perfil Privado do Norton segue o previsto pelo artigo 49 do Código de Defesa do Consumidor (CDC), que',
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
                                <>
                                    <div 
                                    className={`${styles.single_faq} ${open ? styles.open : styles.closed}` }
                                    key={i}
                                    onClick={() => {toggleFAQ(i)}}
                                    >
                                        <h6>{question} <BsArrowDownShort /></h6>
                                        <p>{answer}</p>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}