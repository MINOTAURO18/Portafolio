import styles from '../Proyectos/Proyectos.module.css';
import img from '../../assets/Dominios.webp'
import img2 from '../../assets/Jamy.webp'
import img3 from '../../assets/porta2.webp'
import img4 from '../../assets/barberia.webp'
import logo1 from '../../assets/react.svg'
import logo2 from '../../assets/html.svg'
import logo3 from '../../assets/sass.svg'
import logo4 from '../../assets/js.svg'
import logo5 from '../../assets/css.svg'
import github from '../../assets/github.svg';
import page from '../../assets/url.svg'

const Proyectos = () => {
    const tarjetas = [
        {
          image:[img],
          name:'DominiosYa',
          descrip:'DominiosYa donde puedes encontrar tu dominio al mejor de los precios',
          tecno:[logo2,logo5,logo3,logo4],
          url:'https://minotauro18.github.io/DominiosYa/',
          urlGithub:'https://github.com/MINOTAURO18/DominiosYa',
        },

        {
          image:[img4],
          name:'BarberShop',
          descrip:'BarberShop tu estilo es nuestra prioridad',
          tecno:[logo2,logo3,logo4],
          url:'https://minotauro18.github.io/pagina-jamy/',
          urlGithub:'https://github.com/MINOTAURO18/pagina-jamy',
        },

        {
            image:[img2],
            name:'JAMY',
            descrip:'JAMY es un sitio donde puedes encontrar servicios de desarrollo web',
            tecno:[logo2,logo3,logo4],
            url:'https://minotauro18.github.io/marca/',
            urlGithub:'https://github.com/MINOTAURO18/marca',
        },

        {
            image:[img3],
            name:'Template-Portafolio',
            descrip:'template creado por JAMY para que tengas un sitio en donde mostrarle al mundo tus proyectos',
            tecno:[logo2,logo5,logo4],
            url:'https://minotauro18.github.io/pagina-2/',
            urlGithub:'https://github.com/MINOTAURO18/pagina-2',
        },

    ]
    return (
        <section className={styles.Proyectos}>
           <div>
            <h2>tecnologias</h2>
           </div>
           <div className={styles.cards}>
            {
              tarjetas.map(card => {
                return (
                    <div className={styles.card}>
                        <div className={styles.image}>  
                       <img src={card.image[0]} alt={`imagen de ${card.name}`} />
                       </div>

                       <h3>{card.name}</h3>

                       <span className={styles.descrip}>{card.descrip}</span>

                       <div className={styles.tecno}>
                        <img src={card.tecno[0]} />
                        <img src={card.tecno[1]} />
                        <img src={card.tecno[2]} />
                        <img src={card.tecno[3]} />
                       </div>

                       <div className={styles.btns}>
                         <div>
                            <a  target="_blank" href={card.urlGithub}>
                            <img src={github} alt="" />
                            </a>
                         </div>
                         <div>
                        <a  target="_blank" href={card.url}>
                          <img src={page} alt="" />
                        </a>
                         </div>
                       </div>
                    </div>
                )
              } )
            }
          </div>
        </section>
    )
}

export default Proyectos; 