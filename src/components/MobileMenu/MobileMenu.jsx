import { Link } from 'react-router-dom'
import styles from './mobileMenu.module.scss'
import { ReactSVG } from 'react-svg'


import logo from './../../images/logo-bookmark.svg'
import fb from './../../images/icon-facebook.svg'
import tw from './../../images/icon-twitter.svg'
import btnClose from './../../images/icon-close.svg'

const MobileMenu = ( {close} ) => {

    return (
        <div className={styles.mobile}>
            <div className={styles.mobile__box}>
                <ul className={styles.mobile__box__head}>
                    <li><ReactSVG
                                src={logo}
                                beforeInjection={(svg) => {
                                svg.classList.add(styles.logo);
                                }}
                                alt="logo"
                            />
                    </li>
                    <li><button className={styles.mobile__box__head__btnClose} onClick={close}><img  src={btnClose}/></button></li>
                </ul>
                <ul className={styles.mobile__box__links}>
                    <li className={styles.mobile__box__links__el}>
                        <Link to='' className={styles.mobile__box__links__el__link}>features</Link></li>
                    <li className={styles.mobile__box__links__el}>
                        <Link to='' className={styles.mobile__box__links__el__link}>pricing</Link></li>
                    <li className={styles.mobile__box__links__el}>
                        <Link to='' className={styles.mobile__box__links__el__link}>contact</Link></li>
                    <li className={styles.mobile__box__links__listBtn}>
                        <Link to='' className={styles.mobile__box__links__listBtn__btnLink}>
                            <button className={styles.mobile__box__links__listBtn__btnLink__el}>login</button></Link></li>
                </ul>
                <ul className={styles.mobile__box__media}>
                    <li>
                            <ReactSVG
                                src={fb}
                                beforeInjection={(svg) => {
                                svg.classList.add(styles.icon);
                                }}
                                alt="Facebook"
                            />
                    </li>
                    <li>
                            <ReactSVG
                                src={tw}
                                beforeInjection={(svg) => {
                                svg.classList.add(styles.icon);
                                }}
                                alt="Twitter"
                            />
                    </li>
                </ul>
                
            </div>
            
        </div>
    )

}
export default MobileMenu