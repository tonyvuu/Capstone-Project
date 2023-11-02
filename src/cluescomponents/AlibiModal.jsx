import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Card } from 'react-bootstrap';
import '../styles/Characters.css'

const CharacterInfoModal = ({ show, onClose, characterName, characterDescription, firstQuestion, firstAnswer, secondQuestion, secondAnswer, thirdQuestion, thirdAnswer, fourthQuestion, fourthAnswer}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header className='alibi' closeButton>
        <Modal.Title>Alibi for {characterName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='alibi'>
        <p>{characterDescription}</p>

        <p><b>Question: </b> {firstQuestion}</p>
        <p><b>Answer: </b> {firstAnswer}</p>

        <p><b>Question: </b> {secondQuestion}</p>
        <p><b>Answer: </b> {secondAnswer}</p>

        <p><b>Question: </b> {thirdQuestion}</p>
        <p><b>Answer: </b> {thirdAnswer}</p>

        <p><b>Question: </b> {fourthQuestion}</p>
        <p><b>Answer: </b> {fourthAnswer}</p>
      </Modal.Body>
      <Modal.Footer className='alibi'>
        <Button className='custom-button' onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const AlibiModal = ({ show, onClose }) => {
  const [characterInfo, setCharacterInfo] = useState({
    name: '',
    description:'',
    question1: '',
    answer: '',
    question2:'',
    answer2:'',
    question3:'',
    answer3:'',
    question4: '',
    answer4:''
  });

  const handleCharacterClick = (name, description, question1, answer, question2, answer2, question3, answer3, question4, answer4) => {
    setCharacterInfo({
      name,
      description,
      question1,
      answer,
      question2,
      answer2,
      question3,
      answer3,
      question4,
      answer4
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
              <Card className="character-card" key={index} onClick={() => handleCharacterClick(character.name, character.description, character.question1, character.answer, character.question2, character.answer2, character.question3, character.answer3, character.question4, character.answer4 )}>
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
        onClose={() => setCharacterInfo({ name: '', description:'', question1:'', answer:'', question2:'', answer2:'', question3:'', answer3:'', question4:'', answer4:'' })}
        characterName={characterInfo.name}
        characterDescription={characterInfo.description}
        firstQuestion={characterInfo.question1}
        firstAnswer={characterInfo.answer}
        secondQuestion={characterInfo.question2}
        secondAnswer={characterInfo.answer2}
        thirdQuestion={characterInfo.question3}
        thirdAnswer={characterInfo.answer3}
        fourthQuestion={characterInfo.question4}
        fourthAnswer={characterInfo.answer4}
      />
    </Modal>
  );
};

const characters = [
  {
    name: 'John McKinsey (step-husband)',
    question1: 'Why were the twins home alone?',
    answer: 'They came home unexpectedly from college last night and announce plans to take a year break which led to an argument with the parents. Twins left house at 7:30pm to cabin house and no contact until police called @ 5am.',
    question2: 'Who else knew they were there?',
    answer2:'Just John McKinsey (husband) and Ellen Doe. Was told to leave them alone and don’t tell anyone where they were. Unplanned event.',
    question3: 'Who has access to the keys?',
    answer3:'Only she and John carries the key. They kept an extra key under the doormat but the key now is missing.',
    question4: 'Who knows the security passcode?',
    answer4:'Passcode was change a month ago. Only 4 people knew the code besides the twins.',
    image: 'https://media.istockphoto.com/id/168266792/photo/portrait-of-a-man.jpg?s=612x612&w=0&k=20&c=UTjxul8rFDkqZ7UDr8n2E33ggEzShIm8Q_hr5peXjU0=',
  },
  {
    name: 'Ethan Bowlman (Drug Guy)',
    question1: '5"7',
    answer: '130',
    question2: 'hello',
    answer2:'helloanswer',
    question3: 'hello',
    answer3:'helloanswer',
    question4: 'hello',
    answer4:'helloanswer',
    image: 'https://media.istockphoto.com/id/481838078/photo/portrait-of-thoughtful-young-man-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9GvoPl0l_k5tq3HCwpC1iDTUVixCi5OXMQz61qmBvTA=',
  },
  {
    name: 'Jen Doe (Cousin)',
    question1: '5"7',
    answer: '130',
    question2: 'hello',
    answer2:'helloanswer',
    question3: 'hello',
    answer3:'helloanswer',
    question4: 'hello',
    answer4:'helloanswer',
    image: 'https://media.istockphoto.com/id/1323090122/photo/portrait-of-laughing-african-girl-in-white-t-shirt-looking-at-camera-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=ZIdjjzMyzWYyGIn3w0zcbio99eN0lnMZCL77H-sMOdU=',
  },
  {
    name: 'Ellen Doe (Mom)',
    question1: 'Why were the twins home alone?',
    answer: 'They came home unexpectedly from college last night and announce plans to take a year break which led to an argument with the parents. Twins left house at 7:30pm to cabin house and no contact until police called @ 5am.',
    question2: 'Who else knew they were there?',
    answer2:'Just John McKinsey (husband) and Ellen Doe. Was told to leave them alone and don’t tell anyone where they were. Unplanned event.',
    question3: 'Who has access to the keys?',
    answer3:'Only she and John carries the key. They kept an extra key under the doormat but the key now is missing.',
    question4: 'Who knows the security passcode?',
    answer4:'Passcode was change a month ago. Only 4 people knew the code besides the twins. \n\n Mom \nDad \n\n\nCousin',
    description:"hello",
    image: 'https://media.istockphoto.com/id/1132314350/photo/confident-mature-businesswoman-on-white-background.jpg?s=612x612&w=0&k=20&c=K8haUSz2LKE3BPwWSEa9vtdgQayBnC_Thg0aP17idqE=',
  },
  {
    name: 'David Can (Real-Estate)',
    question1: '5"7',
    answer: '130',
    question2: 'hello',
    answer2:'helloanswer',
    question3: 'hello',
    answer3:'helloanswer',
    question4: 'hello',
    answer4:'helloanswer',
    image: 'https://media.istockphoto.com/id/171372127/photo/keeping-it-corporate.jpg?s=612x612&w=0&k=20&c=QcBYYoWM6VmWp9ficaSsgTP_xB4XboCEUjeVSQsOkt8=',
  },
  {
    name: 'Adam Doe (Father)',
    question1: '5"7',
    answer: '130',
    question2: 'hello',
    answer2:'helloanswer',
    question3: 'hello',
    answer3:'helloanswer',
    question4: 'hello',
    answer4:'helloanswer',
    image: 'https://media.istockphoto.com/id/184918973/photo/sad-man-in-a-light-blue-t-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=wvQQmoyPtigX707EScGDcizgDi5ds5PH6pf_YZo1QeM=',
  },
  {
    name: 'Zach Bash (Neighbor)',
    question1: '5"7',
    answer: '130',
    question2: 'hello',
    answer2:'helloanswer',
    question3: 'hello',
    answer3:'helloanswer',
    question4: 'hello',
    answer4:'helloanswer',
    image: 'https://media.istockphoto.com/id/669545402/photo/man-cheerful-studio-portrait-concept.jpg?s=612x612&w=0&k=20&c=11ZQDff2uterNXcZGSNyMyIAzwc1tWoHMsQQil3T0lU=',
  },
  {
    name: 'Tyson Berry',
    question1: '5"7',
    answer: '130',
    question2: 'hello',
    answer2:'helloanswer',
    question3: 'hello',
    answer3:'helloanswer',
    question4: 'hello',
    answer4:'helloanswer',
    image: 'https://media.istockphoto.com/id/1302985743/photo/professional-cook-with-own-business-mature-male-cook-isolated-on-white-confident-chef-in.jpg?s=612x612&w=0&k=20&c=_Qo1qpoeHkEBp7cRwhT3z0zcu7pPFIZOlpU_HR3YD98=',
  },
  {
    name: 'Officer Paul',
    question1: '5"7',
    answer: '130',
    question2: 'hello',
    answer2:'helloanswer',
    question3: 'hello',
    answer3:'helloanswer',
    question4: 'hello',
    answer4:'helloanswer',
    image: 'https://media.istockphoto.com/id/536195589/photo/portrait-of-a-police-officer.jpg?s=612x612&w=0&k=20&c=57aqTIv86a22tHhowmVgIqZK4psSO54RWtUeJuwXuys=',
  }
];

export default AlibiModal;


