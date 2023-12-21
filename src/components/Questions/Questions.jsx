import { useState } from "react"
import { ReactSVG } from 'react-svg'

import styles from './questions.module.scss'

import iconDown from './../../images/icon-arrow.svg'

const Questions = ( {title, sub}) => {

    const [description, setDescription] = useState(false)

    const openDes = () => {
        setDescription(true)
    }
    const closeDes = () => {
        setDescription(false)
    }


    return (
        <div className={styles.questionsBox}>
            <div className={styles.questionsBox__title}>
                <h4 className={styles.questionsBox__title__el}>{title}</h4>
                {!description && (<button className={styles.questionsBox__title__btn}
                                 onClick={openDes}>
                                <ReactSVG
                                src={iconDown}
                                beforeInjection={(svg) => {
                                svg.classList.add(styles.icon);
                                }}
                                alt="down"
                                />
                            </button>)}
                {description && ( <button className={styles.questionsBox__title__btn} 
                                onClick={closeDes}>
                                <ReactSVG
                                src={iconDown}
                                beforeInjection={(svg) => {
                                svg.classList.add(styles.iconClose);
                                }}
                                alt="up"
                                />
                            </button>) }
            </div>
                {description && (<p className={styles.questionsBox__subTitle}>{sub}</p>)}
        </div>
    )
}
export default Questions