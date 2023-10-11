import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar
      bg="dark"
      variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand> <img src="../src/assets/images/logo" alt="" /> </Navbar.Brand>
        <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
      </Container>
    </Navbar>
  );
};
export default Navigation;
