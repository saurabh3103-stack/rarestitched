import dayjs from 'dayjs';
import Link from '@components/ui/link';
import usePrice from '@lib/use-price';
import { formatAddress } from '@lib/format-address';
import { formatString } from '@lib/format-string';
import { ROUTES } from '@lib/routes';
import { useTranslation } from 'next-i18next';
import Badge from '@components/ui/badge';
import { OrderItems } from '@components/orders/order-items';
import SuborderItems from '@components/orders/suborder-items';
import OrderViewHeader from '@components/orders/order-view-header';
import { isEmpty } from 'lodash';
import { jsPDF } from 'jspdf';

export default function OrderView({ order, loadingStatus }: any) {
  const { t } = useTranslation('common');

  const { price: total } = usePrice({ amount: order?.paid_total! });
  const { price: sub_total } = usePrice({ amount: order?.amount! });
  const { price: shipping_charge } = usePrice({
    amount: order?.delivery_fee ?? 0,
  });
  const { price: tax } = usePrice({ amount: order?.sales_tax ?? 0 });
  const { price: discount } = usePrice({ amount: order?.discount ?? 0 });

  const downloadPDF = () => {
    const doc = new jsPDF();
  
    // Add border
    doc.setLineWidth(0.5);
    doc.rect(5, 5, 200, 287);
  
    // Add company logo
    const img = new Image();
    img.src = '/assets/fun2sh logo 2.png'; // Replace with the path to your logo image
    doc.addImage(img, 'PNG', 10, 10, 50, 20);
  
    // Add title
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.setFont('helvetica', 'bold');
    doc.text('Order Receipt', 105, 35, null, null, 'center');
  
    // Add order details
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.setFont('helvetica', 'normal');
    doc.text(`Order Number: ${order?.tracking_number}`, 10, 50);
    doc.text(`Date: ${dayjs(order?.created_at).format('MMMM D, YYYY')}`, 10, 60);
    doc.text(`Total: ${total.replace(/[^\d.]/g, '')}`, 10, 70);


    console.log(total,sub_total,shipping_charge,tax)
    doc.text(`Payment Method: ${t(order?.payment_gateway) ?? 'N/A'}`, 10, 80);
  
    // Add a background color for sections
    doc.setFillColor(230, 230, 230);
    doc.rect(10, 90, 190, 10, 'F');
    doc.text('Order Summary', 105, 97, null, null, 'center');
  
    // Add more details as needed
    doc.text(`Sub Total: ${sub_total.replace(/[^\d.]/g, '')}`, 10, 110);
    doc.text(`Shipping Charge: ${shipping_charge.replace(/[^\d.]/g, '')}`, 10, 120);
    doc.text(`Tax: ${tax.replace(/[^\d.]/g, '')}`, 10, 130);
    doc.text(`Discount: ${discount.replace(/[^\d.]/g, '')}`, 10, 140);
  
    // Add address details
    doc.setFillColor(230, 230, 230);
    doc.rect(10, 150, 190, 10, 'F');
    doc.text('Address Details', 105, 157, null, null, 'center');
    doc.text(`Shipping Address: ${formatAddress(order?.shipping_address!)}`, 10, 170);
    doc.text(`Billing Address: ${formatAddress(order?.billing_address!)}`, 10, 180);
  
    // Add items
    doc.setFillColor(230, 230, 230);
    doc.rect(10, 190, 190, 10, 'F');
    doc.text('Items', 105, 197, null, null, 'center');
    console.log(order)
    order?.products.forEach((product, index) => {
      const orderQuantity = product.pivot.order_quantity; // Get the order quantity from pivot
      const minPrice = product.min_price; // Get the minimum price
  
      // Log the product details
      console.log(product, index);
  
      // Use the min price and order quantity in the text
      doc.text(`${product.name} - ${orderQuantity} x ${minPrice}`, 10, 210 + (index * 10));
  });
  
    // Add footer
    doc.setFillColor(230, 230, 230);
    doc.rect(10, 270, 190, 10, 'F');
    doc.setFontSize(10);
    doc.text('Company Name | Address | Contact Information', 105, 276, null, null, 'center');
  
    // Save the PDF
    doc.save('order-receipt.pdf');
  };

  return (
    <div className="max-w-[1280px] mx-auto mb-14 lg:mb-16">
      {!loadingStatus ? (
        <OrderViewHeader
          order={order}
          loading={loadingStatus}
        />
      ) : (
        ''
      )}
      <button onClick={downloadPDF} className="mb-4 p-2 bg-blue-500 text-white rounded">
        Download Receipt
      </button>
      <div className="w-full mx-auto shadow-sm">
        <div className="grid gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-11">
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              {t('text-order-number')}
            </h3>
            <p className="text-sm text-body">{order?.tracking_number}</p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              {t('text-date')}
            </h3>
            <p className="text-sm text-body">
              {dayjs(order?.created_at).format('MMMM D, YYYY')}
            </p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              {t('text-total')}
            </h3>
            <p className="text-sm text-body">{total}</p>
          </div>
          <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
            <h3 className="mb-2 text-base text-heading font-semibold">
              {t('text-payment-method')}
            </h3>
            <p className="text-sm text-body">
              {t(order?.payment_gateway) ?? 'N/A'}
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row border border-gray-100 rounded-md">
          <div className="w-full md:w-1/2 ltr:md:pr-3 rtl:md:pl-3 border-r px-5 lg:px-7 py-6 lg:py-7 xl:py-8 border-gray-100">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-5 lg:mb-6">
              {t('text-total-amount')}
            </h2>
            <div className="space-y-4 lg:space-y-5">
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-sub-total')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {sub_total}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-shipping-charge')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {shipping_charge}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-tax')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">{tax}</span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-discount')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {discount}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-total')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {total}
                </span>
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 px-5 lg:px-7 py-6 lg:py-7 xl:py-8">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-5 lg:mb-6">
              {t('text-order-details')}
            </h2>
            <div className="space-y-4 lg:space-y-5">
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-total-item')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7 capitalize">
                  {formatString(order?.products?.length, t('text-item'))}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-deliver-time')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {order?.delivery_time}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-shipping-address')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {formatAddress(order?.shipping_address!)}
                </span>
              </p>
              <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                  {t('text-billing-address')}
                </strong>
                :
                <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                  {formatAddress(order?.billing_address!)}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-11">
          <OrderItems products={order?.products} />
        </div>
        {!isEmpty(order?.children) ? (
          <div className="mt-11">
            <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-3 lg:mb-5 xl:mb-6">
              {t('text-sub-orders')}
            </h2>
            <div>
              <div className="flex items-start mb-6">
                <p className="text-heading text-sm leading-6">
                  <span className="font-bold">{t('text-note')}:</span>{' '}
                  {t('text-message-sub-order')}
                </p>
              </div>
              <SuborderItems items={order?.children} total={total} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}