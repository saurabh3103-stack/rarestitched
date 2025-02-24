import React, { useState } from "react";

const PincodeDeliveryChecker: React.FC = () => {
  const [pincode, setPincode] = useState<string>("");
  const [deliveryDate, setDeliveryDate] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  // Simulate API call to fetch delivery date
  const checkDeliveryDate = (): void => {
    if (!pincode || pincode.length !== 6 || isNaN(Number(pincode))) {
      setError("Please enter a valid 6-digit pincode.");
      setDeliveryDate(null);
      return;
    }

    const simulatedDeliveryDays: number = Math.floor(Math.random() * 6) + 2;
    setDeliveryDate(simulatedDeliveryDays);
    setError("");
  };

  return (
    <div className="w-full mx-auto mb-4 text-left">
      <p className="text-lg font-bold mb-3 pb-1 text-gray-900">
        Check Delivery Date
      </p>
      
      <div className="flex border border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Enter Your City Pincode"
          maxLength={6}
          value={pincode}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPincode(e.target.value)
          }
          className="flex-1 px-4 py-2 outline-none rounded-l-lg"
        />
        <button
          onClick={checkDeliveryDate}
          className="px-5 py-2 bg-black text-white font-semibold hover:bg-gray-800 rounded-r-lg"
        >
          Check
        </button>
      </div>

      {/* Message Box with Bottom Margin */}
      <div className="min-h-[20px] mt-1">
        {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
        {deliveryDate && (
          <p className="text-xs text-green-600 mb-2">
            Estimated delivery time: {deliveryDate} days
          </p>
        )}
      </div>
    </div>
  );
};

export default PincodeDeliveryChecker;
