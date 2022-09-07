import { useState } from 'react';
import styles from './style.module.css';

const Rollimgs = () => {
    const [rollImg, setRollImg] = useState(true);

    function RollImg() {
        rollImg ? setRollImg(false) : setRollImg(true)
    }

    setInterval(RollImg, 3000);

    return (
        <div className={styles.container}>
            <div
                style={{marginLeft: rollImg ? '-1000px' : '0px'}}
            >
                <img 
                    src="https://noticiasdatv.uol.com.br/media/_versions/artigos/dilsinho-show-reproducao-instagram_fixed_large.jpg" 
                    alt="" 
                />
            </div>
            <div>
                <img src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/the-godfather-keyart.jpg.adapt.crop16x9.575p.jpg" alt="" />
            </div>
        </div>
    )
}

export default Rollimgs;