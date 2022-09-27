import { Navbar as NavbarBs, Container, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useCartContext();
  return (
    <NavbarBs className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/store"}>
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/about"}>
            About
          </Nav.Link>
        </Nav>
        <Button
          variant="outline-white"
          style={{ position: "relative" }}
          onClick={openCart}
        >
          <i className="bi bi-cart3"></i>
          {cartQuantity > 0 && (
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: ".9rem",
                height: ".9rem",
                position: "absolute",
                top: 7,
                right: 0,
                transform: "translate(-25%, -25%)",
                fontSize: "10px",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBs>
  );
}
