import styles from '../Proyectos/Proyectos.module.css';
import img from '../../assets/Dominios.webp'
import img2 from '../../assets/Jamy.webp'
import img3 from '../../assets/porta2.webp'
import img4 from '../../assets/barberia.webp'
import img5 from '../../assets/portafolio.webp'
import img6 from '../../assets/kfc.webp'
import logo1 from '../../assets/react.svg'
import logo2 from '../../assets/html.svg'
import logo3 from '../../assets/sass.svg'
import logo4 from '../../assets/js.svg'
import logo5 from '../../assets/css.svg'
import logo6 from '../../assets/redux.svg'
import logo7 from '../../assets/node.svg'
import logo8 from '../../assets/psql.svg'
import logo9 from '../../assets/typ.svg'
import logo10 from '../../assets/figma.svg'
import github from '../../assets/github.svg';
import page from '../../assets/url.svg'
import code from '../../assets/code.svg'
import web from '../../assets/web.svg'
import desing from '../../assets/desing.svg'


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
          url:'https://minotauro18.github.io/Barberia/',
          urlGithub:'https://github.com/MINOTAURO18/Barberia',
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

        {
          image:[img6],
          name:'Template-KFC',
          descrip:'template creado por JAMY, practica de responsive y diseño',
          tecno:[logo2,logo5],
          url:'https://minotauro18.github.io/KFC/',
          urlGithub:'https://github.com/MINOTAURO18/KFC',
        },

        {
          image:[img5],
          name:'Portafolio',
          descrip:'Portafolio de JAMY, donde conoceras un poco sobre quien es JAMY, sus proyectos y tecnologias que usa',
          tecno:[logo2,logo3,logo1],
          url:'https://minotauro18.github.io/portafolio/',
          urlGithub:'https://github.com/MINOTAURO18/portafolio',
        },

    ]



    return (
      <section className={styles.Proyectos}>
          <div className={styles.servicios}>
            <h2>Tecnologias y Proyectos</h2>
            <div className={styles.habi}>

              <div>
                <img src={logo2} alt="logo html" />
                <h5>HTML</h5>
              </div>

              <div>
                <img src={logo5} alt="logo css" />
                <h5>CSS</h5>
              </div>

              <div>
                <img src={logo3} alt="logo sass" />
                <h5>SASS</h5>
              </div>

              <div>
                <img src={logo4} alt="logo js" />
                <h5>JAVASCRIPT</h5>
              </div>

              <div>
                <img src={logo1} alt="logo react" />
                <h5>REACT</h5>
              </div>

              <div>
                <img src={logo6} alt="logo redux" />
                <h5>REDUX</h5>
              </div>
              <div>
                <img src={logo7} alt="logo node.js" />
                <h5>NODE.JS</h5>
              </div>

              <div>
                <img src={logo9} alt="logo tp" />
                <h5>TYPESCRIPT</h5>
              </div>

              <div>
                <img src={logo8} alt="logo posgresql" />
                <h5>PostgreSQL</h5>
              </div>


              <div>
                <img src={logo10} alt="logo figma" />
                <h5>FIGMA</h5>
              </div>
              
            </div>


            <div>
              <h2>Servicios</h2>
              <div  className={styles.metodo}>

              
                <div>
                  <img src={code} alt="" /> 
                  <p>Desarrollo de soluciones específicas para tus aplicaciones web modernas.
</p>
                </div> 
                
                <div>
                  <img src={web} alt="" />
                  <p>proyectos tecnológicos y adaptados a tus necesidades.</p>
                </div>

                <div>
                  <img src={desing} alt="" />
                  <p>Diseño adaptivo para todos los dispositivos</p>
                </div>


            </div>
            </div>

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

                       <span  className={styles.descrip}><p></p>{card.descrip}</span>

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