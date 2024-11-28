import { useUI } from '@contexts/ui.context';
import Modal from './modal';
import dynamic from 'next/dynamic';
import Newsletter from '@components/common/newsletter';

const LoginForm = dynamic(() => import('@components/auth/login-form'));
const OtpLogin = dynamic(() => import('@components/auth/otp/otp-login'));
const SignUpForm = dynamic(() => import('@components/auth/sign-up-form'));
const ForgetPasswordForm = dynamic(
  () => import('@components/auth/forget-password/forget-password'),
);
const ProductPopup = dynamic(() => import('@components/product/product-popup'));
const ProductVariation = dynamic(
  () => import('@components/product/variation-modal'),
);
const CreateOrUpdateAddressForm = dynamic(
  () => import('@components/address/address-form'),
  { ssr: false },
);
const AddressDeleteView = dynamic(
  () => import('@components/address/address-delete-view'),
);
const AddOrUpdateCheckoutContact = dynamic(
  () => import('@components/checkout/contact/add-or-update'),
);
const CreateOrUpdateGuestAddressForm = dynamic(
  () => import('@components/checkout/create-or-update-guest'),
);
const ProfileAddOrUpdateContact = dynamic(
  () => import('@components/profile/profile-add-or-update-contact'),
);
const AddNewCardModal = dynamic(
  () => import('@components/card/add-new-card-modal'),
  { ssr: false },
);
const PaymentModal = dynamic(
  () => import('@components/payment/payment-modal'),
  { ssr: false },
);
const AddNewPaymentModal = dynamic(
  () => import('@components/payment/add-new-payment-modal'),
  { ssr: false },
);
const GateWayControlModal = dynamic(
  () => import('@components/payment/gateway-control/gateway-modal'),
  { ssr: false },
);
const DeleteCardModal = dynamic(() => import('@components/card/delete-view'));
const WishListModal = dynamic(
  () => import('@components/my-account/wishlist-modal'),
);
const GalleryModal = dynamic(() => import('@components/ui/gallery'));
const NewsLetterModal = dynamic(
  () => import('@components/maintenance/news-letter'),
  { ssr: false },
);
const PromoPopup = dynamic(() => import('@components/promo-popup'), {
  ssr: false,
});

const ManagedModal: React.FC = () => {
  const { displayModal, closeModal, modalView, modalData } = useUI();
  const modalVariant =
    modalView === 'ADD_OR_UPDATE_CHECKOUT_CONTACT' ||
    modalView === 'ADD_OR_UPDATE_PROFILE_CONTACT' ||
    modalView === 'OTP_LOGIN_VIEW'
      ? 'default'
      : 'center';
  // Controlled payment modal [custom & default]
  if (modalView === 'PAYMENT_MODAL') {
    return <PaymentModal />;
  }
  if (modalView === 'GALLERY_VIEW') {
    return (
      <Modal open={displayModal} onClose={closeModal} variant="fullWidth">
        <GalleryModal data={modalData} />
      </Modal>
    );
  }
  if (modalView === 'PROMO_POPUP_MODAL') {
    return <PromoPopup />;
  }
  return (
    <Modal open={displayModal} onClose={closeModal} variant={modalVariant}>
      {modalView === 'LOGIN_VIEW' && <LoginForm />}
      {modalView === 'OTP_LOGIN_VIEW' && <OtpLogin />}
      {modalView === 'SIGN_UP_VIEW' && <SignUpForm />}
      {modalView === 'FORGET_PASSWORD' && <ForgetPasswordForm />}
      {modalView === 'PRODUCT_VIEW' && <ProductPopup productSlug={modalData} />}
      {modalView === 'SELECT_PRODUCT_VARIATION' && (
        <ProductVariation productSlug={modalData} />
      )}
      {modalView === 'NEWSLETTER_VIEW' && <Newsletter />}
      {modalView === 'ADDRESS_FORM_VIEW' && <CreateOrUpdateAddressForm />}
      {modalView === 'ADDRESS_DELETE_VIEW' && (
        <AddressDeleteView data={modalData} />
      )}
      {modalView === 'ADD_OR_UPDATE_CHECKOUT_CONTACT' && (
        <AddOrUpdateCheckoutContact data={modalData} />
      )}
      {modalView === 'ADD_OR_UPDATE_PROFILE_CONTACT' && (
        <ProfileAddOrUpdateContact data={modalData} />
      )}
      {modalView === 'ADD_NEW_CARD' && <AddNewCardModal data={modalData} />}
      {modalView === 'USE_NEW_PAYMENT' && <AddNewPaymentModal />}
      {modalView === 'DELETE_CARD_MODAL' && <DeleteCardModal />}
      {modalView === 'GATEWAY_MODAL' && <GateWayControlModal />}
      {modalView === 'ADD_OR_UPDATE_GUEST_ADDRESS' && (
        <CreateOrUpdateGuestAddressForm />
      )}
      {modalView === 'WISHLIST_MODAL' && <WishListModal data={modalData} />}
      {modalView === 'NEWSLETTER_MODAL' && <NewsLetterModal />}
    </Modal>
  );
};

