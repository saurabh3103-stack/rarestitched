import cn from 'classnames';
import Image from 'next/image';
import type { FC } from 'react';
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

  console.log(min_price)
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
      // role="button"
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
          {/* Calculate and display the discount percentage */}
          <span className="text-red-600 font-normal ltr:pl-2 rtl:pr-2">
            {Math.round(((parseFloat(basePrice.replace('₹', '')) - parseFloat(price.replace('₹', ''))) / parseFloat(basePrice.replace('₹', ''))) * 100)}% off
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


// import React, { useState } from 'react';
// import Button from '@components/ui/button';
// import Counter from '@components/common/counter';
// import { getVariations } from '@framework/utils/get-variations';
// import { useCart } from '@store/quick-cart/cart.context';
// import usePrice from '@lib/use-price';
// import { generateCartItem } from '@utils/generate-cart-item';
// import { ProductAttributes } from './product-attributes';
// import isEmpty from 'lodash/isEmpty';
// import { useRouter } from 'next/router'; // Import useRouter
// import { FaShoppingCart } from 'react-icons/fa';
// import Link from '@components/ui/link';
// import Image from 'next/image';
// import { toast } from 'react-toastify';
// import { useWindowSize } from '@utils/use-window-size';
// import { Attachment, Product } from '@type/index';
// import isEqual from 'lodash/isEqual';
// import VariationPrice from '@components/product/product-variant-price';
// import { useTranslation } from 'next-i18next';
// import isMatch from 'lodash/isMatch';
// import { ROUTES } from '@lib/routes';
// import dynamic from 'next/dynamic';
// import { useSanitizeContent } from '@lib/sanitize-content';

// const FavoriteButton = dynamic(
//   () => import('@components/product/favorite-button'),
//   { ssr: false }
// );

// type Props = {
//   product: Product;
// };

// const ProductSingleDetails: React.FC<Props> = ({ product }: any) => {
//   const { t } = useTranslation();
//   const { width } = useWindowSize();
//   const { addItemToCart } = useCart();
//   const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
//   const [quantity, setQuantity] = useState(1);
//   const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);


//   const { price, basePrice } = usePrice({
//     amount: product?.sale_price ? product?.sale_price : product?.price!,
//     baseAmount: product?.price,
//   });

//   const variations = getVariations(product?.variations!);

//   const isSelected = !isEmpty(variations)
//     ? !isEmpty(attributes) &&
//       Object.keys(variations).every((variation) => attributes.hasOwnProperty(variation))
//     : true;

//   let selectedVariation: any = {};
//   if (isSelected) {
//     selectedVariation = product?.variation_options?.find((o: any) =>
//       isEqual(o.options.map((v: any) => v.value).sort(), Object.values(attributes).sort())
//     );
//   }

//   function addToCart() {
//     if (!isSelected) return;
//     setAddToCartLoader(true);
//     setTimeout(() => {
//       setAddToCartLoader(false);
//     }, 600);

//     const item = generateCartItem(product!, selectedVariation);
//     addItemToCart(item, quantity);
//     toast(t('add-to-cart'), {
//       //@ts-ignore
//       type: 'dark',
//       progressClassName: 'fancy-progress-bar',
//       position: width > 768 ? 'bottom-right' : 'top-right',
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//     });
//   }

//   function handleAttribute(attribute: any) {
//     if (!isMatch(attributes, attribute)) {
//       setQuantity(1);
//     }
//     setAttributes((prev) => ({
//       ...prev,
//       ...attribute,
//     }));
//   }

//   function handleClearAttribute() {
//     setAttributes({});
//   }

//   // Combine image and gallery
//   const combineImages = [...product?.gallery, product?.image];
//   const variationImage = product.variation_options;
//   const content = useSanitizeContent({ description: product?.description });

 
  
//   // Initialize currentImage with the first image from combineImages or a placeholder
//   const [currentImage, setCurrentImage] = useState(
//     combineImages.length > 0 ? combineImages[0].original || combineImages[0].image?.original : '/assets/placeholder/products/product-gallery.svg'
//   );
//   const router = useRouter(); // Initialize the router

//   // Your other code

