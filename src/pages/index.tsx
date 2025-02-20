import BannerCard from '@components/common/banner-card';
import Container from '@components/ui/container';
import BrandGridBlock from '@containers/brand-grid-block';
import CategoryBlock from '@containers/category-block';
import { getLayout } from '@components/layout/layout';
import BannerWithProducts from '@containers/banner-with-products';
import BannerBlock from '@containers/banner-block';
import Divider from '@components/ui/divider';
import DownloadApps from '@components/common/download-apps';
import Support from '@components/common/support';
import Instagram from '@components/common/instagram';
import ProductsFlashSaleBlock from '@containers/product-flash-sale-block';
import ProductsFeatured from '@containers/products-featured';
import BannerSliderBlock from '@containers/banner-slider-block';
import ExclusiveBlock from '@containers/exclusive-block';
import Subscription from '@components/common/subscription';
import NewArrivalsProductFeed from '@components/product/feeds/new-arrivals-product-feed';
import WinterSeasonProducts from '@containers/WinterSeasonProducts';
import ProductsKanpurEraBlock from '@containers/ProductsKanpurEraBlock';
import ProductsOversizedTshirtBlock from '@containers/Oversized-T-shirt';
import BestSellerProductFeed from '@components/product/feeds/best-seller-product-feed';
import ProductsTShirtsUnder599Block from '@containers/T-Shirts-Under-₹599';
import { SlUserFemale } from 'react-icons/sl';
import {  FaInstagram, FaSnowflake } from 'react-icons/fa';
import { FaShoppingCart, FaTags, FaGift } from 'react-icons/fa';
import { FaShoppingBag, FaPercentage } from 'react-icons/fa';

import { FaInstagramSquare } from 'react-icons/fa';
// import
import { ROUTES } from '@lib/routes';

import {
  masonryBanner,
  promotionBanner,
  modernDemoBanner as banner,
  modernDemoProductBanner as productBanner,
} from '@data/static/banners';
import Link from 'next/link';

export { getStaticProps } from '@framework/homepage/modern';
import Marquee from 'react-fast-marquee';
import { components } from 'react-select';
import { MdCelebration } from 'react-icons/md';

import { CiDiscount1 } from 'react-icons/ci';
import { FaCameraRetro } from 'react-icons/fa';
import {   FaFemale, FaTag } from 'react-icons/fa';

