import React, { useState } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {

  return (
    <div>
      
      <Stack direction="horizontal" gap={3}>
      <div className="p-2"><h1>DevTown Murder Mystery</h1></div>
      <div className="p-2 ms-auto">LeaderBoard</div>
      <div className="p-2">Register</div>
      <div className="p-2">Login</div>
    </Stack>

    <Stack direction="horizontal" gap={3}>
      <div className="p-2">
      <Nav justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Characters</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Newspaper</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Police Report</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Locations</Nav.Link>
      </Nav.Item>
    </Nav>
      </div>
    </Stack>
    
    </div>
  )
}

export default App
