import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import heroImg from '../public/big-eye.png'
import logo from '../public/logo.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Seu Oftalmo</title>
        <meta
          name="description"
          content="A Central de Atendimento em procedimentos oftalmológicos para pacientes sem plano de saúde."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className={styles.header}>
          <Image src={logo} width={141} height={65} alt="SeuOftalmo Logo"/>
          <a href="#" className={styles.actionButton}>Botão Agendar Consulta</a>
        </header>
        <section>
          <Image src={heroImg} alt="Visão melhorada" />
        </section>
      </main>
    </div>
  )
}
