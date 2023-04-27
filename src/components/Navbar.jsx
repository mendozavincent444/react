import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>

        <Link to="/">
          <Navbar.Brand>Sample Website</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item>Action</NavDropdown.Item>
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link disabled>
              Link
            </Nav.Link>
          </Nav>

          <ul class="navbar-nav d-flex flex-row me-1">
            <li class="px-2">
              <Link to="/login">
                <button type="button" class="btn btn-outline-success">Login</button>
              </Link>
            </li>
            <li class="px-2">
              <Link to="/register">
                <button type="button" class="btn btn-outline-warning">Register</button>
              </Link>
            </li>


          </ul>


        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;