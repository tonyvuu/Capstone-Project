import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import NewspaperModal from "./NewspaperModal";
import CharacterModal from './CharacterModal'
import PhotoModal from "./PhotoModal";
import AlibiModal from "./AlibiModal";

const NavBarTabs = () => {
  const [showCharacterModal, setShowCharacterModal] = useState(false);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showAlibiModal, setShowAlibiModal] = useState(false);

  const openCharacterModal = () => {
    setShowCharacterModal(true);
  };

  const closeCharacterModal = () => {
    setShowCharacterModal(false);
  };
  const openNewsModal = () => {
    setShowNewsModal(true);
  };

  const closeNewsModal = () => {
    setShowNewsModal(false);
  };
  const openPhotoModal = () => {
    setShowPhotoModal(true);
  };

  const closePhotoModal = () => {
    setShowPhotoModal(false);
  };
  const openAlibiModal = () => {
    setShowAlibiModal(true);
  };

  const closeAlibiModal = () => {
    setShowAlibiModal(false);
  };

  return (
    <div>
      <Nav justify variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <div className="nav-link" onClick={openCharacterModal}>
            Characters
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link" onClick={openNewsModal}>
            Newspaper
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link" onClick={openPhotoModal}>
            Photo Gallery
          </div>
        </Nav.Item>
        <Nav.Item>
          <div className="nav-link" onClick={openAlibiModal}>
            Alibi
          </div>
        </Nav.Item>
      </Nav>

      <CharacterModal show={showCharacterModal} onClose={closeCharacterModal} />
      <NewspaperModal show={showNewsModal} onClose={closeNewsModal} />
      <PhotoModal show={showPhotoModal} onClose={closePhotoModal} />
      <AlibiModal show={showAlibiModal} onClose={closeAlibiModal} />
    </div>
  );
};

export default NavBarTabs;
