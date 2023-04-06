import styles from '../Inicio/inicio.module.css'
import Botones from './Botones/Botones';
import Animacion from './animacion/Animacion';
import FullStack from './FullStack/FullStack'
const Inicio = () => {
    return(
      <section className={styles.Home}>
        <FullStack/>

        <div className={styles.btnAndName}>
          <span>John Alexander Muñoz</span> 
          <Botones/>
        </div>

        <Animacion/>
      </section>
    )
}

export default Inicio;