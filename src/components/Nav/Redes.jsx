import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import youtube from '../../assets/youtube.svg'
import styles from '../Nav/Redes.module.css'
import luna from '../../assets/luna.svg'
import sol from '../../assets/sol.svg'
import { useState } from 'react'
const Redes = () => {

    const [state, setState] = useState(sol);

    const cambio = () => {
      if (state == luna) setState(sol);
      if(state == sol) setState(luna);
      
    };

    return (
        <div className={styles.Redes}>
         <img onClick={cambio} width="22px" src={state} alt="" />
         <a target="_blank" href="https://www.linkedin.com/in/alexander-mu%C3%B1oz-4959a0255/">
          <img src={linkedin} alt="logo de linkedin" />
         </a>

         <a target="_blank" href="https://github.com/MINOTAURO18 ">
          <img src={github} alt="logo de github" />
         </a>

         <a target="_blank" href="https://www.youtube.com/channel/UC2KuDBEK0LJ8ZMku3KnrHMw">
          <img src={youtube} alt="logo de youtube" />
         </a>

         <a target="_blank" href="https://www.instagram.com/jamy_10011/">
          <img src={instagram} alt="logo de instagram" />
         </a>

        </div>
    )
}

export default Redes;