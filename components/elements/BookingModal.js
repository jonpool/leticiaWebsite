import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const BookingModal = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        service: '',
        date: '',
        time: '',
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const services = [
        { id: 'haircut', name: 'Hair Cut & Styling', price: '$50', duration: '1 hour' },
        { id: 'facial', name: 'Facial Treatment', price: '$80', duration: '1.5 hours' },
        { id: 'massage', name: 'Relaxing Massage', price: '$100', duration: '1 hour' },
        { id: 'manicure', name: 'Manicure & Pedicure', price: '$60', duration: '1.5 hours' },
        { id: 'coloring', name: 'Hair Coloring', price: '$120', duration: '2 hours' },
        { id: 'spa-package', name: 'Full Spa Package', price: '$200', duration: '3 hours' }
    ];

    const timeSlots = [
        '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
    ];

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleNext = () => {
        if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrevious = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        // Here you would typically send the booking data to your backend
        console.log('Booking submitted:', formData);
        alert('Booking submitted successfully! We will contact you shortly to confirm your appointment.');
        onClose();
        // Reset form
        setFormData({
            service: '',
            date: '',
            time: '',
            name: '',
            email: '',
            phone: '',
            notes: ''
        });
        setCurrentStep(1);
    };

    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.service;
            case 2:
                return formData.date && formData.time;
            case 3:
                return formData.name && formData.email && formData.phone;
            case 4:
                return true;
            default:
                return false;
        }
    };

    if (!isOpen) return null;

    const modalContent = (
        <div className="booking-modal-overlay" style={{zIndex: '99999999'}} onClick={onClose}>
            <div className="booking-modal" onClick={(e) => e.stopPropagation()}>
                <div className="booking-modal-header">
                    <h2>Book Your Appointment</h2>
                    <button className="close-btn" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                </div>

                <div className="booking-steps">
                    <div className={`step ${currentStep >= 1 ? 'active' : ''} ${currentStep > 1 ? 'completed' : ''}`}>
                        <span className="step-number">1</span>
                        <span className="step-title">Service</span>
                    </div>
                    <div className={`step ${currentStep >= 2 ? 'active' : ''} ${currentStep > 2 ? 'completed' : ''}`}>
                        <span className="step-number">2</span>
                        <span className="step-title">Date & Time</span>
                    </div>
                    <div className={`step ${currentStep >= 3 ? 'active' : ''} ${currentStep > 3 ? 'completed' : ''}`}>
                        <span className="step-number">3</span>
                        <span className="step-title">Details</span>
                    </div>
                    <div className={`step ${currentStep >= 4 ? 'active' : ''} ${currentStep > 4 ? 'completed' : ''}`}>
                        <span className="step-number">4</span>
                        <span className="step-title">Confirm</span>
                    </div>
                </div>

                <div className="booking-modal-content">
                    {/* Step 1: Service Selection */}
                    {currentStep === 1 && (
                        <div className="step-content">
                            <h3>Choose Your Service</h3>
                            <div className="services-grid">
                                {services.map((service) => (
                                    <div 
                                        key={service.id}
                                        className={`service-card ${formData.service === service.id ? 'selected' : ''}`}
                                        onClick={() => handleInputChange('service', service.id)}
                                    >
                                        <h4>{service.name}</h4>
                                        <p className="price">{service.price}</p>
                                        <p className="duration">{service.duration}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 2: Date & Time Selection */}
                    {currentStep === 2 && (
                        <div className="step-content">
                            <h3>Select Date & Time</h3>
                            <div className="datetime-section">
                                <div className="date-selection">
                                    <label>Choose Date:</label>
                                    <input 
                                        type="date" 
                                        value={formData.date}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={(e) => handleInputChange('date', e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="time-selection">
                                    <label>Choose Time:</label>
                                    <div className="time-slots">
                                        {timeSlots.map((time) => (
                                            <button
                                                key={time}
                                                className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                                                onClick={() => handleInputChange('time', time)}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Personal Details */}
                    {currentStep === 3 && (
                        <div className="step-content">
                            <h3>Your Information</h3>
                            <div className="form-fields">
                                <div className="form-group">
                                    <label>Full Name *</label>
                                    <input 
                                        type="text" 
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        className="form-control"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email *</label>
                                    <input 
                                        type="email" 
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="form-control"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number *</label>
                                    <input 
                                        type="tel" 
                                        value={formData.phone}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="form-control"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Special Notes (Optional)</label>
                                    <textarea 
                                        value={formData.notes}
                                        onChange={(e) => handleInputChange('notes', e.target.value)}
                                        className="form-control"
                                        placeholder="Any special requests or notes..."
                                        rows="3"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Confirmation */}
                    {currentStep === 4 && (
                        <div className="step-content">
                            <h3>Confirm Your Booking</h3>
                            <div className="booking-summary">
                                <div className="summary-item">
                                    <strong>Service:</strong>
                                    <span>{services.find(s => s.id === formData.service)?.name}</span>
                                </div>
                                <div className="summary-item">
                                    <strong>Price:</strong>
                                    <span>{services.find(s => s.id === formData.service)?.price}</span>
                                </div>
                                <div className="summary-item">
                                    <strong>Duration:</strong>
                                    <span>{services.find(s => s.id === formData.service)?.duration}</span>
                                </div>
                                <div className="summary-item">
                                    <strong>Date:</strong>
                                    <span>{new Date(formData.date).toLocaleDateString()}</span>
                                </div>
                                <div className="summary-item">
                                    <strong>Time:</strong>
                                    <span>{formData.time}</span>
                                </div>
                                <div className="summary-item">
                                    <strong>Name:</strong>
                                    <span>{formData.name}</span>
                                </div>
                                <div className="summary-item">
                                    <strong>Email:</strong>
                                    <span>{formData.email}</span>
                                </div>
                                <div className="summary-item">
                                    <strong>Phone:</strong>
                                    <span>{formData.phone}</span>
                                </div>
                                {formData.notes && (
                                    <div className="summary-item">
                                        <strong>Notes:</strong>
                                        <span>{formData.notes}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>

                <div className="booking-modal-footer">
                    {currentStep > 1 && (
                        <button className="btn btn-secondary" onClick={handlePrevious}>
                            Previous
                        </button>
                    )}
                    {currentStep < 4 ? (
                        <button 
                            className={`btn btn-primary ${!isStepValid() ? 'disabled' : ''}`}
                            onClick={handleNext}
                            disabled={!isStepValid()}
                        >
                            Next
                        </button>
                    ) : (
                        <button className="btn btn-success" onClick={handleSubmit}>
                            Confirm Booking
                        </button>
                    )}
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default BookingModal;
