import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faHeartbeat, faClock, faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

import heroImg from '../public/big-eye.png'
import logo from '../public/logo.jpg'
import surgery from '../public/surgery.jpg'
import clinic from '../public/clinic.jpg'
import map1 from '../public/map-aflitos.png'
import map2 from '../public/map-pina.png'

export default function Home() {
  const addresses = [
    {
      street: 'Avenida Rosa e Silva 428',
      neighborhood: 'Aflitos',
      cityState: 'Recife - PE',
      map: map1,
    },
    {
      street: 'Avenida Conselheiro Aguiar 726',
      neighborhood: 'Boa Viagem',
      cityState: 'Recife - PE',
      map: map2,
    },
  ]
  
  const [selectedAddress, setSelectedAddress] = useState(addresses[0])

  const checkIsActive = (address) => {
    return selectedAddress.street === address.street ? styles.locationActive : ''
  }

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
          <div className={styles.headerLinks}>
            <nav className={styles.menuItems}>
              <a href="#services">Serviços</a>
              <a href="#procedures">Procedimentos</a>
              <a href="#aboutUs">Quem Somos</a>
              <a href="#aboutLocation">Clínica</a>
            </nav>
            <a href="#" className={styles.actionButton}>
              <span className={styles.actionButtontext}>
                Agendar Consulta
              </span>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </header>
        <section className={styles.hero}>
          <div className={styles.heroImgWrapper}>
            <Image className={styles.heroImg} src={heroImg} alt="Visão melhorada" />
          </div>
          <div className={styles.heroMsg}>
            <p>
              A Central de<br/>Atendimento em<br/>procedimentos<br/>
              oftalmológicos para<br/>pacientes sem plano de<br/>saúde.
            </p>
            <p className={styles.msgFeature}>Aqui você pode.</p>
            <a href="#" className={styles.actionButton}>
              <span className={styles.actionButtontext}>
                Fale pelo WhatsApp
              </span>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </section>
        <section id="services" className={styles.services}>
          <h2>Nossos Serviços</h2>
          <div className={styles.serviceList}>
            <div className={styles.service}>
              <FontAwesomeIcon icon={faStethoscope} className={styles.serviceIcon} />
              <p>Equipe médica com mais de 35 anos de experiência</p>
            </div>
            <div className={styles.service}>
              <FontAwesomeIcon icon={faHeartbeat} className={styles.serviceIcon} />
              <p>Exames, diagnósticos e procedimentos</p>
            </div>
            <div className={styles.service}>
              <FontAwesomeIcon icon={faClock} className={styles.serviceIcon} />
              <p>Agilidade em marcação de horário e atendimento</p>
            </div>
            <div className={styles.service}>
              <FontAwesomeIcon icon={faClinicMedical} className={styles.serviceIcon} />
              <p>Estrutura e equipamentos modernos</p>
            </div>
          </div>
          <div className={styles.doubleTriangle}>
            <div className={styles.triangleTopRightPrimary}></div>
            <div className={styles.triangleBottomLeftWhite}></div>
          </div>
        </section>
        <section id="procedures" className={styles.procedures}>
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
          <div className={styles.doubleTriangle}>
            <div className={styles.triangleTopRightWhite}></div>
            <div className={styles.triangleBottomLeftSecondary}></div>
          </div>
        </section>
        <section id="aboutUs" className={styles.aboutUs}>
          <h2>Quem Somos</h2>
          <div className={styles.aboutUsContainer}>
            <div className={styles.aboutUsText}>
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
            </div>
            <figure className={styles.aboutUsFigure}>
              <Image className={styles.photo} src={surgery} alt="Eye surgery"/>
            </figure>
          </div>
          <div className={styles.doubleTriangle}>
            <div className={styles.triangleTopLeftSecondary}></div>
            <div className={styles.triangleBottomRightAlternative}></div>
          </div>
        </section>
        <section id="aboutLocation" className={styles.aboutLocation}>
          <h2>Clínicas Parceiras</h2>
          <div className={styles.locationMapContainer}>
            <div className={styles.locationMap}>
              <Image className={styles.photo} src={selectedAddress.map} alt="Location"/>
            </div>
            <div className={styles.locationAddresses}>
              <p className={checkIsActive(addresses[0])} onClick={() => setSelectedAddress(addresses[0])}>
                {addresses[0].street}<br/>{addresses[0].neighborhood}, {addresses[0].cityState}
              </p>
              <p className={checkIsActive(addresses[1])} onClick={() => setSelectedAddress(addresses[1])}>
               {addresses[1].street}<br/>{addresses[1].neighborhood}, {addresses[1].cityState}
              </p>
            </div>
          </div>
          <div className={styles.locationImagesGalery}>
            <Image className={styles.photo} src={clinic} alt="Medical Clinic"/>
          </div>
        </section>
        <section className={styles.contact}>
          <h2>Fale Conosco!</h2>
          <p>Queremos te ajudar.</p>
          <a href="#" className={styles.actionButton}>
            <span className={styles.actionButtontext}>
              Tire suas dúvidas
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
