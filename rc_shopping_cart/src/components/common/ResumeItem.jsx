import React from "react";

export const ResumeItem = ({ string, value, alert = false, price = true }) => {
  const valueClass = alert ? "text-red-400" : "text-green-400";

  return (
    <li className="p-2 flex justify-between">
      <h4 className="text-zinc-300"> {string} </h4>
      <h4 className={`${valueClass} font-semibold`}>
        {" "}
        {price && "$"} {value}{" "}
      </h4>
    </li>
  );
};
