import './AboutItem.css'
import {motion} from 'framer-motion'
function AboutItem({title , desc , image}){
    return(
        <motion.div initial={{y:100 , opacity:0}}
        whileInView={{y:0 , opacity:1}}
        transition={{ duration: 1, delay: 0.5 }}
         className="aboutItem">
            <img className="my-3 bg-light p-3 rounded-circle " src={image} alt="" />
        <h2>{title}</h2>
        <p>{desc}</p>
        </motion.div>
        
    )
}
export default AboutItem;