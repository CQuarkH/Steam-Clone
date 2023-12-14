import React from "react";
import useCartStore from "../../context/cartStore";
import ProductTile from "../../components/products/ProductTile";
import ResumeAside from "../../components/ResumeAside";

function UserCartPage() {
  const cart = useCartStore((state) => state.cart);

  return (
    <div className="flex flex-col container-spacing text-white p-2">
      <h1 className="font-bold text-xl "> Cart </h1>
      <div className="cart-page-grid gap-4 p-2 flex-1">
        {/* aside */}
        <ResumeAside title="Cart Resume" showDiscountInput={false} />
        {/* products */}
        <div className="[grid-area:product] p-2 flex flex-col gap-4 max-h-[744px] overflow-y-auto">
          {cart.length === 0 ? (
            <h2 className="flex h-full w-full justify-center py-10 font-semibold text-zinc-300">
              Your cart is empty.
            </h2>
          ) : (
            cart.map((product) => (
              <ProductTile key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default UserCartPage;