export default function Home() {
  return (
    <>


{/* Winter Discount Season Marquee */}
<Marquee className="bg-gradient-to-r from-blue-50 to-white py-4 my-2 shadow-2xl border-t-2 border-b-2 border-gray-200">
  <div className="flex items-center justify-center w-full text-black text-xl font-bold tracking-wide">
    <Link
      href="/collections/winter-collection"
      className="group hover:text-blue-600 transition-all duration-500 ease-in-out"
    >
      <span className="flex items-center space-x-6">
        {/* Snowflake Icon */}
        <span className="bg-blue-100 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-md">
          <FaSnowflake className="text-blue-600 text-xl" />
        </span>

        {/* Text with Underline Animation */}
        <span className="relative inline-block">
          <span className="text-gray-800 group-hover:text-blue-600 transition-all duration-300">
            The Winter Discount Season Is On
          </span>
          {/* Underline Animation */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
        </span>

        {/* Shopping Cart Icon */}
        <span className="bg-blue-500 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-md">
          <FaShoppingCart className="text-white text-xl" />
        </span>
      </span>
    </Link>
  </div>
</Marquee>

{/* Women's Collection Marquee */}
<Marquee
  className="bg-gradient-to-r from-pink-50 to-white py-4 my-2 shadow-2xl border-t-2 border-b-2 border-gray-200"
  direction={'right'}
>
  <div className="flex items-center justify-center w-full text-black text-xl font-bold tracking-wide">
    <Link
      href="/collections/womens-collection"
      className="group hover:text-pink-600 transition-all duration-500 ease-in-out"
    >
      <span className="flex items-center space-x-6">
        {/* Female Icon */}
        <span className="bg-pink-100 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-md">
          <FaFemale className="text-pink-600 text-xl" />
        </span>

        {/* Text with Underline Animation */}
        <span className="relative inline-block">
          <span className="text-gray-800 group-hover:text-pink-600 transition-all duration-300">
            40% Off On Women Wear
          </span>
          {/* Underline Animation */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-500"></span>
        </span>

        {/* Tag Icon */}
        <span className="bg-pink-500 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-md">
          <FaTag className="text-white text-xl" />
        </span>
      </span>
    </Link>
  </div>
</Marquee>



      <BannerBlock data={masonryBanner} />
      <Marquee className="bg-gradient-to-r from-white to-gray-50 py-6 my-2 shadow-2xl border-t-2 border-b-2 border-gray-200">
  <div className="flex items-center justify-center w-full text-black text-xl font-bold tracking-wide">
    {/* Text with Icons */}
    <a
      href="https://www.instagram.com/thefun2shstore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      target="_blank"
      rel="noopener noreferrer"
      className="group hover:text-blue-600 transition-all duration-500 ease-in-out"
      style={{ fontFamily: 'Le Havre Layers, sans-serif' }}
    >
      <span className="flex items-center flex-wrap space-x-6">
        {/* Upload Your Pic */}
        <span className="relative inline-block">
          <span className="text-gray-800 group-hover:text-blue-600 transition-all duration-300">
            Upload Your Pic
          </span>
          {/* Underline Animation */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
        </span>

        {/* Camera Icon */}
        <span className="bg-yellow-300 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-md">
          <FaCameraRetro className="text-black text-xl" />
        </span>

        {/* Tagging Text */}
        <span className="relative inline-block">
          <span className="text-gray-800 group-hover:text-blue-600 transition-all duration-300">
            Tagging @thefun2shstore on Instagram
          </span>
          {/* Underline Animation */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
        </span>

        {/* Instagram Icon */}
        <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-lg">
          <FaInstagram className="text-white text-xl" />
        </span>

        {/* With our Brand */}
        <span className="relative inline-block">
          <span className="text-gray-800 group-hover:text-blue-600 transition-all duration-300">
            With our Brand
          </span>
          {/* Underline Animation */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
        </span>

        {/* Tag Icon */}
        <span className="bg-blue-500 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-md">
          <FaTags className="text-white text-xl" />
        </span>

        {/* Get 20% Additional Discount */}
        <span className="relative inline-block">
          <span className="text-gray-800 group-hover:text-blue-600 transition-all duration-300">
            & Get 20% Additional Discount
          </span>
          {/* Underline Animation */}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500"></span>
        </span>

        {/* Gift Icon */}
        <span className="bg-red-500 p-3 rounded-full transform group-hover:scale-110 transition-all duration-300 shadow-md">
          <FaGift className="text-white text-xl" />
        </span>
      </span>
    </a>
  </div>
</Marquee>

      <BannerSliderBlock data={promotionBanner} />

      <Container>
        <NewArrivalsProductFeed />
        <ProductsKanpurEraBlock />
      </Container>

      <Container>
        <BannerCard
          data={banner[2]}
          href={`${ROUTES.COLLECTIONS}/${banner[2].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[3.15/1]"
        />
      </Container>

      <Container>
        <ProductsOversizedTshirtBlock variant="slider"/>
        <BestSellerProductFeed  />
      </Container>

    

      <Container>
        <CategoryBlock
          sectionHeading="text-shop-by-category"
          variant="rounded"
        />
      </Container>
      <Container>
        <ProductsTShirtsUnder599Block variant="slider"></ProductsTShirtsUnder599Block>
      </Container>

      <ProductsFlashSaleBlock />
      <Container>
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[3.15/1]"
        />
      </Container>

      <Container>
        <WinterSeasonProducts ></WinterSeasonProducts>
      </Container>

      <Container>
        <ProductsFeatured sectionHeading="text-featured-products"  />

        <BannerCard
          data={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[4.3/1]"
        />

        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
          data={productBanner}
        />

        <ExclusiveBlock />
        {/* <NewArrivalsProductFeed /> */}

        {/* <DownloadApps /> */}
        <Support />
        <Instagram />
        <Subscription className="px-5 py-12 bg-opacity-0 sm:px-16 xl:px-0 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.getLayout = getLayout;