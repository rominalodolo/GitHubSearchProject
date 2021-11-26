import React, { Component } from "react";
import GitHub from "./GitHub";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import Home from "./Home";

class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
              </Navbar.Brand> 
            </Navbar.Header>
            <Nav>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/github">GitHub</Link>
              </NavItem>
            </Nav>
          </Navbar>
          <Routes>
            <Route path="/github" component={GitHub} />
            <Route exact path="/" component={Home} />
            <Route path="/*" component={NotFound} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

class NotFound extends Component {
  render() {
    return <div>Not Found</div>;
  }
}
