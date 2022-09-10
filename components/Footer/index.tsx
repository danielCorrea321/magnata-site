import styles from './style.module.css';

const Footer = () => {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodapeItems}>
                <div>olá mundo</div>
                <div>area 2</div>
                <div>area 3</div>
            </div>
            <div className={styles.finalDiv}>Web site desenvolvido por Daniel Santos Correa -<div>Linkedin</div>-</div>
        </footer>
    )
}

export default Footer;