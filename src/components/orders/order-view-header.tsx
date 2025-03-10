// import { useTranslation } from 'next-i18next';
// import cn from 'classnames';
// import StatusColor from '@components/orders/status-color';
// import Badge from '@components/ui/badge';
// import PayNowButton from '@components/payment/pay-now-button';
// import { isPaymentPending } from '@lib/is-payment-pending';
// import { SpinnerLoader } from '@components/ui/loaders/spinner/spinner';
// import { isEmpty } from 'lodash';
// import { useSettings } from '@framework/settings';
// import ChangeGateway from '@components/payment/gateway-control/change-gateway';

// interface OrderViewHeaderProps {
//   order: any;
//   wrapperClassName?: string;
//   buttonSize?: 'big' | 'medium' | 'small';
//   loading?: boolean;
// }

// export default function OrderViewHeader({
//   order,
//   wrapperClassName,
//   buttonSize = 'medium',
//   loading = false,
// }: OrderViewHeaderProps) {
//   const { t } = useTranslation('common');
//   const { data: settings, isLoading } = useSettings();
//   const isPaymentActionPending = isPaymentPending(
//     order?.payment_gateway,
//     order?.order_status,
//     order?.payment_status
//   );
//   const { paymentGateway } = settings?.options!;
//   return (
//     <div
//       className={cn(
//         `bg-[#F7F7F7] rounded-lg mb-8 lg:px-7 p-6 ${
//           !isPaymentActionPending ? 'lg:py-8' : 'lg:py-5'
//         } ${wrapperClassName}`
//       )}
//     >
//       <div className="mb-0 flex flex-col flex-wrap items-center justify-between gap-x-8 text-base font-bold text-heading sm:flex-row lg:flex-nowrap">
//         <div
//           className={`order-2 flex w-full gap-6 xs:flex-nowrap sm:order-1 ${
//             !isPaymentActionPending
//               ? 'max-w-full basis-full justify-between'
//               : 'max-w-full basis-full justify-between lg:ltr:mr-auto'
//           }`}
//         >
//           <div className="flex flex-wrap items-center">
//             <span className="mb-2 block font-semibold text-heading text-base lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
//               {t('text-status')} :
//             </span>
//             <div className="w-full lg:w-auto flex">
//               {loading ? (
//                 <SpinnerLoader />
//               ) : (
//                 <Badge
//                   text={t(order?.order_status)}
//                   color={StatusColor(order?.order_status)}
//                   className="min-h-[2rem] flex items-center text-sm font-semibold !leading-none xs:text-sm"
//                 />
//               )}
//             </div>
//           </div>
//           <div className="flex flex-wrap items-center">
//             <span className="mb-2 block text-heading font-semibold text-base lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
//               {t('text-payment-status')} :
//             </span>
//             <div className="w-full lg:w-auto flex">
//               {loading ? (
//                 <SpinnerLoader />
//               ) : (
//                 <Badge
//                   text={t(order?.payment_status)}
//                   color={StatusColor(order?.payment_status)}
//                   className="min-h-[2rem] flex items-center text-sm font-semibold !leading-none xs:text-sm"
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//         {!isLoading && !isEmpty(paymentGateway) ? (
//           <>
//             {isPaymentActionPending && (
//               <span className="order-2 mt-5 w-full max-w-full shrink-0 basis-full sm:order-1 lg:mt-0 lg:w-auto lg:max-w-none lg:basis-auto lg:ltr:ml-auto lg:rtl:mr-auto">
//                 {/* <PayNowButton trackingNumber={order?.tracking_number} /> */}
              
//                 <PayNowButton
                
//                   trackingNumber={order?.tracking_number}
//                   order={order}
//                 />
               
//               </span>
//             )}
//             {paymentGateway?.length > 1 && isPaymentActionPending && (
//               <span className="order-2 mt-5 w-full max-w-full shrink-0 basis-full sm:order-1 lg:mt-0 lg:w-auto lg:max-w-none lg:basis-auto lg:ltr:ml-auto lg:rtl:mr-auto">
//                 <ChangeGateway order={order} />
//               </span>
//             )}
//           </>
//         ) : (
//           ''
//         )}
//       </div>
//     </div>
//   );
// }



