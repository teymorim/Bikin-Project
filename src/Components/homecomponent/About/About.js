import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";
import { IoIosArrowForward } from "react-icons/io";
import AboutItem from "./AboutItem/AboutItem";
import ClinetItem from "./ClinetItem/ClinetItem";
import "./About.css";
import {motion} from 'framer-motion'

function About() {
  const [aboutData, setAboutData] = useState([]);
  const [clinets , setClinets] = useState([]) ;
  useEffect(() => {
    axios
      .get("https://teymorim.github.io/jsonapibikin/db.json")
      .then((response) => setAboutData(response.data.about));
      axios.get("https://teymorim.github.io/jsonapibikin/db.json")
      .then((response) => setClinets(response.data.clinets))
  }, []);
 
  return (
    <>
      <section className="section1 py-5">
        <Container className="my-5">
          <Row className="align-items-center">
            <Col lg={4} className="text-justify">
              <h1>Voluptatem dignissimos provident quasi</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
              <Button variant="light">
                About us <IoIosArrowForward />
              </Button>
            </Col>

            <Col lg={8}>
              <Row className="row-cols-1 row-cols-md-2 gy-4 py-4 px-2">
                {aboutData.map((aboutit) => (
                  <Col key={aboutit.id}>
                    <AboutItem {...aboutit} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row >
               
          <Row className="row-cols-1 row-cols-md-2 row-cols-lg-6 bg-light rounded my-5">
          {clinets.map(clinet => (<Col key={clinet.id}><ClinetItem {...clinet} /></Col>))}
          </Row>
        </Container>
      </section>
    </>
  );
}
export default About;
