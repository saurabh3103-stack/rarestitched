
import { useRouter } from "next/router";
import { useOrder } from "@framework/orders";
import Spinner from "@components/ui/loaders/spinner/spinner";
import OrderView from "@components/orders/order-view";
import Divider from "@components/ui/divider";

import Subscription from "@components/common/subscription";
import Container from "@components/ui/container";
import { useEffect } from "react";
import { useCart } from "@store/quick-cart/cart.context";
import { useAtom } from "jotai";
import { clearCheckoutAtom } from "@store/checkout";

export default function NewOrder() {
  const { resetCart } = useCart();
  const [, resetCheckout] = useAtom(clearCheckoutAtom);
  const { query } = useRouter();
  const { data, isLoading } = useOrder({
    tracking_number: query.tracking_number as string,
  });

  useEffect(() => {
    resetCart();
    resetCheckout();
  }, [resetCart, resetCheckout]);

  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spinner showText={false} />
      </div>
    );
  }

  
  return (
    <>
    {
      data?.order_status==="order-processing" ?"":<Divider></Divider>
    }
     
      <Container>
        <OrderView order={data} loadingStatus={isLoading} />
        <Subscription />
      </Container>
    </>
  );
}
