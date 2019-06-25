import React, {Fragment} from 'react';
import {Container, Nav, Navbar, NavbarBrand} from "reactstrap";
import './Toolbar.css';
import UserMenu from "./Menus/UserMenu";
import AnonymousMenu from "./Menus/AnonymousMenu";

const Toolbar = ({user, logout}) => {
    return (
        <Navbar dark color="info" light expand="md">
            <Container>
                <i className="fas fa-info-circle"></i>
                <NavbarBrand href="/" className="Logo">InfoKG</NavbarBrand>
                <Nav className="ml-auto" navbar>
                    {
                        user ?
                            <Fragment>
                                <UserMenu user={user} logout={logout}/>
                            </Fragment> : <AnonymousMenu/>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Toolbar;