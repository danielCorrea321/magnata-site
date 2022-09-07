import { eventos } from "../../utils/eventos";
import styles from './style.module.css';

const Eventos = () => {
    return (
        <div className={styles.areaEventos}>
            {eventos.map((item, index)=>(
                <div className={styles.eachEvent} key={index}>
                    <img src={item.img} alt="" />
                    <div className={styles.nomeEvent}>{item.name}</div>
                    <div className={styles.dataEvent}>{item.data}</div>
                </div>
            ))}
        </div>
    )
}

export default Eventos;