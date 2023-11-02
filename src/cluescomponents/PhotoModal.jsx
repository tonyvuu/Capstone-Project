import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../styles/PhotoGallery.css";

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
    "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/10/30/3815800-77567928-2560-1440.jpg",
    "https://imageio.forbes.com/specials-images/imageserve/6426b75cec3c2cd0b18cd6f5/Lionel-Messi-could-return-to-FC-Barcelona-when-he-retires-/960x0.jpg?format=jpg&width=960",
    "https://media.npr.org/assets/img/2023/06/07/ap23158571300352-8bf00455d3333eb01468ea9493463a56833a8c99-s1100-c50.jpg",
    "https://images.mlssoccer.com/image/private/t_editorial_landscape_8_desktop_mobile/v1694099334/mls-atl-prd/ltjnt7l52vmpx1m8v7fy.jpg",
    "https://i2-prod.mirror.co.uk/incoming/article29508499.ece/ALTERNATES/s1200b/0_Lionel-Messi-29.jpg",
    "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt51f0cc9752931881/639ded71fa9530798c2329ba/messi-ears-16-9.jpg?auto=webp&format=pjpg&width=3840&quality=60",
    "https://imageio.forbes.com/specials-images/imageserve/64de87334a6ec38d5ad8ae21/Lionel-Messi-has-confessed-that-he-never-wanted-to-leave-FC-Barcelona-/960x0.jpg?format=jpg&width=960",
    "https://cdn.vox-cdn.com/thumbor/bhbwAkgIXCCrwNyEF1p25zuX8u8=/0x0:4282x2854/1200x800/filters:focal(1028x350:1712x1034)/cdn.vox-cdn.com/uploads/chorus_image/image/66347468/1198181971.jpg.0.jpg",
    "https://www.usatoday.com/gcdn/presto/2022/12/18/USAT/077897d0-ad51-4235-8d9d-05982e10ca69-messijube.jpg",
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
