import styles from '../Botones/botones.module.css';

const Botones = () => {
    return(
      <div className={styles.Botones}>
       <button><a className={styles.a} Target='-blank' href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJTNHSCmLGXmjRjlthDCCdvbBSmkQjcKJvmPrTdvGPvPLLBFVWrVqnfjrSLNvfPWGXSvMZL">GMAIL</a></button>
       <button><a className={styles.a}  href="#">CV</a></button>
      </div> 
    )
}
 
export default Botones; 