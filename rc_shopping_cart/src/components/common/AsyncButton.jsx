import React, { useState } from "react";

const AsyncButton = ({ onClick, children, height = "h-10", disabled }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await onClick();
    } catch (error) {
      console.error("Error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className={`${
        disabled ? "bg-green-400/30" : "bg-green-400"
      } text-black rounded-md p-2 ml-2 ${height}`}
    >
      {isLoading ? <span className="loader h-8 w-8"></span> : children}
    </button>
  );
};

export default AsyncButton;
