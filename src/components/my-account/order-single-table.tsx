// import React, { useState } from "react";
// import { Order } from "@type/index";
// import Link from "@components/ui/link";
// import { useTranslation } from "next-i18next";
// import dayjs from "dayjs";
// import usePrice from "@lib/use-price";
// import { ROUTES } from "@lib/routes";
// import Badge from "@components/ui/badge";
// import StatusColor from "@components/orders/status-color";
// import Modal from "@components/common/modal/modal";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// type Props = {
//   order: Order;
// };

// const OrderSingleTable: React.FC<Props> = ({ order }) => {
//   const { t } = useTranslation();
//   const { price: itemTotal } = usePrice({ amount: order.total });

//   // State for modal and processing
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);

//   // Handle cancel button click
//   const handleCancelClick = () => {
//     setIsModalOpen(true);
//   };

//   // Handle order cancellation
//   const handleCancelOrder = async () => {
//     setIsProcessing(true);

//     const url = "https://fun2sh.deificindia.com/orders/multiupdate";
//     const headers = {
//       "Content-Type": "application/json",
//       Cookie: `XSRF-TOKEN=eyJpdiI6ImE1VDV4OVlHTnA1VUpNR0RQZk9IUWc9PSIsInZhbHVlIjoiOU9UaU44eXpnK2JtVHR0VFdoam5jQlJET0kzanhIYzQydUMxMFpXcjAvNjRnUVJOY0Q2UGg0aDA2c0hhQXAra0xjS3lFV1Z3ejg0aFVIWFlqL0lLSHB6dGx4NitKRjVGOHhLc292a2VkK0xzYnNLamQzSzVnYmFJSGdBYTZaQmIiLCJtYWMiOiIwNDE4MWQxN2FkYWQ3ZDBmYWY3YTdjNTE1NWFiODAzNmU2ZDYxYzliZDlhMjc1MWYxMDAxMGY1ZmEzYjA4Y2JlIiwidGFnIjoiIn0%3D; chawkbazar_session=eyJpdiI6IjdMYmxHdVpwNHgrUER6QmkwRHlQTFE9PSIsInZhbHVlIjoiYWRzWStndG1QeWU5cEZLWlVBTkxoV3N0T3pmY3JTd01Fc0R0UkUvcG9LT1BMUmpJSWZXdFBTdjdZcTVUUzRxekxkSERJdXl2cy9HdHZDWkNKTkNiRzdScG5pZ3hMYkdkbUFzNXNUZWRTeVpvaTRTQ0lTemUvMVRDVEJrTnlyNXYiLCJtYWMiOiI1ZDNhNmY1ZTRmMmJlNTlhYjZhMDhhNzAxNzBhNjMyYTRhOWI2YzQzOWZiMDQyZjFkNTRiMTM3ZDU0NjgwODVlIiwidGFnIjoiIn0%3D`,
//     };

//     const payload = {
//       id: [order.id], // Sending order ID in an array
//       order_status: "order-cancelled",
//     };

//     try {
//       const response = await axios.post(url, payload, { headers });
//       console.log("API Response:", response.data);

//       toast.success("Order cancelled successfully!", {
//         position: toast.POSITION.TOP_RIGHT,
//         autoClose: 3000,
//       });

//       setIsModalOpen(false);
//       setIsProcessing(false);

//       // Reload the page to reflect changes
//       setTimeout(() => window.location.reload(), 1000); // Delay reload to show toast
//     } catch (error) {
//       console.error("Error occurred:", error.response || error.message);

//       toast.error("An error occurred while cancelling the order.", {
//         position: toast.POSITION.TOP_RIGHT,
//         autoClose: 3000,
//       });

//       setIsProcessing(false);
//     }
//   };

//   return (
//     <>
//       <tr className="border-b border-gray-300 last:border-b-0">
//         <td className="px-4 py-5 ltr:text-left rtl:text-right">
//           <Link
//             href={`${ROUTES.ACCOUNT_ORDERS}/${order.tracking_number}`}
//             className="underline hover:no-underline text-body"
//           >
//             #{order.id}
//           </Link>
//         </td>
//         <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 text-heading">
//           {dayjs(order.created_at).format("MMMM D, YYYY")}
//         </td>
//         <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 whitespace-nowrap">
//           <Badge
//             text={t(order?.order_status)}
        
