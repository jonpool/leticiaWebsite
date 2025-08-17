import Link from "next/link";
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import BookingModal from '../elements/BookingModal';

const Video1 = () => {
    const [isOpen, setOpen] = useState(false);
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
        <section id="gallery" className="video-section">
          <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg-video1.jpg)' }}></div>
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="sec-title mb-0">
                  <h2 className="words-slide-up text-split">Book & feel our Incredible <br/> Brows Experience</h2>
                  <button onClick={handleBookingClick} className="theme-btn btn-style-two btn pricing-btn"><span className="btn-title">Make Appointment</span></button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="outer-box">
                  <h4>Watch Now</h4>
                  <a onClick={() => setOpen(true)} className="play-now">
                    <i className="icon fas fa-play p-0" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
        <BookingModal isOpen={isBookingModalOpen} onClose={closeBookingModal} />
        </>
    );
};
export default Video1
