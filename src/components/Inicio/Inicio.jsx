import styles from '../Inicio/inicio.module.css'
import Botones from './Botones/Botones';
import Animacion from './animacion/Animacion';
import FullStack from './FullStack/FullStack'
import { motion } from 'framer-motion';
const Inicio = () => {
    return(
      <motion.section className={styles.Home}
      intial={{width: 0}}
      animate={{width: '85%'}}
      exit={{x: window.innerWidth}}
      >
        <div className={styles.full}>
        <FullStack/> 
        </div> 

        <div className={styles.btnAndName}>
          <span>John Alexander Muñoz</span> 
          <Botones/>
        </div>
           
        
          <Animacion/> 
      </motion.section>
    )
}

export default Inicio;