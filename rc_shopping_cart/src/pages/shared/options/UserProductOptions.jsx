import React, { useState } from "react";
import useCartStore from "../../../context/cartStore";

function UserProductOptions({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const onCart = useCartStore((state) => state.itemInCart(product.id));
  const [alreadyOnCart, setAlreadyOnCart] = useState(onCart);

  const handleAddToCart = () => {
    if (!alreadyOnCart) {
      addToCart(product);
      setAlreadyOnCart(true);
    }
  };

  return (
    <>
      <div className="flex justify-between px-2 py-4">
        <h3 className="text-zinc-300 font-semibold"> Base Game: </h3>
        <h3 className="text-white font-bold"> $CLP {product.price} </h3>
      </div>
      <button
        onClick={handleAddToCart}
        className="flex justify-center bg-zinc-300 px-1 py-3 text-center text-black rounded-md"
      >
        {alreadyOnCart ? "ALREADY ON CART!" : "ADD TO CART"}
      </button>
    </>
  );
}

export default UserProductOptions;
