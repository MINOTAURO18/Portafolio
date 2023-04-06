import styles from '../Inicio/inicio.module.css'
import Botones from './Botones';

const Inicio = () => {
    return(
      <section className={styles.Home}>
          <span>John Alexander Muñoz Yepez</span> 
        <div>
          <Botones/>
        </div>
      </section>
    )
}

export default Inicio;