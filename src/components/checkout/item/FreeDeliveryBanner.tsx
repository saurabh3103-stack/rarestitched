import { useState, useEffect } from "react";

const FreeDeliveryBanner = () => {
  const [animationClass, setAnimationClass] = useState(""); // Start without animation

  useEffect(() => {
    // Apply bloom first, then switch to bounce
    setAnimationClass("animate-bloom");

    // After bloom completes (0.6s), switch to bounce
    setTimeout(() => {
      setAnimationClass("animate-bounce-infinite");
    }, 600); // Match bloom animation duration
  }, []);

  return (
    <div className="px-1">
    <div className="relative flex px-2 flex-col items-center bg-green-100 p-4 rounded-lg mt-4 w-full max-w-sm mx-auto shadow-[0_-2px_4px_rgba(74,222,128,0.4),0_2px_4px_rgba(74,222,128,0.4)]">
      <style>
        {`
          @keyframes bloom {
            0% {
              transform: scale(0);
              opacity: 0;
            }
            60% {
              transform: scale(1.2);
              opacity: 1;
            }
            100% {
              transform: scale(1);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }

          .animate-bloom {
            animation: bloom 0.6s ease-out forwards;
          }

          .animate-bounce-infinite {
            animation: bounce 2.5s infinite ease-in-out;
          }
        `}
      </style>

      <p className={`text-green-700 font-semibold text-center text-xs mb-4 ${animationClass}`}>
        🎉 Yayy! You get <span className="font-bold">FREE</span> delivery on this order!
      </p>
    </div>

    
    </div>
  );
};

export default FreeDeliveryBanner;
