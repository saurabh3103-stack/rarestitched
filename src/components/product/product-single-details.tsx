import React, { useState, useEffect } from 'react';
import Button from '@components/ui/button';
import Counter from '@components/common/counter';
import { getVariations } from '@framework/utils/get-variations';
import { useCart } from '@store/quick-cart/cart.context';
import usePrice from '@lib/use-price';
import { generateCartItem } from '@utils/generate-cart-item';
import { ProductAttributes } from './product-attributes';
import isEmpty from 'lodash/isEmpty';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useRouter } from 'next/router';
import { FaChevronDown, FaChevronUp, FaShoppingCart, FaStar } from 'react-icons/fa';
import Link from '@components/ui/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useWindowSize } from '@utils/use-window-size';
import { Attachment, Product } from '@type/index';
import isEqual from 'lodash/isEqual';
import VariationPrice from '@components/product/product-variant-price';
import { useTranslation } from 'next-i18next';
import isMatch from 'lodash/isMatch';
import { ROUTES } from '@lib/routes';
import dynamic from 'next/dynamic';
import { useSanitizeContent } from '@lib/sanitize-content';
import ReviewForm from "@components/common/form/review-form"; // Import the ReviewForm

const FavoriteButton = dynamic(
  () => import('@components/product/favorite-button'),
  { ssr: false }
);

type Props = {
  product: Product;
};

