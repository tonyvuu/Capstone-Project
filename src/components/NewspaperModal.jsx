import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import helicopter from '../assets/Helicopter.jpeg'
import '../styles/Newspaper.css'; 

const NewspaperModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="xl">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="newspaper-container custom-width">
          <h1 className="header">DAILY NEWS</h1>
          <p className="paragraph-text">
            This is a sample newspaper article. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Fusce fringilla, elit non aliquet
            sagittis, velit velit varius ex, in consequat odio quam in sem. Nulla
            facilisi. Fusce in hendrerit est, vel consectetur ipsum. Aenean
            dapibus, erat ut suscipit facilisis, mi elit interdum purus, nec
            egestas neque nunc a odio. Praesent vel purus vitae nunc suscipit
            volutpat. Sed vehicula turpis at quam dignissim, ut auctor massa
            venenatis.
          </p>

          <h2 className='sub-header'>Latest News</h2>
          <p className='paragraph-text'>
            In breaking news, a group of scientists has discovered a new species of marine life in the depths of the ocean. This remarkable discovery is expected to have a significant impact on marine biology and conservation efforts.
          </p>
          
          <img src={helicopter} alt="helicopter" className="news-image"/>
          <br />
          <br />
          <h2 className='sub-header'>1 YEAR ANNIVERSARY OF MISSING GIRL</h2>
          <p className='paragraph-text'>
            This marks almost one year anniversary of the missing girl, Anne Frank.
          </p>
          
          <img src="https://www.helenbartlett.co.uk/wp-content/uploads/2023/08/teenage-portrait-black-and-white.jpg" alt="Football Match" className="news-image" />

          <h2 className='sub-header'>Entertainment</h2>
          <p className='paragraph-text'>
            Placeholder text
          </p>
          
          <div className="center-image">
            <img src="https://adstrategy.files.wordpress.com/2010/04/1951_coke_ad_p6_charleroi-mail2.jpg" alt="Movie Set" className="coke-image" />
          </div>
        </div>
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
