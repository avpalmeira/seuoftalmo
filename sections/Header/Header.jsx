import logo from '../../public/logo.jpg'
import Image from 'next/image'
import ActionButton from '../../shared/ActionButton';
import styles from './Header.module.css'

export default function Header() {
  
  return (
    <header className={styles.header}>
      <Image src={logo} width={141} height={65} alt="SeuOftalmo Logo"/>
      <div className={styles.headerLinks}>
        <nav className={styles.menuItems}>
          <a href="#services">Serviços</a>
          <a href="#procedures">Procedimentos</a>
          <a href="#aboutUs">Quem Somos</a>
          <a href="#aboutLocation">Clínica</a>
        </nav>
        <ActionButton text="Agendar Consulta" url="#"/>
      </div>
    </header>
  )
}