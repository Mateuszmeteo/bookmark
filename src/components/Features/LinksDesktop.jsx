import { Link, NavLink, Outlet } from "react-router-dom"
import styled from 'styled-components';

import styles from './features.module.scss'

const LinksDesktop = () => {

    const LinkStyle = styled(NavLink)`
    /* background-color: gold; */
        position: relative;
        color: hsl(229, 8%, 60%);
        text-decoration: none;
        letter-spacing: 1px;
        font-family: 'Rubik', sans-serif;
        font-size: 20px;
        padding: 0 40px 35px 40px;

        display: flex;
        justify-content: center;


        



        &.active {
            color: hsl(229, 31%, 21%);
            /* border-bottom: 3px solid hsl(0, 94%, 66%); */
            
            
        }
        &.active::after {
            content: '';
            position: absolute;
            width: 300px;
            height: 5px;

            bottom: -2px;
            background-color: hsl(0, 94%, 66%);
        }
        
    `;
    

    return (
        <ul className={styles.features__list__links__box}>
            <li className={styles.features__list__links__box__el}><LinkStyle to={'/simple'}>Simple Bookmarking</LinkStyle></li>
            <li className={styles.features__list__links__box__el}><LinkStyle to={'/speedy'}>Speedy searching</LinkStyle></li>
            <li className={styles.features__list__links__box__el}><LinkStyle to={'/easy'}>Easy Sharing</LinkStyle></li>
        </ul>
     
    )
}

export default LinksDesktop