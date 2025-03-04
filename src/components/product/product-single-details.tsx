import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Button from '@components/ui/button';
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import Counter from '@components/common/counter';
import { getVariations } from '@framework/utils/get-variations';
import { useCart } from '@store/quick-cart/cart.context';
import usePrice from '@lib/use-price';
import { generateCartItem } from '@utils/generate-cart-item';
import { ProductAttributes } from './product-attributes';
import isEmpty from 'lodash/isEmpty';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useRouter } from 'next/router';
import {
  FaCartPlus,
  FaChevronDown,
  FaChevronUp,
  FaFire,
  FaShoppingCart,
  FaStar,
  FaTag,
} from 'react-icons/fa';
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
import ReviewForm from '@components/common/form/review-form';
import { IoBagCheckOutline } from 'react-icons/io5';
import axios from 'axios';
import { useUI } from '@contexts/ui.context';
import { useUser } from '@framework/auth';
import { User } from '@type/index';
import { cn } from '@lib/cn';
import ImageModal from './ImageModal';
import PincodeDeliveryChecker from './PincodeDeliveryChecker';

const FavoriteButton = dynamic(
  () => import('@components/product/favorite-button'),
  { ssr: false },
);

type Props = {
  product: Product;
};

const ProductSingleDetails: React.FC<Props> = ({ product }) => {
  const { t } = useTranslation();
  const { width } = useWindowSize();
  const { addItemToCart } = useCart();
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState(1);
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [overallRating, setOverallRating] = useState<number | null>(null);
  const [showReviews, setShowReviews] = useState(true);
  const { closeModal, openSidebar } = useUI();
  const { me } = useUser();
  const [id, setId] = useState<number | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [viewCartBtn, setViewCartBtn] = useState(false);
  const [currentImage, setCurrentImage] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageHighLight, setImageHighLight] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const { price, basePrice } = usePrice({
    amount: product?.sale_price ? product?.sale_price : product?.price!,
    baseAmount: product?.price,
  });

  const variations = useMemo(() => getVariations(product?.variations!), [product]);
  const combineImages = useMemo(() => [...product?.gallery, product?.image], [product]);
  const content = useSanitizeContent({ description: product?.description });

  useEffect(() => {
    if (me?.id) {
      setId(me.id);
    }
  }, [me]);

  useEffect(() => {
    setCurrentImage(
      combineImages[0]?.original ||
      combineImages[0]?.image?.original ||
      '/assets/placeholder/products/product-gallery.svg',
    );
  }, [combineImages]);

  const isSelected = useMemo(() => (
    !isEmpty(variations)
      ? !isEmpty(attributes) &&
        Object.keys(variations).every((variation) => attributes.hasOwnProperty(variation))
      : true
  ), [variations, attributes]);

  const selectedVariation = useMemo(() => {
    if (isSelected) {
      return product?.variation_options?.find((o: any) =>
        isEqual(
          o.options.map((v: any) => v.value).sort(),
          Object.values(attributes).sort(),
        ),
      );
    }
    return {};
  }, [isSelected, product, attributes]);

  const handleImageClick = useCallback((imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const openCart = useCallback(() => openSidebar({ view: 'DISPLAY_CART' }), [openSidebar]);

  const addToCart = useCallback(() => {
    setViewCartBtn(true);
    if (!isSelected) return;
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 600);

    const item = generateCartItem({ ...product, max_price: product.max_price }, selectedVariation);
    addItemToCart(item, quantity);
    toast(t('add-to-cart'), {
      type: 'success',
      progressClassName: 'fancy-progress-bar',
      position: width > 768 ? 'top-right' : 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }, [isSelected, product, selectedVariation, quantity, addItemToCart, t, width]);

  const handleAttribute = useCallback((attribute: any) => {
    if (!isMatch(attributes, attribute)) {
      setQuantity(1);
    }
    setAttributes((prev) => ({ ...prev, ...attribute }));
  }, [attributes]);

  const handleClearAttribute = useCallback(() => {
    setAttributes({});
  }, []);

  const handleToggleReviewForm = useCallback(() => {
    setShowReviewForm((prev) => !prev);
  }, []);

  const handleAddReview = useCallback((newReview: any) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  }, []);

  const handleToggleReviews = useCallback(() => {
    setShowReviews((prev) => !prev);
  }, []);

  const getImageUrl = useCallback((size: string) => {
    switch (size) {
      case 't-shirt':
        return "/sizeChart/tshirt.jpg";
      case 'shirt':
        return 'https://www.adiricha.com/wp-content/uploads/2024/03/Adiricha-Men-Shirt-Size-Chart.jpg';
      case 'oversized-tshirt':
        return "/sizeChart/oversized-tshirt.jpg";
      case 'hoodie':
        return "/sizeChart/oversized-hoodie.jpg";
      case 'oversized-hoodie':
        return "/sizeChart/oversized-hoodie.jpg";
      default:
        return 'https://www.adiricha.com/wp-content/uploads/2024/03/Default-Size-Chart.jpg';
    }
  }, []);

  const getHighlightMessage = useCallback((imageHighLight: string, tags: any[]) => {
    const hasRelevantTags = tags.some(tag => ["new-arrivals", "flash-sale"].includes(tag.slug));
    if (!hasRelevantTags) return null;

    const highlightMessages = {
      "Most Trending": {
        icon: <FaCartPlus className="w-4 h-4" />,
        message: "63 people bought this in the last 7 days",
        color: "#1C6C9E",
        gradient: "linear-gradient(90deg, rgba(28, 108, 158, 0.2), rgba(255, 255, 255, 0))",
      },
      "Discounted": {
        icon: <FaTag className="w-4 h-4" />,
        message: "Get this discount for a limited time!",
        color: "#FF0000",
        gradient: "linear-gradient(90deg, rgba(255, 0, 0, 0.2), rgba(255, 255, 255, 0))",
      },
      "Hot New": {
        icon: <FaFire className="w-4 h-4" />,
        message: "In demand! Buy now, few left!",
        color: "#FF4500",
        gradient: "linear-gradient(90deg, rgba(255, 69, 0, 0.2), rgba(255, 255, 255, 0))",
      },
    };

    return highlightMessages[imageHighLight] || null;
  }, []);

  const getTagColor = useCallback((tagId: number) => {
    const colors = [
      { text: "#1C6C9E", bg: "#E6F4F9" },
      { text: "#FF0000", bg: "#FFE6E6" },
      { text: "#FF4500", bg: "#FFEEE6" },
      { text: "#4CAF50", bg: "#E8F5E9" },
      { text: "#9C27B0", bg: "#F3E5F5" },
      { text: "#FFC107", bg: "#FFF8E1" },
    ];
    return colors[tagId % colors.length];
  }, []);


   function handleBuyToCart() {
    // if (!isSelected) return;
    // router.push('/checkout');
  
    openCart();
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://fun2sh.deificindia.com/reviews?product_id=${product.id}`,
        );
        const data = await response.json();
        setImageHighLight(product.product_category);
        setOverallRating(parseFloat(data.overall_rating).toFixed(1));

        setReviews(data.reviews.data);
        console.log(data.reviews.data); // Assuming the reviews are in the "data" field
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [product]);



  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="items-start block grid-cols-9 pb-10 lg:grid gap-x-10 xl:gap-x-14 pt-7 lg:pb-14 2xl:pb-20 ">
      <div className="col-span-5 grid grid-cols-5 gap-2.5">
        {/* Thumbnails column (col-1) */}
        {/* // style={{ minHeight: '100px' }}  */}
        <>
          <div
            className="col-span-1 flex flex-col items-start custom-scrollbar max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
            style={{
              // Max height set to 50% of the viewport height for a more responsive layout
              overflowY: 'auto', // Enable vertical scrolling if content overflows
            }}
          >
            {(combineImages?.length > 1
              ? combineImages
              : product.variation_options
            )?.map((item, index) => {
              const imageSrc =
                item?.original ||
                item?.image?.original ||
                '/assets/placeholder/products/product-gallery.svg';

              return (
                <div
  key={index}
  style={{
    minHeight: '80px',
    maxWidth: '100px',
    maxHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
  className="relative mb-2 rounded-lg overflow-hidden border border-gray-300 shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer"
>
  <Image
    src={imageSrc}
    alt={`Thumbnail ${index}`}
    width={100}
    height={100}
    onClick={() => setCurrentImage(imageSrc)}
    className="object-contain w-full h-full"
  />
</div>
              );
            })}
          </div>

          <style>
            {`
          /* Webkit-based browsers (Chrome, Safari) */
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }

          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f0f0f0;
          }

          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #a0a0a0;
            border-radius: 4px;
          }

          /* Firefox */
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #a0a0a0 #f0f0f0;
          }
        `}
          </style>
        </>

        {/* Main image column (col-4) */}
        <div className="col-span-4">
  <div className="relative rounded-lg overflow-hidden w-full h-full border border-gray-200 shadow-lg">
    <Image
      src={currentImage}
      alt="Selected"
      width={600}
      height={600}
      onClick={() => handleImageClick(currentImage)}
      className="object-cover w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
      priority // Use priority for above-the-fold images
    />
    {imageHighLight && (
      <div
        className={cn(
          'absolute top-0 left-0 text-white text-xs px-2 py-1 rounded-br-md',
          {
            'bg-blue-500': imageHighLight === 'Discounted',
            'bg-green-500': imageHighLight === 'Most Trending',
            'bg-red-500': !['Discounted', 'Most Trending'].includes(
              imageHighLight,
            ),
          },
        )}
      >
        {imageHighLight}
      </div>
    )}
  </div>
  {isModalOpen && (
    <ImageModal
      images={combineImages}
      imageSrc={currentImage}
      onClose={handleCloseModal}
    />
  )}
</div>
        {width >= 1024 && (
          <>
            {/* Customer Reviews and Ratings Section */}
            <h2 className="text-lg font-semibold mt-4 col-span-5">
              Customer Reviews and Ratings
            </h2>

            {/* Button for toggling all reviews */}
            <Button
              variant="slim"
              onClick={handleToggleReviews}
              className="mt-4 w-full py-2 text-white rounded-md shadow-md transition duration-200 col-span-5"
            >
              {showReviews ? 'All Reviews' : 'All Reviews'}
            </Button>

            {/* Display the reviews if toggled on */}
            {showReviews && (
              <div className="mt-4 col-span-5">
                {reviews?.length > 0 ? (
                  reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-300 py-4"
                    >
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-sm">{review.comment}</p>
                      <p className="text-sm text-gray-500 flex items-center">
                        Rating:
                        <span className="ml-2 flex">
                          {Array.from({ length: review.rating }, (_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                          ))}
                          {Array.from(
                            { length: 5 - review.rating },
                            (_, index) => (
                              <FaStar
                                key={index + review.rating}
                                className="text-gray-300"
                              />
                            ),
                          )}
                        </span>
                        <span className="ml-2">{review.rating} / 5</span>
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No reviews yet.</p>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="border-b border-gray-300 pb-7">
          <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse mb-2">
            <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
            
              {product?.name
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')}
            </h2>
            <div>
              <FavoriteButton productId={product?.id} />
            </div>
          </div>
          {content ? (
            <div>
              <div
                className="text-sm leading-6 text-body lg:text-base lg:leading-8 react-editor-description"
                dangerouslySetInnerHTML={{
                  __html: product?.short_description,
                }}
              />
                {overallRating > 0 &&(
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
                <span style={{ marginRight: '5px' }}>{overallRating}</span>{' '}
                {/* Display rating number */}
                <FaStar color="gold" /> {/* Display static star icon */}
              </div>)}
            </div>
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
                    {Math.round(
    ((parseFloat(basePrice.replace('₹', '').replace(',', '')) -
      parseFloat(price.replace('₹', '').replace(',', ''))) /
      parseFloat(basePrice.replace('₹', '').replace(',', ''))) *
      100
  )}
                      % off
                    </span>
                  </>

                  
                )}
              </>
              
            )}
          </div>
          

          {(() => {
    const highlightMessage = getHighlightMessage(imageHighLight, product.tags);
    return highlightMessage && (
        <div 
            className="flex items-center space-x-2 mt-4 p-2 rounded-lg"
            style={{ 
                color: highlightMessage.color,
                background: highlightMessage.gradient,
            }}
        >
            {highlightMessage.icon}
            <span className="font-semibold text-sm">{highlightMessage.message}</span>
        </div>
    );
})()}





        </div>

        {!isEmpty(variations) && (
          <div className="pb-3 border-b border-gray-300 pt-7">
            {Object.keys(variations).map((variation) => {
              return (
              <ProductAttributes
  key={variation}
  title={variation}
  attributes={variations[variation]}
  active={attributes[variation]}
  onClick={handleAttribute}
  clearAttribute={handleClearAttribute}
  sizeChart={product.size_chart} // Pass the size chart
  onSizeGuideClick={handleShow} // Pass the click handler
/>
              );
            })}

            {product?.size_chart && (

                  
                    <div>
                     

                      {show && (

                        <div
                          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
                          onClick={handleClose}
                        >
                          <div
                            className="bg-white rounded-lg p-4 relative overflow-hidden w-full max-w-3xl mx-4 sm:mx-8 lg:mx-auto"
                            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
                          >
                            <button
                              className="absolute top-2 right-2 text-xl font-bold text-gray-700"
                              onClick={handleClose}
                            >
                              &times;
                            </button>
                            <img
                              src={getImageUrl(product.size_chart)}
                              alt="Size Chart"
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
          </div>
        )}

        <div className="flex flex-col items-start py-8 space-y-4 border-b border-gray-300 rtl:space-y-reverse ltr:md:pr-32 ltr:lg:pr-12 ltr:2xl:pr-32 ltr:3xl:pr-48 rtl:md:pl-32 rtl:lg:pl-12 rtl:2xl:pl-32 rtl:3xl:pl-48">
          {isEmpty(variations) && (
            <>
              {Number(product.quantity) > 0 ? (
                <div className="flex items-center space-x-2">
                  {' '}
                  {/* Flex for text and counter */}
                  <span className="font-bold mx-1">Quantity:</span>{' '}
                  {/* Added text */}
                  <Counter
                    quantity={quantity}
                    onIncrement={() => setQuantity((prev) => prev + 1)}
                    onDecrement={() =>
                      setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                    }
                    disableDecrement={quantity === 1}
                    disableIncrement={Number(product.quantity) === quantity}
                  />
                  {product?.size_chart && (

                  
                    <div>
                      <div className="w-full">
                        <button
                          type="button"
                          onClick={handleShow}
                          className="text-white bg-black border border-gray-300 focus:outline-none hover:bg-gray-800 active:bg-black focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2"
                          style={{
                            backgroundColor: 'black !important',
                          }}
                        >
                         
                          Size Chart
                        </button>
                      </div>

                      {show && (

                        <div
                          className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
                          onClick={handleClose}
                        >
                          <div
                            className="bg-white rounded-lg p-4 relative overflow-hidden w-full max-w-3xl mx-4 sm:mx-8 lg:mx-auto"
                            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
                          >
                            <button
                              className="absolute top-2 right-2 text-xl font-bold text-gray-700"
                              onClick={handleClose}
                            >
                              &times;
                            </button>
                            <img
                              src={getImageUrl(product.size_chart)}
                              alt="Size Chart"
                              className="w-full h-auto object-contain"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
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
              {selectedVariation?.is_disable ||
              selectedVariation.quantity === 0 ? (
                <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
                  {t('text-out-stock')}
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  {' '}
                  {/* Flex for text and counter */}
                  <span className="font-medium">Quantity:</span>{' '}
                  {/* Added text */}
                  <Counter
                    quantity={quantity}
                    onIncrement={() => setQuantity((prev) => prev + 1)}
                    onDecrement={() =>
                      setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
                    }
                    disableDecrement={quantity === 1}
                    disableIncrement={
                      Number(selectedVariation.quantity) === quantity
                    }
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
                className={`w-full text-white`}
                // ${
                //   !isSelected
                //     ? 'bg-gray-400 hover:bg-gray-400'
                //     : 'bg-green-500 hover:bg-green-600' // Change bg to green with hover effect
                // }
                disabled={
                  !isSelected ||
                  !product?.quantity ||
                  product.status.toLowerCase() != 'publish' ||
                  (!isEmpty(selectedVariation) &&
                    !selectedVariation?.quantity) ||
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
            {viewCartBtn &&(
            <div className="w-full md:w-1/2">
             <Button
  onClick={handleBuyToCart}
  variant="slim"
  className={`w-full text-black bg-yellow-500 hover:bg-yellow-600 hover:text-black`}
  disabled={
    !isSelected ||
    !product?.quantity ||
    product.status.toLowerCase() != 'publish' ||
    (!isEmpty(selectedVariation) && !selectedVariation?.quantity) ||
    (!isEmpty(selectedVariation) && selectedVariation?.is_disable)
  }
>
  <FaPersonWalkingLuggage className="w-5 h-5 mr-2" />
  <span className="py-2 3xl:px-8">
    {product?.quantity ||
    (!isEmpty(selectedVariation) && selectedVariation?.quantity)
      ? t('Go to Cart')
      : t('text-out-stock')}
  </span>
</Button>

            </div>)}


           
          </div>
         
        </div>

      
        <div className="py-4">
         
        <PincodeDeliveryChecker></PincodeDeliveryChecker>
       
          <ul className="pb-1 space-y-5 text-sm">
          
            {/* Existing code */}
            {product?.sku && (
              <li>
                <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
                  SKU:
                </span>
                {product?.sku}
              </li>
            )}
            {/* Categories */}
            {product?.categories &&
              Array.isArray(product.categories) &&
              product.categories.length > 0 && (
                <li>
                  <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
                    Category:
                  </span>
                  {product.categories.map((category, index) => (
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

             
            {/* Tags */}
            {product?.tags &&
    Array.isArray(product.tags) &&
    product.tags.length > 0 && (
        <li className="productTags">
            <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
                Tags:
            </span>
            {product.tags.map((tag) => {
                const tagColor = getTagColor(tag.id); // Get color for the tag
                return (
                    <Link
                        key={tag.id}
                        href={`${ROUTES.COLLECTIONS}/${tag?.slug}`}
                        className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition no-underline hover:text-heading  rtl:last:pl-0 px-2 py-1 rounded-md mx-1 mt-0.5"
                        style={{
                            color: tagColor.text, // Dark text color
                            backgroundColor: tagColor.bg, // Light background color
                            textDecoration: "none", // Ensures no underline
                        }}
                    >
                        {tag.name}
                    </Link>
                );
            })}
        </li>
    )}


           
          </ul>
          <div className="accordion-container mt-2">
            {/* Product Details Section */}
            <div className="shadow-sm">
              <header
                className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300"
                onClick={() => toggleAccordion(1)} // Toggle this section
              >
                <h2 className="text-sm font-semibold leading-relaxed text-heading ltr:pr-2 rtl:pl-2 md:text-base lg:text-lg">
                  Product Details
                </h2>
                <div className="relative flex items-center justify-center flex-shrink-0 w-4 h-4">
                  <div className="w-full h-0.5 bg-heading rounded-sm"></div>
                  <div
                    className={`origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out ${
                      openIndex === 1 ? 'scale-100' : 'scale-0'
                    }`}
                  ></div>
                </div>
              </header>
              {/* Accordion Content */}
              {openIndex === 1 && content && (
  <div
    className="pb-6 md:pb-7 leading-7 text-sm text-gray-600"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
)}

             
            </div>

            {/* Shipping Information Section */}
            <div className="shadow-sm">
              <header
                className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300"
                onClick={() => toggleAccordion(2)} // Toggle this section
              >
                <h2 className="text-sm font-semibold leading-relaxed text-heading ltr:pr-2 rtl:pl-2 md:text-base lg:text-lg">
                  Shipping Information
                </h2>
                <div className="relative flex items-center justify-center flex-shrink-0 w-4 h-4">
                  <div className="w-full h-0.5 bg-heading rounded-sm"></div>
                  <div
                    className={`origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out ${
                      openIndex === 2 ? 'scale-100' : 'scale-0'
                    }`}
                  ></div>
                </div>
              </header>
              {/* Accordion Content */}
              {openIndex === 2 && (
                <div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600">
                  We provide fast shipping services and ensure your products
                  arrive safely. Shipping options include standard, express, and
                  next-day delivery.
                </div>
              )}
            </div>

            {/* Return & Refund Policy Section */}
            <div className="shadow-sm">
              <header
                className="cursor-pointer flex items-center justify-between transition-colors py-5 md:py-6 border-t border-gray-300"
                onClick={() => toggleAccordion(3)} // Toggle this section
              >
                <h2 className="text-sm font-semibold leading-relaxed text-heading ltr:pr-2 rtl:pl-2 md:text-base lg:text-lg">
                  Return & Refund Policy
                </h2>
                <div className="relative flex items-center justify-center flex-shrink-0 w-4 h-4">
                  <div className="w-full h-0.5 bg-heading rounded-sm"></div>
                  <div
                    className={`origin-bottom transform w-0.5 h-full bg-heading rounded-sm absolute bottom-0 transition-transform duration-500 ease-in-out ${
                      openIndex === 3 ? 'scale-100' : 'scale-0'
                    }`}
                  ></div>
                </div>
              </header>
              {/* Accordion Content */}
              {openIndex === 3 && (
                <div className="pb-6 md:pb-7 leading-7 text-sm text-gray-600">
                  Our return and refund policy is simple: if you are not
                  satisfied with your purchase, you can return it within 30 days
                  for a full refund.
                </div>
              )}
            </div>
          </div>

          {/* New section for Secure Payment, Easy Returns & Refunds, and 100% Genuine Product */}
          <div className="flex justify-between mt-6">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5163/5163977.png"
                alt="Icon"
                className="w-14 h-14"
              />
              <span className="mt-1 text-xs font-semibold">Free Shipping</span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/11153/11153370.png"
                alt="Icon"
                className="w-14 h-14"
              />
              <span className="mt-1 text-xs font-semibold">
                Easy Returns & Refunds
              </span>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5650/5650931.png"
                alt="Icon"
                className="w-14 h-14"
              />
              <span className="mt-1 text-xs font-semibold">
                100% Genuine Product
              </span>
            </div>
          </div>
        </div>

        {/* Review Form Section */}

        <div className="col-span-9">
          {/* Button to toggle the review form */}
          <Button
            onClick={handleToggleReviewForm}
            className="mt-4 w-half py-2 text-white rounded-md shadow-md transition duration-200"
          >
            {showReviewForm ? 'Add a Review' : 'Add a Review'}
          </Button>

          {/* Display the review form if toggled on */}

          {showReviewForm && (
            <ReviewForm
              onAddReview={handleAddReview}
              productID={product.id}
              userID={id}
            />
          )}
          {/* {console.log(product.shop)} */}

          {/* Display the reviews if toggled on */}
          {width < 1024 && (
            <>
              {/* Customer Reviews and Ratings Section */}
              <h2 className="text-lg font-semibold mt-4 col-span-5">
                Customer Reviews and Ratings
              </h2>

              {/* Button for toggling all reviews */}
              <Button
                variant="slim"
                onClick={handleToggleReviews}
                className="mt-4 w-full py-2 text-white rounded-md shadow-md transition duration-200 col-span-5"
              >
                {showReviews ? 'Show All Reviews' : 'Show All Reviews'}
              </Button>

              {/* Display the reviews if toggled on */}
              {showReviews && (
                <div className="mt-4 col-span-5">
                  {reviews?.length > 0 ? (
                    reviews.map((review) => (
                      <div
                        key={review.id}
                        className="border-b border-gray-300 py-4"
                      >
                        <h3 className="font-bold">{review.name}</h3>
                        <p className="text-sm">{review.comment}</p>
                        <p className="text-sm text-gray-500 flex items-center">
                          Rating:
                          <span className="ml-2 flex">
                            {Array.from(
                              { length: review.rating },
                              (_, index) => (
                                <FaStar
                                  key={index}
                                  className="text-yellow-500"
                                />
                              ),
                            )}
                            {Array.from(
                              { length: 5 - review.rating },
                              (_, index) => (
                                <FaStar
                                  key={index + review.rating}
                                  className="text-gray-300"
                                />
                              ),
                            )}
                          </span>
                          <span className="ml-2">{review.rating} / 5</span>
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">No reviews yet.</p>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductSingleDetails);




