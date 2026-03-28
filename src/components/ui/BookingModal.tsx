"use client"
import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
}

const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  calendlyUrl = "https://calendly.com/your-calendly-link" // Placeholder
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-[1000px] h-[90vh] max-h-[800px] bg-white rounded-[30px] shadow-2xl overflow-hidden animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1D2939]">
              Book Your Discovery Call
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mt-1">
              Let&apos;s discuss how I can help your business grow
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-[#667085]" />
          </button>
        </div>

        {/* Calendly Widget Container */}
        <div className="w-full h-[calc(100%-88px)] overflow-auto">
          <div 
            className="calendly-inline-widget" 
            data-url={calendlyUrl}
            style={{ 
              minWidth: '320px', 
              height: '100%',
              width: '100%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
