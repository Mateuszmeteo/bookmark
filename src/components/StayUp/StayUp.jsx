import Container from "../Container/Container"

import styles from './stayUp.module.scss'

const StayUp = () => {
    return (
        <section className={styles.stayUpSection}>
            <Container>
                <ul>
                    <li>liczba</li>
                    <li>title</li>
                    <li>
                        <form>
                            <input
                                placeholder="Enter your email address"
                            />
                            <button>Contact Us</button>
                        </form>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default StayUp