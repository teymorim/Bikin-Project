import { Col , Row } from "react-bootstrap";
import {motion} from 'framer-motion'
import './FeaturesItem.css'
function FeaturesItem({image ,  title , desc , explain}){
    return(
       <Row  className=' FeaturesItem gy-4 py-4 justify-content-center align-items-center'>
            <Col md={6} className='px-4'>
            <motion.img initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }} className="img-fluid" src={image}  />
            </Col>

            <Col md={6} className='px-4'>
                <motion.h1 initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }}>
                    {title}
                </motion.h1>
                <motion.p initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }}>
                    {desc}
                </motion.p>
                <motion.p initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }}>
                    {explain}
                </motion.p>
            </Col>
       </Row>
    )
}
export default FeaturesItem ;