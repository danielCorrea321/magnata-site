import { useState } from 'react';
import styles from './style.module.css';

const Rollimgs = () => {

    let size = '-600px'

    const [rollImg, setRollImg] = useState(size);

    const RollImg = () => {
        if(rollImg === size){
            setRollImg('0px')
        }else{
            setRollImg(size)
        }
    }

    setTimeout(RollImg, 3000);

    return (
        <div className={styles.container}>
            <div
                className={styles.imgRoll}
                style={{marginLeft: rollImg}}
            >
                <img 
                    src="https://noticiasdatv.uol.com.br/media/_versions/artigos/dilsinho-show-reproducao-instagram_fixed_large.jpg" 
                    alt=""
                />
            </div>
            <div
                className={styles.imgRoll}
                style={{marginLeft: rollImg}}
            >
                <img src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-godfather-keyart.jpg.adapt.crop16x9.575p.jpg" alt="" />
            </div>
        </div>
    )
}

export default Rollimgs;