import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/404.module.scss'
import { Header } from '../components/header/header'

export default function FourOhFour() {
  return (
    <>
        <Head>
            <title>Error 404 | PedroRocha</title>
        </Head>

        <Header/>
    
        <section className={styles.error404_section}>
            <div className="container">
                <div className="row">
                    <div className={styles.col_12}>
                        <div className={styles.error404_major_content}>
                            <h1>Página não encontrada</h1>
                            <Link href="/">
                                <a>
                                    Voltar para tela inicial
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
  )
}