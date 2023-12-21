import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import styles from './features.module.scss'

const LinksMobile = () => {

    const LinkStyle = styled(NavLink)`
    /* background-color: gold; */
        position: relative;
        color: hsl(229, 8%, 60%);
        text-decoration: none;
        letter-spacing: 1px;
        font-family: 'Rubik', sans-serif;

        display: flex;
        justify-content: center;
        
        &.active {
            color: hsl(229, 31%, 21%);            
            
        }
        &.active::after {
            content: '';
            position: absolute;
            width: 52%;
            height: 4px;

            bottom: -16px;
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

export default LinksMobile
