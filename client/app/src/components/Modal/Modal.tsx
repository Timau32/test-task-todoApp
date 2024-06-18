import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div onClick={onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded shadow-lg max-w-md w-full">
                <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
