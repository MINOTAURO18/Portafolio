import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import github from '../../assets/github.svg'
import styles from '../Nav/Redes.module.css'

const Redes = () => {
    const redes = [linkedin, instagram, github];
    return (
        <div className={styles.Redes}>
          {
            redes.map((re, index) => {
                return <img className={styles.img} key={index} src={re}/>
            })
          }
        </div>
    )
}

export default Redes;