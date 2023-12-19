import { Button, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import './Portfolio.css'
import {motion} from 'framer-motion'
function Portfolio(){
    return(
        <section className="section4 text-center my-5">
           <Container>
           <motion.h1 initial={{y:100 , opacity:0}}
                        whileInView={{y:0 , opacity:1}}
                        transition={{ duration: 1, delay: 0.5 }} className="py-4 fs-1 fw-bold">Portfolio</motion.h1>
            <motion.p initial={{y:100 , opacity:0}}
                      whileInView={{y:0 , opacity:1}}
                      transition={{ duration: 1, delay: 0.5 }}>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</motion.p>
            <motion.div initial={{y:100 , opacity:0}}
                        whileInView={{y:0 , opacity:1}}
                        transition={{ duration: 1, delay: 0.5 }} className="btns ">
            <Button variant="mx-2"><Link className="text-decoration-none text-dark fw-bold" to='all'>ALL</Link></Button>
            <Button variant="mx-2"><Link className="text-decoration-none text-dark fw-bold" to='app'>APP</Link></Button>
            <Button variant="mx-2"><Link  className="text-decoration-none text-dark fw-bold" to='web'>Web</Link></Button>
            <Button variant="mx-2"><Link  className="text-decoration-none text-dark fw-bold" to='card'>Card</Link></Button>
            </motion.div>
            <Row className="my-5 justify-content-center align-items-start  row-cols-1 row-cols-md-2 row-cols-lg-3">
            <Outlet />
            </Row>
           </Container>
        </section>
    )
}
export default Portfolio;