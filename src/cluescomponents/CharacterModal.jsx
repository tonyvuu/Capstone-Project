import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Card } from 'react-bootstrap';
import '../styles/Characters.css'

const CharacterInfoModal = ({ show, onClose, characterName, characterDescription, characterHeight, characterWeight, characterAlias, characterEyecolor }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header className='alibi' closeButton>
        <Modal.Title>{characterName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='alibi'>
        <p><b>Height:</b> {characterHeight}</p>
        <p><b>Weight:</b> {characterWeight}</p>
        <p><b>Alias:</b> {characterAlias}</p>
        <p><b>Eyecolor:</b> {characterEyecolor}</p>
        <p>{characterDescription}</p>
      </Modal.Body>
      <Modal.Footer className='alibi'>
        <Button className='custom-button' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const CharacterModal = ({ show, onClose }) => {
  const [characterInfo, setCharacterInfo] = useState({
    name: '',
    description: '',
    height: '',
    weight: '',
    alias:'',
    eyecolor:''
  });

  const handleCharacterClick = (name, description, height, weight, alias, eyecolor) => {
    setCharacterInfo({
      name,
      description,
      height,
      weight,
      alias,
      eyecolor
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
              <Card className="character-card" key={index} onClick={() => handleCharacterClick(character.name, character.description, character.height, character.weight, character.alias, character.eyecolor)}>
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
        onClose={() => setCharacterInfo({ name: '', description: '', height:'', weight:'', alias:'', eyecolor:'' })}
        characterName={characterInfo.name}
        characterDescription={characterInfo.description}
        characterHeight={characterInfo.height}
        characterWeight={characterInfo.weight}
        characterAlias={characterInfo.alias}
        characterEyecolor={characterInfo.eyecolor}



      />
    </Modal>
  );
};

const characters = [
  {
    name: 'John McKinsey',
    height: '5"10',
    weight: '170',
    eyecolor: "Dark brown",
    description: 'Past crimes - drinking & driving',
    alias:'Johnny McKinsey, Jonathan McKinsey',
    image: 'https://media.istockphoto.com/id/168266792/photo/portrait-of-a-man.jpg?s=612x612&w=0&k=20&c=UTjxul8rFDkqZ7UDr8n2E33ggEzShIm8Q_hr5peXjU0=',
  },
  {
    name: 'Ethan Bowlman',
    height: '6"0',
    weight: '195',
    eyecolor: "Brown",
    alias:'Dylan Anderson, Ollie Cobra, and Garden Guy',
    description: 'Past crimes - assaulting a public officer, unlawful transportation of drugs, strangulations, unlawful use of a weapon, manslaughter (2nd degree)',
    image: 'https://media.istockphoto.com/id/481838078/photo/portrait-of-thoughtful-young-man-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9GvoPl0l_k5tq3HCwpC1iDTUVixCi5OXMQz61qmBvTA=',
  },
  {
    name: 'Jen Doe',
    height: '5"2',
    weight: '115',
    eyecolor: "Dark brown",
    alias:'Jennica Doe, Jennifer Doe',
    description: 'Past crimes - theft, vandalism, underage drinking, fraud',
    image: 'https://media.istockphoto.com/id/1323090122/photo/portrait-of-laughing-african-girl-in-white-t-shirt-looking-at-camera-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=ZIdjjzMyzWYyGIn3w0zcbio99eN0lnMZCL77H-sMOdU=',
  },
  {
    name: 'Ellen Doe',
    height: '5"7',
    weight: '130',
    eyecolor: "Green",
    alias:'Eleni Doe, Elena Doe, Lawyer E. Doe',
    description: 'Past crimes - none',
    image: 'https://media.istockphoto.com/id/1132314350/photo/confident-mature-businesswoman-on-white-background.jpg?s=612x612&w=0&k=20&c=K8haUSz2LKE3BPwWSEa9vtdgQayBnC_Thg0aP17idqE='
  },
  {
    name: 'David Can',
    height: '5"9',
    weight: '150',
    eyecolor: "Brown",
    alias:'Andy Scott, Oliver Georgia, Canderson Mayhem',
    description: "Past crimes - restraining order, invasion of personal privacy, assault (1st degree), luring minors  ",
    image: 'https://media.istockphoto.com/id/171372127/photo/keeping-it-corporate.jpg?s=612x612&w=0&k=20&c=QcBYYoWM6VmWp9ficaSsgTP_xB4XboCEUjeVSQsOkt8=',
  },
  {
    name: 'Adam Doe',
    height: '5"9',
    weight: '168',
    eyecolor: "Hazel",
    alias:'Adam Doe',
    description: 'Past crimes - restraining order, public drunkness, driving under the influence',
    image: 'https://media.istockphoto.com/id/184918973/photo/sad-man-in-a-light-blue-t-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=wvQQmoyPtigX707EScGDcizgDi5ds5PH6pf_YZo1QeM=',
  },
  {
    name: 'Zach Bash',
    height: '6"3',
    weight: '250',
    eyecolor:'gray',
    alias:'Zach Bash',
    description:'Past crimes - menacing, stalking, animal abuse, disorderly conduct, assault',
    image: 'https://media.istockphoto.com/id/669545402/photo/man-cheerful-studio-portrait-concept.jpg?s=612x612&w=0&k=20&c=11ZQDff2uterNXcZGSNyMyIAzwc1tWoHMsQQil3T0lU=',
  },
  {
    name: 'Tyson Berry',
    height: '5"9',
    weight: '165',
    eyecolor:'Green',
    alias:'Tyson Berry, Ty Berry',
    description: 'Past crimes - none',
    image: 'https://media.istockphoto.com/id/1302985743/photo/professional-cook-with-own-business-mature-male-cook-isolated-on-white-confident-chef-in.jpg?s=612x612&w=0&k=20&c=_Qo1qpoeHkEBp7cRwhT3z0zcu7pPFIZOlpU_HR3YD98=',
  },
  {
    name: 'Officer Lamar Paul',
    height: '5"11',
    weight: '172',
    eyecolor:'Dark brown',
    alias:'Lamar Paul, Officer Paul',
    description: 'Officer at Morrow Police Department',
    image: 'https://media.istockphoto.com/id/536195589/photo/portrait-of-a-police-officer.jpg?s=612x612&w=0&k=20&c=57aqTIv86a22tHhowmVgIqZK4psSO54RWtUeJuwXuys=',
  },
  {
    name: 'Marty Carter',
    height: '5"5',
    weight: '125',
    alias:'Marty Carter, May Carter',
    eyecolor:'Amber',
    description: 'Past crimes - none',
    image: 'https://media.istockphoto.com/id/494480935/photo/young-professional-female-in-technical-field.jpg?s=612x612&w=0&k=20&c=TA-KA1f4Bn4WMJWET17y7mq1X0sNhgNUyELVW57KSqU=',
  }
];

export default CharacterModal;


