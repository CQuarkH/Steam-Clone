import React from "react";
import { FaSteam } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import useUserStore from "../../context/userStore";
import CartIcon from "./CartIcon";

function Header() {
  const user = useUserStore((state) => state.user);
  const location = useLocation();

  let navOptions = [
    { path: "/catalog", label: "Catalog" },
    { path: "/orders", label: "Orders" },
  ];

  if (user.role === "admin") {
    navOptions = [...navOptions, { path: "/discounts", label: "Discounts" }];
  }

  const getNavLinkClass = (path) => {
    return location.pathname === path
      ? "text-white px-3 py-2 rounded-md text-sm font-medium"
      : "text-zinc-400 px-3 py-2 rounded-md text-sm font-medium hover:text-white";
  };

  const canShowCartItem = () => {
    return (
      user.role !== "admin" &&
      location.pathname !== "/cart" &&
      location.pathname !== "/checkout"
    );
  };

  return (
    <div className="flex w-full h-24 mb-8 rounded-md p-4 bg-gray-900/80 items-center justify-between">
      {/* title */}
      <div className="flex items-center">
        <div className="flex text-white items-center gap-4">
          <FaSteam className="h-10 w-10" />
          <div>
            <h1 className="font-bold text-xl text-white select-none">STEAM</h1>
            <h1 className="font-semibold text-sm text-zinc-400 select-none">
              STORE
            </h1>
          </div>
        </div>
        {/* navbar */}
        <nav className="flex gap-4 px-4 ml-6">
          {navOptions.map((option, index) => (
            <Link
              key={index}
              to={option.path}
              className={getNavLinkClass(option.path)}
            >
              {option.label}
            </Link>
          ))}
        </nav>
      </div>
      {canShowCartItem() && <CartIcon />}
    </div>
  );
}

export default Header;
