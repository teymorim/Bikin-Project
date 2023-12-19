import Card from "react-bootstrap/Card";
import './ServicesItem.css'
import {motion} from 'framer-motion'

function ServicesItem({image , title , desc}) {
  return (
    <motion.div style={{height: '100%' }} initial={{y:100 , opacity:0}}
    whileInView={{y:0 , opacity:1}}
    transition={{ duration: 1, delay: 0.5 }}>
    <Card className="text-center" style={{height: '100%' }}>
      <Card.Img style={{width: '30%' , backgroundColor: '#FFEBD8'}} className='m-auto p-4 my-3  rounded-circle' src={image} />
        <Card.Body className="d-flex flex-column justify-content-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {desc}
          </Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default ServicesItem;
