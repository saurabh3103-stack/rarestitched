import React from 'react';
import SectionHeader from '@components/common/section-header';
import ProductCard from '@components/product/product-card';
import ProductFeedLoader from '@components/ui/loaders/product-feed-loader';
import { Product } from '@type/index';
import Alert from '@components/ui/alert';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from 'swiper/react';

interface ProductsProps {
  sectionHeading: string;
  categorySlug?: string;
  className?: string;
  products?: Product[];
  loading: boolean;
  error?: string;
  uniqueKey?: string;
  variant?: 'grid' | 'slider'; // Add variant prop
}

const breakpoints = {
  '1500': {
    slidesPerView: 6,
    spaceBetween: 28,
  },
  '1025': {
    slidesPerView: 6,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  '480': {
    slidesPerView: 3,
    spaceBetween: 12,
  },
  '0': {
    slidesPerView: 2,
    spaceBetween: 12,
  },
};

const ProductsBlock: React.FC<ProductsProps> = ({
  sectionHeading,
  categorySlug,
  className = 'mb-9 md:mb-9 lg:mb-10 xl:mb-12',
  products,
  loading,
  error,
  uniqueKey,
  variant = 'grid', // Default to grid
}) => {
  return (
    <div className={className}>
      <SectionHeader
        sectionHeading={sectionHeading}
        categorySlug={categorySlug}
      />

      {error ? (
        <Alert message={error} />
      ) : (
        <div>
          {loading && !products?.length ? (
            <ProductFeedLoader limit={10} uniqueKey={uniqueKey} />
          ) : variant === 'slider' ? (
            <Carousel
              breakpoints={breakpoints}
              buttonClassName="-mt-8 md:-mt-10"
              autoplay={{
                delay: 1000,
              }}
              prevActivateId={`${uniqueKey}SlidePrev`}
              nextActivateId={`${uniqueKey}SlideNext`}
            >
              {products?.map((product: Product) => (
                <SwiperSlide key={`product--key-${product.id}`}>
                  <ProductCard
                    key={`product--key${product.id}`}
                    product={product}
                    variant="grid"
                  />
                </SwiperSlide>
              ))}
            </Carousel>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
              {products?.map((product: Product) => (
                <ProductCard
                  key={`product--key${product.id}`}
                  product={product}
                  variant="grid"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductsBlock;