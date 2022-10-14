import { useState } from "react"
import styles from "./faq.module.scss"
import { BsArrowDownShort } from "react-icons/bs"

interface FaqInterface {
  question: string
  answer: string
  open: boolean
}

export function Faq() {
  const [faqs, setFaqs] = useState<FaqInterface[]>([
    {
      question: "Consigo treinar com Gravação?",
      answer:
        "Pode ser acompanhado o treino gravado, repetir os pontos específicos, aumentar ou diminuir a velocidade e no final do treino tem as perguntas e respostas.",
      open: false
    },
    {
      question: "Como acessar o treino?",
      answer: "Acesso por qualquer dispositivo com internet o perfil privado do Insta e o portal de acesso aos alunos.",
      open: false
    },
    {
      question: "Como receber notificações dos Treinos?",
      answer: "Acessar os ... do canto superior direito e ativar todas as notificações do perfil.",
      open: false
    },
    {
      question: "Como funciona o Reembolso?",
      answer: "Reembolso somente na primeira vez que é contratado o Treinamento.",
      open: false
    },
    {
      question: "Comprei o programa, mas ainda não recebi nada. Por onde vou receber os treinos?",
      answer:
        "Assim que você se inscreve no programa, o passo a passo para seu acesso é enviado para seu endereço de e-mail. Procure por LASTLINK na caixa de entrada, ou, caso não encontre, verifique a sua caixa de SPAM ou lixeira.",
      open: false
    },
    {
      question: "Se eu não puder começar agora ou precisar fazer uma pausa, o que eu faço?",
      answer:
        "Entre em contato com o nosso suporte! Caso precise ficar parado(a) por algum problema de saúde (via laudo médico), basta informar o tempo que ficará sem treinar que o seu acesso será prorrogado pelo tempo que precisar.",
      open: false
    },
    {
      question: "Em quanto tempo eu posso começar a ver resultados?",
      answer:
        "Tudo vai depender da sua dedicação ao que foi proposto em relação aos TREINOS e DIETAS, e, se fizer exatamente conforme minhas recomendações, já no primeiro mês terá resultados.",
      open: false
    },
    {
      question: "É normal sentir dor por vários dias após o treino?",
      answer:
        "Sim, é normal, e, quanto mais dor você sente, maior o sinal do seu despreparo muscular, ou seja, na medida em que seu corpo for se adaptando aos estímulos, essas dores musculares tenderão a ser menores.",
      open: false
    },
    {
      question: "Não consigo comer pela manhã, isso pode atrapalhar meus resultados?",
      answer:
        "Sim, nossa recomendação é que tente pelo menos tomar uma vitamina pela manhã, caso não consiga comer nada. Se você treina pela manhã, principalmente, ok? Bata pelo menos um copo d'água com uma banana, uma colher de aveia e uma dose de Whey Protein e tome antes de ir treinar.",
      open: false
    }
  ])

  const toggleFAQ = (index: number) => {
    const updatedFAQ = [...faqs]

    const newFaqs = updatedFAQ.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      }

      return faq
    })

    setFaqs(newFaqs)
  }

  return (
    <section className={styles.faq_section}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles.faq_major_content}>
              <h3>Perguntas Frequentes</h3>
              {faqs.map(({ question, answer, open }, i) => (
                <div
                  key={i}
                  className={`${styles.single_faq} ${open ? styles.open : styles.closed}`}
                  onClick={() => {
                    toggleFAQ(i)
                  }}
                >
                  <h6>
                    {question} <BsArrowDownShort />
                  </h6>
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
