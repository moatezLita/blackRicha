import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">My Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/cart">Cart</Nav.Link>
                    <Nav.Link href="/login">Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
