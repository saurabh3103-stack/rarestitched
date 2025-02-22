import Link from 'next/link';
import { FaSnowflake, FaShoppingCart } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
export default function WinterDiscountMarquee() {
  return (
    <Marquee className="bg-gradient-to-r from-blue-50 to-white py-1 my-1 shadow-md border-t border-b border-gray-200">
      <div className="flex items-center justify-center w-full text-black text-xs sm:text-sm md:text-base font-semibold tracking-wide">
        <Link
          href="/collections/winter-collection"
          className="group hover:text-blue-600 transition-all duration-500 ease-in-out"
        >
          <span className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <span className="bg-blue-100 p-1 sm:p-1.5 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-sm">
              <FaSnowflake className="text-blue-600 text-xs sm:text-sm md:text-base" />
            </span>
            <span className="relative inline-block">
              <span
                className="text-black group-hover:text-blue-600 transition-all duration-300 text-xs sm:text-sm font-semibold"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                The Winter Discount Season Is On
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </span>
            <span className="bg-blue-500 p-1 sm:p-1.5 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-sm">
              <FaShoppingCart className="text-white text-xs sm:text-sm md:text-base" />
            </span>
          </span>
        </Link>
      </div>
    </Marquee>
  );
}