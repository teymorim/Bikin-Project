import { Col, Container, Row } from "react-bootstrap";

import { IoIosArrowForward } from "react-icons/io";
import './MyFooter.css'

function MyFooter(){
    return(
        <footer className="py-5">
            <Container >
                <Row className="p-2  row-cols-1 row-cols-md-3  justify-content-center align-items-start">
                    <Col>
                    <h1>Bikin</h1>
                    <p>
                        A108 Adam Street
                        New York, NY 535022
                        United States
                    </p> <br />
                    <p>
                        <span>Phone:</span>
                        +1 5589 55488 55
                    </p>
                    <p>
                        <span>Email:</span>
                        info@example.com
                    </p>
                    </Col>
                    <Col>
                        <h3 className="fs-4">Useful Links</h3>
                        <p><IoIosArrowForward color="#fff"/>Home</p>
                        <p><IoIosArrowForward color="#fff" />About Us</p>
                        <p><IoIosArrowForward color="#fff" />Services</p>
                        <p><IoIosArrowForward color="#fff" />Terms of service</p>
                        <p><IoIosArrowForward color="#fff" />Privacy policy</p>
                    </Col>
                    <Col>
                        <h3 className="fs-4">Our Services</h3>
                        <p><IoIosArrowForward color="#fff" />Web Design</p>
                        <p><IoIosArrowForward color="#fff" />Web Development</p>
                        <p><IoIosArrowForward color="#fff" />Product Management</p>
                        <p><IoIosArrowForward color="#fff" />Marketing</p>
                        <p><IoIosArrowForward color="#fff" />Graphic Design</p>
                    </Col>
                </Row>
            </Container>
            <Container className="text-center py-3 mt-3 rounded"  style={{backgroundColor: "#FFEBD8"}}>
                     <span>© Copyright Bikin. All Rights Reserved Designed by BootstrapMade</span> 
            </Container>
        </footer>
    )
}
export default MyFooter ;