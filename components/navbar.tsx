import { useState } from 'react';
import Link from "next/link";
import { MDBIcon, MDBNavbarNav, MDBNavbar, MDBContainer, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu } from 'mdbreact';

export default function AppNavbar({ user }: any) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <MDBNavbar color="black" dark expand="md" className="mb-4">
      <MDBContainer>
        <Link href="/">
          <a className="navbar-brand">
          <strong>
            <MDBIcon icon="brain"/> Thoughts
          </strong>
          </a>
        </Link>

        <MDBNavbarToggler onClick={toggle} />

        <MDBCollapse id="navbarCollapse" isOpen={isOpen} navbar>

          {user && (
            <>
              <MDBNavbarNav left>
                <Link href="/share-thought">
                  <MDBNavItem>
                    <a className="nav-link">
                      <MDBIcon icon="plus-circle" /> New Thought
                    </a>
                  </MDBNavItem>
                </Link>
              </MDBNavbarNav>

              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user-circle" /> {user.nickname}
                    </MDBDropdownToggle>

                    <MDBDropdownMenu className="dropdown-default">
                      <Link href="/profile">
                        <a className="dropdown-item">
                          <MDBIcon icon="user" /> Profile
                        </a>
                      </Link>

                      <Link href="/logout">
                        <a className="dropdown-item">
                          <MDBIcon icon="sign-out-alt" /> Logout
                        </a>
                      </Link>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </>
          )}
          {!user && (
            <MDBNavbarNav right>
              <Link href="/login">
                <MDBNavItem>
                <a className="nav-link">
                  <MDBIcon icon="sign-in-alt" /> Log In
                </a>
                </MDBNavItem>
              </Link>
            </MDBNavbarNav>
          )}
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}