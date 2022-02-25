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
      <p>O site SeuOftalmo.com.br é de propriedade da Visão 360 Ltda. registrada sob o CNPJ 25.186.815/0001-38</p>
    </footer>
  )
}