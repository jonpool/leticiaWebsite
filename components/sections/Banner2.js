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
        <section className="main-slider slider-style-two">
            <div className="slide-item">
                <div className="bg bg-image" style={{ backgroundImage: 'url(/images/main-slider/bg-slider2-1.png)' }}></div>
                <div className="auto-container content-box">
                  <span className="sub-title">Professional Styling Since 2020</span>
                  <h1 className="title">The Essence <br/> Of Beauty</h1>
                  <p className="text">At our space, women find more than beauty treatments — they enjoy a moment of self-care, attention to detail, and personalized artistry.</p>
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