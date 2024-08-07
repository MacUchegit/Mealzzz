import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../index.css'; 

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand>
          <NavLink to="/" className="nav-link" activeClassName="active-link">
            Mealzz
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink to="/" exact className="nav-link" activeClassName="active-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active-link">
              About
            </NavLink>
            <NavLink to="/recipes" className="nav-link" activeClassName="active-link">
              Recipes
            </NavLink>
            <NavLink to="/meal-planner" className="nav-link" activeClassName="active-link">
              Meal Planner
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
