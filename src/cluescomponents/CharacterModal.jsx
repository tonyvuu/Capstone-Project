import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Card } from 'react-bootstrap';
import '../styles/Characters.css'

const CharacterInfoModal = ({ show, onClose, characterName, characterDescription, characterHeight, characterWeight }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{characterName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>Height:</b> {characterHeight}</p>
        <p><b>Weight:</b> {characterWeight}</p>
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

const NewspaperModal = ({ show, onClose }) => {
  const [characterInfo, setCharacterInfo] = useState({
    name: '',
    description: '',
    height: '',
    weight: ''
  });

  const handleCharacterClick = (name, description, height, weight) => {
    setCharacterInfo({
      name,
      description,
      height,
      weight
    });
  };

  return (
    <Modal show={show} onHide={onClose} size="xl">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body >
        <Container>
          <Row className='mx-2 row row-cols-3'>
            {characters.map((character, index) => (
              <Card className="character-card" key={index} onClick={() => handleCharacterClick(character.name, character.description, character.height, character.weight)}>
                <Card.Img className="character-image" src={character.image} alt={character.name} />
                <Card.Body>
                  <Card.Title className="custom-font">{character.name}</Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="custom-button" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
      <CharacterInfoModal
        show={characterInfo.name !== ''}
        onClose={() => setCharacterInfo({ name: '', description: '', height:'', weight:'' })}
        characterName={characterInfo.name}
        characterDescription={characterInfo.description}
        characterHeight={characterInfo.height}
        characterWeight={characterInfo.weight}

      />
    </Modal>
  );
};

const characters = [
  {
    name: 'John McKinsey (step-husband)',
    height: '5"7',
    weight: '130',
    description: 'Description for John McKinsey',
    image: 'https://media.istockphoto.com/id/168266792/photo/portrait-of-a-man.jpg?s=612x612&w=0&k=20&c=UTjxul8rFDkqZ7UDr8n2E33ggEzShIm8Q_hr5peXjU0=',
  },
  {
    name: 'Ethan Bowlman (Drug Guy)',
    height: '5"7',
    weight: '130',
    description: 'Description for Ethan Bowlman',
    image: 'https://media.istockphoto.com/id/481838078/photo/portrait-of-thoughtful-young-man-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9GvoPl0l_k5tq3HCwpC1iDTUVixCi5OXMQz61qmBvTA=',
  },
  {
    name: 'Jen Doe (Cousin)',
    height: '5"7',
    weight: '130',
    description: 'Description for Jen Doe',
    image: 'https://media.istockphoto.com/id/1323090122/photo/portrait-of-laughing-african-girl-in-white-t-shirt-looking-at-camera-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=ZIdjjzMyzWYyGIn3w0zcbio99eN0lnMZCL77H-sMOdU=',
  },
  {
    name: 'Ellen Doe (Mom)',
    height: '5"7',
    weight: '130',
    description: 'Description for Ellen Doe',
    image: 'https://media.istockphoto.com/id/1132314350/photo/confident-mature-businesswoman-on-white-background.jpg?s=612x612&w=0&k=20&c=K8haUSz2LKE3BPwWSEa9vtdgQayBnC_Thg0aP17idqE='
  },
  {
    name: 'David Can (Real-Estate)',
    height: '5"7',
    weight: '130',
    description: 'Description for David Can',
    image: 'https://media.istockphoto.com/id/171372127/photo/keeping-it-corporate.jpg?s=612x612&w=0&k=20&c=QcBYYoWM6VmWp9ficaSsgTP_xB4XboCEUjeVSQsOkt8=',
  },
  {
    name: 'Adam Doe (Father)',
    height: '5"7',
    weight: '130',
    description: 'Description for Adam Doe',
    image: 'https://media.istockphoto.com/id/184918973/photo/sad-man-in-a-light-blue-t-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=wvQQmoyPtigX707EScGDcizgDi5ds5PH6pf_YZo1QeM=',
  },
  {
    name: 'Zach Bash (Neighbor)',
    height: '5"7',
    weight: '130',
    description: 'Description for Zach Bash',
    image: 'https://media.istockphoto.com/id/669545402/photo/man-cheerful-studio-portrait-concept.jpg?s=612x612&w=0&k=20&c=11ZQDff2uterNXcZGSNyMyIAzwc1tWoHMsQQil3T0lU=',
  },
  {
    name: 'Tyson Berry',
    height: '5"7',
    weight: '130',
    description: 'Description for Tyson Berry',
    image: 'https://media.istockphoto.com/id/1302985743/photo/professional-cook-with-own-business-mature-male-cook-isolated-on-white-confident-chef-in.jpg?s=612x612&w=0&k=20&c=_Qo1qpoeHkEBp7cRwhT3z0zcu7pPFIZOlpU_HR3YD98=',
  },
  {
    name: 'Officer Paul',
    height: '5"7',
    weight: '130',
    description: 'Description for Officer Paul',
    image: 'https://media.istockphoto.com/id/536195589/photo/portrait-of-a-police-officer.jpg?s=612x612&w=0&k=20&c=57aqTIv86a22tHhowmVgIqZK4psSO54RWtUeJuwXuys=',
  }
  // Add more character objects here
];

export default NewspaperModal;

