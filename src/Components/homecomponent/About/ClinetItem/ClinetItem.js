import './ClinetItem.css'
import {motion} from 'framer-motion'
function ClinetItem({image}){
    return(
    <>
    <motion.div initial={{y:100 , opacity:0}}
                         whileInView={{y:0 , opacity:1}}
                         transition={{ duration: 1, delay: 0.5 }}
    className='clinets text-center'>
        <img  className="img-fluid px-4 my-5" src={image} alt="clinet image" />
    </motion.div>
    </>
    )
};
export default ClinetItem ;