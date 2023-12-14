import React from "react";
import { FaCcVisa } from "react-icons/fa";
import { FcSimCardChip } from "react-icons/fc";

function CreditCardDisplay({ cardData }) {
  const splitCardNumber = (cardNumber) => {
    const cardNumberStr = String(cardNumber);
    const groups = cardNumberStr.match(/\d{1,4}/g);
    return groups ? groups.join(" ") : "";
  };

  return (
    <div className="[grid-area:card] bg-slate-800/40 rounded-md flex flex-col p-2">
      {cardData !== null && (
        <>
          {/* logo */}
          <div className="flex-1 flex justify-between p-2">
            <FcSimCardChip className="h-10 w-10" />
            <FaCcVisa className="h-10 w-10 text-white" />
          </div>
          <div className="flex-1" />
          {/* card number */}
          <div className="flex-1">
            <h2 className="text-zinc-100 text-2xl p-2">
              {" "}
              {splitCardNumber(cardData.cardNumber)}{" "}
            </h2>
          </div>
          {/* name and exp */}
          <div className="flex-1 flex justify-between p-2">
            <h3 className="text-zinc-200 text-lg"> John Doe </h3>
            <h3 className="text-zinc-200 text-lg"> {cardData.expiryDate} </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default CreditCardDisplay;
