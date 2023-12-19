import Card from "react-bootstrap/Card";
import './TestimonialsCard.css'
import{motion} from 'framer-motion'
function TestimonialsCard({ desc, name, image, skill }) {
  return (
    <motion.div initial={{y:100 , opacity:0}}
              whileInView={{y:0 , opacity:1}}
              transition={{ duration: 1, delay: 0.8 }} className="tescards">
      <Card className="text-center">
        <Card.Body>
          <Card.Text className="fst-italic">{desc}</Card.Text>
          <Card.Img  src={image} />
          <Card.Title>{name}</Card.Title>
          <Card.Text className="opacity-50">{skill}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
export default TestimonialsCard;
