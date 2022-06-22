import { useState } from 'react'

import Head from 'next/head'
import { ToastContainer } from 'react-toastify'


import styles from '../../styles/Home.module.scss'
import 'react-toastify/dist/ReactToastify.css';

import { Benefit } from '../components/benefit/benefit'
import { Faq } from '../components/faq/faq'
import { Feedbacks } from '../components/feedbacks/feedbacks'
import { FormSection } from '../components/formSection/formSection'
import { Header } from '../components/header/header'
import { Introduction } from '../components/introduction/introduction'
import { Whatsapp } from '../components/whatsapp/whatsapp'
import { FormModal } from '../components/modal/modal'
import { Pricing } from '../components/pricing/pricing';


function Home() {
  const [cursorLocal, setCursorLocal] = useState(250)
  

  return (
    <>
      <Head>
        <title>Home | PedroRocha</title>
      </Head>

      <main 
        className={styles.main}
        onMouseMove={((e) => { 
            var y = e.clientY
            setCursorLocal(y)
          }
        )} 
      >
        <Header />

        <Introduction />

        <Benefit />

        <Pricing />

        <Feedbacks />

        <FormSection />
        
        <Faq />

        <Whatsapp />

        <ToastContainer 
          autoClose={3000}
          hideProgressBar={true}
        />

      </main>

      <FormModal cursorLocal={cursorLocal}/>

    </>
  )
}

export default Home