//   function handleBuyToCart() {
//     if (!isSelected) return;
//     router.push('/checkout'); // Navigate to the checkout page
//   }
//   return (
//     <div className="items-start block grid-cols-9 pb-10 lg:grid gap-x-10 xl:gap-x-14 pt-7 lg:pb-14 2xl:pb-20">
//       <div className="col-span-5 grid grid-cols-5 gap-2.5">
//         {/* Thumbnails column (col-1) */}
//         <div className="col-span-1 flex flex-col items-start">
//           {(combineImages?.length > 1 ? combineImages : variationImage)?.map((item, index) => {
//             const imageSrc = item?.original || item?.image?.original || '/assets/placeholder/products/product-gallery.svg';
//             return (
//               <div
//                 key={index}
//                 className="relative mb-2 rounded-lg overflow-hidden border border-gray-300 shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer "
//               >
//                 <img
//                   src={imageSrc}
//                   alt={`Thumbnail ${index}`}
//                   onClick={() => setCurrentImage(imageSrc)}
//                   className="w-full h-full object-cover rounded-lg border border-gray-300"
//                 />
//               </div>
//             );
//           })}
//         </div>

//         {/* Main image column (col-4) */}
//         <div className="col-span-4">
//           <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-lg">
//             <img
//               src={currentImage}
//               alt="Selected"
//               className="img-fluid w-full h-full object-contain"
//               style={{ maxHeight: '600px' }}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="col-span-4 pt-8 lg:pt-0">
//         <div className="border-b border-gray-300 pb-7">
//           <div className="flex w-full items-start justify-between space-x-8 rtl:space-x-reverse mb-2">
//             <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
//               {product?.name}
//             </h2>
//             <div>
//               <FavoriteButton productId={product?.id} />
//             </div>
//           </div>
//           {content ? (
//             <div
//               className="text-sm leading-6 text-body lg:text-base lg:leading-8 react-editor-description"
//               dangerouslySetInnerHTML={{
//                 __html: content,
//               }}
//             />
//           ) : (
//             ''
//           )}
//           <div className="flex items-center mt-5">
//             {!isEmpty(variations) ? (
//               <VariationPrice
//                 selectedVariation={selectedVariation}
//                 minPrice={product.min_price}
//                 maxPrice={product.max_price}
//               />
//             ) : (
//               <>
//                 <div className="text-base font-semibold text-heading md:text-xl lg:text-2xl">
//                   {price}
//                 </div>

//                 {basePrice && (
//                   <>
//                   <del className="font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
//                     {basePrice}
//                   </del>
//                    <span className="text-red-700 font-bold ltr:pl-2 rtl:pr-2">
//                    {Math.round(((parseFloat(basePrice.replace('₹', '')) - parseFloat(price.replace('₹', ''))) / parseFloat(basePrice.replace('₹', ''))) * 100)}% off
//                  </span>
//                  </>
//                 )}
//               </>
//             )}
//           </div>
//         </div>

//         <div className="flex flex-col items-start py-8 space-y-4 border-b border-gray-300 rtl:space-y-reverse ltr:md:pr-32 ltr:lg:pr-12 ltr:2xl:pr-32 ltr:3xl:pr-48 rtl:md:pl-32 rtl:lg:pl-12 rtl:2xl:pl-32 rtl:3xl:pl-48">
//   {isEmpty(variations) && (
//     <>
//       {Number(product.quantity) > 0 ? (
//         <div className="flex items-center space-x-2"> {/* Flex for text and counter */}
//           <span className="font-bold mx-1">Quantity:</span> {/* Added text */}
//           <Counter
//             quantity={quantity}
//             onIncrement={() => setQuantity((prev) => prev + 1)}
//             onDecrement={() =>
//               setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
//             }
//             disableDecrement={quantity === 1}
//             disableIncrement={Number(product.quantity) === quantity}
//           />
//         </div>
//       ) : (
//         <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
//           {t('text-out-stock')}
//         </div>
//       )}
//     </>
//   )}

//   {!isEmpty(selectedVariation) && (
//     <>
//       {selectedVariation?.is_disable || selectedVariation.quantity === 0 ? (
//         <div className="text-base text-red-500 whitespace-nowrap ltr:lg:ml-7 rtl:lg:mr-7">
//           {t('text-out-stock')}
//         </div>
//       ) : (
//         <div className="flex items-center space-x-2"> {/* Flex for text and counter */}
//           <span className="font-medium">Quantity:</span> {/* Added text */}
//           <Counter
//             quantity={quantity}
//             onIncrement={() => setQuantity((prev) => prev + 1)}
//             onDecrement={() =>
//               setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
//             }
//             disableDecrement={quantity === 1}
//             disableIncrement={Number(selectedVariation.quantity) === quantity}
//           />
//         </div>
//       )}
//     </>
//   )}

