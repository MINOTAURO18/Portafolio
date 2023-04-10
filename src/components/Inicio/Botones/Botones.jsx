import styles from '../Botones/botones.module.css';

const Botones = () => {
    return(
      <div className={styles.Botones}>
       <button><a className={styles.a} href="#">CV</a></button>
       <button><a className={styles.a} href="#">GMAIL</a></button>
      </div> 
    )
}
 
export default Botones; 