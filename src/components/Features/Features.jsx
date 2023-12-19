import { Link, NavLink, Outlet } from "react-router-dom"
import Container from "../Container/Container"
import Simple from "./Simple"
import Speedy from "./Speedy"
import Easy from "./Easy"

import styles from './features.module.scss'

const Features = () => {
    return (
        <section className={styles.features}>
            <Container>
                <ul className={styles.features__list}>
                    <li className={styles.features__list__head}>
                        <h2 className={styles.features__list__head__title}>Features</h2>
                        <p className={styles.features__list__head__description}>Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                    </li>
                    <li className={styles.features__list__links}>
                        <ul className={styles.features__list__links__box}>
                            <li className={styles.features__list__links__box__el}><NavLink to={'/simple'}>Simple Bookmarking</NavLink></li>
                            <li className={styles.features__list__links__box__el}><NavLink to={'/speedy'}>Speedy searching</NavLink></li>
                            <li className={styles.features__list__links__box__el}><NavLink to={'/easy'}>Easy Sharing</NavLink></li>
                        </ul>
                    </li>
                    <li className={styles.features__list__outlets}>
                        <Outlet>
                            <Simple/>
                            <Speedy />
                            <Easy />
                        </Outlet>
                    </li>
                </ul>
            </Container>
        </section>

    )
}

export default Features