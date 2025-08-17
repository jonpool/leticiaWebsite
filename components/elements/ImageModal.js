import React from 'react';
import { createPortal } from 'react-dom';

const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const modalContent = (
        <div className="image-modal-overlay" onClick={handleOverlayClick}>
            <div className="image-modal-container">
                <button className="image-modal-close" onClick={onClose}>
                    <i className="fas fa-times"></i>
                </button>
                <div className="image-modal-content">
                    <img src={imageSrc} alt={imageAlt} className="image-modal-img" />
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default ImageModal;
