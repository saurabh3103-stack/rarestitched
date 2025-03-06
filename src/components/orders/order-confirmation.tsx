import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import animationData2 from '@data/Animation - 1741243693614.json';
import Modal from '@components/common/modal/ConfirmationModal';

type OrderConfirmationProps = {
  trackingNo: string;
};

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ trackingNo }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedTrackingNos = JSON.parse(localStorage.getItem('viewedTrackingNos') || '[]');
   

    if (!storedTrackingNos.includes(trackingNo)) {
      // Open modal if tracking number is new
      setIsOpen(true);

      // Store this tracking number in localStorage
      localStorage.setItem('viewedTrackingNos', JSON.stringify([...storedTrackingNos, trackingNo]));

      // Close modal after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
 
  }, [trackingNo]);

  return (
    <div>
      {/* Internal CSS */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }

          .animate-slide-up {
            animation: slideUp 1s ease-in-out;
          }

          .modal-content {
            background-color: #f3f4f6;
            padding: 24px;
            text-align: center;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .modal-title {
            font-size: 24px;
            font-weight: bold;
            color: #1f2937;
            margin-top: 8px;
          }

          .modal-text {
            font-size: 18px;
            color: #4b5563;
            margin-top: 8px;
          }

          .lottie-container {
            width: 192px;
            height: 192px;
            margin: auto;
          }
        `}
      </style>

      {/* Modal Component */}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modal-content animate-fade-in">
          {/* Lottie Animation */}
          <div className="lottie-container">
            <Lottie animationData={animationData2} loop={true} />
          </div>

          <h2 className="modal-title animate-slide-up">Your order has been confirmed!</h2>
          <p className="modal-text animate-slide-up">Thank you for your purchase.</p>
        </div>
      </Modal>
    </div>
  );
};

export default OrderConfirmation;
