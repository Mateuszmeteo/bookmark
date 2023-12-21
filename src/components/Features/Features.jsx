import { Outlet } from "react-router-dom"

import React, { Fragment } from 'react';
import Media from 'react-media';

import Container from "../Container/Container"
import Simple from "./Simple"
import Speedy from "./Speedy"
import Easy from "./Easy"

import styles from './features.module.scss'
import LinksMobile from "./LinksMobile";
import LinksDesktop from "./LinksDesktop";

class Features extends React.Component {

 
    
    render() {

        return (
        <section className={styles.features}>
            <Container>
                <ul className={styles.features__list}>
                    <li className={styles.features__list__head}>
                        <h2 className={styles.features__list__head__title}>Features</h2>
                        <p className={styles.features__list__head__description}>Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
                    </li>
                    <li className={styles.features__list__links}>
                        <Media queries={{
                            small: "(max-width: 1439px)",
                            large: "(min-width: 1440px)"
                        }}>
                            {matches => (
                            <Fragment>
                                {matches.small && <LinksMobile />}
                                {matches.large && <LinksDesktop />}
                            </Fragment>
                            )}
                        </Media>
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
}

export default Features
