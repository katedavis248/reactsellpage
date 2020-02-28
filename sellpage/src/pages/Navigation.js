import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div className="header">
            <Navbar color="faded" light>
                <NavbarBrand href="/" className="mr-auto">Treasure</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/Home/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Cart/">Cart</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Login/">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Sign Up/">Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;
