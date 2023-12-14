import React, { useState } from "react";
import ResumeAside from "../../components/ResumeAside";
import AsyncButton from "../../components/common/AsyncButton";
import PaymentCardForm from "../../components/PaymentCardForm";
import useCartStore from "../../context/cartStore";
import { useNavigate } from "react-router-dom";
import CreditCardDisplay from "../../components/common/CreditCardDisplay";

function UserCheckoutPage() {
  const [cardData, setCardData] = useState(null);
  const { cart, totalCheckout } = useCartStore();

  return (
    <div className="flex flex-col container-spacing text-white p-2">
      <h1 className="font-bold text-xl"> Checkout </h1>
      <div className="cart-page-grid gap-4 p-2 flex-1">
        {/* aside */}
        <ResumeAside
          title="Order Summary"
          itemsCount={true}
          buttonChild={
            <PayButton
              cardData={cardData}
              cart={cart}
              totalCheckout={totalCheckout}
            />
          }
        />
        <div className="[grid-area:product] rounded-md flex flex-col gap-4">
          <div className="bg-slate-800/40 h-20 rounded-md p-2 flex items-center">
            <h2 className="text-zinc-300 font-semibold p-2"> Payment Info </h2>
          </div>
          <div className="card-data-grid flex gap-4 h-80">
            <PaymentCardForm onValidateCard={setCardData} />
            <CreditCardDisplay cardData={cardData} />
          </div>
        </div>
      </div>
    </div>
  );
}

const PayButton = ({ cardData, cart, totalCheckout }) => {
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const handlePayment = async () => {
    const requestBody = {
      userId: 1,
      products: cart,
      totalAmount: totalCheckout,
      cardNumber: cardData.cardNumber,
    };

    try {
      const response = await fetch("http://localhost:8080/api/user/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const order = await response.json();
      clearCart();
      navigate(`/orders/${order.orderId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AsyncButton
      onClick={cardData && handlePayment}
      height="h-16"
      disabled={!cardData}
    >
      Pay
    </AsyncButton>
  );
};

export default UserCheckoutPage;
