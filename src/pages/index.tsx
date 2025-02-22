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
import { FaInstagram, FaSnowflake } from 'react-icons/fa';
import { FaShoppingCart, FaTags, FaGift } from 'react-icons/fa';
import { FaShoppingBag, FaPercentage } from 'react-icons/fa';
import ProductsBestsellersBlock from '@containers/BestSellers';
import { useState, useEffect } from "react";
import { FaInstagramSquare } from 'react-icons/fa';
import { ROUTES } from '@lib/routes';
import {
  masonryBanner,
  promotionBanner,
  modernDemoBanner as banner,
  modernDemoProductBanner as productBanner,
} from '@data/static/banners';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { components } from 'react-select';
import { MdCelebration } from 'react-icons/md';
import { CiDiscount1 } from 'react-icons/ci';
import { FaCameraRetro } from 'react-icons/fa';
import { FaFemale, FaTag } from 'react-icons/fa';
import WinterDiscountMarquee from '@components/marquees/WinterDiscountMarquee';
import InstagramTaggingMarquee from '@components/marquees/InstagramTaggingMarquee';
import WomensCollectionMarquee from '@components/marquees/WomensCollectionMarquee';

export { getStaticProps } from '@framework/homepage/modern';

export default function Home() {
  const [aspectRatio, setAspectRatio] = useState("aspect-[3.15/1]");

  useEffect(() => {
    const updateAspectRatio = () => {
      setAspectRatio(window.innerWidth < 550 ? "aspect-[2.92/1]" : "aspect-[3.15/1]");
    };

    updateAspectRatio(); // Initial check
    window.addEventListener("resize", updateAspectRatio);

    return () => window.removeEventListener("resize", updateAspectRatio);
  }, []);

  return (
    <>
      <WinterDiscountMarquee />
      <BannerBlock data={masonryBanner} />
      <InstagramTaggingMarquee />
      <BannerSliderBlock data={promotionBanner} />
      <WomensCollectionMarquee />
      <Container>
        <NewArrivalsProductFeed />
        <ProductsFlashSaleBlock variant="slider" />
      </Container>
      <Container>
        <BannerCard
          data={banner[2]}
          href={`${ROUTES.COLLECTIONS}/${banner[2].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner={aspectRatio}
        />
      </Container>
      <Container>
        <BestSellerProductFeed />
        <ProductsOversizedTshirtBlock variant="slider" />
      </Container>
      <Container>
        <CategoryBlock
          sectionHeading="text-shop-by-category"
          variant="rounded"
        />
      </Container>
      <Container>
        <ProductsTShirtsUnder599Block variant="slider" />
      </Container>
      <Container>
        <ProductsKanpurEraBlock variant="slider" />
      </Container>
      <Container>
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner={aspectRatio}
        />
      </Container>
      <Container>
        <WinterSeasonProducts variant="slider" />
      </Container>
      <Container>
        <ProductsFeatured sectionHeading="text-featured-products" />
        <BannerCard
          data={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[3.55/1]"
        />
        <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
          data={productBanner}
        />
        <ExclusiveBlock />
        <Support />
        <Instagram />
        <Subscription className="px-5 py-12 bg-opacity-0 sm:px-16 xl:px-0 md:py-14 xl:py-16" />
      </Container>
      <Divider className="mb-0" />
    </>
  );
}

Home.getLayout = getLayout;