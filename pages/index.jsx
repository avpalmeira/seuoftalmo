import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faHeartbeat, faClock, faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Home.module.css'

import heroImg from '../public/big-eye.png'
import logo from '../public/logo.jpg'
import surgery from '../public/surgery.jpg'
import clinic from '../public/clinic.jpg'
import map from '../public/map.png'


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
        <header className={styles.header}>
          <Image src={logo} width={141} height={65} alt="SeuOftalmo Logo"/>
          <a href="#" className={styles.actionButton}>
            <span className={styles.actionButtontext}>
              Botão Agendar Consulta
            </span>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </header>
        <section className={styles.hero}>
          <Image className={styles.heroImg} src={heroImg} alt="Visão melhorada" />
          <div className={styles.heroMsg}>
            <p>A Central de Atendimento em procedimentos oftalmológicos para  pacientes sem plano de saúde.</p>
            <p>Aqui você pode.</p>
          </div>
        </section>
        <section className={styles.services}>
          <h2 className={styles.servicesTitle}>Nossos Serviços</h2>
          <div className={styles.serviceList}>
            <div className={styles.service}>
              <FontAwesomeIcon icon={faStethoscope} />
              <p>Equipe médica com mais de 35 anos de experiência</p>
            </div>
            <div className={styles.service}>
              <FontAwesomeIcon icon={faHeartbeat} />
              <p>Exames, diagnósticos e procedimentos</p>
            </div>
            <div className={styles.service}>
              <FontAwesomeIcon icon={faClock} />
              <p>Agilidade em marcação de horário e atendimento</p>
            </div>
            <div className={styles.service}>
              <FontAwesomeIcon icon={faClinicMedical} />
              <p>Estrutura e equipamentos modernos</p>
            </div>
          </div>
        </section>
        <section className={styles.procedures}>
          <h2 className={styles.proceduresTitle}>Exames e Procedimentos</h2>
          <div className={styles.proceduresList}>
            <h3>Exames</h3>
            <p>
              O.C.T  •  Pentacam  •  Optomap  Interferometria  •  Yag Laser  •  Curva Tensional  •  Campimetria
              •  Biometria Mapeamento  •  Tonometria  •  Gonioscopia  •  Capsulotomia  •  Retinografia
              •  Ultrassonografia  •  Acuidade Visual  •  Microscopia  Ceratoscopia  •  Paquimetria
            </p>
          </div>
          <div className={styles.proceduresList}>
            <h3>Procedimentos</h3>
            <p>Pterígio (carne crescida)  •  Calázio  •  Refrativa  •  Catarata</p>
          </div>
        </section>
        <section className={styles.aboutUs}>
          <h2>Quem Somos</h2>
          <p>
            Central de atendimento em procedimentos oftalmológicos para atender pacientes sem plano de saúde.
            Medicina Acessível - Aqui você pode.
          </p>
          <p>
            Procedimentos cirúrgicos com preço acessível e facilitado - cirurgia em até 12x no cartão.
          </p>
          <p>
            Equipe médica com mais de 35 anos de experiência. Exames, diagnósticos e procedimentos.
            Agilidade em marcação de horário e atendimento
          </p>
          <figure>
            <Image src={surgery} width={240} height={200} alt="Eye surgery"/>
          </figure>
        </section>
        <section className={styles.aboutLocation}>
          <h2>Clínica</h2>
          <Image src={map} width={300} height={200} alt="Location"/>
          <p>Equipe médica com mais de 35 anos de experiência.</p>
          <Image src={clinic} width={300} height={200} alt="Medical Clinic"/>
        </section>
        <section className={styles.contact}>
          <h2>Fale Conosco!</h2>
          <p>Queremos te ajudar.</p>
          <a href="#" className={styles.actionButton}>
            <span className={styles.actionButtontext}>
              Botão Agendar Consulta
            </span>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </section>
        <footer className={styles.footer}>
          <div className={styles.socialIconsFooter}>
            <div className={styles.socialIcon}>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className={styles.socialIcon}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <p>Copyright 2022 SeuOftalmo. Todos os direitos reservados.</p>
          <p>O site SeuOftalmo.com.br é de propriedade da Visão 360 Ltda. registrada sob o CNPJ 25.186.815/0001-38</p>
        </footer>
      </main>
    </div>
  )
}
