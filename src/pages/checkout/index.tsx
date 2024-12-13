// // import { useTranslation } from 'next-i18next';
// // // import { billingAddressAtom, shippingAddressAtom } from '@store/checkout';
// // // import dynamic from 'next/dynamic';
// // // import { useUser } from '@framework/auth';
// // // import { AddressType } from '@framework/utils/constants';
// // // import { getLayout } from '@components/layout/layout';
// // // import { Address } from '@type/index';
// // // import Divider from '@components/ui/divider';
// // // import Container from '@components/ui/container';
// // // import Subscription from '@components/common/subscription';

// // // export { getStaticProps } from '@framework/common.ssr';

// // // const ScheduleGrid = dynamic(
// // //   () => import('@components/checkout/schedule/schedule-grid')
// // // );
// // // const AddressGrid = dynamic(() => import('@components/checkout/address-grid'));
// // // const ContactGrid = dynamic(
// // //   () => import('@components/checkout/contact/contact-grid')
// // // );
// // // const RightSideView = dynamic(
// // //   () => import('@components/checkout/right-side-view')
// // // );
// // // const OrderNote = dynamic(() => import('@components/checkout/order-note'));

// // // export default function CheckoutPage() {
// // //   const { me, loading } = useUser();
// // //   const { t } = useTranslation();

// // //   return (
// // //     <>
// // //       {!loading ? (
// // //         <>
// // //           <Divider className="mb-0" />
// // //           <Container className="bg-gray-100">
// // //             <div className="py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
// // //               <div className="m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
// // //                 <div className="w-full space-y-6 lg:max-w-[600px]">
// // //                   <ContactGrid
// // //                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
// // //                     //@ts-ignore
// // //                     userId={me?.id!}
// // //                     profileId={me?.profile?.id!}
// // //                     contact={me?.profile?.contact!}
// // //                     label={t('text-contact-number')}
// // //                     count={1}
// // //                   />

// // //                   <AddressGrid
// // //                     userId={me?.id!}
// // //                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
// // //                     label={t('text-billing-address')}
// // //                     count={2}
// // //                     //@ts-ignore
// // //                     addresses={me?.address?.filter(
// // //                       (address: Address) =>
// // //                         address?.type === AddressType?.Billing
// // //                     )}
// // //                     //@ts-ignore
// // //                     atom={billingAddressAtom}
// // //                     type={AddressType?.Billing}
// // //                   />
// // //                   <AddressGrid
// // //                     userId={me?.id!}
// // //                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
// // //                     label={t('text-shipping-address')}
// // //                     count={3}
// // //                     //@ts-ignore
// // //                     addresses={me?.address?.filter(
// // //                       (address: Address) =>
// // //                         address?.type === AddressType?.Shipping
// // //                     )}
// // //                     //@ts-ignore
// // //                     atom={shippingAddressAtom}
// // //                     type={AddressType?.Shipping}
// // //                   />
// // //                   <ScheduleGrid
// // //                     className="p-5 md:p-8 bg-white shadow-checkoutCard rounded-md"
// // //                     label={t('text-delivery-schedule')}
// // //                     count={4}
// // //                   />
// // //                   <OrderNote
// // //                     count={5}
// // //                     label={t('Order Note')}
// // //                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
// // //                   />
// // //                 </div>
// // //                 <div className="mt-8 mb-10 w-full sm:mb-12 lg:my-0 lg:w-96">
// // //                   <RightSideView />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             {/* <Subscription /> */}
// // //           </Container>
// // //         </>
// // //       ) : (
// // //         ''
// // //       )}
// // //     </>
// // //   );
// // // }

// // // CheckoutPage.authenticate = true;
// // // CheckoutPage.getLayout = getLayout;


// // import { useTranslation } from 'next-i18next'; 
// // import { billingAddressAtom, shippingAddressAtom } from '@store/checkout'; 
// // import dynamic from 'next/dynamic'; 
// // import { useUser } from '@framework/auth'; 
// // import { AddressType } from '@framework/utils/constants'; 
// // import { getLayout } from '@components/layout/layout'; 
// // import { Address } from '@type/index'; 
// // import Divider from '@components/ui/divider'; 
// // import Container from '@components/ui/container'; 
// // import Subscription from '@components/common/subscription'; 

// // export { getStaticProps } from '@framework/common.ssr'; 

