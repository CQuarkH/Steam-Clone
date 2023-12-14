import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import useCartStore from "../../context/cartStore";
import { Link } from "react-router-dom";

function CartIcon() {
  const cart = useCartStore((state) => state.cart);

  return (
    <Link className="flex text-white items-center mr-4" to="/cart">
      <CiShoppingCart className="h-8 w-8 text-zinc-300 hover:text-white" />
      <h4 className="ml-2">{cart.length}</h4>
    </Link>
  );
}

export default CartIcon;
