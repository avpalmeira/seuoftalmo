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
            Oferecemos estrutura moderna com mais de 35 anos de experiência, sempre atualizando e investindo
            em tecnologia de ponta para obter mais qualidade e resultados precisos.
          </p>
          <p>
            Disponibilizamos de consultas, exames, tratamentos e procedimentos cirúrgicos em nossas unidades
            através de agendamentos com rapidez e praticidade.
          </p>
          <p>
            Buscamos o melhor desempenho para fornecer um atendimento rápido, humanizado, personalizado e
            preço acessível, trazendo uma experiência única ao paciente. Assumimos o compromisso com o paciente
            de acompanhar todo o processo. Desde o primeiro contato para marcação de consulta até a revisão e
            pós-operatório com alta médica.
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