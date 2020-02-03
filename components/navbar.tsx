import { useState } from 'react';
import Link from "next/link";
// import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { Container, Navbar as RSNavbar, Nav, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';

export default function AppNavbar({ user }: any) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const navbarStyle = { marginBottom: "25px" };
  return (
    <RSNavbar color="dark" dark expand="md" className="mb-5">
      <Container>
        <NavbarBrand href="/">Thoughts!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {user && (
              <>
                <Link href="/share-thought">
                  <a className="nav-link">New Thought</a>
                </Link>
                <Link href="/profile">
                  <a className="nav-link">Profile</a>
                </Link>
                <Link href="/logout">
                  <a className="nav-link">Log Out</a>
                </Link>
              </>
            )}
            {!user && (
              <Link href="/login">
                <a className="nav-link">Log In</a>
              </Link>
            )}
          </Nav>
        </Collapse>
      </Container>
    </RSNavbar>
  );
}