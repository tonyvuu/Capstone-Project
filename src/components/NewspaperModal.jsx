// import React from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// const NewspaperModal = ({ show, onClose }) => {
//   return (
//     <Modal show={show} onHide={onClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>DevTown Daily</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>Hello, this is a sample newspaper article.</p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default NewspaperModal;

import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../styles/Newspaper.css'; 

const NewspaperModal = ({ show, onClose }) => {
  return (
    <Modal show={show} onHide={onClose} size="xl">
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <div className="newspaper-container custom-width">
          <h1 className="header">DevTown Daily</h1>
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
