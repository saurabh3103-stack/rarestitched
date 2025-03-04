import Link from "@components/ui/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInOut } from "@utils/motion/fade-in-out";
import { IoIosCloseCircle } from "react-icons/io";
import Counter from "@components/common/counter";
import usePrice from "@lib/use-price";
import { ROUTES } from "@lib/routes";
import { generateCartItemName } from "@utils/generate-cart-item-name";
import { useTranslation } from "next-i18next";
import { useCart } from "@store/quick-cart/cart.context";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";

const FavoriteButton = dynamic(
  () => import('@components/product/favorite-button'),
  { ssr: false },
);

type CartItemProps = {
  item: any;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { t } = useTranslation("common");
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useCart();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const { price: unitPrice } = usePrice({
    amount: Number(item.price),
  });

  const { price: totalPrice } = usePrice({
    amount: Number(item.itemTotal),
  });

  const handleRemoveItem = () => {
    setShowConfirmation(true);
    setItemToRemove(item);
  };

  const confirmRemoveItem = () => {
    clearItemFromCart(itemToRemove.id);
    setShowConfirmation(false);
    setItemToRemove(null);
  };

  const cancelRemoveItem = () => {
    setShowConfirmation(false);
    setItemToRemove(null);
  };

  return (
    <motion.div
      initial="from"
      animate="to"
      exit="from"
      variants={fadeInOut(0.25)}
      className={`group w-full h-auto flex justify-start items-center bg-white py-4 md:py-7 border-b border-gray-100 relative last:border-b-0`}
      title={item?.name}
    >
      <div className="relative flex w-24 md:w-28 h-24 md:h-28 rounded-md overflow-hidden bg-gray-200 flex-shrink-0 cursor-pointer ltr:mr-4 rtl:ml-4">
        <Image
          src={item?.image ?? '/assets/placeholder/cart-item.svg'}
          width={112}
          height={112}
          loading="eager"
          alt={item.name || 'Product Image'}
          className="bg-gray-300 object-cover"
        />
        <div
          className="absolute top-0 ltr:left-0 rtl:right-0 h-full w-full bg-black bg-opacity-30 md:bg-opacity-0 flex justify-center items-center transition duration-200 ease-in-out md:group-hover:bg-opacity-30"
          onClick={handleRemoveItem} // Trigger confirmation on click
        >
          <IoIosCloseCircle className="relative text-white text-2xl transform md:scale-0 md:opacity-0 transition duration-300 ease-in-out md:group-hover:scale-100 md:group-hover:opacity-100" />
        </div>
      </div>

      <div className="flex flex-col w-full overflow-hidden">
        <Link
          href={`${ROUTES.PRODUCT}/${item?.slug}`}
          className="truncate text-sm text-heading mb-1.5 -mt-1"
        >
          {generateCartItemName(item.name, item.attributes)
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')}
        </Link>
        <span className="text-sm text-gray-400 mb-2.5">
          {t('text-unit-price')} : &nbsp;
          {unitPrice}
        </span>

        

        <div className="flex items-end justify-between">
          <Counter
            quantity={item.quantity}
            onIncrement={() => addItemToCart(item, 1)}
            onDecrement={() => removeItemFromCart(item.id)}
            variant="dark"
          />
          <span className="font-semibold text-sm md:text-base text-heading leading-5">
            {totalPrice}
          </span>
        </div>
      </div>

      {showConfirmation && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>
          {t('Clear From Bag')}
        </h2>
        <button onClick={cancelRemoveItem} className="text-gray-400 hover:text-gray-600">
          <IoIosCloseCircle className="text-xl" />
        </button>
      </div>

      <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
        {t('Are you sure you want to remove this item from your cart?')}
      </p>

      <div className="flex justify-between mt-4">
  {/* Remove Button */}
  <span 
    onClick={confirmRemoveItem}
    className="border-2 border-gray-500 bg-white text-gray-900 text-sm font-semibold px-3 py-1 rounded-md cursor-pointer hover:bg-gray-100 hover:border-gray-700 transition duration-200 flex items-center shadow-md"
    style={{ fontFamily: 'Roboto, sans-serif' }}
  >
    {t('Remove')}
    <MdDelete className="ml-2 text-lg" />
  </span>

  {/* Save for Later Button */}
  <span 
    className="bg-yellow-400 border-2 border-yellow-600 text-black text-sm font-semibold px-3 py-1 rounded-md cursor-pointer hover:bg-yellow-500 hover:border-yellow-700 transition duration-200 flex items-center shadow-md"
    style={{ fontFamily: 'Roboto, sans-serif' }}
    onClick={() => clearItemFromCart(item.id)}
  >
    <span>{t('Save for later')}</span>
    <FavoriteButton productId={Math.floor(item?.id)} />
  </span>
</div>


    </div>
  </div>
)}


    </motion.div>
  );
};

export default CartItem;