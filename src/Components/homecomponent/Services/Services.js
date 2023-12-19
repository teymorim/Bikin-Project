import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ServicesItem from "./ServicesItem/ServicesItem";
import './Services.css'
import {motion} from 'framer-motion'

function Services(){

    const [serviceCards , setServiceCard] = useState([]) ;
    useEffect(() => {
        axios.get('https://teymorim.github.io/jsonapibikin/db.json')
        .then(response => setServiceCard(response.data.services))
    } , [])

    return(
        <section className="section3 text-center ">
            <Container>
            <motion.h1 initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }} className="py-4 fs-1 fw-bold">Services</motion.h1>
            <motion.p initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</motion.p>
            <Row className="my-4 row-cols-1 row-cols-md-2 row-cols-lg-4 gy-2 py-5">
                {serviceCards.map(card => <Col key={card.id}><ServicesItem {...card} /></Col>)}
            </Row>
            </Container>
        </section>
    )
}
export default Services;