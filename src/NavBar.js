import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import  Stack  from 'react-bootstrap/Stack';

function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="navbar-dark">
      <Container>
        <Navbar.Brand href="#home">Michael Presson</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Stack direction='horizontal' gap={2}>
            <Button href="https://www.linkedin.com/in/michael-presson/" target='_blank' className='button__icon__LinkedIn'>LinkedIn</Button>
            <Button href='https://github.com/MichaelPresson' target='_blank' className='button__icon__GitHub'>GitHub</Button>
            </Stack>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;