import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="mx-auto mx-lg-0">
          {" "}
          <p
            className="p-2 mx-auto"
            style={{
              border: "1px solid white",
            }}
          >
            My Test App
          </p>{" "}
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
