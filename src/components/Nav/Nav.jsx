import { Link } from "react-router-dom";
import Redes from "./Redes";
import Styles from '../Nav/Nav.module.css';

const Nav = () => {
    return(
        <header className={Styles.header}>
            
            <span className={Styles.logo}>JAMY</span>

          <nav className={Styles.nav}>
            <Link to='/portafolio'><span>I</span>nicio</Link>
            <Link to='/proyectos'><span>P</span>royectos</Link>
            <Link to='/sobremi'><span>S</span>obreMi</Link>
            <Link to='/mas'><span>M</span>as</Link>
          </nav>

          <nav className={Styles.nav_mobile}>
            <Link to='/portafolio'></Link>
            <Link to='/proyectos'></Link>
            <Link to='/sobremi'></Link>
            <Link to='/mas'></Link>
          </nav>

            <Redes/>

        </header>
    )
}

export default Nav;