import React from "react";
import { Order } from "@type/index";
import Link from "@components/ui/link";
import dayjs from "dayjs";
import { useTranslation } from "next-i18next";
import { ROUTES } from "@lib/routes";
import CancelOrder from "./CancelOrder";

type Props = {
  order: Order;
};

const OrderSingleList: React.FC<Props> = ({ order }) => {
  const { t } = useTranslation();

  const handleCancelSuccess = () => {
    setTimeout(() => window.location.reload(), 1000); // Reload the page after cancellation
  };

  return (
    <ul className="text-sm font-semibold text-heading border border-gray-300 rounded-md flex flex-col px-4 pt-5 pb-6 space-y-5">
      <li className="flex items-center justify-between">
        {t('text-order')}
        <span className="font-normal">
          <Link
            href={`${ROUTES.ACCOUNT_ORDERS}/${order.tracking_number}`}
            className="underline hover:no-underline text-body"
          >
            #{order.id}
          </Link>
        </span>
      </li>
      <li className="flex items-center justify-between">
        {t('text-date')}
        <span className="font-normal">
          {dayjs(order.created_at).format('MMMM D, YYYY')}
        </span>
      </li>
      <li className="flex items-center justify-between">
        {t('text-status')}
        {/* @ts-ignore */}
        <span className="font-normal">{order?.order_status}</span>
      </li>
      <li className="flex items-center justify-between">
        {t('text-total')}
        <span className="font-normal">
          {order.total} for {order.products.length} items
        </span>
      </li>
      <li className="flex items-center justify-between">
        {t('text-actions')}
        <span className="font-normal">
          <Link
            href={`${ROUTES.ACCOUNT_ORDERS}/${order.tracking_number}`}
            className="text-sm leading-4 bg-heading text-white px-4 py-2.5 inline-block rounded-md hover:text-white hover:bg-gray-600"
          >
            {t('button-view')}
          </Link>

        </span>

        <CancelOrder
              orderId={order.id}
              order={order}
              onCancelSuccess={handleCancelSuccess}
            />
      </li>
    </ul>
  );
};

export default OrderSingleList;
