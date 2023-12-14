import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ element: product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="flex flex-col overflow-hidden gap-5 rounded-md relative w-50 max-h-[370px] bg-slate-800/40 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <picture
        className="flex-shrink-0"
        style={{ height: "calc(370px - 5rem)" }}
      >
        <img
          src={product.imageUrl ?? ""}
          alt={`${product.name} image`}
          className="object-cover w-full h-full rounded-md"
        />
      </picture>
      <div className="flex flex-col truncate p-2 h-20">
        <h4 className="text-white text-sm font-bold">{product.name}</h4>
        <h4 className="text-sm font-semibold text-green-400">
          $ {product.price}
        </h4>
      </div>
    </Link>
  );
}

export default ProductCard;
