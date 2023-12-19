import axios from "axios";
import { useEffect, useState } from "react";
import {  Container, Row , Col } from "react-bootstrap";
import FeatureCard from "./FeatuesCard/FeatureCard";
import FeaturesItem from "./FeaturesItem/FeatureItem";
import {motion} from 'framer-motion'

function Features(){
    const [featureItems , setFeatureItems] = useState([]) ;
    const [featureCards , setFeatureCards] = useState([]) ;
    useEffect(() => {
        axios.get('https://teymorim.github.io/jsonapibikin/db.json')
        .then((response) => setFeatureItems(response.data.features))

        

        axios.get('https://teymorim.github.io/jsonapibikin/db.json')
        .then((response) => setFeatureCards(response.data.featuresCard))
    } , [])

    return(
        <section className="section2 my-3 ">
            <Container>
                <motion.h1 initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }} className="text-center py-4 fs-1 fw-bold">Features</motion.h1>
                <motion.p initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</motion.p>
                
                {featureItems.map(feature => (<FeaturesItem key={feature.id} {...feature} />))}  
                <Row className="row-cols-1 row-cols-md-3 gy-3">
                    {featureCards.map(card => <Col key={card.id}><FeatureCard {...card} /></Col>)}
                </Row>
            </Container>
        </section>
    )
}
export default Features ;