const ProductSingleDetails: React.FC<Props> = ({ product }: any) => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const { addItemToCart } = useCart();
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState(1);
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);

  const { price, basePrice } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
    baseAmount: product?.price,
  });

  const variations = getVariations(product?.variations!);

  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
      Object.keys(variations).every((variation) => attributes.hasOwnProperty(variation))
    : true;

  let selectedVariation: any = {};
  if (isSelected) {
    selectedVariation = product?.variation_options?.find((o: any) =>
      isEqual(o.options.map((v: any) => v.value).sort(), Object.values(attributes).sort())
    );
  }

  function addToCart() {
    if (!isSelected) return;
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 600);

    const item = generateCartItem(product!, selectedVariation);
    addItemToCart(item, quantity);
    toast(t('add-to-cart'), {
      //@ts-ignore
      type: 'dark',
      progressClassName: 'fancy-progress-bar',
      position: width > 768 ? 'bottom-right' : 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  function handleAttribute(attribute: any) {
    if (!isMatch(attributes, attribute)) {
      setQuantity(1);
    }
    setAttributes((prev) => ({
      ...prev,
      ...attribute,
    }));
  }

  function handleClearAttribute() {
    setAttributes({});
  }

  // Combine image and gallery
  const combineImages = [...product?.gallery, product?.image];
  const content = useSanitizeContent({ description: product?.description });

  const [currentImage, setCurrentImage] = useState<string>(
    '/assets/placeholder/products/product-gallery.svg'
  );

  useEffect(() => {
    if (combineImages.length > 0) {
      setCurrentImage(
        combineImages[0].original || combineImages[0].image?.original || '/assets/placeholder/products/product-gallery.svg'
      );
    }
  }, [combineImages]);
  
  const router = useRouter();

  function handleBuyToCart() {
    if (!isSelected) return;
    router.push('/checkout');
  }

   const [showReviewModal, setShowReviewModal] = useState(false);

  const handleToggleReviewModal = () => {
    setShowReviewModal(!showReviewModal);
  };
  return (
    <div className="items-start block grid-cols-9 pb-10 lg:grid gap-x-10 xl:gap-x-14 pt-7 lg:pb-14 2xl:pb-20 ">
      <div className="col-span-5 grid grid-cols-5 gap-2.5">
        {/* Thumbnails column (col-1) */}
        <div className="col-span-1 flex flex-col items-start">
          {(combineImages?.length > 1 ? combineImages : product.variation_options)?.map((item, index) => {
            const imageSrc = item?.original || item?.image?.original || '/assets/placeholder/products/product-gallery.svg';
            return (
              <div
                key={index}
                className="relative mb-2 rounded-lg overflow-hidden border border-gray-300 shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer "
              >
                <img
                  src={imageSrc}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setCurrentImage(imageSrc)}
                  className="w-full h-full object-cover rounded-lg border border-gray-300"
                />
              </div>
            );
          })}
        </div>

        {/* Main image column (col-4) */}
        <div className="col-span-4">
          <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
            <img
              src={currentImage}
              alt="Selected"
              className="img-fluid w-full h-full object-contain"
              style={{ maxHeight: '600px' }}
            />
          </div>
        </div>
      </div>

      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="border-b border-gray-300 pb-7">
          <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse mb-2">
            <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
              {product?.name}
            </h2>
            <div>
              <FavoriteButton productId={product?.id} />
            </div>
          </div>
          {content ? (
            <div
              className="text-sm leading-6 text-body lg:text-base lg:leading-8 react-editor-description"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          ) : (
            ''
          )}
          <div className="flex items-center mt-5">
            {!isEmpty(variations) ? (
              <VariationPrice
                selectedVariation={selectedVariation}
                minPrice={product.min_price}
                maxPrice={product.max_price}
              />
            ) : (
              <>
                <div className="text-base font-semibold text-heading md:text-xl lg:text-2xl">
                  {price}
                </div>

                {basePrice && (
                  <>
                    <del className="font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
                      {basePrice}
                    </del>
                    <span className="text-red-700 font-bold ltr:pl-2 rtl:pr-2">
                      {Math.round(((parseFloat(basePrice.replace('₹', '')) - parseFloat(price.replace('₹', ''))) / parseFloat(basePrice.replace('₹', ''))) * 100)}% off
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start py-8 space-y-4 border-b border-gray-300 rtl:space-y-reverse ltr:md:pr-32 ltr:lg:pr-12 ltr:2xl:pr-32 ltr:3xl:pr-48 rtl:md:pl-32 rtl:lg:pl-12 rtl:2xl:pl-32 rtl:3xl:pl-48">
          {isEmpty(variations) && (
            <>
              {Number(product.quantity) > 0 ? (
                <div className="flex items-center space-x-2"> {/* Flex for text and counter */}
                  <span className="font-bold mx-1">Quantity:</span> {/* Added text */}
                  <Counter
                    quantity={quantity}
                    onIncrement={() => setQuantity((prev) => prev + 1)}
                    onDecrement={() =>
                      setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                    }
                    disableDecrement={quantity === 1}
                    disableIncrement={Number(product.quantity) === quantity}
                  />
                </div>
              ) : (
                <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
                  {t('text-out-stock')}
                </div>
              )}
            </>
          )}

          {!isEmpty(selectedVariation) && (
            <>
              {selectedVariation?.is_disable || selectedVariation.quantity === 0 ? (
                <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
                  {t('text-out-stock')}
                </div>
              ) : (
                <div className="flex items-center space-x-2"> {/* Flex for text and counter */}
                  <span className="font-medium">Quantity:</span> {/* Added text */}
                  <Counter
                    quantity={quantity}
                    onIncrement={() => setQuantity((prev) => prev + 1)}
                    onDecrement={() =>
                      setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                    }
                    disableDecrement={quantity === 1}
                    disableIncrement={Number(selectedVariation.quantity) === quantity}
                  />
                </div>
              )}
            </>
          )}

          {/* Container to ensure buttons stack on mobile and remain in one row on larger screens */}
          <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <div className="w-full md:w-1/2">
              <Button
                onClick={addToCart}
                variant="slim"
                className={`w-full text-white ${
                  !isSelected
                    ? 'bg-gray-400 hover:bg-gray-400'
                    : 'bg-green-500 hover:bg-green-600' // Change bg to green with hover effect
                }`}
                disabled={
                  !isSelected ||
                  !product?.quantity ||
                  product.status.toLowerCase() != 'publish' ||
                  (!isEmpty(selectedVariation) && !selectedVariation?.quantity) ||
                  (!isEmpty(selectedVariation) && selectedVariation?.is_disable)
                }
                loading={addToCartLoader}
              >
                <span className="flex items-center justify-center py-2 3xl:px-8">
                  <FaShoppingCart className="w-5 h-5 mr-2" /> {/* Icon added */}
                  {product?.quantity ||
                  (!isEmpty(selectedVariation) && selectedVariation?.quantity)
                    ? t('text-add-to-cart')
                    : t('text-out-stock')}
                </span>
              </Button>
            </div>

            <div className="w-full md:w-1/2">
              <Button
                onClick={handleBuyToCart} // Use the new function to navigate to checkout
                variant="slim"
                className={`w-full text-white ${
                  !isSelected
                    ? 'bg-gray-400 hover:bg-gray-400'
                    : 'bg-red-600 hover:bg-red-700' // Change bg to red with hover effect
                }`}
                disabled={
                  !isSelected ||
                  !product?.quantity ||
                  product.status.toLowerCase() != 'publish' ||
                  (!isEmpty(selectedVariation) && !selectedVariation?.quantity) ||
                  (!isEmpty(selectedVariation) && selectedVariation?.is_disable)
                }
                // loading={addToCartLoader}
              >
                <span className="py-2 3xl:px-8">
                  {product?.quantity ||
                  (!isEmpty(selectedVariation) && selectedVariation?.quantity)
                    ? t('Buy Now')
                    : t('text-out-stock')}
                </span>
              </Button>
            </div>
          </div>
        </div>

        <div className="py-6">
          <ul className="pb-1 space-y-5 text-sm">
            {product?.sku && (
              <li>
                <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
                  SKU:
                </span>
                {product?.sku}
              </li>
            )}

            {product?.categories &&
              Array.isArray(product.categories) &&
              product.categories.length > 0 && (
                <li>
                  <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
                    Category:
                  </span>
                  {product.categories.map((category: any, index: number) => (
                    <Link
                      key={index}
                      href={`${ROUTES.CATEGORY}/${category?.slug}`}
                      className="transition hover:underline hover:text-heading"
                    >
                      {product?.categories?.length === index + 1
                        ? category.name
                        : `${category.name}, `}
                    </Link>
                  ))}
                </li>
              )}

            {product?.tags &&
              Array.isArray(product.tags) &&
              product.tags.length > 0 && (
                <li className="productTags">
                  <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
                    Tags:
                  </span>
                  {product.tags.map((tag: any) => (
                    <Link
                      key={tag.id}
                      href={`${ROUTES.COLLECTIONS}/${tag?.slug}`}
                      className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover :underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
                    >
                      {tag.name}
                      <span className="text-heading">,</span>
                    </Link>
                  ))}
                </li>
              )}

            <li>
              <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
                {t('text-brand-colon')}
              </span>
              <Link
                href={`${ROUTES.BRAND}=${product?.type?.slug}`}
                className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
              >
                {product?.type?.name}
              </Link>
            </li>

            <li>
              <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
                {t('text-shop-colon')}
              </span>
              <Link
                href={`${ROUTES.SHOPS}/${product?.shop?.slug}`}
                className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
              >
                {product?.shop?.name}
              </Link>
            </li>
          </ul>
        </div>

        {/* Review Form Section */}
        <div>
  {/* Other components */}
  <button
    className="flex justify-between items-center w-1/2 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-yellow-600 transition-all duration-300 ease-in-out transform active:scale-95"
    onClick={handleToggleReviewModal}
  >
    <h3 className="text-lg font-bold mb-0">Rate us</h3>
    <span className="flex items-center ml-2">
      <FaStar size={24} />
    </span>
  </button>

  {/* Modal */}
  {showReviewModal && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg max-h-[90vh] overflow-y-auto w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Submit Your Review</h2>
        <ReviewForm />
        <button
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg"
          onClick={handleToggleReviewModal}
        >
          Close
        </button>
      </div>
    </div>
  )}
</div>

      </div>
    </div>
  );
};

export default ProductSingleDetails;