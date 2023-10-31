// import React from 'react';
// import { Link } from 'react-router-dom';
// import Nav from 'react-bootstrap/Nav';

// const NavBarTabs = () => {
//   return (
//     <div>
//       <Nav justify variant="tabs" defaultActiveKey="/">
//         <Nav.Item>
//           <Nav.Link as={Link} to="/characters">Characters</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/newspaper">Newspaper</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/police-report">Police Report</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link as={Link} to="/rules">Rules</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </div>
//   );
// };

// export default NavBarTabs;

//Nav Bar Tabs with the modal/lightbox feature

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NewspaperModal from './NewspaperModal'; 
import '../styles/NavBar.css'

const NavBarTabs = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link as={Link} to="/characters" className="navbar-link">Characters</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link" onClick={openModal}>
            Newspaper
          </div>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/police-report" className="navbar-link">Police Report</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/locations" className="navbar-link">Locations</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/rules" className="navbar-link">Rules</Nav.Link>
        </Nav.Item>
      </Nav>

      <NewspaperModal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default NavBarTabs;

