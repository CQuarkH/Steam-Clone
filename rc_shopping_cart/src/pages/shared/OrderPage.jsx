import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../components/common/NotFound";
import {
  formatDateToNumericUSFormat,
  formatDateToReadableUSFormat,
} from "../../utils/utils";
import { ResumeItem } from "../../components/common/ResumeItem";

import ProductTile from "../../components/products/ProductTile";

function OrderPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchOrder = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/user/orders/${orderId}`
      );
      const data = await response.json();
      setOrder(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (!isLoading && order == null) {
    return <NotFound />;
  }

  return (
    <div className="cart-page-grid gap-4 container-spacing py-4">
      <div className="[grid-area:product] rounded-md flex flex-col gap-4">
        {/* order title */}
        <div className="h-40 bg-slate-800/40 rounded-md p-8 flex flex-col justify-between">
          <h1 className="flex text-zinc-200 text-2xl font-bold">
            {" "}
            Order #{order.orderId}{" "}
          </h1>
          <h3 className="flex text-zinc-400 text-md font-semibold">
            {" "}
            {formatDateToReadableUSFormat(order.orderDateTime)}
          </h3>
        </div>
        {/* order products */}
        <div className="flex-1 bg-slate-800/40 rounded-md p-6 flex flex-col gap-4">
          <h3 className="text-zinc-300 font-semibold"> Products </h3>
          <div className="flex flex-col gap-4 flex-1 overflow-y-auto">
            {order.orderItems.map((orderItem) => (
              <ProductTile product={orderItem.product} canDelete={false} />
            ))}
          </div>
        </div>
      </div>
      {/* order details */}
      <div className="[grid-area:aside] bg-slate-800/40 rounded-md p-2">
        <h2 className="text-zinc-200 font-semibold px-2 py-4">Order Details</h2>
        <ul className="p-2 bg-slate-950/50 rounded-md">
          <ResumeItem
            string="Payment ID: "
            value={order.payment.id}
            price={false}
          />
          <ResumeItem string="Amount: " value={order.payment.amount} />
          <ResumeItem
            string="Card: "
            value={order.payment.lastFourDigits}
            price={false}
          />
          <ResumeItem
            string="Payment Date: "
            value={formatDateToNumericUSFormat(order.payment.paymentDateTime)}
            price={false}
          />
        </ul>
      </div>
    </div>
  );
}

export default OrderPage;
