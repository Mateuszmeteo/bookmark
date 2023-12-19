
import { ReactSVG } from 'react-svg'

import styles from './footer.module.scss'

import Container from "../Container/Container"

import logo from './../../images/logo-bookmark.svg'
import fb from './../../images/icon-facebook.svg'
import tw from './../../images/icon-twitter.svg'


const Footer = () => {


    return (
        <footer className={styles.footSection}>
            <Container>
                <div className={styles.footSection__box}>
                    <ul className={styles.footSection__box__logoList}>
                        <li className={styles.footSection__box__logoList__el}>
                            <ReactSVG
                                src={logo}
                                beforeInjection={(svg) => {
                                svg.classList.add(styles.logo);
                                }}
                                alt="logo"
                            /></li>
                        <li className={styles.footSection__box__logoList__el}>
                            <a className={styles.footSection__box__logoList__el__link} href=''>features</a>
                        </li>
                        <li className={styles.footSection__box__logoList__el}>
                            <a className={styles.footSection__box__logoList__el__link} href=''>pricing</a>
                        </li>
                        <li className={styles.footSection__box__logoList__el}>
                            <a className={styles.footSection__box__logoList__el__link} href=''>contact</a>
                        </li>
                    </ul>
                    <ul className={styles.footSection__box__mediaList}>
                        <li className={styles.footSection__box__mediaList__el}>
                            <ReactSVG
                                src={fb}
                                beforeInjection={(svg) => {
                                svg.classList.add(styles.icon);
                                }}
                                alt="Facebook"
                            />
                        </li>
                        <li className={styles.footSection__box__mediaList__el}><ReactSVG
                                src={tw}
                                beforeInjection={(svg) => {
                                svg.classList.add(styles.icon);
                                }}
                                alt="Twitter"
                            />
                        </li>
                    </ul>
                </div>
                <ul></ul>
            </Container>
        </footer>

    )
}

export default Footer