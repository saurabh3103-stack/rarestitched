import { HeartFillIcon } from '@components/icons/heart-fill';
import { HeartOutlineIcon } from '@components/icons/heart-outline';
import Spinner from '@components/ui/loaders/spinner/spinner';
import { useUI } from '@contexts/ui.context';
import { useUser } from '@framework/auth';
import { useInWishlist, useToggleWishlist } from '@framework/wishlist';
import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

function FavoriteButton({
  productId,
  className,
}: {
  productId: string;
  className?: string;
}) {
  const { isAuthorized } = useUser();
  const { toggleWishlist, isLoading: adding } = useToggleWishlist({
    product_id: productId,
  });
  const { inWishlist, isLoading: checking } = useInWishlist({
    enabled: isAuthorized,
    product_id: productId,
  });

  

  const { openModal } = useUI();
  function toggle() {
    if (!isAuthorized) {
      openModal('LOGIN_VIEW');
      return;
    }
    toggleWishlist({ product_id: productId });
  }
  const isLoading = adding || checking;
  if (isLoading) {
    return (
      <div
        className={twMerge(
          cn(
            'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ',
            className
          )
        )}
      >
        <Spinner simple={true} className="flex w-5 h-5" />
      </div>
    );
  }
  return (
    <button
      type="button"
      className={twMerge(
        cn(
          'mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors text-heading text-sm',
          {
            '!border-heading': inWishlist,
          },
          className
        )
      )}
      onClick={toggle}
    >
      {inWishlist ? (
  <HeartFillIcon className="text-red-800 cursor-pointer" />
) : (
  <HeartFillIcon className="text-gray-800 hover:text-red-500 cursor-pointer" />
)}

    </button>
  );
}

export default FavoriteButton;
