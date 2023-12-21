import logo from './../../images/illustration-features-tab-3.svg'
import styles from './features.module.scss'

const Easy = () => {

    return (
        <div className={styles.outlet}>
            <ul className={styles.outlet__list}>
                <li className={styles.outlet__list__backEasy}>
                    <img className={styles.outlet__list__logo} src={logo} alt='logo'/>
                </li>
                <li className={styles.outlet__list__about}>
                    <h2 className={styles.outlet__list__about__title}>Share your bookmarks</h2>
                    <p className={styles.outlet__list__about__description}>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                    <button className={styles.outlet__list__about__btn}>More info</button>
                </li>
            </ul>
        </div>
    )

}
export default Easy