// // const ScheduleGrid = dynamic(() => import('@components/checkout/schedule/schedule-grid'));
// // const AddressGrid = dynamic(() => import('@components/checkout/address-grid'));
// // const ContactGrid = dynamic(() => import('@components/checkout/contact/contact-grid'));
// // const RightSideView = dynamic(() => import('@components/checkout/right-side-view'));
// // const OrderNote = dynamic(() => import('@components/checkout/order-note'));

// // export default function CheckoutPage() {
// //   const { me, loading } = useUser();
// //   const { t } = useTranslation();

// //   // Function to copy billing address to shipping address
// //   const handleSameAsBillingClick = () => {
// //     const billingAddress = me?.address?.find(
// //       (address: Address) => address?.type === AddressType?.Billing
// //     );

// //     if (billingAddress) {
// //       // Update the shipping address with billing address values
// //       shippingAddressAtom.set({
// //         ...shippingAddressAtom.get(),
// //         ...billingAddress,
// //       });
// //     }
// //   };

// //   return (
// //     <>
// //       {!loading ? (
// //         <>
// //           <Divider className="mb-0" />
// //           <Container className="bg-gray-100">
// //             <div className="py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
// //               <div className="m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
// //                 <div className="w-full space-y-6 lg:max-w-[600px]">
// //                   <ContactGrid
// //                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
// //                     userId={me?.id!}
// //                     profileId={me?.profile?.id!}
// //                     contact={me?.profile?.contact!}
// //                     label={t('text-contact-number')}
// //                     count={1}
// //                   />

// //                   <AddressGrid
// //                     userId={me?.id!}
// //                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
// //                     label={t('text-billing-address')}
// //                     count={2}
// //                     addresses={me?.address?.filter(
// //                       (address: Address) =>
// //                         address?.type === AddressType?.Billing
// //                     )}
// //                     atom={billingAddressAtom}
// //                     type={AddressType?.Billing}
// //                   />
                  
// //                   <button
// //                     onClick={handleSameAsBillingClick}
// //                     className="mt-4 p-2 bg-blue-500 text-white rounded-md"
// //                   >
// //                     {t('billing-address-same-as-shipping')}
// //                   </button>

// //                   <AddressGrid
// //                     userId={me?.id!}
// //                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
// //                     label={t('text-shipping-address')}
// //                     count={3}
// //                     addresses={me?.address?.filter(
// //                       (address: Address) =>
// //                         address?.type === AddressType?.Shipping
// //                     )}
// //                     atom={shippingAddressAtom}
// //                     type={AddressType?.Shipping}
// //                   />
// //                   <ScheduleGrid
// //                     className="p-5 md:p-8 bg-white shadow-checkoutCard rounded-md"
// //                     label={t('text-delivery-schedule')}
// //                     count={4}
// //                   />
// //                   <OrderNote
// //                     count={5}
// //                     label={t('Order Note')}
// //                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
// //                   />
// //                 </div>
// //                 <div className="mt-8 mb-10 w-full sm:mb-12 lg:my-0 lg:w-96">
// //                   <RightSideView />
// //                 </div>
// //               </div>
// //             </div>
// //           </Container>
// //         </>
// //       ) : (
// //         ''
// //       )}
// //     </>
// //   );
// // }

// // CheckoutPage.authenticate = true;
// // CheckoutPage.getLayout = getLayout;


// import { useTranslation } from 'next-i18next'; 
// import { billingAddressAtom, shippingAddressAtom } from '@store/checkout';
// import dynamic from 'next/dynamic';
// import { useUser  } from '@framework/auth';
// import { AddressType } from '@framework/utils/constants';
// import { getLayout } from '@components/layout/layout';
// import { Address } from '@type/index';
// import Divider from '@components/ui/divider';
// import Container from '@components/ui/container';
// import Subscription from '@components/common/subscription';
// import { useAtom } from 'jotai'; // Import useAtom from Jotai
// import { useState } from 'react';

// export { getStaticProps } from '@framework/common.ssr';

// const ScheduleGrid = dynamic(
//   () => import('@components/checkout/schedule/schedule-grid')
// );
// const AddressGrid = dynamic(() => import('@components/checkout/address-grid'));
// const ContactGrid = dynamic(
//   () => import('@components/checkout/contact/contact-grid')
// );
// const RightSideView = dynamic(
//   () => import('@components/checkout/right-side-view')
// );
// const OrderNote = dynamic(() => import('@components/checkout/order-note'));

