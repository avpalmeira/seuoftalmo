import styles from './Procedures.module.css'
import { chooseTriangles } from '../../shared/doubleTriangle'

export default function Procedures() {
  return (
    <section id="procedures" className={styles.procedures}>
      <h2 className={styles.proceduresTitle}>Exames e Procedimentos</h2>
      <div className={styles.proceduresList}>
        <h3>Exames</h3>
        <p>
          O.C.T  •  Pentacam  •  Optomap  Interferometria  •  Yag Laser  •  Curva Tensional  •  Campimetria
          •  Biometria Mapeamento  •  Tonometria  •  Gonioscopia  •  Capsulotomia  •  Retinografia
          •  Ultrassonografia  •  Acuidade Visual  •  Microscopia  Ceratoscopia  •  Paquimetria
        </p>
      </div>
      <div className={styles.proceduresList}>
        <h3>Procedimentos</h3>
        <p>Pterígio (carne crescida)  •  Calázio  •  Refrativa  •  Catarata</p>
      </div>
      {chooseTriangles('topRightBottomLeft', 'white', 'secondary')}
    </section>
  )
}