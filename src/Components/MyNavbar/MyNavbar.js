import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './MyNavbar.css' ;

function MyNavbar() {
    const expand = 'lg'
  return (
    <>
      <Navbar key={expand} style={{backgroundColor : '#FFC5C5'}} expand={expand} className="mb-3">
        <Container >
          <Navbar.Brand className='fs-2 fw-bold'>Bikin</Navbar.Brand>
          <Navbar.Toggle  />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header style={{backgroundColor: '#FFC5C5'}} closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body style={{backgroundColor: '#FFC5C5'}}>
              <Nav className="justify-content-center  flex-grow-1 pe-3">
                <Nav.Link className='px-3' href="#action1">Home</Nav.Link>
                <Nav.Link className='px-3' href="#action2">About</Nav.Link>
                <Nav.Link className='px-3' href="#action2">Team</Nav.Link>
                <Nav.Link className='px-3' href="#action2">Servicees</Nav.Link>
                <Nav.Link className='px-3' href="#action2">Pricing</Nav.Link>
                <Nav.Link className='px-3' href="#action2">Contact</Nav.Link>
                <NavDropdown className='px-3'
                  title="DropDown"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
             <Button variant='outline-light'>Get Start</Button>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
export default MyNavbar;