// export default function CheckoutPage() {
//   const { me, loading } = useUser ();
//   const { t } = useTranslation();
  
//   // Use useAtom to get and set billing and shipping addresses
//   const [billingAddress] = useAtom(billingAddressAtom);
//   const [shippingAddress, setShippingAddress] = useAtom(shippingAddressAtom);
// const [BillingisShipping,setBillingisShipping]=useState(false)
//   // Function to copy billing address to shipping address
//   const handleCopyAddress = () => {
//     console.log("hey our billing address is",billingAddress)
//     setBillingisShipping(true)
//     setShippingAddress(billingAddress);
//   };

//   return (
//     <>
//       {!loading ? (
//         <>
//           <Divider className="mb-0" />
//           <Container className="bg-gray-100">
//             <div className="py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
//               <div className="m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
//                 <div className="w-full space-y-6 lg:max-w-[600px]">
//                   <ContactGrid
//                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                     //@ts-ignore
//                     userId={me?.id!}
//                     profileId={me?.profile?.id!}
//                     contact={me?.profile?.contact!}
//                     label={t('text-contact-number')}
//                     count={1}
//                   />

//                   <AddressGrid
//                     userId={me?.id!}
//                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                     label={t('text-billing-address')}
//                     count={2}
//                     //@ts-ignore
//                     addresses={me?.address?.filter(
//                       (address: Address) =>
//                         address?.type === AddressType?.Billing
//                     )}
//                     //@ts-ignore
//                     atom={billingAddressAtom}
//                     type={AddressType?.Billing}
//                   />
//                   {!BillingisShipping?(
//                   <AddressGrid
//                     userId={me?.id!}
//                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                     label={t('text-shipping-address')}
//                     count={3}
//                     //@ts-ignore
//                     addresses={me?.address?.filter(
//                       (address: Address) =>
//                         address?.type === AddressType?.Shipping
//                     )}
//                     //@ts-ignore
//                     atom={shippingAddressAtom}
//                     type={AddressType?.Shipping}
//                   />):(<AddressGrid
//                     userId={me?.id!}
//                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                     label={t('text-shipping-address')}
//                     count={3}
//                     //@ts-ignore
//                     addresses={me?.address?.filter(
//                       (address: Address) =>
//                         address?.type === AddressType?.Billing
//                     )}
//                     //@ts-ignore
//                     atom={shippingAddressAtom}
//                     type={AddressType?.Billing}
//                   />)}
//                   <button 
//                     onClick={handleCopyAddress} 
//                     className="mt-4 p-2 bg-blue-500 text-white rounded"
//                   >
//                     {t('text-copy-billing-to-shipping')}
//                   </button>
//                   <ScheduleGrid
//                     className="p-5 md:p-8 bg-white shadow-checkoutCard rounded-md"
//                     label={t('text-delivery-schedule')}
//                     count={4}
//                   />
//                   <OrderNote
//                     count={5}
//                     label={t('Order Note')}
//                     className="p-5 bg-white border border gray-100 rounded-md shadow-checkoutCard md:p-7"
//                   />
//                 </div>
//                 <div className="mt-8 mb-10 w-full sm:mb-12 lg:my-0 lg:w-96">
//                   <RightSideView />
//                 </div>
//               </div>
//             </div>
//             {/* <Subscription /> */}
//           </Container>
//         </>
//       ) : (
//         ''
//       )}
//     </>
//   );
// }

// CheckoutPage.authenticate = true;
// CheckoutPage.getLayout = getLayout;



// import { useTranslation } from 'next-i18next';
// import { billingAddressAtom, shippingAddressAtom } from '@store/checkout';
// import dynamic from 'next/dynamic';
// import { useUser } from '@framework/auth';
// import { AddressType } from '@framework/utils/constants';
// import { getLayout } from '@components/layout/layout';
// import { Address } from '@type/index';
// import Divider from '@components/ui/divider';
// import Container from '@components/ui/container';
// import Subscription from '@components/common/subscription';
// import { useAtom } from 'jotai';
// import { useState, useEffect } from 'react';

// export { getStaticProps } from '@framework/common.ssr';

// const ScheduleGrid = dynamic(() => import('@components/checkout/schedule/schedule-grid'));
// const AddressGrid = dynamic(() => import('@components/checkout/address-grid'));
// const ContactGrid = dynamic(() => import('@components/checkout/contact/contact-grid'));
// const RightSideView = dynamic(() => import('@components/checkout/right-side-view'));
// const OrderNote = dynamic(() => import('@components/checkout/order-note'));

