import Image from 'next/image'
import ActionButton from '../../shared/ActionButton'
import styles from './Hero.module.css'
import heroImg from '../../public/big-eye.png'

export default function Hero() {
  return (
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
        <div className={styles.actionButtonContainer}>
          <ActionButton text="Fale pelo WhatsApp" url="#" />
        </div>
      </div>
    </section>
  )
}
