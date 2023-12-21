import Container from "../Container/Container"
import styles from './download.module.scss'

import iconGoogle from './../../images/logo-chrome.svg'
import iconFirefox from './../../images/logo-firefox.svg'
import iconOpera from './../../images/logo-opera.svg'
import dots from './../../images/bg-dots.svg'


const Download = () => {
    return (
        <section className={styles.downloadSection}>
            <Container>
                <ul className={styles.downloadSection__box}>
                    <li className={styles.downloadSection__box__head}>
                        <h2>Download the extension</h2>
                        <p className={styles.downloadSection__box__head__description}>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                    </li>
                    <li className={styles.downloadSection__box__cards}>
                        <ul className={styles.downloadSection__box__cards__list}> 
                            <li className={styles.downloadSection__box__cards__list__el__one}>
                                <ul className={styles.downloadSection__box__cards__list__el__cards}>
                                    <li><img className={styles.downloadSection__box__cards__list__el__cards__img} src={iconGoogle}/></li>
                                    <li><h3 className={styles.downloadSection__box__cards__list__el__cards__header}>Add to Chrome</h3></li>
                                    <li><p className={styles.downloadSection__box__cards__list__el__cards__description}>Minimum version 62</p></li>
                                    <li><img className={styles.downloadSection__box__cards__list__el__cards__dots} src={dots} alt="dots"/></li>
                                    <li><button className={styles.downloadSection__box__cards__list__el__cards__btn}>Add & Install Extension</button></li>
                                </ul>
                            </li>
                            <li className={styles.downloadSection__box__cards__list__el__two}>
                                <ul className={styles.downloadSection__box__cards__list__el__cards}>
                                    <li><img className={styles.downloadSection__box__cards__list__el__cards__img} src={iconFirefox}/></li>
                                    <li><h3 className={styles.downloadSection__box__cards__list__el__cards__header}>Add to Firefox</h3></li>
                                    <li><p className={styles.downloadSection__box__cards__list__el__cards__description}>Minimum version 55</p></li>
                                    <li><img className={styles.downloadSection__box__cards__list__el__cards__dots} src={dots} alt="dots"/></li>
                                    <li><button className={styles.downloadSection__box__cards__list__el__cards__btn}>Add & Install Extension</button></li>
                                </ul>
                            </li>
                            <li className={styles.downloadSection__box__cards__list__el__three}>
                                <ul className={styles.downloadSection__box__cards__list__el__cards}>
                                    <li><img className={styles.downloadSection__box__cards__list__el__cards__img} src={iconOpera}/></li>
                                    <li><h3 className={styles.downloadSection__box__cards__list__el__cards__header}>Add to Opera</h3></li>
                                    <li><p className={styles.downloadSection__box__cards__list__el__cards__description}>Minimum version 46</p></li>
                                    <li><img className={styles.downloadSection__box__cards__list__el__cards__dots} src={dots} alt="dots"/></li>
                                    <li><button className={styles.downloadSection__box__cards__list__el__cards__btn}>Add & Install Extension</button></li>
                                </ul>
                            </li>
                           
                        </ul>
                    </li>
                </ul>
            </Container>
        </section>

    )
}

export default Download