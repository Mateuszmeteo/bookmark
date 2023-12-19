import { Link, NavLink } from "react-router-dom"
import Container from "../Container/Container"
import logo from './../../images/logo-bookmark.svg'


import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.headSection}>
            <Container>
                <nav className={styles.headSection__nav}>
                    <ul className={styles.headSection__nav__list}>
                        <li>
                            <img className={styles.headSection__nav__logo} 
                                src={logo} alt="logo"/>
                        </li>
                        <li>
                            <ul className={styles.headSection__nav__buttons}>
                                <li><a className={styles.headSection__nav__buttons__link} href="">features</a></li>
                                <li><a className={styles.headSection__nav__buttons__link} href="">pricing</a></li>
                                <li><a className={styles.headSection__nav__buttons__link} href="">contact</a></li>
                                <li><Link className={styles.headSection__nav__buttons__btn}>login</Link></li>
                            </ul>
                        </li>
                        {/* <li>
                            <p>iii</p>
                        </li> */}
                    </ul>
                    
                    
                </nav>
            </Container>
        </header>

    )
}

export default Header