export default ManagedModal;


// function handlePopupView(slug: string | undefined) {
//   if (!slug) {
//     console.error('Product slug is missing.');
//     return;
//   }
//   router.push(`${ROUTES.PRODUCT}/${slug}`, undefined, { locale: router.locale })
//     .then(() => console.log('Navigation successful.'))
//     .catch(err => console.error('Navigation error:', err));
// }



{/* <div className="col-span-5 grid grid-cols-5 gap-2.5">
{/* Thumbnails column (col-1) */}
{/* // style={{ minHeight: '100px' }}  */}
{/* <>
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
            display: 'flex', // Aligns image within container
            alignItems: 'center', // Centers image vertically
            justifyContent: 'center', // Centers image horizontally
          }}
          className="relative mb-2 rounded-lg overflow-hidden border border-gray-300 shadow-md transition-transform duration-200 hover:scale-105 cursor-pointer"
        >
          <img
            src={imageSrc}
            alt={`Thumbnail ${index}`}
            onClick={() => setCurrentImage(imageSrc)}
            className="object-contain w-full h-full"
          />
        </div>
      );
    })}
  </div>

  <style> */}
//     {`
//   /* Webkit-based browsers (Chrome, Safari) */
//   .custom-scrollbar::-webkit-scrollbar {
//     width: 8px;
//   }

//   .custom-scrollbar::-webkit-scrollbar-track {
//     background: #f0f0f0;
//   }

//   .custom-scrollbar::-webkit-scrollbar-thumb {
//     background-color: #a0a0a0;
//     border-radius: 4px;
//   }

//   /* Firefox */
//   .custom-scrollbar {
//     scrollbar-width: thin;
//     scrollbar-color: #a0a0a0 #f0f0f0;
//   }
// `}
//   </style>
// </>

// {/* Main image column (col-4) */}
// <div className="col-span-4">
//   <div className="relative rounded-lg overflow-hidden w-full h-full border border-gray-200 shadow-lg">
//     <img
//       src={currentImage}
//       alt="Selected"
//       className="object-cover w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
//     />
//     {imageHighLight && (
//       <div
//         className={cn(
//           'absolute top-0 left-0 text-white text-xs px-2 py-1 rounded-br-md',
//           {
//             'bg-blue-500': imageHighLight === 'Discounted',
//             'bg-green-500': imageHighLight === 'Most Trending',
//             'bg-red-500': !['Discounted', 'Most Trending'].includes(
//               imageHighLight,
//             ),
//           },
//         )}
//       >
//         {imageHighLight}
//       </div>
//     )}
//   </div>
// </div>

// {width >= 1024 && (
//   <>
//     {/* Customer Reviews and Ratings Section */}
//     <h2 className="text-lg font-semibold mt-4 col-span-5">
//       Customer Reviews and Ratings
//     </h2>

//     {/* Button for toggling all reviews */}
//     <Button
//       variant="slim"
//       onClick={handleToggleReviews}
//       className="mt-4 w-full py-2 text-white rounded-md shadow-md transition duration-200 col-span-5"
//     >
//       {showReviews ? 'All Reviews' : 'All Reviews'}
//     </Button>

//     {/* Display the reviews if toggled on */}
//     {showReviews && (
//       <div className="mt-4 col-span-5">
//         {reviews?.length > 0 ? (
//           reviews.map((review) => (
//             <div
//               key={review.id}
//               className="border-b border-gray-300 py-4"
//             >
//               <h3 className="font-bold">{review.name}</h3>
//               <p className="text-sm">{review.comment}</p>
//               <p className="text-sm text-gray-500 flex items-center">
//                 Rating:
//                 <span className="ml-2 flex">
//                   {Array.from({ length: review.rating }, (_, index) => (
//                     <FaStar key={index} className="text-yellow-500" />
//                   ))}
//                   {Array.from(
//                     { length: 5 - review.rating },
//                     (_, index) => (
//                       <FaStar
//                         key={index + review.rating}
//                         className="text-gray-300"
//                       />
//                     ),
//                   )}
//                 </span>
//                 <span className="ml-2">{review.rating} / 5</span>
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600">No reviews yet.</p>
//         )}
//       </div>
//     )}
//   </>
// )}
// </div> */}