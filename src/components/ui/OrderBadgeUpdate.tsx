import React from "react";
import { useSpring, animated } from "@react-spring/web";

interface OrderBadgeUpdateProps {
  status: { status: string };
}

const OrderBadgeUpdate: React.FC<OrderBadgeUpdateProps> = ({ status }) => {
  // Animation for "ORDER CONFIRMED" (blooming + right to left)
  const orderAnimation = useSpring({
    from: { opacity: 0, x: 100, scale: 0.8 },
    to: { opacity: 1, x: 0, scale: 1 },
    config: { tension: 200, friction: 20 },
  });

  // Animation for "PLEASE CHECK YOUR E-MAIL" (staggered effect)
  const emailAnimation = useSpring({
    from: { opacity: 0, x: 100, scale: 0.8 },
    to: { opacity: 1, x: 0, scale: 1 },
    config: { tension: 200, friction: 20 },
    delay: 300,
  });

  return (
    <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
      {/* ORDER CONFIRMED */}
      <animated.div
        style={orderAnimation}
        className="bg-gradient-to-r from-green-500 to-green-700 text-white text-2xl sm:text-2xl md:text-4xl font-bold px-10 py-4 rounded-lg shadow-md"
      >
        ORDER CONFIRMED
      </animated.div>

      {/* PLEASE CHECK YOUR E-MAIL */}
      <animated.p
        style={emailAnimation}
        className="text-green-600 text-lg md:text-2xl sm:text-lg mt-3 tracking-widest font-medium"
      >
        PLEASE CHECK YOUR E-MAIL
      </animated.p>
    </div>
  );
};

export default OrderBadgeUpdate;
