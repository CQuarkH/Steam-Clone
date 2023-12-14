import React, { useEffect, useMemo, useState } from "react";
import SearchBar from "../../components/SearchBar";
import OrderCard from "../../components/orders/OrderCard";
import GridView from "../../components/common/GridView";

function UserOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const searchProps = useMemo(() => ["orderId"], []);

  const fetchOrders = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/user/orders-by-user/1"
      );
      const data = await response.json();
      console.log(data);
      setOrders(data.orders);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  return (
    <div className="flex text-white h-full w-full">
      <div className=" flex flex-col container-spacing">
        <div className="flex h-16 p-2">
          <SearchBar
            elements={orders}
            setFilteredElements={setFilteredOrders}
            searchKeys={searchProps}
            placeholder="Search Order By ID"
          />
        </div>
        <GridView
          elements={filteredOrders}
          Element={OrderCard}
          idPropName="orderId"
        />
      </div>
    </div>
  );
}

export default UserOrdersPage;
