import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import styles from './ActionButton.module.css'

const defaultUrl = 'https://api.whatsapp.com/send?phone=5581999030528'

export default function ActionButton({ text, url = defaultUrl }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.actionButton}>
      <span className={styles.actionButtonText}>
        {text}
      </span>
      <FontAwesomeIcon className={styles.actionIcon} icon={faWhatsapp} />
    </a>
  )
}