
import React, {Fragment} from 'react';
import {NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink} from "react-router-dom";

const AnonymousMenu = () => (
    <Fragment>
        <NavItem>
            <NavLink tag={RouterNavLink} to="/register" exact>Катталуу</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={RouterNavLink} to="/login" exact>Кируу</NavLink>
        </NavItem>
    </Fragment>
);

export default AnonymousMenu;