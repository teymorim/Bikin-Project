import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

import { MdNotListedLocation } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import './Contact.css'

import { useState } from "react";
import axios from "axios";

function Contact() {
    
    const [formMessageDtail , setFormMessageDtail] = useState({})
    const resetForm = () => {
        setFormMessageDtail({
            name : '' , 
            lastname: '' ,
            subject: '' ,
            message: ''
        })
    }

    const formHandler = (e) => {
        setFormMessageDtail({...formMessageDtail , [e.target.name] : e.target.value})
    }
    

    const sendMessage = () => {
            axios.post('https://teymouri-bikin.iran.liara.run/messages' , formMessageDtail)
            Swal.fire({
                icon: "success",
                title: "Your Message Sent",
                showConfirmButton: false,
                timer: 1500
              });
       
    resetForm()
    }
  return (
    <section className="section8 ">
      <Container>
        <h1 className="text-center py-4 fs-1 fw-bold">Contact</h1>
        <p className="text-center">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>
        <Row className="row-cols-1 row-cols-lg-2">
          <Col>
            <Row className="p-4">
              <Col lg={12} className="location py-4 px-4  border border-primary rounded">
                <p>
                  <MdNotListedLocation size={"25px"} color={"blue"} />
                </p>
                <h2 className="fs-4">Our Address</h2>
                <span>A108 Adam Street, New York, NY 535022</span>
              </Col>
            
                <Col  className="email  py-4 px-4 my-2 me-2 border border-primary rounded">
                    <p>
                    <AiOutlineMail size={"25px"} color={"blue"} />
                    </p>
                    <h2 className="fs-4">Email Us</h2>
                    <span>info@example.com</span>
                </Col>
                <Col className="call py-4 px-4 my-2 ms-2  border border-primary rounded">
                    <p>
                    <IoCall size={"25px"} color={"blue"} />
                    </p>
                    <h2 className="fs-4">Call Us</h2>
                    <span>+1 5589 55488 55</span>
                </Col>
            
            </Row>
          </Col>

          <Col>
            <Row className="p-4">
            <Form>
                <Form.Group className="d-flex mb-2 " >
                  <Form.Control value={formMessageDtail.name} name="name" onChange={formHandler} className="me-1"   type="text" placeholder="Your Name" />
                  <Form.Control value={formMessageDtail.lastname} name="lastname" onChange={formHandler} type="text" placeholder="Your LastName" />
                </Form.Group>
                
                <Form.Group className="mb-2">
                    <Form.Control value={formMessageDtail.subject} name="subject" onChange={formHandler} type="text" placeholder="Subject" />
                </Form.Group>
                
                <Form.Group>
                  <Form.Control value={formMessageDtail.message} name="message" onChange={formHandler} as="textarea" rows={3} placeholder='Message' />
                </Form.Group>

                <Button onClick={sendMessage} variant="outline-primary my-3" type="button">Send Message</Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
