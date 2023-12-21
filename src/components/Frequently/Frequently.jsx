import styles from './frequently.module.scss'

import Container from "../Container/Container"


import freqFile from './../../data/frequently.json'
import Questions from "../Questions/Questions"


const Frequently = () => {

    


    return (
        <section>
            <Container>
                <div className={styles.frequently}>
                    <ul className={styles.frequently__list}>
                        <li className={styles.frequently__list__head}>
                            <h2 className={styles.frequently__list__head__title}>Frequently Asked Questions</h2>
                            <p className={styles.frequently__list__head__description}>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>                        
                        </li>
                        <li className={styles.frequently__list__quest}>
                            {freqFile.map((item) => (
                            <Questions
                                title={item.title}
                                sub={item.sub}
                            />))}
                        </li>
                        <li><button className={styles.frequently__list__btn}>More info</button></li>
                    </ul>
                </div>
                
            </Container>
        </section>

    )
}

export default Frequently