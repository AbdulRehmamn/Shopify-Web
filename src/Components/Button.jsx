import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, bgColor = "bg-yellow-500", hoverColor = "hover:bg-yellow-600" }) => {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <Link to={link} onClick={handleClick}>
      <button
        className={`w-50 h-14 ${bgColor} font-bold text-black rounded-lg shadow-md ${hoverColor} transition cursor-pointer text-xl sm:w-60 sm:h-14`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
