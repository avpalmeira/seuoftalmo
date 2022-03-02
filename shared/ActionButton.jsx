import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from './ActionButton.module.css'

export default function ActionButton({ text, url }) {
  return (
    <a href={url} className={styles.actionButton}>
      <span className={styles.actionButtonText}>
        {text}
      </span>
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  )
}