import logo from './../../images/illustration-features-tab-2.svg'
import styles from './features.module.scss'

const Speedy = () => {

    return (
        <div className={styles.outlet}>
            <ul className={styles.outlet__list}>
                <li className={styles.outlet__list__backSpeedy}>
                    <img className={styles.outlet__list__logo} src={logo} alt='logo' />
                </li>
                <li className={styles.outlet__list__about}>
                    <h2 className={styles.outlet__list__about__title}>Intelligent search</h2>
                    <p className={styles.outlet__list__about__description}>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                    <button className={styles.outlet__list__about__btn}>More info</button>
                </li>
            </ul>
        </div>
    )

}
export default Speedy