// // import React from 'react';

// // const ImageModal = ({ imageSrc, onClose }) => {
// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
// //       <div className="relative w-full h-full bg-white p-4 overflow-auto flex justify-center items-center">
// //         <button
// //           onClick={onClose}
// //           className="absolute top-2 right-2 text-black bg-white rounded-full p-1 shadow hover:bg-gray-200"
// //         >
// //           ×
// //         </button>
// //         <div className="flex justify-center items-center w-full h-full">
// //           <img
// //             src={imageSrc}
// //             alt="Full-screen view"
// //             className="object-contain w-full h-full"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageModal;


// import React from 'react';

// const ImageModal = ({ imageSrc, onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//       <div className="relative w-full h-full bg-white p-4 overflow-auto flex justify-center items-center">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-black bg-white rounded-full p-1 shadow hover:bg-gray-200"
//         >
//           ×
//         </button>
//         <div className="flex justify-center items-center w-full h-full">
//           <img
//             src={imageSrc}
//             alt="Full-screen view"
//             className="object-contain w-full h-full"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageModal;

import React, { useState } from 'react';

const ImageModal = ({ imageSrc, images, onClose }) => {
  // Find the initial index of the imageSrc based on the `original` property
  const [currentIndex, setCurrentIndex] = useState(
    images.findIndex((image) => image.original === imageSrc) || 0
  );

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="relative w-full h-full bg-white p-4 overflow-hidden flex justify-center items-center">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-white rounded-full p-1 shadow hover:bg-gray-200"
        >
          ×
        </button>
        <button
          onClick={handlePrevious}
          className="absolute left-4 text-white bg-gray-800 rounded-full p-2 shadow hover:bg-gray-700"
        >
          ◀
        </button>
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={images[currentIndex]?.original} // Use `original` for full image URL
            alt={`Image ${currentIndex + 1}`}
            className="object-contain w-full h-full"
          />
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 text-white bg-gray-800 rounded-full p-2 shadow hover:bg-gray-700"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageModal;


