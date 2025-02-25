import { useEffect, useState } from "react";
import CountUp from "react-countup";

const PriceCounter: React.FC = () => {
  const [showCounter, setShowCounter] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowCounter(true); // Show counter after delay
    }, 500);
  }, []);

  return (
    <div className="relative flex flex-col items-center bg-gray-100 p-4 w-full max-w-sm mx-auto shadow-md border-1 border-green-400">
      {/* 🔥 Shop More Message */}
      <div className="flex items-center text-black font-bold text-xs">
        <img src="https://images.bewakoof.com/web/icon-cart-savings.gif" alt="offer-icon" className="w-8 h-8" />
        <span>Congrats! You are saving on this order:</span>
        {showCounter && (
          <CountUp start={0} end={699} duration={2} prefix="₹" className="ml-2 text-green-600 font-bold" />
        )}
      </div>
    </div>
  );
};

export default PriceCounter;