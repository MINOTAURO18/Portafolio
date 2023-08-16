import styles from "../Proyectos/Proyectos.module.css";
import img from "../../assets/Dominios.webp";
import img2 from "../../assets/Jamy.webp";
import img3 from "../../assets/porta2.webp";
import img4 from "../../assets/barberia.webp";
import img6 from "../../assets/kfc.webp";
import img7 from "../../assets/img7.webp";
import img8 from "../../assets/mundodev.webp";
import logo1 from "../../assets/react.svg";
import logo2 from "../../assets/html.svg";
import logo3 from "../../assets/sass.svg";
import logo4 from "../../assets/js.svg";
import logo5 from "../../assets/css.svg";
import logo7 from "../../assets/node.svg";
import logo8 from "../../assets/psql.svg";
import logo10 from "../../assets/figma.svg";
import logo12 from "../../assets/python.svg";
import github from "../../assets/github.svg";
import page from "../../assets/url.svg";
import code from "../../assets/code.svg";
import web from "../../assets/web.svg";
import desing from "../../assets/desing.svg";
import logo11 from "../../assets/tailwind.svg";
import express from "../../assets/express.svg";
import portafolio_da from "../../assets/portafolio_da.webp";
import portafolio_react from "../../assets/portafolio-react.webp";
import mui from "../../assets/mui.png";
import youtube from "../../assets/youtube.svg";
import tailwind from "../../assets/tailwind.webp";
import redux from "../../assets/redux.svg";
import books from "../../assets/books.webp";



