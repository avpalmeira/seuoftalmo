import Head from 'next/head'
import AboutLocation from '../sections/AboutLocation/AboutLocation';
import AboutUs from '../sections/AboutUs/AboutUs';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer'
import Header from '../sections/Header/Header'
import Hero from '../sections/Hero/Hero'
import Procedures from '../sections/Procedures/Procedures'
import Services from '../sections/Services/Services'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Seu Oftalmo</title>
        <meta
          name="description"
          content="A Central de Atendimento em procedimentos oftalmológicos para pacientes sem plano de saúde."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero />
        <Services />
        <Procedures />
        <AboutUs />
        <AboutLocation />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