// export default function CheckoutPage() {
//   const { me, loading, error } = useUser();
//   const { t } = useTranslation();

//   // Use useAtom to get and set billing and shipping addresses
//   const [billingAddress] = useAtom(billingAddressAtom);
//   const [shippingAddress, setShippingAddress] = useAtom(shippingAddressAtom);
//   const [billingIsShipping, setBillingIsShipping] = useState(false);

//   // Error handling for user data
//   if (error) {
//     return <div>{t('text-error-loading-user-data')}</div>;
//   }

//   // Function to copy billing address to shipping address
//   const handleCopyAddress = () => {
//     if (billingAddress) {
//       setBillingIsShipping(true);
//       setShippingAddress(billingAddress);
//     } else {
//       console.error('Billing address is not available');
//     }
//   };

//   // Effect to check if the shipping address is already populated
//   useEffect(() => {
//     if (shippingAddress && billingAddress && billingIsShipping) {
//       console.log('Shipping address updated from billing address:', shippingAddress);
//     }
//   }, [shippingAddress, billingAddress, billingIsShipping]);

//   return (
//     <>
//       {!loading ? (
//         <>
//           <Divider className="mb-0" />
//           <Container className="bg-gray-100">
//             <div className="py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
//               <div className="m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
//                 <div className="w-full space-y-6 lg:max-w-[600px]">
//                   <ContactGrid
//                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                     //@ts-ignore
//                     userId={me?.id!}
//                     profileId={me?.profile?.id!}
//                     contact={me?.profile?.contact!}
//                     label={t('text-contact-number')}
//                     count={1}
//                   />

//                   <AddressGrid
//                     userId={me?.id!}
//                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                     label={t('text-billing-address')}
//                     count={2}
//                     //@ts-ignore
//                     addresses={me?.address?.filter(
//                       (address: Address) => address?.type === AddressType?.Billing
//                     )}
//                     //@ts-ignore
//                     atom={billingAddressAtom}
//                     type={AddressType?.Billing}
//                   />

//                   {!billingIsShipping ? (
//                     <AddressGrid
//                       userId={me?.id!}
//                       className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                       label={t('text-shipping-address')}
//                       count={3}
//                       //@ts-ignore
//                       addresses={me?.address?.filter(
//                         (address: Address) => address?.type === AddressType?.Shipping
//                       )}
//                       //@ts-ignore
//                       atom={shippingAddressAtom}
//                       type={AddressType?.Shipping}
//                     />
//                   ) : (
//                     <AddressGrid
//                       userId={me?.id!}
//                       className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                       label={t('text-shipping-address')}
//                       count={3}
//                       //@ts-ignore
//                       addresses={me?.address?.filter(
//                         (address: Address) => address?.type === AddressType?.Billing
//                       )}
//                       //@ts-ignore
//                       atom={shippingAddressAtom}
//                       type={AddressType?.Billing}
//                     />
//                   )}

//                   <button
//                     onClick={handleCopyAddress}
//                     className="mt-4 p-2 bg-blue-500 text-white rounded"
//                   >
//                     {t('text-copy-billing-to-shipping')}
//                   </button>

//                   <ScheduleGrid
//                     className="p-5 md:p-8 bg-white shadow-checkoutCard rounded-md"
//                     label={t('text-delivery-schedule')}
//                     count={4}
//                   />

//                   <OrderNote
//                     count={5}
//                     label={t('Order Note')}
//                     className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
//                   />
//                 </div>
//                 <div className="mt-8 mb-10 w-full sm:mb-12 lg:my-0 lg:w-96">
//                   <RightSideView />
//                 </div>
//               </div>
//             </div>
//             {/* <Subscription /> */}
//           </Container>
//         </>
//       ) : (
//         <div>{t('text-loading')}</div>
//       )}
//     </>
//   );
// }

// CheckoutPage.authenticate = true;
// CheckoutPage.getLayout = getLayout;





import { useTranslation } from 'next-i18next';
import { billingAddressAtom, shippingAddressAtom } from '@store/checkout';
import dynamic from 'next/dynamic';
import { useUser  } from '@framework/auth';
import { AddressType } from '@framework/utils/constants';
import { getLayout } from '@components/layout/layout';
import { Address } from '@type/index';
import Divider from '@components/ui/divider';
import Container from '@components/ui/container';
import Subscription from '@components/common/subscription';
import { useAtom } from 'jotai';
import { useState, useEffect } from 'react';

