import React, { useState } from "react";
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
import CancelOrder from "./CancelOrder"; // Import the CancelOrder component

type Props = {
  order: Order;
};

const OrderSingleTable: React.FC<Props> = ({ order: initialOrder }) => {
  const { t } = useTranslation();
  const { price: itemTotal } = usePrice({ amount: initialOrder.total });

  // Local state for the order
  const [order, setOrder] = useState(initialOrder);

  // Callback for successful cancellation
  const handleCancelSuccess = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      order_status: "order-cancelled", // Update the order status locally
    }));
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
              onCancelSuccess={handleCancelSuccess} // Pass the callback
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