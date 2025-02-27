import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion, AnimatePresence } from "framer-motion";

// Ensure you have a CSS file to import the font
// import './App.css'; // Make sure to include the font import in this file

interface PriceCounterProps {
  items: {
    id: string;
    quantity: number;
    max_price: number;
  }[];
  freeShippingAmount: number;
}

const PriceCounter: React.FC<PriceCounterProps> = ({ items, freeShippingAmount }) => {
  const [showCounter, setShowCounter] = useState<boolean>(false);
  const [totalSavings, setTotalSavings] = useState<number>(0);

  useEffect(() => {
    // Calculate total savings
    const calculatedSavings = items.reduce(
      (acc, item) => acc + item.quantity * item.max_price-item.price,
      0
    );
    setTotalSavings(calculatedSavings);

    // Show counter after a delay
    const timer = setTimeout(() => {
      setShowCounter(true);
    }, 500);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <motion.div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        background: "#ffffff", // Solid white background
        color: "#333", // Dark text color
        padding: "1rem", // Increased padding for better spacing
        width: "100%", // Set to 100% width
        margin: "0 auto", // Center the component
        border: "1px solid #296650", // Solid light green border on top
               borderRadius: "0.5rem", // Slightly rounded corners
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        fontFamily: "'Roboto', sans-serif", // Use a modern font
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      role="alert" // Accessibility: role for alert
      aria-live="polite" // Accessibility: live region for updates
    >
      {/* Shiny Effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(52, 211, 153, 0.1), rgba(34, 197, 94, 0.2), rgba(52, 211, 153, 0.1))",
          opacity: 0.1,
          animation: "shimmer 3s infinite linear",
          backgroundSize: "200% 100%",
        }}
      ></div>

      {/* Congrats + Savings */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          fontSize: "0.75rem", // Original XS font size
          fontWeight: "bold",
          position: "relative",
          zIndex: 10,
        }}
      >
        <span>🎉 You are Saving:</span>
        <AnimatePresence>
          {showCounter && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <CountUp
                start={0}
                end={totalSavings}
                duration={2}
                prefix="₹"
                style={{ color: "#27996f" }} // Light green color
              />
              <span className="mx-1">+</span>
              {freeShippingAmount === 0 && (
                <motion.span
                  style={{ color: "#27996f" }} // Light green for free delivery with left margin
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
                >
                  Free Delivery! ✨
                </motion.span>
              )}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default PriceCounter;