export { getStaticProps } from '@framework/common.ssr';

const ScheduleGrid = dynamic(() => import('@components/checkout/schedule/schedule-grid'));
const AddressGrid = dynamic(() => import('@components/checkout/address-grid'));
const ContactGrid = dynamic(() => import('@components/checkout/contact/contact-grid'));
const RightSideView = dynamic(() => import('@components/checkout/right-side-view'));
const OrderNote = dynamic(() => import('@components/checkout/order-note'));

export default function CheckoutPage() {
  const { me, loading, error } = useUser ();
  const { t } = useTranslation();

  const [billingAddress] = useAtom(billingAddressAtom);
  const [shippingAddress, setShippingAddress] = useAtom(shippingAddressAtom);
  const [billingIsShipping, setBillingIsShipping] = useState(false);

  if (error) {
    return <div>{t('text-error-loading-user-data')}</div>;
  }

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    const isChecked = event.target.checked;
    setBillingIsShipping(isChecked);
    if (isChecked && billingAddress) {
      setShippingAddress(billingAddress);
    } else {
      setShippingAddress(null); // or reset to an empty object if needed
    }
  };

  useEffect(() => {
    if (shippingAddress && billingAddress && billingIsShipping) {
      console.log('Shipping address updated from billing address:', shippingAddress);
    }
  }, [shippingAddress, billingAddress, billingIsShipping]);

  return (
    <>
      {!loading ? (
        <>
          <Divider className="mb-0" />
          <Container className="bg-gray-100">
            <div className="py-8 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
              <div className="m-auto flex w-full max-w-5xl flex-col items-center rtl:space-x-reverse lg:flex-row lg:items-start lg:space-x-8">
                <div className="w-full space-y-6 lg:max-w-[600px]">
                  <ContactGrid
                    className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
                    //@ts-ignore
                    userId={me?.id!}
                    profileId={me?.profile?.id!}
                    contact={me?.profile?.contact!}
                    label={t('text-contact-number')}
                    count={1}
                  />

                  <AddressGrid
                    userId={me?.id!}
                    className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
                    label={t('text-billing-address')}
                    count={2}
                    //@ts-ignore
                    addresses={me?.address?.filter(
                      (address: Address) => address?.type === AddressType?.Billing
                    )}
                    //@ts-ignore
                    atom={billingAddressAtom}
                    type={AddressType?.Billing}
                  />

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={billingIsShipping}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <label>{'Billing address is Same as Shipping address'}</label>
                  </div>

                  {!billingIsShipping ? (
                    <AddressGrid
                      userId={me?.id!}
                      className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
                      label={t('text-shipping-address')}
                      count={3}
                      //@ts-ignore
                      addresses={me?.address?.filter(
                        (address: Address) => address?.type === AddressType?.Shipping
                      )}
                      //@ts-ignore
                      atom={shippingAddressAtom}
                      type ={AddressType?.Shipping}
                    />
                  ) : (
                    <AddressGrid
                      userId={me?.id!}
                      className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
                      label={t('text-shipping-address')}
                      count={3}
                      //@ts-ignore
                      addresses={me?.address?.filter(
                        (address: Address) => address?.type === AddressType?.Billing
                      )}
                      //@ts-ignore
                      atom={shippingAddressAtom}
                      type={AddressType?.Billing}
                    />
                  )}

                  <ScheduleGrid
                    className="p-5 md:p-8 bg-white shadow-checkoutCard rounded-md"
                    label={t('text-delivery-schedule')}
                    count={4}
                  />

                  <OrderNote
                    count={5}
                    label={t('Order Note')}
                    className="p-5 bg-white border border-gray-100 rounded-md shadow-checkoutCard md:p-7"
                  />
                </div>
                <div className="mt-8 mb-10 w-full sm:mb-12 lg:my-0 lg:w-96">
                  <RightSideView />
                </div>
              </div>
            </div>
            {/* <Subscription /> */}
          </Container>
        </>
      ) : (
        <div>{t('text-loading')}</div>
      )}
    </>
  );
}

CheckoutPage.authenticate = true;
CheckoutPage.getLayout = getLayout;