const Proyectos = () => {
  const tarjetas = [
    {
      image: [img8],
      name: "MundoDev",
      descrip:
        "in MundoDev you can find resources and articles about programming and technologies.",
      tecno: [logo1, logo3, logo11],
      url: "https://minotauro18.github.io/MundoDev/",
      urlGithub: "https://github.com/MINOTAURO18/MundoDev",
    },

    {
      image: [img7],
      name: "TuDestino",
      descrip: "TuDestino lives your dream vacations at the best prices.",
      tecno: [logo2, logo5, logo3, logo4],
      url: "https://minotauro18.github.io/TuDestino/",
      urlGithub: "https://github.com/MINOTAURO18/TuDestino",
    },
    {
      image: [mui],
      name: "Copia_MUI",
      descrip: "copy of the MUI home page",
      tecno: [logo2, logo5, logo3],
      url: "https://minotauro18.github.io/Copia-MUI/",
      urlGithub: "https://github.com/MINOTAURO18/Copia-MUI",
      youtube: true,
      youtubeUrl: "https://www.youtube.com/watch?v=YYG6sy8t-t8&t=6346s",
    },
    {
      image: [portafolio_da],
      name: "Template-Portafolio",
      descrip:
        "Portfolio created by JAMY, so you have a place to show your projects to the world.",
      tecno: [logo2, logo5, logo4],
      url: "https://minotauro18.github.io/Portafolio_Plantilla/",
      urlGithub: "https://github.com/MINOTAURO18/Portafolio_Plantilla",
      youtube: true,
      youtubeUrl: "https://www.youtube.com/watch?v=rA6wBu1rEHM&t=8016s",
    },

    
    {
      image: [img],
      name: "DominiosYa",
      descrip: "DominiosYa where you can find your domain at the best.",
      tecno: [logo2, logo5, logo3, logo4],
      url: "https://minotauro18.github.io/DominiosYa/",
      urlGithub: "https://github.com/MINOTAURO18/DominiosYa",
    },
    
    {
      image: [tailwind],
      name: "Template-Portafolio",
      descrip: "Portfolio created by JAMY, so you have a place to show your projects to the world.",
      tecno: [logo2, logo5, logo11],
      url: "#",
      urlGithub: "https://github.com/MINOTAURO18/porta-tailwind",
    },
    
    {
      image: [books],
      name: "Books",
      descrip: "practica con React, Manejo del estado, filtros y Modo oscuro",
      tecno: [logo1, logo3, logo5],
      url: "https://books-eight-phi.vercel.app/",
      urlGithub: "https://github.com/MINOTAURO18/Books",
    },
    {
      image: [img4],
      name: "BarberShop",
      descrip: "BarberShop your style is our priority.",
      tecno: [logo2, logo3, logo4],
      url: "https://minotauro18.github.io/Barberia/",
      urlGithub: "https://github.com/MINOTAURO18/Barberia",
    },

    {
      image: [portafolio_react],
      name: "Template-Portafolio",
      descrip:
        "Portfolio created by JAMY, so you have a place to show your projects to the world.",
      tecno: [logo1, logo3, logo5],
      url: "https://minotauro18.github.io/Portafolio-Plantilla-React/",
      urlGithub: "https://github.com/MINOTAURO18/Portafolio-Plantilla-React",
      youtube: true,
      youtubeUrl: "https://www.youtube.com/watch?v=dJVrR4dPVoY",
    },
    {
      image: [img2],
      name: "JAMY",
      descrip: "JAMY is a site where you can find web development services.",
      tecno: [logo2, logo3, logo4],
      url: "https://minotauro18.github.io/marca/",
      urlGithub: "https://github.com/MINOTAURO18/marca",
    },

    {
      image: [img3],
      name: "Template-Portafolio",
      descrip:
        "Portfolio created by JAMY, so you have a place to show your projects to the world.",
      tecno: [logo2, logo5, logo4],
      url: "https://minotauro18.github.io/pagina-2/",
      urlGithub: "https://github.com/MINOTAURO18/pagina-2",
    },

    {
      image: [img6],
      name: "Template-KFC",
      descrip: "template created by JAMY, responsive and design practice.",
      tecno: [logo2, logo5],
      url: "https://minotauro18.github.io/KFC/",
      urlGithub: "https://github.com/MINOTAURO18/KFC",
    },
  ];

  return (
    <section className={styles.Proyectos}>
      <div className={styles.servicios}>
        <h2>Technologies</h2>
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
            <img src={logo11} alt="logo tailwind" />
            <h5>TAILWIND</h5>
          </div>

          <div>
            <img src={logo4} alt="logo js" />
            <h5>JAVASCRIPT</h5>
          </div>

          <div>
            <img src={logo7} alt="logo node" />
            <h5>NODE</h5>
          </div>

          <div>
            <img src={express} alt="logo express" />
            <h5>EXPRESS</h5>
          </div>

          <div>
            <img src={logo1} alt="logo react" />
            <h5>REACT</h5>
          </div>

        

          <div>
            <img src={logo8} alt="logo" />
            <h5>PostgreSQL</h5>
          </div>

          <div>
            <img src={redux} alt="logo Redux" />
            <h5>REDUX</h5>
          </div>
        </div>

        <div>
          <h2 className={styles.h2S}>Services</h2>
          <div className={styles.metodo}>
            <div>
              <img src={code} alt="imagen code" />
              <p>
                Development of specific solutions for your modern web
                applications.
              </p>
            </div>

            <div>
              <img src={web} alt="imagen web" />
              <p>technological projects adapted to your needs.</p>
            </div>

            <div>
              <img src={desing} alt="imagen desing" />
              <p>Responsive design for all devices</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        {tarjetas.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.image}>
                <img src={card.image[0]} alt={`imagen de ${card.name}`} />
              </div>

              <h3>{card.name}</h3>

              <span className={styles.descrip}>
                <p></p>
                {card.descrip}
              </span>

              <div className={styles.tecno}>
                <img src={card.tecno[0]} />
                <img src={card.tecno[1]} />
                <img src={card.tecno[2]} />
                <img src={card.tecno[3]} />
              </div>

              <div className={styles.btns}>
                <div>
                  <a target="_blank" href={card.urlGithub}>
                    <img src={github} alt="" />
                  </a>
                </div>
                <div>
                  <a target="_blank" href={card.url}>
                    <img src={page} alt="" />
                  </a>
                </div>

                {card.youtube == true ? (
                  <div>
                    <a target="_black" href={card.youtubeUrl}>
                      <img src={youtube} alt="" />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Proyectos;
