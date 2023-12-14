import React, { useState, useEffect } from "react";
import useCartStore from "../context/cartStore";
import AsyncButton from "./common/AsyncButton";
import { Link } from "react-router-dom";
import { ResumeItem } from "./common/ResumeItem";

function ResumeAside({
  title,
  itemsCount = false,
  showDiscountInput = true,
  buttonChild,
}) {
  const { cart, calculateTotalCheckout, totalCheckout } = useCartStore();
  const totalCart = useCartStore((state) => state.totalCart());

  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    calculateTotalCheckout(discount);
  }, [discount, calculateTotalCheckout]);

  return (
    <div className="[grid-area:aside] bg-slate-800/40 rounded-md p-4 flex flex-col justify-between">
      <div className="flex flex-col">
        <h2 className="text-zinc-200 font-bold py-2"> {title} </h2>
        <ul className="p-2 bg-slate-950/50 rounded-md">
          <ResumeItem string="Subtotal: " value={totalCart} />
          <ResumeItem
            string="Taxes (19%): "
            value={(totalCart * 0.19).toFixed(2)}
          />
          {showDiscountInput && (
            <ResumeItem
              string={`Discounts (${discount * 100}%): `}
              alert={true}
              value={(totalCart * discount).toFixed(2)}
            />
          )}
          {itemsCount && (
            <ResumeItem string="Items: " price={false} value={cart.length} />
          )}
        </ul>
        <div className="py-4">
          <ResumeItem string="Total: " value={totalCheckout} />
        </div>
      </div>

      <div className="flex flex-col p-2 gap-4">
        {showDiscountInput && <DiscountInput onValidateCode={setDiscount} />}
        {buttonChild ? (
          buttonChild
        ) : (
          <Link
            to={cart.length == 0 ? "" : "/checkout"}
            className={`${
              cart.length == 0 ? "bg-blue-600/20" : "bg-blue-600/60"
            } py-6 px-2 rounded-lg font-semibold flex items-center justify-center`}
          >
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
}

const DiscountInput = ({ onValidateCode }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleValidateDiscount = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/user/validate-discount/${inputValue}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      onValidateCode(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col p-4 bg-slate-950/50 rounded-md">
      <h3 className="font-semibold text-zinc-200 py-2"> Discount Code </h3>
      <div className="flex justify-between">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="bg-slate-800/40 rounded-md flex-1 p-2"
        />
        <AsyncButton onClick={handleValidateDiscount}>Apply</AsyncButton>
      </div>
    </div>
  );
};

export default ResumeAside;
