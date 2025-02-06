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
import { FaFemale, FaInstagram, FaSnowflake } from 'react-icons/fa';
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

export default function Home() {
  return (
    <>
      <Marquee className="bg-black py-2 my-1 shadow-lg">
        <div className="flex items-center space-x-4 w-full text-white text-lg font-semibold">
          {/* Snowflake Icon */}
          <span className="bg-blue-500 p-2 rounded-full shadow-lg">
            <FaSnowflake className="text-white text-sm" />
          </span>

          <p className="w-full text-center">
            <Link href="/collections/winter-collection">
              <span className="flex items-center space-x-2 text-yellow-300 font-bold tracking-wider ">
                The Winter Discount Season Is On
                {/* Shopping Cart Icon */}
                <span className="bg-green-500 p-2 rounded-full shadow-lg ml-1">
                  <FaShoppingCart className="text-white text-sm" />
                </span>
                {/* Tag Icon */}
                <span className="bg-red-500 p-2 rounded-full shadow-lg">
                  <FaTags className="text-white text-sm" />
                </span>
                {/* Gift Icon */}
                <span className="bg-purple-500 p-2 rounded-full shadow-lg">
                  <FaGift className="text-white text-sm" />
                </span>
              </span>
            </Link>
          </p>
        </div>
      </Marquee>
      <Marquee className="bg-black py-2 my-1 shadow-lg" direction={'right'}>
        <div className="flex items-center justify-center space-x-4 w-full text-white text-lg font-semibold">
          {/* Female Icon */}

          {/* Text */}
          <p className="text-center">
            <Link href="/collections/womens-collection">
              <span className="flex items-center space-x-2 text-yellow-300 font-bold tracking-wider">
                40% Off On Women Wear
                <span className="bg-pink-500 p-2 rounded-full shadow-lg ml-1">
                  <FaFemale className="text-white text-sm" />
                </span>
                {/* Percentage Icon */}
                <span className="bg-red-500 p-2 rounded-full shadow-lg">
                  <FaPercentage className="text-white text-sm" />
                </span>
                {/* Discount Tag Icon */}
                <span className="bg-green-500 p-2 rounded-full shadow-lg">
                  <FaTags className="text-white text-sm" />
                </span>
              </span>
            </Link>
          </p>
        </div>
      </Marquee>

      <BannerBlock data={masonryBanner} />

      <Marquee className="bg-black py-2 my-1 shadow-lg">
        <div className="flex items-center justify-center w-full text-white text-lg font-semibold tracking-wider">
          {/* Text with Icons */}
          <a
            href="https://www.instagram.com/thefun2shstore?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center flex-wrap">
              <span>Upload Your Pic</span>
              {/* Camera Icon */}
              <span className="bg-yellow-300 p-2 rounded-full m-1">
                <FaCameraRetro className="text-black text-xs" />
              </span>
              <span>Tagging @thefun2shstore on Instagram </span>
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-2 rounded-full shadow-lg m-1">
                <FaInstagram className="text-white text-sm" />
              </span>
              <span>With our Brand</span>
              {/* Tag Icon */}
              <span className="bg-blue-500 p-2 rounded-full m-1">
                <FaTags className="text-white text-xs" />
              </span>
              <span>& Get 20% Additional Discount</span>
              {/* Gift Icon */}
              <span className="bg-red-500 p-2 rounded-full m-1">
                <FaGift className="text-white text-xs" />
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
        <ProductsOversizedTshirtBlock />
        <BestSellerProductFeed />
      </Container>

      <Container>
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[3.15/1]"
        />
      </Container>

      <Container>
        <CategoryBlock
          sectionHeading="text-shop-by-category"
          variant="rounded"
        />
      </Container>
      <Container>
        <ProductsTShirtsUnder599Block></ProductsTShirtsUnder599Block>
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
        <WinterSeasonProducts></WinterSeasonProducts>
      </Container>

      <Container>
        <ProductsFeatured sectionHeading="text-featured-products" />

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
