import React, { useState } from 'react';
import BookingModal from "../elements/BookingModal";

const Banner2 = () => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const handleBookingClick = (e) => {
        e.preventDefault();
        setIsBookingModalOpen(true);
    };

    const closeBookingModal = () => {
        setIsBookingModalOpen(false);
    };

    return (
        <>
        <section id="home" className="main-slider slider-style-two">
            <div className="slide-item">
                <div className="bg bg-image" style={{ backgroundColor: 'white' }}></div>
                <div className="auto-container content-box">
                  <span className="sub-title">Professional Styling Since 2020</span>
                  <h1 className="title">Brows By leticia</h1>
                  <p className="text">Hello, my name is Leticia and I’m so happy to have connected with you here. 
                  My commitment is to listen and understand your needs, so that every appointment is unique, personalized, and done with care. More than beautifully shaped brows, my wish is that you leave our space feeling confident, valued, and with your self-esteem renewed. Thank you for choosing me!</p>
                  <button onClick={handleBookingClick} className="theme-btn btn-style-one"><span className="btn-title">Book Now</span></button>
                  <figure className="image home2-circle-img bounce-z"><img src="/images/main-slider/slide2-4.png" alt="Image"/></figure>
                  <figure className="image2"><img src="/images/main-slider/slide2-2.png" alt="Image"/></figure>
                </div>
            </div>
        </section>
        <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
        </>
    );
};
export default Banner2