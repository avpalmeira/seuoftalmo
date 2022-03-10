import ActionButton from '../../shared/ActionButton';
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Fale Conosco!</h2>
      <p>Queremos te ajudar.</p>
      <ActionButton text="Tire suas dúvidas" />
    </section>
  )
}