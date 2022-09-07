import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function Header() {
    return (
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/tentang-kami">Tentang Kami</Nav.Link>
                <Nav.Link as={NavLink} to="/hubungi-kami">Hubungi Kami</Nav.Link>
                <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header;