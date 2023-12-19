import { Button } from "react-bootstrap";
import './HeadHome.css'
import img from '../../../assets/images/hero-img.png'
import {motion} from 'framer-motion'
function HeadHome(){
    return(
        <>
       <section className="header d-flex flex-column justify-content-center align-items-center py-5 ">
        <motion.h1 initial={{scale:0 , opacity: 0 }}
                 whileInView={{scale: 1, opacity: '1'}}
                 transition={{ duration: 1, delay: 0.5 }}>
            Build Better Websites With Bikin
        </motion.h1>
        <motion.p initial={{scale:0 , opacity: 0 }}
                 whileInView={{scale: 1, opacity: '1'}}
                 transition={{ duration: 1, delay: 0.5 }}>
            We are team of talented designers making websites with Bootstrap
        </motion.p>
        <Button variant="outline-primary" style={{width: '20%'}}>Get Start</Button>
        <motion.img initial={{scale:0 , opacity: 0 }}
                 whileInView={{scale: 1, opacity: '1'}}
                 transition={{ duration: 1, delay: 0.5 }} className='img-fluid' style={{ paddingTop: '20px'}} src={img} alt="" />
       </section>
        </>
    )
}
export default HeadHome;