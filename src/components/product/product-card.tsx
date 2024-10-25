import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';
import { FaStar } from 'react-icons/fa'; // Import star icon
import { useUI } from '@contexts/ui.context';
import usePrice from '@lib/use-price';
import { Product } from '@type/index';
import { siteSettings } from '@settings/site.settings';

interface ProductProps {
  product: Product;
  className?: string;
  contactClassName?: string;
  imageContentClassName?: string;
  gridClassName?: string;
  variables?: string;
  variant?:
    | 'grid'
    | 'gridSmall'
    | 'gridSlim'
    | 'list'
    | 'listSmall'
    | 'gridSlimLarge';
  imgLoading?: 'eager' | 'lazy';
}

const ProductCard: FC<ProductProps> = ({
  product,
  className = '',
  contactClassName = '',
  imageContentClassName = '',
  variant = 'list',
  imgLoading,
}) => {
  const { openModal, setModalView, setModalData } = useUI();
  const { name, image, min_price, max_price, product_type, description } =
    product ?? {};

  const { price, basePrice } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
    baseAmount: product?.price,
  });

  const { price: minPrice } = usePrice({
    amount: min_price!
  });

  const { price: maxPrice } = usePrice({
    amount: max_price!,
  });

  function handlePopupView() {
    setModalData(product.slug);
    setModalView('PRODUCT_VIEW');
    return openModal();
  }
  
 

  return (
    <div
      className={cn(
        'group box-border overflow-hidden flex rounded-md cursor-pointer',
        {
          'ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product':
            variant === 'grid' || variant === 'gridSmall',
          'ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start bg-white':
            variant === 'gridSlim' || variant === 'gridSlimLarge',
          'items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct':
            variant === 'listSmall',
          'flex-row items-center transition-transform ease-linear bg-gray-200 ltr:pr-2 ltr:lg:pr-3 ltr:2xl:pr-4 rtl:pl-2 rtl:lg:pl-3 rtl:2xl:pl-4':
            variant === 'list',
        },
        className
      )}
      onClick={handlePopupView}
      title={name}
    >
      <div
        className={cn(
          'flex relative ltr:rounded-l-md rtl:rounded-r-md ',
          {
            'mb-3 md:mb-3.5 w-full aspect-[17/22]': variant === 'grid',
            'mb-3 md:mb-3.5 w-full aspect-[1/1.3]': variant === 'gridSmall',
            'mb-3 md:mb-3.5 pb-0 aspect-square w-full rounded-md overflow-hidden':
              variant === 'gridSlim',
            'mb-3 md:mb-3.5 pb-0 aspect-[1/1.2] w-full rounded-md overflow-hidden':
              variant === 'gridSlimLarge',
            'flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44 lg:h-44 aspect-square':
              variant === 'listSmall',
            'aspect-square': variant === 'list',
          },
          imageContentClassName
        )}
      >
        <Image
          src={image?.original ?? siteSettings?.product?.placeholderImage()}
          fill
          loading={imgLoading}
          quality={100}
          alt={name || 'Product Image'}
          className={cn('bg-gray-300 object-cover', {
            'rounded-md transition duration-200 ease-in group-hover:rounded-b-none':
              variant === 'grid' || variant === 'gridSmall',
            'transition duration-150 ease-linear transform group-hover:scale-105':
              variant === 'gridSlim' || variant === 'gridSlimLarge',
            'ltr:rounded-l-md rtl:rounded-r-md transition duration-200 ease-linear transform group-hover:scale-105':
              variant === 'list',
          })}
          sizes="(max-width: 768px) 100vw"
        />
      </div>

      <div
        className={cn(
          'w-full overflow-hidden',
          {
            'ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4':
              variant === 'grid' || variant === 'gridSmall',
            'ltr:pl-0 rtl:pr-0': variant === 'gridSlim',
            'px-4 lg:px-5 2xl:px-4': variant === 'listSmall',
          },
          contactClassName
        )}
      >
        <h2
          className={cn('text-heading font-semibold truncate mb-1', {
            'text-sm md:text-base':
              variant === 'grid' || variant === 'gridSmall',
            'md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg':
              variant === 'gridSlim',
            'text-sm sm:text-base md:mb-1.5 pb-0': variant === 'listSmall',
            'text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5':
              variant === 'list',
          })}
        >
          {name}
        </h2>
        {description && (
          <p className="text-body text-xs md:text-[13px] lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate">
            {description}
          </p>
        )}

        {/* Static Star Rating */}
        <div
          className="product-rating-button"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            padding: '5px 10px',
            borderRadius: '20px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          <span style={{ marginRight: '5px' }}>4</span> {/* Display rating number */}
          <FaStar color="gold" /> {/* Display static star icon */}
        </div>

        <div
          className={`text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse ${
            variant === 'grid' || variant === 'gridSmall'
              ? '3xl:text-lg lg:mt-2.5'
              : 'sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3'
          }`}
        >
          {product_type.toLocaleLowerCase() === 'variable' ? (
            <>
              <span className="inline-block">{minPrice}</span>
              <span> - </span>
              <span className="inline-block">{maxPrice}</span>
            </>
          ) : (
            <>
              <span className="inline-block">{price}</span>

              {basePrice && (
                <>
                  <del className="font-normal text-gray-800 sm:text-base ltr:pl-1 rtl:pr-1">
                    {basePrice}
                  </del>
                  <span className="text-red-600 font-normal ltr:pl-2 rtl:pr-2">
                    {Math.round(
                      ((parseFloat(basePrice.replace('₹', '')) -
                        parseFloat(price.replace('₹', ''))) /
                        parseFloat(basePrice.replace('₹', ''))) *
                        100
                    )}
                    % off
                  </span>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
{/* <div className="w-full pt-5">
<h3 className="text-lg font-bold">Reviews</h3>
{reviews.map((review) => (
  <div key={review.id} className="border-b border-gray-200 py-2">
    <p className="font-semibold">{review.name}</p>
    <p className="text-sm">{review.comment}</p>
    <p className="text-sm text-yellow-500">Rating: {review.rating} ★</p>
  </div>
))}
<Button
  onClick={handleToggleReviewForm}
  className="mt-3"
  variant="slim"
>
  {showReviewForm ? 'Hide Review Form' : 'Add a Review'}
</Button>
{showReviewForm && <ReviewForm />}
</div> */}



{/* <div className="col-span-9 mt-10">
<h2 className="text-lg font-semibold">Customer Reviews</h2>
<div>
  {reviews.length > 0 ? (
    reviews.map((review) => (
      <div key={review.id} className="border-b border-gray-300 py-4">
        <h3 className="font-bold">{review.name}</h3>
        <p className="text-sm">{review.comment}</p>
        <p className="text-sm text-gray-500">Rating: {review.rating} / 5</p>
      </div>
    ))
  ) : (
    <p>No reviews yet.</p>
  )}
</div> */}

{/* <Button onClick={handleToggleReviewForm} className="mt-4">
  {showReviewForm ? 'Hide Review Form' : 'Leave a Review'}
</Button>

{showReviewForm && (
  <ReviewForm onAddReview={handleAddReview} />
)}
</div> */}



