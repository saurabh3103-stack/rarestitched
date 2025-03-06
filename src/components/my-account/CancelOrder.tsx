import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "@components/common/modal/modal";
import { IoClose } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

type CancelOrderProps = {
  orderId: number;
  onCancelSuccess: () => void;
  order:String // Callback to notify parent of successful cancellation
};

const CancelOrder: React.FC<CancelOrderProps> = ({ orderId, onCancelSuccess, order }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle order cancellation
  const handleCancelOrder = async () => {
    setIsProcessing(true);

    const url = "https://fun2sh.deificindia.com/orders/multiupdate";
    const headers = {
      "Content-Type": "application/json",
      Cookie: `XSRF-TOKEN=eyJpdiI6ImE1VDV4OVlHTnA1VUpNR0RQZk9IUWc9PSIsInZhbHVlIjoiOU9UaU44eXpnK2JtVHR0VFdoam5jQlJET0kzanhIYzQydUMxMFpXcjAvNjRnUVJOY0Q2UGg0aDA2c0hhQXAra0xjS3lFV1Z3ejg0aFVIWFlqL0lLSHB6dGx4NitKRjVGOHhLc292a2VkK0xzYnNLamQzSzVnYmFJSGdBYTZaQmIiLCJtYWMiOiIwNDE4MWQxN2FkYWQ3ZDBmYWY3YTdjNTE1NWFiODAzNmU2ZDYxYzliZDlhMjc1MWYxMDAxMGY1ZmEzYjA4Y2JlIiwidGFnIjoiIn0%3D; chawkbazar_session=eyJpdiI6IjdMYmxHdVpwNHgrUER6QmkwRHlQTFE9PSIsInZhbHVlIjoiYWRzWStndG1QeWU5cEZLWlVBTkxoV3N0T3pmY3JTd01Fc0R0UkUvcG9LT1BMUmpJSWZXdFBTdjdZcTVUUzRxekxkSERJdXl2cy9HdHZDWkNKTkNiRzdScG5pZ3hMYkdkbUFzNXNUZWRTeVpvaTRTQ0lTemUvMVRDVEJrTnlyNXYiLCJtYWMiOiI1ZDNhNmY1ZTRmMmJlNTlhYjZhMDhhNzAxNzBhNjMyYTRhOWI2YzQzOWZiMDQyZjFkNTRiMTM3ZDU0NjgwODVlIiwidGFnIjoiIn0%3D`,
    };

    const payload = {
      id: [orderId], // Sending order ID in an array
      order_status: "order-cancelled",
    };

    try {
      const response = await axios.post(url, payload, { headers });
      console.log("API Response:", response.data);

      toast.success("Order cancelled successfully!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      setIsModalOpen(false);
      setIsProcessing(false);

      // Notify parent component of successful cancellation
      onCancelSuccess();
    } catch (error) {
      console.error("Error occurred:", error.response || error.message);

      toast.error("An error occurred while cancelling the order.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      setIsProcessing(false);
    }
  };

  return (
    <>
      {/* Cancel Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        disabled={isProcessing || order?.order_status !== "order-processing"}
        className="text-sm leading-4 bg-red-600 text-white px-4 py-2.5 rounded-md hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed"
      >
        {isProcessing ? "Processing..." : "Cancel"}
      </button>

      {/* Modal for confirmation */}
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <div className="p-6 text-center bg-white rounded-lg shadow-xl font-sans relative">
    {/* Close Icon */}
    
    <h2 className="text-xl font-bold mb-4 text-gray-900">
      Are you sure?
    </h2>
    <p className="mb-6 text-gray-700">
      Do you really want to cancel your order? This action cannot be undone.
    </p>

    <div className="flex justify-center gap-4 mt-2">
      <button
        onClick={handleCancelOrder}
        disabled={isProcessing}
        className="flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-md hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed"
      >
        <MdCancel size={20} />
        {isProcessing ? "Processing..." : "Yes, Cancel Order"}
      </button>

      <button
        onClick={() => setIsModalOpen(false)}
        className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-md hover:bg-green-700"
      >
        <FaCheckCircle size={20} />
        No, Keep Order
      </button>
    </div>
  </div>
</Modal>
    </>
  );
};

export default CancelOrder;