import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid className={styles.headerContainer}>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: 'none', color: 'white', display: 'flex', alignItems: 'center' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nagarro_logo_new.svg/2560px-Nagarro_logo_new.svg.png" alt="Logo" className={styles.logoImage} />
              <h1 style={{ fontFamily: 'Times New Roman, serif', margin: 0 }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to Zaid's Blog !!</h1>
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Button type='button' variant="dark" className={styles.blogButton}>
                <Link to="/add-blog" style={{ textDecoration: 'none',  fontFamily: "Times New Roman", fontSize: "25px", color:"whitesmoke", background: "dark"}}>
                  + Blog
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
