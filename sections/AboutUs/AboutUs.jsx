import Image from 'next/image'

import { chooseTriangles } from '../../shared/doubleTriangle'
import styles from './AboutUs.module.css'
import surgery from '../../public/surgery.jpg'

export default function AboutUs() {
  return (
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
      {chooseTriangles('topLeftBottomRight', 'secondary', 'alternative')}
    </section>
  )
}