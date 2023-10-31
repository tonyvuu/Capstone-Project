import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CharacterInfoModal = ({ show, onClose, characterName, characterDescription }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{characterName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{characterDescription}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CharacterInfoModal;
