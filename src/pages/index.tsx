import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Benefit } from '../components/benefit/benefit'
// import { Benefit2} from '../components/benefit2/benefit2'
import { Faq } from '../components/faq/faq'
import { Feedbacks } from '../components/feedbacks/feedbacks'
import { ContactForm } from '../components/form/form'
import { Header } from '../components/header/header'
import { Introduction } from '../components/introduction/introduction'
import { Whatsapp } from '../components/whatsapp/whatsapp'


function Home() {
  return (
    <>
      <Head>
        <title>Home | PedroRocha</title>
      </Head>

      <main className={styles.main}>

        <Header />

        <Introduction />

        <Benefit />

        {/* <Benefit2 /> */}
        
        <Feedbacks />

        <ContactForm />
        
        <Faq />





        <Whatsapp />

      </main>
    </>
  )
}

export default Home
