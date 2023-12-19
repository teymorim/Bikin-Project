import {motion} from 'framer-motion'

function FeatureCard({cardDesc , cardNumber , cardTitle}){
    return(
       <motion.div initial={{x:-100 , opacity:0}}
       whileInView={{x:0 , opacity:1}}
       transition={{ duration: 1, delay: 0.5 }} style={{height : '100%'}} className="p-3 my-2 border-start">
         <h2 className="fs-4 text-primary" >{cardNumber}</h2>
        <h1 className="fs-5">{cardTitle}</h1>
        <p>{cardDesc}</p>
       </motion.div>
    )
} 
export default FeatureCard ;