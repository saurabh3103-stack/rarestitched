import Marquee from "react-fast-marquee";
import Link from "next/link";
import { FaSnowflake, FaShoppingCart, FaTags, FaGift, FaFemale, FaPercentage, FaCameraRetro, FaInstagram } from "react-icons/fa";

export const Marquee1 = () => (
  <Marquee className="bg-black py-2 my-1 shadow-lg ">
    <div className="flex items-center space-x-4 w-full text-white text-lg font-semibold">
      <span className="bg-blue-500 p-2 rounded-full shadow-lg">
        <FaSnowflake className="text-white text-sm" />
      </span>
      <p className="w-full text-center">
        <Link href="/collections/winter-collection">
          <span className="flex items-center space-x-2 text-yellow-300 font-bold tracking-wider ">
            The Winter Discount Season Is On
            <span className="bg-green-500 p-2 rounded-full shadow-lg ml-1">
              <FaShoppingCart className="text-white text-sm" />
            </span>
            <span className="bg-red-500 p-2 rounded-full shadow-lg">
              <FaTags className="text-white text-sm" />
            </span>
            <span className="bg-purple-500 p-2 rounded-full shadow-lg">
              <FaGift className="text-white text-sm" />
            </span>
          </span>
        </Link>
      </p>
    </div>
  </Marquee>
);

export const Marquee2 = () => (
  <Marquee className="bg-black py-2 my-1 shadow-lg" direction={'right'}>
    <div className="flex items-center justify-center space-x-4 w-full text-white text-lg font-semibold">
      <p className="text-center">
        <Link href="/collections/womens-collection">
          <span className="flex items-center space-x-2 text-yellow-300 font-bold tracking-wider">
            40% Off On Women Wear
            <span className="bg-pink-500 p-2 rounded-full shadow-lg ml-1">
              <FaFemale className="text-white text-sm" />
            </span>
            <span className="bg-red-500 p-2 rounded-full shadow-lg">
              <FaPercentage className="text-white text-sm" />
            </span>
            <span className="bg-green-500 p-2 rounded-full shadow-lg">
              <FaTags className="text-white text-sm" />
            </span>
          </span>
        </Link>
      </p>
    </div>
  </Marquee>
);

export const Marquee3 = () => (
  <Marquee className="bg-black py-2 my-1 shadow-lg mb-6">
    <div className="flex items-center justify-center w-full text-white text-lg font-semibold tracking-wider">
      <a
        href="https://www.instagram.com/thefun2shstore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="flex items-center flex-wrap">
          <span>Upload Your Pic</span>
          <span className="bg-yellow-300 p-2 rounded-full m-1">
            <FaCameraRetro className="text-black text-xs" />
          </span>
          <span>Tagging @thefun2shstore on Instagram </span>
          <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full shadow-lg m-1">
            <FaInstagram className="text-white text-sm" />
          </span>
          <span>With our Brand</span>
          <span className="bg-blue-500 p-2 rounded-full m-1">
            <FaTags className="text-white text-xs" />
          </span>
          <span>& Get 20% Additional Discount</span>
          <span className="bg-red-500 p-2 rounded-full m-1">
            <FaGift className="text-white text-xs" />
          </span>
        </span>
      </a>
    </div>
  </Marquee>
);
