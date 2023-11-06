import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/PhotoGallery.css";
import drawnJen from '../assets/drawnJen.png'
import pictureCard from '../assets/photohidden.png'

const PhotoModal = ({ show, onClose }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayCarousel = (index) => {
    setCurrentIndex(index);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
  };
  
  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex);
  };
  
  const images = [
    "https://www.alabamavacationhomerentals.com/images/w.1280/h.853/c.1/mr.0/d.listing_photos/sd.2022-01/i.20e27602dcc990bff4cc4c1cd16ab8c4.jpg",

    "https://media.istockphoto.com/id/175390830/photo/bloody-hand-at-an-accident-scene-pavement.jpg?s=612x612&w=0&k=20&c=mYiV5adxGh6YAVk1bsJgQpeRqgJKP8XdBmQj3byhYUA=",

    drawnJen,
    

    "https://upload.wikimedia.org/wikipedia/commons/c/cc/Police_Line_Crime_Scene_2498847226.jpg",

    
    "https://i.pinimg.com/originals/00/af/be/00afbe23659e2844e26eb728c165b371.jpg",
    
    "https://media.istockphoto.com/id/106540127/photo/brick-building-with-a-law-office-sign.jpg?s=612x612&w=0&k=20&c=uRCvitcU5CT4Rh4ufVPFv1x60qrNbM-hsj94uTo2zyI=",
    
    "https://www.wework.com/ideas/wp-content/uploads/sites/4/2020/06/Web_150DPI-20171111-WeWork-Vine-Exteriors-Entrance-1_header-1120x630.jpg",
    
    "https://media.istockphoto.com/id/1360819778/photo/in-the-close-up-are-billiard-balls-while-in-the-background-is-a-group-of-people-playing.jpg?s=612x612&w=0&k=20&c=u-65tlMv6HzCBRh9RnHmIECmk1blDQRj_UlBj7VGkX4=",
    
    "https://media.istockphoto.com/id/1428934243/photo/playing-game-of-pool-and-drinking-beer-with-friends-in-local-pool-hall.jpg?s=612x612&w=0&k=20&c=FzvuDyf6Qg5BFuOxGeRecPdDDeT7UoNWCvipQZ55To8=",
    
    "https://c8.alamy.com/comp/2JG36XW/summer-heat-bearded-adult-man-in-work-overalls-wiping-sweat-from-his-forehead-sunny-backyard-and-sky-at-the-backgroud-gardening-and-horticulture-co-2JG36XW.jpg",
    
    "https://www.baltimoresun.com/resizer/iUjm49AuXZqwdTvAywVx5VJFJko=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/WQWG6BETINE3HJO52ZHNOTIYTA.jpg",
    
    
    "https://media.swncdn.com/via/8435-istockgetty-images-plusyakobchukolena-1.jpg",
    
    "https://images.toledocitypaper.com/wp-content/uploads/2022/08/image000001.jpg",
    
    "https://live.staticflickr.com/1894/43769563244_46b5fd0520_b.jpg", 
    
    "https://i.pinimg.com/736x/c4/df/12/c4df1275652525495f67803995b81448.jpg",
    
    pictureCard,
    "https://chicagohealthonline.com/wp-content/uploads/2014/09/DrugAisle.png",
    
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/white-jeep-4x4-parked-on-a-cliff-with-a-beach-in-the-background-cavan-images.jpg"
  ];
  
  return (
    <>
      <Modal className="galleryModal" show={show} onHide={onClose} size="xl">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="imageGallery">
            {images.map((image, index) => (
              <div key={index} className="imageHolder">
                <div className="insideImageContainer">
                  <a onClick={() => displayCarousel(index)}>
                    <img
                      href={`/image${index + 1}`}
                      className="galleryImage"
                      src={image}
                      alt={`Image ${index + 1}`}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <Modal
            className="carouselModal"
            show={showCarousel}
            onHide={closeCarousel}
            size="xl"
          >
            <Modal.Body
              style={{ backgroundColor: "transparent" }}
              className="modalBody"
            >
              <Carousel
                activeIndex={currentIndex}
                onSelect={handleSelect}
                interval={null} // Disable auto-play
              >
                {images.map((image, index) => (
                  <Carousel.Item style={{ height: "80vh" }} key={index}>
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>

              <Row className="mt-3">
                {images.map((image, index) => (
                  <Col key={index}>
                    <div className="thumbnailHolder">
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        // style={{ width: "100%", height: "auto" }}
                        onClick={() => setCurrentIndex(index)}
                        className={
                          index === currentIndex
                            ? "thumbnail active"
                            : "thumbnail"
                        }
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Modal.Body>
          </Modal>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PhotoModal;