//             color={StatusColor(order?.order_status as string)}
//             className="min-h-[2rem] inline-flex items-center text-sm font-semibold !leading-none xs:text-sm"
//           />
//           {console.log(order?.order_status)}
//         </td>
//         <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 text-heading">
//           {itemTotal} for {order.products.length} items
//         </td>
//         <td className="ltr:text-right rtl:text-left px-4 py-5 text-heading">
//           <div className="flex items-center gap-3">
//             <Link
//               href={`${ROUTES.ACCOUNT_ORDERS}/${order.tracking_number}`}
//               className="text-sm leading-4 bg-heading text-white px-4 py-2.5 rounded-md hover:text-white hover:bg-gray-600"
//             >
//               {t("button-view")}
//             </Link>
//             <button
//   onClick={handleCancelClick}
//   disabled={isProcessing || order?.order_status !== "order-processing"}
//   className="text-sm leading-4 bg-red-600 text-white px-4 py-2.5 rounded-md hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed"
// >
//   {isProcessing ? "Processing..." : "Cancel"}
// </button>

//           </div>
//         </td>
//       </tr>

//       {/* Modal for confirmation */}
//       <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
//         <div className="p-6 text-center bg-white rounded-lg shadow-lg font-sans">
//           <h2 className="text-lg font-semibold mb-4 text-gray-900">Are you sure?</h2>
//           <p className="mb-6 text-gray-700">
//             Do you really want to cancel your order? This action cannot be undone.
//           </p>
//           <div className="flex justify-center gap-4">
//             <button
//               onClick={handleCancelOrder}
//               disabled={isProcessing}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed"
//             >
//               {isProcessing ? "Processing..." : "Yes, Cancel Order"}
//             </button>
//             <button
//               onClick={() => setIsModalOpen(false)}
//               className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
//             >
//               No, Keep Order
//             </button>
//           </div>
//         </div>
//       </Modal>

//       {/* Toast container for notifications */}
//       <ToastContainer />
//     </>
//   );
// };

// export default OrderSingleTable;



import React from "react";
import { Order } from "@type/index";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
import dayjs from "dayjs";
import usePrice from "@lib/use-price";
import { ROUTES } from "@lib/routes";
import Badge from "@components/ui/badge";
import StatusColor from "@components/orders/status-color";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CancelOrder from "./CancelOrder";// Import the new component

type Props = {
  order: Order;
};

const OrderSingleTable: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation();
  const { price: itemTotal } = usePrice({ amount: order.total });

  // Callback for successful cancellation
  const handleCancelSuccess = () => {
    setTimeout(() => window.location.reload(), 1000); // Reload the page after cancellation
  };

  return (
    <>
      <tr className="border-b border-gray-300 last:border-b-0">
        <td className="px-4 py-5 ltr:text-left rtl:text-right">
          <Link
            href={`${ROUTES.ACCOUNT_ORDERS}/${order.tracking_number}`}
            className="underline hover:no-underline text-body"
          >
            #{order.id}
          </Link>
        </td>
        <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 text-heading">
          {dayjs(order.created_at).format("MMMM D, YYYY")}
        </td>
        <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 whitespace-nowrap">
          <Badge
            text={t(order?.order_status)}
            color={StatusColor(order?.order_status as string)}
            className="min-h-[2rem] inline-flex items-center text-sm font-semibold !leading-none xs:text-sm"
          />
        </td>
        <td className="ltr:text-left rtl:text-right lg:text-center px-4 py-5 text-heading">
          {itemTotal} for {order.products.length} items
        </td>
        <td className="ltr:text-right rtl:text-left px-4 py-5 text-heading">
          <div className="flex items-center gap-3">
            <Link
              href={`${ROUTES.ACCOUNT_ORDERS}/${order.tracking_number}`}
              className="text-sm leading-4 bg-heading text-white px-4 py-2.5 rounded-md hover:text-white hover:bg-gray-600"
            >
              {t("button-view")}
            </Link>
            {/* Use the CancelOrder component */}
            <CancelOrder
              orderId={order.id}
              order={order}
              onCancelSuccess={handleCancelSuccess}
            />
          </div>
        </td>
      </tr>

      {/* Toast container for notifications */}
      <ToastContainer />
    </>
  );
};

export default OrderSingleTable;