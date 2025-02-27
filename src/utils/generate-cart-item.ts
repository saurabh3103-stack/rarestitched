import isEmpty from "lodash/isEmpty";

interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: {
    thumbnail: string;
    [key: string]: unknown;
  };
  price: number;
  sale_price?: number;
  max_price?: number; // Add max_price here
  quantity?: number;
  [key: string]: unknown;
}




export function generateCartItem(item: Item, variation: any) {
  const { id, name, slug, image, price, sale_price, max_price, quantity, unit } = item;
  console.log(max_price) // Include max_price
  if (!isEmpty(variation)) {
    return {
      id: `${id}.${variation.id}`,
      productId: id,
      name: `${name} - ${variation.title}`,
      slug,
      unit,
      stock: variation.quantity,
      price: variation.sale_price ? variation.sale_price : variation.price,
      max_price: max_price, // Add max_price to the cart item
      image: image?.thumbnail,
      variationId: variation.id,
    };
  }
  return {
    id,
    name,
    slug,
    unit,
    image: image?.thumbnail,
    stock: quantity,
    price: sale_price ? sale_price : price,
    max_price: max_price, // Add max_price to the cart item
  };
}