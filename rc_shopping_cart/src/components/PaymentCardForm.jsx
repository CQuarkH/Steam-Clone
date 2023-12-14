import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { validateCardNumber } from "../utils/utils";
import CreditCardDisplay from "./common/CreditCardDisplay";

function PaymentCardForm({ onValidateCard }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSaved, setIsSaved] = useState(false);

  const onSubmit = (data) => {
    onValidateCard(data);
    setIsSaved(true);
  };

  return (
    <form className="[grid-area:form] flex flex-col gap-4">
      <div className="flex-1 bg-slate-800/40 rounded-md flex">
        <FormInput
          title="Card Number"
          register={register}
          name="cardNumber"
          rules={{
            required: "Required!",
            validate: validateCardNumber,
            pattern: {
              value: /^[0-9]{16}$/,
              message: "Invalid!",
            },
          }}
          type="number"
          placeholder="Card number"
          error={errors.cardNumber}
        />
      </div>
      <div className="flex-1 rounded-md flex gap-2">
        {/* expiration date */}
        <div className="bg-slate-800/40 rounded-md flex">
          <FormInput
            title="Expiration"
            register={register}
            name="expiryDate"
            rules={{
              required: "Required!",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                message: "Invalid!",
              },
            }}
            type="text"
            placeholder="(MM/YY)"
            error={errors.expiryDate}
          />
        </div>
        {/* cvv */}
        <div className="bg-slate-800/40 rounded-md flex">
          <FormInput
            title="CVV"
            register={register}
            name="cvv"
            rules={{
              required: "Required!",
              pattern: {
                value: /^[0-9]{3}$/,
                message: "Invalid!",
              },
            }}
            type="number"
            placeholder="CVV"
            error={errors.cvv}
          />
        </div>
      </div>
      <div className="flex-1 p-2 rounded-md flex ">
        <div className="flex-1"></div>
        <div className="flex-1 flex justify-center items-center">
          <button
            onClick={handleSubmit(onSubmit)}
            className={`${
              isSaved ? "bg-blue-600/30" : "bg-blue-600"
            } rounded-md p-2 w-full h-full`}
          >
            {isSaved ? "Saved!" : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
}

const FormInput = ({
  register,
  name,
  rules,
  type,
  placeholder,
  error,
  title,
}) => {
  return (
    <div className="flex flex-col w-full p-2">
      <div className="flex py-2">
        <h4 className="text-zinc-200"> {title} </h4>
        {error && <span className="text-red-400 ml-4">{error.message}</span>}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        className={`input ${
          error ? "input-error" : ""
        } flex-1 w-full rounded-md p-2 bg-slate-950/40`}
      />
    </div>
  );
};

export default PaymentCardForm;
