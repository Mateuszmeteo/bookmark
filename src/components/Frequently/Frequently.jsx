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
                        <li className={styles.frequently__list__el}>
                            <h3>Frequently Asked Questions</h3>
                            <p>Howe are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>                        
                        </li>
                        <li className={styles.frequently__list__el}>
                            {freqFile.map((item) => (
                            <Questions
                                title={item.title}
                                sub={item.sub}
                            />))}
                        </li>
                        <li><button>More info</button></li>
                    </ul>
                </div>
                
            </Container>
        </section>

    )
}

export default Frequently