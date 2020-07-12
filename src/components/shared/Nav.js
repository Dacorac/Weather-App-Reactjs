import React from 'react';
import PropTypes from 'prop-types';

import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const Navigation = ({ title }) => {
    return (
        <Navbar className="main-nav" collapseOnSelect expand="lg">
            <Navbar.Brand className="main-nav__brand">
                <Link className="main-nav__brand-link" to="/">{title}</Link>
            </Navbar.Brand>
            <Navbar.Toggle className="main-nav__toggle" aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto main-nav__menu">
                    <NavLink className="main-nav__menu-link" to="/busquedas-recientes">
                        Búsquedas recientes
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
}

Navigation.propTypes = {
    title: PropTypes.string
};

export default Navigation;