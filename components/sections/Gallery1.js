import Link from "next/link"
import React, { useState } from 'react';
import ImageModal from '../elements/ImageModal';

const Gallery1 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

    const handleImageClick = (imageSrc, imageAlt) => {
        setSelectedImage({ src: imageSrc, alt: imageAlt });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage({ src: '', alt: '' });
    };

    return (
        <>
        <section className="gallery-section">
          <div className="outer-box">
            <div className="row">
              <div className="col-xl-6">
                <div className="row">
      
                  <div className="gallery-block col-sm-6">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <div className="lightbox-image" onClick={() => handleImageClick("images/resource/gallery1-4.jpg", "Gallery Image 1")}>
                            <img src="images/resource/gallery1-4.jpg" alt="Gallery Image 1"/>
                          </div>
                        </figure>
                        <div className="icon" onClick={() => handleImageClick("images/resource/gallery1-4.jpg", "Gallery Image 1")}><i className="fa-sharp fa-light fa-eye"></i></div>
                      </div>
                    </div>
                  </div>
      
                  <div className="gallery-block col-sm-6">
                    <div className="inner-box">
                      <div className="image-box">
                        <figure className="image">
                          <div className="lightbox-image" onClick={() => handleImageClick("images/resource/gallery1-3.jpg", "Gallery Image 2")}>
                            <img src="images/resource/gallery1-3.jpg" alt="Gallery Image 2"/>
                          </div>
                        </figure>
                        <div className="icon" onClick={() => handleImageClick("images/resource/gallery1-3.jpg", "Gallery Image 2")}><i className="fa-sharp fa-light fa-eye"></i></div>
                      </div>
                      <div className="image-box">
                        <figure className="image">
                          <div className="lightbox-image" onClick={() => handleImageClick("images/resource/gallery1-2.jpg", "Gallery Image 3")}>
                            <img src="images/resource/gallery1-2.jpg" alt="Gallery Image 3"/>
                          </div>
                        </figure>
                        <div className="icon" onClick={() => handleImageClick("images/resource/gallery1-2.jpg", "Gallery Image 3")}><i className="fa-sharp fa-light fa-eye"></i></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-block col-xl-6">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image">
                      <div className="lightbox-image" onClick={() => handleImageClick("images/resource/gallery1-1.jpg", "Gallery Image 4")}>
                        <img src="images/resource/gallery1-1.jpg" alt="Gallery Image 4"/>
                      </div>
                    </figure>
                    <div className="icon" onClick={() => handleImageClick("images/resource/gallery1-1.jpg", "Gallery Image 4")}><i className="fa-sharp fa-light fa-eye"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ImageModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            imageSrc={selectedImage.src} 
            imageAlt={selectedImage.alt} 
        />
        </>
    );
};
export default Gallery1