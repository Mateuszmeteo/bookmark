import { Link, NavLink } from "react-router-dom"
import Container from "../Container/Container"
import logo from './../../images/logo-bookmark.svg'
import burger from './../../images/icon-hamburger.svg'


import styles from './header.module.scss'
import { useState } from "react"
import MobileMenu from "../MobileMenu/MobileMenu"

const Header = () => {
    const [menu, setMenu] = useState(false)
    const open = () => {
        setMenu(true)
    }
    const close = () => {
        setMenu(false)
    }

    return (
        <header className={styles.headSection}>
            <Container>
                <nav className={styles.headSection__nav}>
                    <ul className={styles.headSection__nav__list}>
                        <li>
                            <img className={styles.headSection__nav__logo} 
                                src={logo} alt="logo"/>
                        </li>
                        <li className={styles.desktop}>
                            <ul className={styles.headSection__nav__buttons}>
                                <li><Link className={styles.headSection__nav__buttons__link} to='/'>features</Link></li>
                                <li><Link className={styles.headSection__nav__buttons__link} to='/'>pricing</Link></li>
                                <li><Link className={styles.headSection__nav__buttons__link} to='/'>contact</Link></li>
                                <li><Link className={styles.headSection__nav__buttons__btn} to='/'>login</Link></li>
                            </ul>
                        </li>
                        <li className={styles.mobile}>
                            <button className={styles.mobile__btn} onClick={open}>
                                <img className={styles.mobile__btn__img} src={burger} />
                            </button>
                        </li>
                    </ul>
                    
                    
                </nav>
                
            </Container>
            {menu && <MobileMenu close={close} />}
        </header>

    )
}

export default Header