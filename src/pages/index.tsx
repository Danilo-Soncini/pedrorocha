import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

function Home() {
  return (
    <>
      <Head>
        <title>Home | PedroRocha</title>
      </Head>

      <main>
        <section>
          <h1 className={styles.titulo_principal}>Hello PedroRocha</h1>
        </section>
      </main>
    </>
  )
}

export default Home
