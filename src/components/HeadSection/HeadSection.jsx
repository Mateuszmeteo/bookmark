import Container from "../Container/Container"
import hero from './../../images/illustration-hero.svg'

import styles from './headSection.module.scss'



const HeadSection = () => {
    return (
        <section className={styles.headSection}>
            <Container>
                <ul className={styles.headSection__list}>
                    <li className={styles.headSection__list__el}>
                        <ul>
                            <li><h1>A Simple Bookmark Manager</h1></li>
                            <li><p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. try it for free.</p></li>
                            <li>
                                <button>Get it on Chrome</button>
                                <button>Get it on Firefox</button>
                            </li>
                        </ul>
                    </li>
                    <li className={styles.headSection__list__back}>
                        <img className={styles.headSection__img} src={hero} alt="illustration-hero"/>
                    </li>
                </ul>

            </Container>
        </section>

    )
}

export default HeadSection