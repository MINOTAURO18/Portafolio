import styles from '../Inicio/inicio.module.css'
import Botones from './Botones/Botones';
import Animacion from './animacion/Animacion';
import FullStack from './FullStack/FullStack'
import { motion } from 'framer-motion';
const Inicio = () => {
    return(
      <motion.section className={styles.Home} 
      // initial={{ opacity: 0 , transition: {duration: 0.2}}}
      //   animate={{ opacity: 1 , transition: {duration: 0.2} }}
      //   exit={{ opacity: 0 , transition: {duration: 0.2}}}
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