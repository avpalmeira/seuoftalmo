import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faHeartbeat, faClock, faClinicMedical } from '@fortawesome/free-solid-svg-icons'
import styles from './Services.module.css'
import { chooseTriangles } from '../../shared/doubleTriangle'

export default function Services() {
  return (
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
      {chooseTriangles('topRightBottomLeft', 'primary', 'white')}
    </section>
  )
}