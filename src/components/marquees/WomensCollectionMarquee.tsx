import Link from 'next/link';
import { FaFemale, FaTag } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

export default function WomensCollectionMarquee() {
  return (
    <Marquee
      className="bg-gradient-to-r from-pink-50 to-white py-1 mb-8 shadow-md border-t border-b border-gray-200"
      direction="right"
    >
      <div className="flex items-center justify-center w-full text-black text-xs sm:text-sm md:text-base font-bold tracking-wide">
        <Link
          href="/collections/womens-collection"
          className="group hover:text-pink-600 transition-all duration-500 ease-in-out"
        >
          <span className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <span className="bg-pink-100 p-1 sm:p-1.5 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-sm">
              <FaFemale className="text-pink-600 text-xs sm:text-sm md:text-base" />
            </span>
            <span className="relative inline-block">
              <span
                className="text-black group-hover:text-pink-600 transition-all duration-300 text-xs sm:text-sm font-semibold"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                40% Off On Women Wear
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-500"></span>
            </span>
            <span className="bg-pink-500 p-1 sm:p-1.5 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-sm">
              <FaTag className="text-white text-xs sm:text-sm md:text-base" />
            </span>
          </span>
        </Link>
      </div>
    </Marquee>
  );
}