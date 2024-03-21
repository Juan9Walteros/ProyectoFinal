import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import Logo from '../img/Logo.png'

const NavbarTravel= () => {
    return(
        <>
       <Navbar className="navBg" expand="lg">
      <Container>
        <div>
        <Navbar.Brand href="#home">
          <img src={Logo}></img>
        </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/About"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/Destination"}>Destination</Nav.Link>
            <Nav.Link as={Link} to={"/Tour"}>Tour</Nav.Link>
            <Nav.Link as={Link} to={"/Blog"}>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        <form className="d-flex">
          <button className="btnNav1" type="button">Login</button>
          <button className="btnNav2" type="button">Sign up</button>
        </form>
      </Container>
    </Navbar>

    <section>
        <Outlet></Outlet>
    </section>
        </>
    )
}

export default NavbarTravel;