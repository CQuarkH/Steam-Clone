import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      totalCheckout: 0,
      addToCart: (item) => {
        const updatedCart = [...get().cart, item];
        set({ cart: updatedCart });
        get().calculateTotalCheckout();
      },
      removeFromCart: (itemId) => {
        const updatedCart = get().cart.filter((item) => item.id !== itemId);
        set({ cart: updatedCart });
        get().calculateTotalCheckout();
      },
      itemInCart: (itemId) => {
        const cart = get().cart;
        return cart.some((item) => item.id === itemId);
      },
      totalCart: () => {
        const cart = get().cart;
        const total = cart.reduce((total, item) => total + item.price, 0);
        return parseFloat(total.toFixed(2));
      },
      calculateTotalCheckout: (discount = 0) => {
        const cart = get().cart;
        const total = cart.reduce((total, item) => total + item.price, 0);
        const totalWithDiscount = total - total * discount;
        set({ totalCheckout: parseFloat(totalWithDiscount.toFixed(2)) });
      },
      clearCart: () => {
        set({ cart: [], totalCheckout: 0 });
      },
    }),
    {
      name: "shopping-cart",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
