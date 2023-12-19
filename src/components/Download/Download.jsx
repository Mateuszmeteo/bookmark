import Container from "../Container/Container"
import downloadFile from './../../data/downloads.json'


const Download = () => {
    return (
        <section>
            <Container>
                <ul>
                    <li>
                        <h2>Download the extension</h2>
                        <p>We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
                    </li>
                    <li>
                        <ul> 
                            {downloadFile.map((item) => (
                                <li>
                                    <ul>
                                        <li><img src={require(`./../../images/${item.icon}`)}/></li>
                                        <li>{item.title}</li>
                                        <li>{item.sub}</li>
                                        <li><img/></li>
                                        <li><button>Add & Install Extension</button></li>
                                    </ul>
                                    
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </Container>
        </section>

    )
}

export default Download