//   {/* Container to ensure buttons stack on mobile and remain in one row on larger screens */}
//   <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 md:space-x-4 mt-4">
//       <div className="w-full md:w-1/2">
//       <Button
//   onClick={addToCart}
//   variant="slim"
//   className={`w-full text-white ${
//     !isSelected
//       ? 'bg-gray-400 hover:bg-gray-400'
//       : 'bg-green-500 hover:bg-green-600' // Change bg to green with hover effect
//   }`}
//   disabled={
//     !isSelected ||
//     !product?.quantity ||
//     product.status.toLowerCase() != 'publish' ||
//     (!isEmpty(selectedVariation) && !selectedVariation?.quantity) ||
//     (!isEmpty(selectedVariation) && selectedVariation?.is_disable)
//   }
//   loading={addToCartLoader}
// >
//   <span className="flex items-center justify-center py-2 3xl:px-8">
//     <FaShoppingCart className="w-5 h-5 mr-2" /> {/* Icon added */}
//     {product?.quantity ||
//     (!isEmpty(selectedVariation) && selectedVariation?.quantity)
//       ? t('text-add-to-cart')
//       : t('text-out-stock')}
//   </span>
// </Button>

//       </div>

//       <div className="w-full md:w-1/2">
//       <Button
//   onClick={handleBuyToCart} // Use the new function to navigate to checkout
//   variant="slim"
//   className={`w-full text-white ${
//     !isSelected
//       ? 'bg-gray-400 hover:bg-gray-400'
//       : 'bg-red-600 hover:bg-red-700' // Change bg to red with hover effect
//   }`}
//   disabled={
//     !isSelected ||
//     !product?.quantity ||
//     product.status.toLowerCase() != 'publish' ||
//     (!isEmpty(selectedVariation) && !selectedVariation?.quantity) ||
//     (!isEmpty(selectedVariation) && selectedVariation?.is_disable)
//   }
//   // loading={addToCartLoader}
// >
//   <span className="py-2 3xl:px-8">
//     {product?.quantity ||
//     (!isEmpty(selectedVariation) && selectedVariation?.quantity)
//       ? t('Buy Now')
//       : t('text-out-stock')}
//   </span>
// </Button>

//       </div>
//     </div>
// </div>



//         <div className="py-6">
//           <ul className="pb-1 space-y-5 text-sm">
//             {product?.sku && (
//               <li>
//                 <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
//                   SKU:
//                 </span>
//                 {product?.sku}
//               </li>
//             )}

//             {product?.categories &&
//               Array.isArray(product.categories) &&
//               product.categories.length > 0 && (
//                 <li>
//                   <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
//                     Category:
//                   </span>
//                   {product.categories.map((category: any, index: number) => (
//                     <Link
//                       key={index}
//                       href={`${ROUTES.CATEGORY}/${category?.slug}`}
//                       className="transition hover:underline hover:text-heading"
//                     >
//                       {product?.categories?.length === index + 1
//                         ? category.name
//                         : `${category.name}, `}
//                     </Link>
//                   ))}
//                 </li>
//               )}

//             {product?.tags &&
//               Array.isArray(product.tags) &&
//               product.tags.length > 0 && (
//                 <li className="productTags">
//                   <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
//                     Tags:
//                   </span>
//                   {product.tags.map((tag: any) => (
//                     <Link
//                       key={tag.id}
//                       href={`${ROUTES.COLLECTIONS}/${tag?.slug}`}
//                       className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
//                     >
//                       {tag.name}
//                       <span className="text-heading">,</span>
//                     </Link>
//                   ))}
//                 </li>
//               )}

//             <li>
//               <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
//                 {t('text-brand-colon')}
//               </span>
//               <Link
//                 href={`${ROUTES.BRAND}=${product?.type?.slug}`}
//                 className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
//               >
//                 {product?.type?.name}
//               </Link>
//             </li>

//             <li>
//               <span className="inline-block font-semibold text-heading ltr:pr-2 rtl:pl-2">
//                 {t('text-shop-colon')}
//               </span>
//               <Link
//                 href={`${ROUTES.SHOPS}/${product?.shop?.slug}`}
//                 className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
//               >
//                 {product?.shop?.name}
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductSingleDetails;
