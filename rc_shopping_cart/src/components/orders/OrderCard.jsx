import React from "react";
import { Link } from "react-router-dom";

function OrderCard({ element: order }) {
  return (
    <Link
      to={`/orders/${order.orderId}`}
      className="flex flex-col justify-between p-6 overflow-hidden gap-5 rounded-md relative w-50 max-h-[300px] bg-slate-800/40 transition duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="flex justify-between">
        <h2 className="text-zinc-200 font-bold text-xl">
          {" "}
          Order #{order.orderId}{" "}
        </h2>
        <h2 className="text-green-400 font-bold text-md">
          {" "}
          ${order.payment.amount}{" "}
        </h2>
      </div>
      <div>
        <h4 className="text-zinc-300 font-semibold">
          {" "}
          {order.orderItems.length} items
        </h4>
      </div>
    </Link>
  );
}

export default OrderCard;
