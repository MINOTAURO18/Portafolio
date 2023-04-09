import styles from '../Mas/Mas.module.css';
import Animaciones from '../Animaciones/Animacion';

const Mas = () => {

    
    return (
        <div className={styles.contenedor}>
                
            
		<aside>
			<div className={styles.contenedorTemario} id="temario">
				<h3 className={styles.titulo}>Temario</h3>
				<ul className={styles.lista}>
					<li className={styles.activo}><a href="#1">1. Primer Capítulo</a></li>
					<li><a href="#2">2. Segundo Capítulo</a></li>
					<li><a href="#3">3. Tercer Capítulo</a></li>
					<li><a href="#4">4. Cuarto Capítulo</a></li>
					<li><a href="#5">5. Quinto Capítulo</a></li>
				</ul>
			</div>
		</aside>
		<main>
			<div className={styles.card} id="1">
				<h1>1. Primer Capítulo</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam blanditiis sapiente, alias ut optio corrupti harum? Voluptatum obcaecati nobis perferendis similique aperiam impedit, qui ullam. Sint impedit aspernatur cumque.</p>
			</div>
			<div className={styles.card} id="2">
				<h1>2. Segundo Capítulo</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam blanditiis sapiente, alias ut optio corrupti harum? Voluptatum obcaecati nobis perferendis similique aperiam impedit, qui ullam. Sint impedit aspernatur cumque.</p>
			</div>
			<div className={styles.card} id="3">
				<h1>3. Tercer Capítulo</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam blanditiis sapiente, alias ut optio corrupti harum? Voluptatum obcaecati nobis perferendis similique aperiam impedit, qui ullam. Sint impedit aspernatur cumque.</p>
			</div>
			<div className={styles.card} id="4">
				<h1>4. Cuarto Capítulo</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam blanditiis sapiente, alias ut optio corrupti harum? Voluptatum obcaecati nobis perferendis similique aperiam impedit, qui ullam. Sint impedit aspernatur cumque.</p>
			</div>
			<div className={styles.card} id="5">
				<h1>5. Quinto Capítulo</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam blanditiis sapiente, alias ut optio corrupti harum? Voluptatum obcaecati nobis perferendis similique aperiam impedit, qui ullam. Sint impedit aspernatur cumque.</p>
			</div>
		</main>
	</div>
	   
	
    )
}

export default Mas;