
import HeadSection from "../../components/HeadSection/HeadSection"
import Features from "./../../components/Features/Features"
import Download from "../../components/Download/Download"
import Frequently from "../../components/Frequently/Frequently"
import StayUp from './../../components/StayUp/StayUp'

import styles from './home.module.scss'


const Home = () => {

    return (
        <main className={styles.main}>
            <HeadSection />
            <Features />
            <Download />
            <Frequently />
            <StayUp />
        </main>

    )
}

export default Home