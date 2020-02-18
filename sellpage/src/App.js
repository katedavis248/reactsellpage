import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

function App() {
  return (
    <div>

      <Nav>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
}




export default App;
