
import { useQuery } from 'react-query';
import client from '@framework/utils/index';

export const useOrder = (tracking_number: string) => {
  const { data, isLoading, error } = useQuery(
    ['order', tracking_number],
    () => client.orders.findOne(tracking_number),
    {
      enabled: !!tracking_number,
    }
  );

  return { data, isLoading, error };
};

// useOrder Hook
// import { useQuery } from 'react-query';
// import client from '@framework/utils/index';

// export const useOrder = (tracking_number) => {
//   const { data, isLoading, error } = useQuery(
//     ['order', tracking_number],
//     () => client.orders.findOne(tracking_number),
//     {
//       enabled: !!tracking_number,
//     }
//   );

//   return { data, isLoading, error };
// };



// / // RazorpayPaymentModal Component
// // import { useCallback, useEffect } from 'react';
// // import useRazorpay, { RazorpayOptions } from '@lib/use-razorpay';
// // import { formatAddress } from '@lib/format-address';
// // import { useTranslation } from 'next-i18next';
// // import { useSettings } from '@framework/settings';
// // import Spinner from '@components/ui/loaders/spinner/spinner';
// // import { useOrderPayment } from '@framework/orders';
// // import { PaymentGateway, PaymentIntentInfo } from '@type/index';

// // interface Props {
// //   paymentIntentInfo: PaymentIntentInfo;
// //   trackingNumber: string;
// //   paymentGateway: PaymentGateway;
// // }

// // const RazorpayPaymentModal: React.FC<Props> = ({
// //   trackingNumber,
// //   paymentIntentInfo,
// // }) => {
// //   const { t } = useTranslation();
// //   const { loadRazorpayScript, checkScriptLoaded } = useRazorpay();
// //   const { data: settings, isLoading: isSettingsLoading } = useSettings();
// //   const { createOrderPayment } = useOrderPayment();

// //   const paymentHandle = useCallback(async () => {
// //     if (!checkScriptLoaded()) {
// //       await loadRazorpayScript();
// //     }

// //     const options: RazorpayOptions = {
// //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
// //       amount: paymentIntentInfo.amount!,
// //       currency: paymentIntentInfo.currency!,
// //       name: paymentIntentInfo.customer_name!,
// //       description: `${t('text-order')}#${trackingNumber}`,
// //       image: settings?.options?.logo?.original,
// //       order_id: paymentIntentInfo.payment_id!,
// //       handler: async () => {
// //         await createOrderPayment({
// //           tracking_number: trackingNumber,
// //           payment_gateway: 'razorpay',
// //         });
// //       },
// //       prefill: {
// //         name: paymentIntentInfo.customer_name,
// //         contact: `+${paymentIntentInfo.customer_contact}`,
// //         email: paymentIntentInfo.customer_email,
// //       },
// //       notes: {
// //         address: formatAddress(paymentIntentInfo.billing_address),
// //       },
// //       modal: {
// //         ondismiss: () => console.log('Payment modal closed'),
// //       },
// //     };

// //     const razorpay = new (window as any).Razorpay(options);
// //     razorpay.open();
// //   }, [paymentIntentInfo, settings, trackingNumber]);

// //   useEffect(() => {
// //     if (!isSettingsLoading) {
// //       paymentHandle();
// //     }
// //   }, [isSettingsLoading, paymentHandle]);

// //   if (isSettingsLoading) {
// //     return <Spinner showText={false} />;
// //   }

// //   return null;
// // };

// // export default RazorpayPaymentModal;

// // // useOrder Hook
// // // import { useQuery } from 'react-query';
// // // import client from '@framework/utils/index';

// // // export const useOrder = (tracking_number) => {
// // //   const { data, isLoading, error } = useQuery(
// // //     ['order', tracking_number],
// // //     () => client.orders.findOne(tracking_number),
// // //     {
// // //       enabled: !!tracking_number,
// // //     }
// // //   );

// // //   return { data, isLoading, error };
// // // };
