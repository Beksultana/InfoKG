import React from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from 'react-router-dom';
import './Toolbar.css';

const Toolbar = () => {
    return (
        <Navbar className="Navbar" dark light expand="md">
            <Container>
                <i className="fas fa-info-circle"></i>
                <NavbarBrand href="/" className="Logo">InfoKG</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/register">Катталуу</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={RouterNavLink} to="/login">Кируу</NavLink>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Toolbar;