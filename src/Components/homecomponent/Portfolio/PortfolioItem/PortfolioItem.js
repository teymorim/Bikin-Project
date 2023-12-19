import './PortfolioItem.css'
import {motion} from 'framer-motion'
function PortfolioItem({image}){
    return(
        <motion.div className='container-img ' initial={{ opacity:0 , scale:0 }}
                    animate={{ opacity:1 , scale: 1}}
                    transition={{ duration: 1.5 }}>
            <img className="img-fluid py-2 " src={image}alt="" />
        </motion.div>
       
        
    )
}
export default PortfolioItem ;