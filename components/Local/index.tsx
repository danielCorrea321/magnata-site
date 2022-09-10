import styles from './style.module.css'

const Local = () => {
    return (
        <div className={styles.container}>
            <h2>LOCAL</h2>
            <div className={styles.localInfos}>
                <div className={styles.leftSide}>
                    <h4>O nomeLocal é um espaço amplo com boa musica.</h4>
                    <div>No local contem mesas, garçoms que estão disponiveis à todo momento, petiscos de alta qualidade, além de boa musica.</div>
                    <h4>Localizado em Rio das Pedras - Jacarepagua</h4>
                    <div>Est. Jacarapegua 5000 em frente ao ...</div>
                    <img src="https://media-blog.keeperformaturas.com.br/wp-content/uploads/2019/07/O-que-observar-ao-visitar-uma-festa-de-formatura.jpg" alt="" />
                </div>
                <div className={styles.rightSide}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad itaque doloribus architecto aliquam accusamus voluptas minima qui odit ratione.</div>
            </div>
        </div>
    )
}

export default Local;