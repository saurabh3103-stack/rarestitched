// import { useCallback, useEffect } from 'react';
// import useRazorpay from '@lib/use-razorpay';
// import { formatAddress } from '@lib/format-address';
// import { useTranslation } from 'next-i18next';
// import { useSettings } from '@framework/settings';
// import Spinner from '@components/ui/loaders/spinner/spinner';
// import { useOrderPayment } from '@framework/orders';

// interface Props {
//   paymentIntentInfo: PaymentIntentInfo;
//   trackingNumber: string;
//   paymentGateway: PaymentGateway;
// }

// const RazorpayPaymentModal: React.FC<Props> = ({
//   trackingNumber,
//   paymentIntentInfo,
// }) => {
//   const { t } = useTranslation();
//   const { loadRazorpayScript, checkScriptLoaded } = useRazorpay();
//   const { data: settings, isLoading: isSettingsLoading } = useSettings();
//   const { createOrderPayment } = useOrderPayment();

//   const paymentHandle = useCallback(async () => {
//     if (!checkScriptLoaded()) {
//       await loadRazorpayScript();
//     }

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
//       amount: paymentIntentInfo.amount!,
//       currency: paymentIntentInfo.currency!,
//       name: paymentIntentInfo.customer_name!,
//       description: `${t('text-order')}#${trackingNumber}`,
//       image: settings?.options?.logo?.original,
//       order_id: paymentIntentInfo.payment_id!,
//       handler: async () => {
//         await createOrderPayment({
//           tracking_number: trackingNumber,
//           payment_gateway: 'razorpay',
//         });
//         // Refresh the page upon successful payment
//         window.location.reload();
//       },
//       prefill: {
//         name: paymentIntentInfo.customer_name,
//         contact: `+${paymentIntentInfo.customer_contact}`,
//         email: paymentIntentInfo.customer_email,
//       },
//       notes: {
//         address: formatAddress(paymentIntentInfo.billing_address),
//       },
//       modal: {
//         ondismiss: () => console.log('Payment modal closed'),
//       },
//     };

//     const razorpay = new (window as any).Razorpay(options);
//     razorpay.open();
//   }, [paymentIntentInfo, settings, trackingNumber]);

//   useEffect(() => {
//     if (!isSettingsLoading) {
//       paymentHandle();
//     }
//   }, [isSettingsLoading, paymentHandle]);

//   if (isSettingsLoading) {
//     return <Spinner showText={false} />;
//   }

//   return null;
// };

// export default RazorpayPaymentModal;

import { useCallback, useEffect } from 'react';
import useRazorpay, { RazorpayOptions } from '@lib/use-razorpay';
import { formatAddress } from '@lib/format-address';
import { useTranslation } from 'next-i18next';
import { useSettings } from '@framework/settings';
import Spinner from '@components/ui/loaders/spinner/spinner';
import { useOrder, useOrderPayment } from '@framework/orders';
import { PaymentGateway, PaymentIntentInfo } from '@type/index';

interface Props {
  paymentIntentInfo: PaymentIntentInfo;
  trackingNumber: string;
  paymentGateway: PaymentGateway;
}

const RazorpayPaymentModal: React.FC<Props> = ({
  trackingNumber,
  paymentIntentInfo,
}) => {
  const { t } = useTranslation();
  const { loadRazorpayScript, checkScriptLoaded } = useRazorpay();
  const { data, isLoading: isSettingsLoading } = useSettings();
  const {
    data: order,
    isLoading,
    refetch,
  } = useOrder({
    tracking_number: trackingNumber,
  });

 
  const { createOrderPayment } = useOrderPayment();

  const {
    customer_name,
    customer_contact,
    customer,
    billing_address,
    payment_gateway,
  } = order || {};
  

  const paymentHandle = useCallback(async () => {
    if (!checkScriptLoaded()) {
      await loadRazorpayScript();
    }
  
    let paymentSuccess = false;  // Track payment success status
  
    const options: RazorpayOptions = {
      key: 'rzp_test_oP8rbwETBxlRsU',
      amount: paymentIntentInfo?.amount!,
      currency: paymentIntentInfo?.currency!,
      name: customer_name!,
      description: `${t('text-order')}#${trackingNumber}`,
      image: data?.options?.logo?.original!,
      order_id: paymentIntentInfo?.payment_id!,
  
      handler: async (response) => {
        console.log('Payment Successful:', response);
        alert('Payment success ✅');
        
        paymentSuccess = true;  // Mark payment as successful
  
        try {
          const paymentResponse = await createOrderPayment({
            tracking_number: trackingNumber!,
            payment_gateway: 'razorpay',
          });
  
          console.log('Order Payment Response:', paymentResponse);
        } catch (error) {
          console.error('Error creating order payment:', error);
          alert('Payment succeeded, but order processing failed ❌');
        }
      },
  
      prefill: {
        ...(customer_name && { name: customer_name }),
        ...(customer_contact && { contact: `+${customer_contact}` }),
        ...(customer?.email && { email: customer?.email }),
      },
  
      notes: {
        address: formatAddress(billing_address as any),
      },
  
      modal: {
        ondismiss: async () => {
          if (!paymentSuccess) {   // Only show failure alert if payment wasn't successful
            console.log('Payment Failed or Cancelled ❌');
            alert('Payment Failed or Cancelled ❌');
           
          }
          await refetch();
          
        },
      },
    };
  
    const razorpay = new (window as any).Razorpay(options);
    console.log(razorpay);
    console.log(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);
    razorpay.open();
  }, [isLoading, isSettingsLoading]);
  

  if (isLoading || isSettingsLoading) {
    return <Spinner showText={false} />;
  }

  return null;
};

export default RazorpayPaymentModal;