import Container from "@components/ui/container";
import WidgetLink from "@components/widgets/widget-link";
import WidgetSocial from "@components/widgets/widget-social";
import WidgetContact from "@components/widgets/widget-contact";
// import WidgetMen from "@components/widgets/Widget-category"
import WidgetMen from "@components/widgets/Widget-category";
import WidgetWinter from "@components/widgets/Widget-winter";
import WidgetMugs from "@components/widgets/Widget-mugs";
interface WidgetsProps {
  widgets: {
    id: number;
    widgetTitle: string;
    lists: any;
  }[];
}

const Widgets: React.FC<{ widgets: any[] }> = ({ widgets }) => (
  <Container>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 lg:gap-x-10 xl:gap-6 pb-5 md:pb-5 lg:pb-5">
    {/* Section Title */}
    <h2 className="col-span-full text-yellow-500 text-lg md:text-xl lg:text-2xl font-bold mb-4">
      Stay Connected
    </h2>
    <WidgetSocial />
    <WidgetContact />
    {widgets.map((widget, index) => (
      <WidgetLink data={widget} key={`widget-link-${index}`} />
    ))}
  </div>

  {/* Border line between sections */}
  <div className="mb-6 border-t border-yellow-500"></div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 md:gap-8 lg:gap-x-10 xl:gap-6 pb-10 md:pb-16 lg:pb-20">
    {/* Section Title */}
    <WidgetMen />
    <WidgetWinter />
    <WidgetMugs />
  </div>
</Container>

);

export default Widgets;




// import { IyzicoIcon } from '@components/icons/payment-gateways/iyzico';
// import { MollieIcon } from '@components/icons/payment-gateways/mollie';
// import { PayPalIcon } from '@components/icons/payment-gateways/paypal';
// import { PayStack } from '@components/icons/payment-gateways/paystack';
// import { RazorPayIcon } from '@components/icons/payment-gateways/razorpay';
// import { StripeIcon } from '@components/icons/payment-gateways/stripe';
// import Container from '@components/ui/container';
// import Link from '@components/ui/link';
// import Spinner from '@components/ui/loaders/spinner/spinner';
// import { useSettings } from '@framework/settings';
// import { ROUTES } from '@lib/routes';
// import { isEmpty } from 'lodash';

// const Copyright = () => {
//   const { data, isLoading } = useSettings();
//   const showPaymentGateways =
//     !isEmpty(data?.options?.paymentGateway) && data?.options?.useEnableGateway!;
//   const date = new Date();

//   const icon: any = {
//     stripe: <StripeIcon className="h-5 w-auto" />,
//     paypal: <PayPalIcon className="h-5 w-auto" />,
//     razorpay: <RazorPayIcon className="h-5 w-auto" />,
//     mollie: <MollieIcon className="h-5 w-auto" />,
//     paystack: <PayStack className="h-5 w-auto" />,
//     iyzico: <IyzicoIcon className="h-5 w-auto" />,
//   };

//   return (
//     <div className="border-t border-gray-700 bg-black py-6">
//       <Container className="flex flex-col-reverse md:flex-row items-center md:justify-between text-center md:text-left">
//         {isLoading ? (
//           <Spinner simple />
//         ) : (
//           <p className="text-white text-sm md:text-base leading-6 mb-4 md:mb-0">
//             ©{date.getFullYear()}{' '}
//             <Link
//               className="font-semibold text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
//               href={data?.options?.siteLink ?? ROUTES?.HOME}
//             >
//               {data?.options?.siteTitle}
//             </Link>
//             . {data?.options?.copyrightText}{' '}
//             {data?.options?.externalText ? (
//               <Link
//                 className="font-semibold text-yellow-500 hover:text-yellow-400 transition-colors duration-200"
//                 href={data?.options?.externalLink ?? ROUTES?.HOME}
//               >
//                 {data?.options?.externalText}
//               </Link>
//             ) : null}
//           </p>
//         )}

//         {isLoading ? (
//           <Spinner simple />
//         ) : (
//           showPaymentGateways && (
//             <ul className="flex flex-wrap justify-center items-center space-x-4 md:space-x-6 lg:space-x-8">
//               {data?.options?.paymentGateway?.map(
//                 (item: { name: string }, index: number) =>
//                   icon[item?.name] ? (
//                     <li
//                       className="transition transform hover:scale-105 hover:opacity-80"
//                       key={index}
//                     >
//                       {icon[item?.name]}
//                     </li>
//                   ) : null
//               )}
//             </ul>
//           )
//         )}
//       </Container>
//     </div>
//   );
// };

// export default Copyright;
