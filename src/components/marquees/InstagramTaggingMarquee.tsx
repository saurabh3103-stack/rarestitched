import { FaCameraRetro, FaInstagram } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
export default function InstagramTaggingMarquee() {
  return (
    <Marquee
      className="bg-gradient-to-r from-yellow-50 to-white py-1 my-3 shadow-md border-t border-b border-gray-200"
      direction="left"
    >
      <div className="flex items-center justify-center w-full text-black text-xs sm:text-sm md:text-base font-bold tracking-wide">
        <a
          href="https://www.instagram.com/thefun2shstore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:text-blue-600 transition-all duration-500 ease-in-out"
        >
          <span className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
            <span className="bg-yellow-300 p-1 sm:p-1.5 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-sm">
              <FaCameraRetro className="text-black text-xs sm:text-sm md:text-base" />
            </span>
            <span className="relative inline-block">
              <span
                className="text-black group-hover:text-blue-600 transition-all duration-300 text-xs sm:text-sm font-semibold"
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                Upload Your Pic & Tag @thefun2shstore on Instagram to Get 20% Additional Discount!
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
            </span>
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1 sm:p-1.5 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-sm">
              <FaInstagram className="text-white text-xs sm:text-sm md:text-base" />
            </span>
          </span>
        </a>
      </div>
    </Marquee>
  );
}