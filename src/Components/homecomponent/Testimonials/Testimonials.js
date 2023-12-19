import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TestimonialsCard from "./TestimonialsCard/TestimonialsCard";
import {motion} from 'framer-motion'
function Testimonials(){
    const [tesCards , setTesCards] = useState([]) ;
    useEffect(() => {
        axios.get('https://teymorim.github.io/jsonapibikin/db.json')
        .then(response => setTesCards(response.data.testimonials))
    } , [])
    return(
        <section style={{backgroundColor: '#FFEBD8'}} className="section5 text-center py-5 ">
            <Container>
                <motion.h1 initial={{y:100 , opacity:0}}
                            whileInView={{y:0 , opacity:1}}
                            transition={{ duration: 1, delay: 0.5 }} className="py-4 fs-1 fw-bold">Testimonials</motion.h1>
                <motion.p initial={{y:100 , opacity:0}}
                            whileInView={{y:0 , opacity:1}}
                            transition={{ duration: 1, delay: 0.5 }}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</motion.p>
                <Row className="row-cols-1 row-cols-md-3 gy-3 my-3">
                    {tesCards.map(card => <Col key={card.id}><TestimonialsCard {...card} /></Col>)}
                </Row>
            </Container>
        </section>
    )
}
export default Testimonials ;