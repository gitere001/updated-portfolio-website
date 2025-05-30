import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../app/store';  // Adjust path accordingly
import { hideOverlay, showOverlay } from '../overlay/overlaySlice';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSuccess: boolean;
  message: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, isSuccess, message }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClose = () => {
    onClose();
    dispatch(hideOverlay());
  };

  useEffect(() => {
    if (isOpen) {
      dispatch(showOverlay());
    }
    return () => {
      if (isOpen) {
        dispatch(hideOverlay());
      }
    };
  }, [isOpen, dispatch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 100 }}>
      {/* Modal Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 ease-out animate-[modalSlideIn_0.3s_ease-out]">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
        >
          <X className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
        </button>

        {/* Modal Body */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
              isSuccess
                ? 'bg-green-100 animate-[bounceIn_0.6s_ease-out]'
                : 'bg-red-100 animate-[shakeIn_0.6s_ease-out]'
            }`}>
              {isSuccess ? (
                <CheckCircle className="h-8 w-8 text-green-600" />
              ) : (
                <XCircle className="h-8 w-8 text-red-600" />
              )}
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-2xl font-bold mb-4 ${
            isSuccess ? 'text-green-700' : 'text-red-700'
          }`}>
            {isSuccess ? 'Message Sent!' : 'Oops! Something went wrong'}
          </h3>

          {/* Message */}
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {message}
          </p>

          {/* Action Button */}
          <button
            onClick={handleClose}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 transform hover:scale-105 active:scale-95 ${
              isSuccess
                ? 'bg-green-600 hover:bg-green-700 shadow-lg shadow-green-200'
                : 'bg-red-600 hover:bg-red-700 shadow-lg shadow-red-200'
            }`}
          >
            {isSuccess ? 'Great!' : 'Try Again'}
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shakeIn {
          0% {
            opacity: 0;
            transform: scale(0.3) rotate(-5deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.1) rotate(2deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
