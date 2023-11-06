import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Card } from 'react-bootstrap';
import '../styles/Characters.css'

const CharacterInfoModal = ({ show, onClose, characterName, characterDescription, firstQuestion, firstAnswer, secondQuestion, secondAnswer, thirdQuestion, thirdAnswer, fourthQuestion, fourthAnswer, fifthQuestion, fifthAnswer, sixthQuestion, sixthAnswer, timeStamp}) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header className='alibi' closeButton>
        <Modal.Title>Alibi for {characterName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className='alibi'>
        <p><b>Interview @ {timeStamp}</b></p>
        <p><b>Description:</b> <br/>{characterDescription}</p>

        <p><b>Question: </b> {firstQuestion}</p>
        <p><b>Answer: </b> {firstAnswer}</p>

        <p><b>Question: </b> {secondQuestion}</p>
        <p><b>Answer: </b> {secondAnswer}</p>

        <p><b>Question: </b> {thirdQuestion}</p>
        <p><b>Answer: </b> {thirdAnswer}</p>

        <p><b>Question: </b> {fourthQuestion}</p>
        <p><b>Answer: </b> {fourthAnswer}</p>

        <p><b>Question: </b> {fifthQuestion}</p>
        <p><b>Answer: </b> {fifthAnswer}</p>

        <p><b>Question: </b> {sixthQuestion}</p>
        <p><b>Answer: </b> {sixthAnswer}</p>
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
    time:'',
    description:'',
    question1: '',
    answer: '',
    question2:'',
    answer2:'',
    question3:'',
    answer3:'',
    question4: '',
    answer4:'',
    question5:'',
    answer5:'',
    question6:'',
    answer6:''
  });

  const handleCharacterClick = (name, description, question1, answer, question2, answer2, question3, answer3, question4, answer4, question5, answer5, question6, answer6, time) => {
    setCharacterInfo({
      name,
      time,
      description,
      question1,
      answer,
      question2,
      answer2,
      question3,
      answer3,
      question4,
      answer4,
      question5,
      answer5, 
      question6, 
      answer6
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
              <Card className="character-card" key={index} onClick={() => handleCharacterClick(character.name, character.description, character.question1, character.answer, character.question2, character.answer2, character.question3, character.answer3, character.question4, character.answer4,character.question5, character.answer5, character.question6,character.answer6, character.time )}>
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
        onClose={() => setCharacterInfo({ name: '', description:'', question1:'', answer:'', question2:'', answer2:'', question3:'', answer3:'', question4:'', answer4:'', question5:'', answer5:'', question6:'', answer6:'', time:'' })}
        characterName={characterInfo.name}
        characterDescription={characterInfo.description}
        timeStamp={characterInfo.time}
        firstQuestion={characterInfo.question1}
        firstAnswer={characterInfo.answer}
        secondQuestion={characterInfo.question2}
        secondAnswer={characterInfo.answer2}
        thirdQuestion={characterInfo.question3}
        thirdAnswer={characterInfo.answer3}
        fourthQuestion={characterInfo.question4}
        fourthAnswer={characterInfo.answer4}
        fifthQuestion={characterInfo.question5}
        fifthAnswer={characterInfo.answer5}
        sixthQuestion={characterInfo.question6}
        sixthAnswer={characterInfo.answer6}
      />
    </Modal>
  );
};

const characters = [
  {
    name: 'John McKinsey',
    time:' January 2, 2009 - 6:33am',
    description:"60 year old, (404) 264 - 7271, Consultant, resides in 1503 Moore Drive, GA 3765, Married to Ellen Doe, Stepfather of the twin's",
    question1: 'What happen last night?',
    answer: "The twins came home unannounced around 7pm and share their plans of taking break from college. It upsets me because 26 year olds shouldn't be home. Because of that, we got into a huge argument and twins decided not to deal with the conversation and left to the beach house.",
    question2: 'Where did you go last night?',
    answer2:"Went to the drugstore around 8pm to pick up prescription (antidepressant & insomnia). After I came home, Ellen and I went to bed around 10pm. I am almost sure she was home all night.",
    question3: "Did you tell anyone where the twins are?",
    answer3:'I actually bump into Jen Doe at the drugstore but she was acting a bit unusual.. she was tightly clutching a brown paper bag but yes, I was upset and told her about the situation.',
    question4: "Where is the twin's father?",
    answer4:"He's not answering his phone. Eh.. it doesnt matter, he's an alcoholic and a loser anyways.",
    question5:"Who else knew they were there?",
    answer5:"Probably the weird neighbor that lives about 300 yards northeast of the beach house in the old shack. I can't recall his name.. but he is always peering around with his binoculars.",
    question6:"Can you tell me more about your neighbor?",
    answer6:"He's actually a very big dude but I believe he is diagnosed with something. OH! I just remembered something; he told me he lived here for many years but was born in a mental institution. He makes me uncomfortable - I usually shoo him away if he gets close. Think his name was z..zach?",
    image: 'https://media.istockphoto.com/id/168266792/photo/portrait-of-a-man.jpg?s=612x612&w=0&k=20&c=UTjxul8rFDkqZ7UDr8n2E33ggEzShIm8Q_hr5peXjU0=',
  },
  {
    name: 'Ethan Bowlman',
    time:'January 2, 2009 - 2:05pm',
    description: "44-years old, (404) 509 - 1198, Horticulturist, resides in 6793 Bowman Road, GA 9037, Ex-Con, Divorced, has several weird tattoos: Beast eating flesh, and bloody arts.",
    question1: "Did you do any work recently at 1 Bourbon Drive?",
    answer: 'I believe I did a job there two weeks ago. I did my routine garden work around the house.',
    question2: 'Did you find anything unusual or noticeable?',
    answer2:"My work doesn't require me entering the house but what do you mean noticeable? Did the house get robbed or something? Any idiot would find that hidden key underneath the doormat.",
    question3: 'Where were you last night?',
    answer3:'Finished my job at 9pm and drove around the area to scout for some potential work.',
    question4: 'Did you drive by 1 Bourbon Drive?',
    answer4:'Yes, I pulled in front of the house to ask for some work to be done but the lights were off so I left.',
    question5:"Then what did you do last night?",
    answer5:"Nothing. Went home and watch some TV. Had a few beers and went to bed around 1 am.",
    question6:"What kind of vehicle do you drive?",
    answer6:"A white van. I got a bunch of tools in there for work like trimmers, rakes, shovels, and etc.",
    image: 'https://media.istockphoto.com/id/481838078/photo/portrait-of-thoughtful-young-man-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9GvoPl0l_k5tq3HCwpC1iDTUVixCi5OXMQz61qmBvTA=',
  },
  {
    name: 'Jen Doe',
    time:"January 2, 2009 - 9:24am",
    description:"20 year old, (404) 143 - 3411, Tattoo artist @ Tattoos by Marty, resides in 6793 Tanner Road, GA 9021, Single, Cousin of the twin's, Her dad and their dad are brothers.",
    question1: "Where were you last night?",
    answer: "I left work because I felt sick. I then went to the drugstore for pepto and saw John McKinsey(twin's stepdad) around 8:10pm",
    question2: 'Did he tell you anything you can recall?',
    answer2:"The twins taking a break from school. I called them around 8:30pm if I could join them but they wanted to be alone.",
    question3: "Where did you go after the drugstore?",
    answer3:"I spent the night at my boss's place -- Marty Carter's apartment.",
    question4: 'Did you tell anyone where they were?',
    answer4:"I remember I received a call around 9pm from uncle Adam (twin's dad) looking for the twin's. He's been trying to reach them but the twin's always give him the cold shoulders. I did told Uncle Adam that they were staying at the beach house.",
    question5:"Do you know the security passcode?",
    answer5:"I think so? Unless they changed it. I was there to pick up some clothes, shoes, and other stuff. They had a key under the doormat I used but I have not told anyone that information.",
    question6:"Why did we find a picture with a drawn-in evil smile and horn on your face?",
    answer6:"I'm not sure.. maybe they are mad at me for something? We are girls after all. * seems like she is hiding something *",
    image: 'https://media.istockphoto.com/id/1323090122/photo/portrait-of-laughing-african-girl-in-white-t-shirt-looking-at-camera-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=ZIdjjzMyzWYyGIn3w0zcbio99eN0lnMZCL77H-sMOdU=',
  },
  {
    name: 'Ellen Doe',
    time:'January 2, 2009 - 6:20am',
    question1: 'Why were the twins home alone?',
    answer: 'They came home unexpectedly from college last night and announce plans to take a year break which led to a heated argument. Twins left house at 7:30pm to beach house and no contact until police called at 5am.',
    question2: 'Who else knew they were there?',
    answer2:'Just John and I. Was told to leave them alone and don’t tell anyone where they were. It was an unplanned event.',
    question3: 'Who has access to the keys?',
    answer3:'Again, only John and I carried the key. We kept an extra key under the doormat but the key now is missing.',
    question4: 'Who knows the security passcode?',
    answer4:"Passcode was change a month ago. Only 4 people knew the code besides the twins. Me, Stepdad (John McKinsey), Father (Adam Doe), Cousin (Jen Doe). Jen is the twin's cousin on their father's side, and I gave her the passcode 2 weeks ago to pick up some shoes and clothes the twins don't wear anymore. The father, Adam, needed a place to stay last weekend so I let him use the beach house.",
    description:"52 years old, (404) 234 - 9976, Lawyer, resides in 1503 Moore Drive, GA 3765, Married to John McKinsey, Mother of the twin's",
    question5:"What did you do last night?",
    answer5:'I stayed home for for the night but Adam went to the store around 8pm for some milk but came back without it.. we also went to bed around 10:30pm.',
    question6:'Who is the girl with drawn-in evil smile and horns?',
    answer6:'Jen Doe. I am not sure of their relationship but Jen has always been "kind of difficult."',
    image: 'https://media.istockphoto.com/id/1132314350/photo/confident-mature-businesswoman-on-white-background.jpg?s=612x612&w=0&k=20&c=K8haUSz2LKE3BPwWSEa9vtdgQayBnC_Thg0aP17idqE=',
  },
  {
    name: 'David Can',
    time:'January 2, 2009 - 4:02pm',
    description:"37-years old, (404) 743 - 9331, Real-Estate Developer, resides in 20 Pan Court, GA 3765, Single",
    question1: 'Were you near Marsh Lagoon last night?',
    answer: 'Yes, I been looking for properties to buy.',
    question2: 'Why were you looking for properties at night?',
    answer2:"Of course a regular person wouldn't know. An important part of real estate is being able to get the night view as well as the day.",
    question3: 'What time did you head home?',
    answer3:'Around midnight.',
    question4:"Did you see anything unusual last night?",
    answer4:"I don't recall anything unusual but one thing does come in mind. There was a big, crazy guy hiding in the woods on Bourbon Drive.",
    question5:'Did you interact with him?',
    answer5:"I usually interact with anyone that owns a property so I probably did. Wait, I remember handing him my business card. He was erratic, weird, and smells like trash.",
    question6: "Did you find anything out of the ordinary?",
    answer6: "He was the last person I talked to but as I was leaving, he was just working on his truck.",
    image: 'https://media.istockphoto.com/id/171372127/photo/keeping-it-corporate.jpg?s=612x612&w=0&k=20&c=QcBYYoWM6VmWp9ficaSsgTP_xB4XboCEUjeVSQsOkt8=',
  },
  {
    name: 'Adam Doe',
    time:"January 2, 2009 - 1:25pm",
    description:"55-years old, (404) 134 - 7901, Car Mechanic, resides in 2098 Hanks Road APT #6, GA 3099, Ex-husband of Ellen Doe and Father of twins. Has a sloppy appearance, fresh cut on his forehead, and smells like booze. Completely distraught and seem 100% genuine.",
    question1: "When did you last talk to the twins?",
    answer: 'I called them several times last night between 7pm and 9pm but no answer. Been trying to let them in on a deal I been working on.',
    question2: 'What kind of deal?',
    answer2:'Flipping a house but I need one of them to cosign a loan. Probably the easiest 65k. I did get a hold of McKenna at 9pm but she brushed me off on the home-flipping deal. She immediately hung up after I told her it could pay up to a year off of her college tuition.',
    question3: 'Do you know the security code at the beach house?',
    answer3:'Yes. Ellen let me stayed there for the weekend because my landlord has been giving my a lot of issues.',
    question4: 'Who else knew the code & did you go anywhere last night?',
    answer4:"Not anyone I know of. I went to Tyson's bar on Larry Street and played in a pool tournament and had a couple of beers - heh. I think I left around 2:30am. Tyson was my bartender that night who kept me out of trouble.",
    question5:"Who else did you tell where the twins were?",
    answer5:"Nobody - I never talk about the twins to anyone.",
    question6:"How's your relationship with the twins?",
    answer6:"Honestly, not that great. Ever since Ellen and I separated 13 years ago, the family relationship has been rocky. Also, I don't really like or trust that John guy. He's very arrogant.",
    image: 'https://media.istockphoto.com/id/184918973/photo/sad-man-in-a-light-blue-t-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=wvQQmoyPtigX707EScGDcizgDi5ds5PH6pf_YZo1QeM=',
  },
  {
    name: 'Zach Bash',
    time:'January 2, 2009 - 8:10am',
    description: "33 years old, resides in 3 Bourbon Drive, no phone, no wife, no job",
    question1: "Do you live in the old shack northeast of the twin's beachouse?",
    answer: 'Yes, for the past 10 years.',
    question2: 'What were you doing last night?',
    answer2:'I stayed home and skinned a couple of chipmunks.',
    question3: 'Did you see anything unusual?',
    answer3:'I saw 3 cars in the beach house driveway last night.',
    question4: 'Are you a patient at Dev Psychiatric Hospital?',
    answer4:'Yes, I was released from there because I had some issues with some hikers. Them doctors say I am diagnosed with bipolar disorder.',
    question5:"We found your patient ID near the incident, can you explain that?",
    answer5:"That thing probably fell out my pocket while I was checking my animal traps.",
    question6:"Do you own a vehicle?",
    answer6:"An old truck but that darn thing can't even start. Can't afford a new battery.",
    image: 'https://media.istockphoto.com/id/669545402/photo/man-cheerful-studio-portrait-concept.jpg?s=612x612&w=0&k=20&c=11ZQDff2uterNXcZGSNyMyIAzwc1tWoHMsQQil3T0lU=',
  },
  {
    name: 'Tyson Berry',
    time:'January 2, 2009 - 6:51 pm',
    description: "40-years old, (404) 789 - 1929, resides in 113 Larry Street, GA 9765, Owner & Bartender of Tyson's Bar",
    question1: "What time was Adam at the bar?",
    answer: 'Not sure when he arrived. I only remember him being in the first round of pool tournament around 10:30pm.',
    question2: 'Did you notice anything about him?',
    answer2:'He was there until last call. When he was drunk, he seems really down in the dumps.',
    question3: 'Why was he "down in the dumps?"',
    answer3:'He lost out on some real estate deal. He was mumbling along that line. He was normal until his business partner came to give him some bad news. He was downing shots afterwards.',
    question4: "Who's his business partner?",
    answer4:"I don't know him. He came in around 11pm and sat with Adam for a while. I remember he introduce himself as Ollie.",
    question5:"How late did Adam stay?",
    answer5:"After his conversation with his business partner, he just sat at the bar and did shots until last call so 2:30-3am. He got really drunk so I had to keep an eye on him.",
    question6:"How was he after he left your bar?",
    answer6:"Awful. He could barely stand and was slurring all his words. He fell on his way out and hit his forehead. Poor dude, he was stumbling as I locked the door around 3:15am.",
    image: 'https://media.istockphoto.com/id/1302985743/photo/professional-cook-with-own-business-mature-male-cook-isolated-on-white-confident-chef-in.jpg?s=612x612&w=0&k=20&c=_Qo1qpoeHkEBp7cRwhT3z0zcu7pPFIZOlpU_HR3YD98=',
  },
  {
    name: 'Marty Carter',
    time:'January 2, 2009 - 5:57 pm',
    description: "28-years old, (404) 555 - 7756, resides in 225 Charlotte Street #201, GA 9765, Owner of Tattoos by Marty, friend & boss of Jen Doe",
    question1: "Was Jen with you last night?",
    answer: "Yes. Jen arrived between 8:30pm - 9pm.",
    question2: 'Was she acting funny at all?' ,
    answer2:'Shortly after she arrived, she took a phone call in the bathroom and then seemed kind of quiet. She received another call at 10pm and went outside to speak to someone in the parking lot.',
    question3: 'Can you elaborate more on the vehicle outside and why was she outside?',
    answer3:"Couldn't see the vehicle he was in, was looking from my balcony and there's a big tree that gets in the way. I did ask her who was that but Jen replied with a food delivery driver getting her order wrong so she canceled it.",
    question4: "Did she sleep at your place? If she did, where did she sleep?",
    answer4:"That's a little personal.. but she slept at the couch around 1am. I fell asleep right after.",
    question5:"Did you find anything out of the ordinary while you were sleeping?",
    answer5:"Heard her take another phone call at 7pm and rush out the door immediately. Jen cannot simply leave and come back because I would have to buzz her back in.",
    question6:"Did you ever meet mcKenna and Toni?",
    answer6:"They came in once to get matching tattoos. I was the one who did their tattoos actually but that's about it.",
    image: 'https://media.istockphoto.com/id/494480935/photo/young-professional-female-in-technical-field.jpg?s=612x612&w=0&k=20&c=TA-KA1f4Bn4WMJWET17y7mq1X0sNhgNUyELVW57KSqU=',
  }
];

export default AlibiModal;


