import React from 'react';
import { createPortal } from 'react-dom';

const BookingModal = ({ isOpen, onClose }) => {
    // Square booking page URL
    const squareBookingUrl = "https://square.site/book/79XW5EWWEYYTR/brows-by-leticia-melrose-ma";

    const openBookingInNewWindow = () => {
        // Open Square booking in a new popup window
        const popup = window.open(
            squareBookingUrl,
            'squareBooking',
            'width=800,height=800,scrollbars=yes,resizable=yes,toolbar=no,menubar=no,location=no,status=no'
        );
        
        if (popup) {
            popup.focus();
            onClose(); // Close the modal after opening the booking window
        } else {
            // Fallback if popup is blocked
            window.open(squareBookingUrl, '_blank');
            onClose();
        }
    };

    const openBookingDirect = () => {
        // Direct link for mobile or if popup doesn't work
        window.open(squareBookingUrl, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    const modalContent = (
        <div className="booking-modal-overlay" style={{zIndex: '99999999'}} onClick={onClose}>
            <div className="booking-modal booking-modal-simple" onClick={(e) => e.stopPropagation()}>
                <div className="booking-modal-header">
                    <h2>Book Your Appointment</h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="booking-modal-content booking-redirect-content">
                    <div className="booking-info">
                        <div className="business-info">
                            <h3>Brows By Leticia</h3>
                            <p className="address">
                                <i className="fas fa-map-marker-alt"></i>
                                527 Main St, Melrose - Second floor, room 8
                            </p>
                            <p className="phone">
                                <i className="fas fa-phone"></i>
                                (857) 888-6973
                            </p>
                            <p className="email">
                                <i className="fas fa-envelope"></i>
                                lp.designmakeup@gmail.com
                            </p>
                        </div>

                        <div className="services-preview">
                            <h4>Available Services:</h4>
                            <ul className="services-list">
                                <li>
                                    <span className="service-name">Eyebrow Design (waxing)</span>
                                    <span className="service-price">$40</span>
                                </li>
                                <li>
                                    <span className="service-name">Eyebrow Design + (henna or tint)</span>
                                    <span className="service-price">$55</span>
                                </li>
                                <li>
                                    <span className="service-name">Brow Lamination</span>
                                    <span className="service-price">$80</span>
                                </li>
                                <li>
                                    <span className="service-name">Brow Lamination + Tint</span>
                                    <span className="service-price">$100</span>
                                </li>
                                <li>
                                    <span className="service-name">Hidragloss 💋</span>
                                    <span className="service-price">$75</span>
                                </li>
                                <li className="more-services">+ More services available</li>
                            </ul>
                        </div>

                        <div className="booking-hours">
                            <h4>Business Hours:</h4>
                            <div className="hours-grid">
                                <div className="day-hours">
                                    <span className="day">Tue - Thu:</span>
                                    <span className="hours">10:00 AM - 7:00 PM</span>
                                </div>
                                <div className="day-hours">
                                    <span className="day">Fri:</span>
                                    <span className="hours">10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="day-hours">
                                    <span className="day">Sat:</span>
                                    <span className="hours">9:00 AM - 3:00 PM</span>
                                </div>
                                <div className="day-hours closed">
                                    <span className="day">Sun - Mon:</span>
                                    <span className="hours">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="booking-actions">
                        <button 
                            className="btn btn-primary booking-btn popup-booking"
                            onClick={openBookingInNewWindow}
                        >
                            <i className="fas fa-calendar-check"></i>
                            Book Appointment (Popup)
                        </button>
                        
                        <button 
                            className="btn btn-secondary booking-btn direct-booking"
                            onClick={openBookingDirect}
                        >
                            <i className="fas fa-external-link-alt"></i>
                            Open Booking Page
                        </button>
                        
                        <p className="booking-note">
                            <i className="fas fa-info-circle"></i>
                            You'll be redirected to our secure Square booking system
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default BookingModal;
