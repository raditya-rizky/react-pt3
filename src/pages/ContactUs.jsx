import { Container, Navbar, Nav } from "react-bootstrap";
import { Switch, useRouteMatch, Route, NavLink } from "react-router-dom"

function ContactUs() {
    const match = useRouteMatch()

  return (
    <Container>
      <h1>Hubungi Kami</h1>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Cabang</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={`${match.path}/bali`}>Bali</Nav.Link>
            <Nav.Link as={NavLink} to={`${match.path}/jakarta`}>Jakarta</Nav.Link>
            <Nav.Link as={NavLink} to={`${match.path}/padang`}>Padang</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Switch>
        <Route path={`${match.path}/bali`}>
          <h1>Cabang Bali</h1>
        </Route>
        <Route path={`${match.path}/jakarta`}>
          <h1>Cabang Jakarta</h1>
        </Route>
        <Route path={`${match.path}/padang`}>
          <h1>Cabang Padang</h1>
        </Route>
        <Route path={`${match.path}`}>
          <h1>Pilih Cabang</h1>
        </Route>
        
      </Switch>

    </Container>
  );
}

export default ContactUs;