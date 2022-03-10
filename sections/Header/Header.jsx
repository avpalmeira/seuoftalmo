import logo from '../../public/logo.jpg'
import Image from 'next/image'
import ActionButton from '../../shared/ActionButton';
import styles from './Header.module.css'

export default function Header() {
  
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image src={logo} alt="SeuOftalmo Logo"/>
      </div>
      <nav className={styles.headerLinks}>
        <div className={styles.menuItems}>
          <a href="#services">Serviços</a>
          <a href="#procedures">Procedimentos</a>
          <a href="#aboutUs">Quem Somos</a>
          <a href="#aboutLocation">Clínicas</a>
        </div>
        <ActionButton text="Agendar Consulta"/>
      </nav>
    </header>
  )
}