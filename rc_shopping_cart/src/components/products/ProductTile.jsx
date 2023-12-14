import React from "react";
import { RiDeleteBin7Line } from "react-icons/ri";
import useCartStore from "../../context/cartStore";

function ProductTile({ product, canDelete = true }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className="flex items-center p-2 bg-slate-800/40 rounded-md justify-between">
      <div className="flex items-center">
        {canDelete && (
          <RiDeleteBin7Line
            className="text-red-500 cursor-pointer mr-4 h-6 w-6 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleRemoveFromCart}
          />
        )}
        <picture className="flex-shrink-0 w-28 h-28">
          <img
            src={product.imageUrl ?? ""}
            alt={`${product.name} image`}
            className="object-cover w-full h-full rounded-md"
          />
        </picture>
        <div className="flex flex-col p-2">
          <h3 className="text-zinc-200 font-semibold"> {product.name} </h3>
          <h4 className="text-zinc-400 font-semibold text-sm">
            {" "}
            {product.publisher}{" "}
          </h4>
        </div>
      </div>

      <div className="flex">
        <h3 className="text-green-400 font-semibold"> $ {product.price} </h3>
      </div>
    </div>
  );
}

export default ProductTile;
