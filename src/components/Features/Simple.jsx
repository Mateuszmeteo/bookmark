import logo from './../../images/illustration-features-tab-1.svg'
import styles from './features.module.scss'

const Simple = () => {

    return (
        <div className={styles.outlet}>
            <ul className={styles.outlet__list}>
                <li className={styles.outlet__list__backSimple}>
                    <img className={styles.outlet__list__logo} src={logo} alt='logo'/>
                </li>
                <li className={styles.outlet__list__about}>
                    <h2 className={styles.outlet__list__about__title}>Bookmark in one click</h2>
                    <p className={styles.outlet__list__about__description}>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button className={styles.outlet__list__about__btn}>More info</button>
                </li>
            </ul>
        </div>
    )

}
export default Simple