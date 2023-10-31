import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Card } from 'react-bootstrap';

const NewspaperModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="xl">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
      <Container>
      <Row className='mx-2 row row-cols-3'>
      <Card >
      <Card.Img src="https://media.istockphoto.com/id/168266792/photo/portrait-of-a-man.jpg?s=612x612&w=0&k=20&c=UTjxul8rFDkqZ7UDr8n2E33ggEzShIm8Q_hr5peXjU0=" />
      <Card.Body>
      <Card.Title>John McKinsey (step-husband)</Card.Title>
      </Card.Body>
      </Card>

      <Card >
      <Card.Img src="https://media.istockphoto.com/id/481838078/photo/portrait-of-thoughtful-young-man-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=9GvoPl0l_k5tq3HCwpC1iDTUVixCi5OXMQz61qmBvTA=" />
      <Card.Body>
      <Card.Title>Ethan Bowlman(Drug Guy)</Card.Title>
      </Card.Body>
      </Card>

      <Card >
      <Card.Img src="https://media.istockphoto.com/id/1323090122/photo/portrait-of-laughing-african-girl-in-white-t-shirt-looking-at-camera-isolated-on-gray.jpg?s=612x612&w=0&k=20&c=ZIdjjzMyzWYyGIn3w0zcbio99eN0lnMZCL77H-sMOdU=" />
      <Card.Body>
      <Card.Title>Jen Doe(Cousin)</Card.Title>
      </Card.Body>
      </Card>

      <Card >
      <Card.Img src="https://media.istockphoto.com/id/1132314350/photo/confident-mature-businesswoman-on-white-background.jpg?s=612x612&w=0&k=20&c=K8haUSz2LKE3BPwWSEa9vtdgQayBnC_Thg0aP17idqE=" />
      <Card.Body>
      <Card.Title>Ellen Doe(Mom)</Card.Title>
      </Card.Body>
      </Card>

      <Card >
      <Card.Img src="https://media.istockphoto.com/id/171372127/photo/keeping-it-corporate.jpg?s=612x612&w=0&k=20&c=QcBYYoWM6VmWp9ficaSsgTP_xB4XboCEUjeVSQsOkt8=" />
      <Card.Body>
      <Card.Title>David Can(Real-Estate)</Card.Title>
      </Card.Body>
      </Card>

      <Card >
      <Card.Img src="https://media.istockphoto.com/id/184918973/photo/sad-man-in-a-light-blue-t-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=wvQQmoyPtigX707EScGDcizgDi5ds5PH6pf_YZo1QeM=" />
      <Card.Body>
      <Card.Title>Adam Doe(Father)</Card.Title>
      </Card.Body>
      </Card>

      <Card >
      <Card.Img src="https://media.istockphoto.com/id/669545402/photo/man-cheerful-studio-portrait-concept.jpg?s=612x612&w=0&k=20&c=11ZQDff2uterNXcZGSNyMyIAzwc1tWoHMsQQil3T0lU=" />
      <Card.Body>
      <Card.Title>Zach Bash(Neighbor)</Card.Title>
      </Card.Body>
      </Card>

      <Card >
      <Card.Img src="https://media.istockphoto.com/id/184918973/photo/sad-man-in-a-light-blue-t-shirt-on-a-white-background.jpg?s=612x612&w=0&k=20&c=wvQQmoyPtigX707EScGDcizgDi5ds5PH6pf_YZo1QeM=" />
      <Card.Body>
      <Card.Title>Tony</Card.Title>
      </Card.Body>
      </Card>
      </Row>
      </Container>
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewspaperModal;
