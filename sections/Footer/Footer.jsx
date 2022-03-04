import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

export default function Footer() {
  return (
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
      <p>O site SeuOftalmo.com.br é de propriedade da Seu Oftalmo Ltda. registrada sob o CNPJ 44.798.334/0001-28</p>
    </footer>
  )
}