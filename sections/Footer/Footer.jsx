import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styles from './Footer.module.css'

const facebookLink = 'https://www.facebook.com/seu.oftalmo';
const instagramLink = 'https://www.instagram.com/seu.oftalmo';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIconsFooter}>
        <a href={facebookLink} target="_blank" rel="noreferrer" className={styles.socialIcon}>
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href={instagramLink} target="_blank" rel="noreferrer" className={styles.socialIcon}>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>Copyright 2022 SeuOftalmo. Todos os direitos reservados.</p>
      <p>O site SeuOftalmo.com.br é de propriedade da Seu Oftalmo Ltda. registrada sob o CNPJ 44.798.334/0001-28</p>
    </footer>
  )
}