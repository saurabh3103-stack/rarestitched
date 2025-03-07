import React from "react";

interface OrderBadgeUpdateProps {
  status: { status: string };
}

const OrderBadgeUpdate: React.FC<OrderBadgeUpdateProps> = ({ status }) => {
 

  return (
    <div>
      {status.status !== "order-cancelled" ? (
 <div className="flex justify-center items-center my-4">
 <h1 className="bg-white text-green-700 text-xl sm:text-2xl font-semibold flex items-center gap-2 px-6 py-3 rounded-lg border border-green-500 shadow-md">
   ✅ Your order has been confirmed!
 </h1>
</div>
      ) : (
        <h1 className="bg-gray-500 text-white p-4 rounded-md text-center">
          ⏳ Order status: {status.status}
        </h1>
      )}
    </div>
  );
};

export default OrderBadgeUpdate;
