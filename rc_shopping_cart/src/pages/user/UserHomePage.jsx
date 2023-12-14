import React, { useEffect, useMemo, useState } from "react";
import ProductCard from "../../components/products/ProductCard";
import SearchBar from "../../components/SearchBar";
import GridView from "../../components/common/GridView";

function UserHomePage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const searchProps = useMemo(() => ["name"], []);

  const requestData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user/products");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data.content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestData();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="flex text-white h-full w-full">
      <div className=" flex flex-col container-spacing">
        <div className="flex h-16 p-2">
          <SearchBar
            elements={products}
            setFilteredElements={setFilteredProducts}
            searchKeys={searchProps}
          />
        </div>
        <GridView elements={filteredProducts} Element={ProductCard} />
      </div>
    </div>
  );
}

export default UserHomePage;
