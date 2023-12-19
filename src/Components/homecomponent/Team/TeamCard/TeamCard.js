import { FaTelegram, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import './TeamCard.css'
import {motion} from 'framer-motion'
function TeamCard({image , skill , name}) {
  return (
    <>
      <motion.div initial={{y:100 , opacity:0}}
                whileInView={{y:0 , opacity:1}}
                transition={{ duration: 1, delay: 0.8 }} className="card-container">
        <div className="cardImg">
          <img className="img-fluid"
            src={image}
            alt=""
          />

          <div className="cardDesc">
            <h3 style={{fontSize: '15px'}}>{name}</h3>
            <p style={{fontSize: '13px'}}>{skill}</p>
            <div className="desc-icons d-flex align-items-center justify-content-center">
              <p>
                <FaTelegram />
              </p>
              <p>
                <RiInstagramFill />
              </p>
              <p>
                <FaFacebook />
              </p>
              <p>
                <FaTwitter />
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default TeamCard;
