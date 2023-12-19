import { Container, Row, Col } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Pricing.css'
function Pricing() {
  return (
    <section className="section7 text-center">
      <Container>
        <h1 className="py-4 fs-1 fw-bold">Pricing</h1>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <Row className="row-cols-1 row-cols-md-3 gy-3 my-4 py-5">
          <Col>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>FREE</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <span style={{fontSize :'15px'}} className='text-primary'>$</span> <span className="fs-1 text-primary">0</span> <span className="opacity-50">/month</span>
                </Card.Subtitle>
                <Card.Text>
                  Aida dere <br />
                  Nec feugiat nisl <br /> 
                  Nulla at volutpat dola <br />
                  <span className="opacity-50 text-decoration-line-through">Pharetra massa</span> <br />
                  <span className="opacity-50 text-decoration-line-through">Massa ultricies mi</span>
                </Card.Text>
                <Button variant="outline-primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="p-3 bg-primary text-light">
              <Card.Body>
                <Card.Title>BUSINESS</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <span style={{fontSize :'15px'}} className='text-light'>$</span> <span className="fs-1 text-light">19</span> <span className="text-light">/month</span>
                </Card.Subtitle>
                <Card.Text>
                  Aida dere <br />
                  Nec feugiat nisl <br />
                  Nulla at volutpat dola <br />
                  Pharetra massa <br />
                  <span className="text-decoration-line-through">Massa ultricies mi</span>
                </Card.Text>
                <Button variant="outline-light">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="p-3">
              <Card.Body>
                <Card.Title>DEVELOPER</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <span style={{fontSize :'15px'}} className='text-primary'>$</span> <span className="fs-1 text-primary">29</span> <span className="opacity-50">/month</span>
                </Card.Subtitle>
                <Card.Text>
                  Aida dere <br />
                  Nec feugiat nisl <br />
                  Nulla at volutpat dola <br />
                  Pharetra massa <br />
                  Massa ultricies mi <br />
                </Card.Text>
                <Button variant="outline-primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Pricing;