//old

import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import StatusColor from '@components/orders/status-color';
import Badge from '@components/ui/badge';
import PayNowButton from '@components/payment/pay-now-button';
import { isPaymentPending } from '@lib/is-payment-pending';
import { SpinnerLoader } from '@components/ui/loaders/spinner/spinner';
import { isEmpty } from 'lodash';
import { useSettings } from '@framework/settings';
import ChangeGateway from '@components/payment/gateway-control/change-gateway';



interface OrderViewHeaderProps {
  order: any;
  wrapperClassName?: string;
  buttonSize?: 'big' | 'medium' | 'small';
  loading?: boolean;
}

export default function OrderViewHeader({
  order,
  wrapperClassName,
  buttonSize = 'medium',
  loading = false,
}: OrderViewHeaderProps) {
  const { t } = useTranslation('common');
  const { data: settings, isLoading } = useSettings();
  const isPaymentActionPending = isPaymentPending(
    order?.payment_gateway,
    order?.order_status,
    order?.payment_status
  );
  console.log(settings?.options)
  const { paymentGateway = [{ name: "razorpay", title: "Razorpay" }] } = settings?.options || {};

  return (
    <div
      className={cn(
        `bg-[#F7F7F7] rounded-lg mb-8 lg:px-7 p-6 ${
          !isPaymentActionPending ? 'lg:py-8' : 'lg:py-5'
        } ${wrapperClassName}`
      )}
    >
      <div className="mb-0 flex flex-col flex-wrap items-center justify-between gap-x-8 text-base font-bold text-heading sm:flex-row lg:flex-nowrap">
        <div
          className={`order-2 flex w-full gap-6 xs:flex-nowrap sm:order-1 ${
            !isPaymentActionPending
              ? 'max-w-full basis-full justify-between'
              : 'max-w-full basis-full justify-between lg:ltr:mr-auto'
          }`}
        >
          <div className="flex flex-wrap items-center">
            <span className="mb-2 block font-semibold text-heading text-base lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
              {t('text-status')} :
            </span>
            <div className="w-full lg:w-auto flex">
              {loading ? (
                <SpinnerLoader />
              ) : (
                <Badge
                  text={t(order?.order_status)}
                  color={StatusColor(order?.order_status)}
                  className="min-h-[2rem] flex items-center text-sm font-semibold !leading-none xs:text-sm"
                />
              )}
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <span className="mb-2 block text-heading font-semibold text-base lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
              {t('text-payment-status')} :
            </span>
            <div className="w-full lg:w-auto flex">
              {loading ? (
                <SpinnerLoader />
              ) : (
                <Badge
                  text={t(order?.payment_status)}
                  color={StatusColor(order?.payment_status)}
                  className="min-h-[2rem] flex items-center text-sm font-semibold !leading-none xs:text-sm"
                />
              )}
            </div>
          </div>
        </div>
        {!isLoading && !isEmpty(paymentGateway) ? (
          <>
            {isPaymentActionPending && (
              <span className="order-2 mt-5 w-full max-w-full shrink-0 basis-full sm:order-1 lg:mt-0 lg:w-auto lg:max-w-none lg:basis-auto lg:ltr:ml-auto lg:rtl:mr-auto">
                {/* <PayNowButton trackingNumber={order?.tracking_number} /> */}
                <PayNowButton
                  trackingNumber={order?.tracking_number}
                  order={order}
                />
              </span>
            )}
            {paymentGateway?.length > 1 && isPaymentActionPending && (
              <span className="order-2 mt-5 w-full max-w-full shrink-0 basis-full sm:order-1 lg:mt-0 lg:w-auto lg:max-w-none lg:basis-auto lg:ltr:ml-auto lg:rtl:mr-auto">
                <ChangeGateway order={order} />
              </span>
            )}
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}