import styles from '../Mas/Mas.module.css';
import celu1 from '../../assets/celuInicio.webp'
import celu2 from '../../assets/celuProye.webp'
import celu3 from '../../assets/celuSobre.webp'
import pc1 from '../../assets/pcInicio.webp'
import pc2 from '../../assets/pcProye.webp'
import pc3 from '../../assets/pcSobre.webp'

const Mas = () => {

    
    return (
        <div className={styles.contenedor}>
                
            
		<aside>
			<div className={styles.contenedorTemario} id="temario">
				<h3 className={styles.titulo}>bocetos de mi portafolio</h3>
				<ul className={styles.lista}>
					<li className={styles.activo}><a href="#1">Inicio</a></li>
					<li><a href="#2">Proyectos</a></li>
					<li><a href="#3">SobreMi</a></li>
				</ul>
			</div>
		</aside>
		<main>
			<div className={styles.card} id="1">
				<h3> <span className={styles.nota}>Nota:</span>Pronto estos bocetos estarán en Figma, por el momento disfruta de estos garabatos</h3>
			</div>
			<div className={styles.card} id="1">
				<h1>Sección de inicio</h1>
				<div className={styles.div}>
					<div>
					  <img src={pc1} alt="" />
					</div>

					<div className={styles.mobile}>
					  <img src={celu1} alt="" />
					</div>
				</div>
			</div>
			<div className={styles.card} id="2">
				<h1>Sección de Proyectos</h1>
				<div className={styles.div}>
					<div>
					  <img src={pc2} alt="" />
					</div>

					<div className={styles.mobile}>
					  <img src={celu2} alt="" />
					</div>
				</div>
			</div>
			<div className={styles.card} id="3">
				<h1>Sección SobreMi</h1>
				<div className={styles.div}>
					<div>
					  <img src={pc3} alt="" />
					</div>

					<div className={styles.mobile}>
					  <img src={celu3} alt="" />
					</div>
				</div>
			</div>
			
			
		</main>
	</div>
	   
	
    )
}

export default Mas;