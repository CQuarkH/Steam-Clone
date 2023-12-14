import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useUserStore from "../../context/userStore";
import NotFound from "../../components/common/NotFound";
import useCartStore from "../../context/cartStore";
import UserProductOptions from "./options/UserProductOptions";

function ProductPage() {
  const { productId } = useParams();
  const user = useUserStore((state) => state.user);
  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/${user.role}/products/${productId}`
      );

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  if (!isLoading && product == null) {
    return <NotFound />;
  }

  return (
    <div className="product-page-grid gap-4 container-spacing py-4">
      {/* title */}
      <div className="[grid-area:title] bg-slate-800/20 rounded-lg p-2 flex flex-col justify-between">
        <div className="flex flex-col p-6">
          <h1 className="text-white text-2xl font-bold"> {product.name} </h1>
          <h3 className="text-zinc-400 font-semibold text-lg">
            {product.publisher}
          </h3>
        </div>
        <ul className="flex gap-4 px-6 py-2 text-zinc-300">
          {product.categories.map((category) => (
            <li className="bg-slate-950/60 p-2 rounded-lg"> {category} </li>
          ))}
        </ul>
      </div>
      {/* price */}
      <div className="[grid-area:price] flex flex-col justify-between bg-slate-800/20 rounded-lg p-2">
        {user.role === "user" ? (
          <UserProductOptions product={product} />
        ) : (
          <></>
        )}
      </div>
      {/* cover image */}
      <div className="[grid-area:image] rounded-lg">
        <img
          src={product.imageUrl}
          className="object-cover h-[600px] w-full rounded-lg"
        />
      </div>
      {/* right aside */}
      <div className="[grid-area:aside] flex flex-col justify-between bg-slate-800/20 rounded-lg p-2">
        <div className="flex flex-col p-2">
          <h3 className="text-zinc-300  font-semibold py-4"> Description </h3>
          <p className="text-zinc-300 text-sm p-4 bg-slate-950/60 rounded-md max-h-[450px] overflow-y-auto">
            {" "}
            {product.description}{" "}
          </p>
        </div>
        <div className="flex rounded-lg items-center justify-between">
          <h4 className="text-zinc-300 font-semibold text-sm">
            {" "}
            Release Date:{" "}
          </h4>
          <h4 className="p-2 text-zinc-200 bg-slate-950/60 ">
            {" "}
            {product.releaseDate}{" "}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
