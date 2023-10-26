import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const NavBarTabs = () => {
  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/newspaper">Newspaper</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/police-report">Police Report</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/rules">Rules</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default NavBarTabs;
