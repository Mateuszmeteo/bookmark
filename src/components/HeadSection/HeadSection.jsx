import Container from "../Container/Container"
import hero from './../../images/illustration-hero.svg'

import styles from './headSection.module.scss'



const HeadSection = () => {
    return (
        <section className={styles.headSection}>
            <Container>
                <ul className={styles.headSection__list}>
                    <li className={styles.headSection__list__el}>
                        <ul className={styles.headSection__list__el__box}>
                            <li><h1 className={styles.headSection__list__el__box__title}>A Simple Bookmark Manager</h1></li>
                            <li><p className={styles.headSection__list__el__box__description}>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p></li>
                            <li className={styles.headSection__list__el__box__btns}>
                                <button className={styles.headSection__list__el__box__btns__btnChrome}>Get it on Chrome</button>
                                <button className={styles.headSection__list__el__box__btns__btnFirefox}>Get it on Firefox</button>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headSection__list__back}>
                        <img className={styles.headSection__list__back__img} src={hero} alt="illustration-hero"/>
                    </li>
                </ul>

            </Container>
        </section>

    )
}

export default HeadSection