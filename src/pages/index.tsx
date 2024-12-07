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
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
    
    <Marquee className="bg-black py-1 my-1 shadow-lg">
      <div className="flex items-center space-x-4">
        <p className="text-white text-lg font-semibold flex-1">
          <Link href="/collections/winter-collection">
            <span className="font-bold text-sm text-yellow-300" style={{ fontSize: "15px", fontWeight: "300" }}>
              THE WINTER DISCOUNT SEASON IS ON
            </span>
          </Link>
          <br />
        </p>
      </div>
    </Marquee>
      <BannerBlock data={masonryBanner} />

      <Container>
        <ProductsFlashSaleBlock />
      </Container>
      <Container>
      <BannerCard
          data={banner[2]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[3.15/1]"
        />
        </Container>

      <Container>
       <WinterSeasonProducts></WinterSeasonProducts>
      </Container>
      <BannerSliderBlock data={promotionBanner} />
      <Container>
        <CategoryBlock
          sectionHeading="text-shop-by-category"
          variant="rounded"
        />
        <ProductsFeatured sectionHeading="text-featured-products" />
        <BannerCard
          data={banner[0]}
          href={`${ROUTES.COLLECTIONS}/${banner[0].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[3.15/1]"
        />
        
         <BannerWithProducts
          sectionHeading="text-on-selling-products"
          categorySlug="/search"
          data={productBanner}
        />
        <BannerCard
          data={banner[1]}
          href={`${ROUTES.COLLECTIONS}/${banner[1].slug}`}
          className="mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"
          classNameInner="aspect-[4.3/1]"
        />
        <NewArrivalsProductFeed />
         
        <BrandGridBlock sectionHeading="text-top-brands" />
        
       
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
