import React from "react";

const CustomButton =  ({text, variant = "primary", textSize="text-base"})=>{
    const base = `border rounded-3xl px-4 py-2 ${textSize}`;
  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: " bg-white text-blue-500 hover:bg-blue-500 hover:text-white",
    dark: "bg-black text-blue-500 hover:bg-blue-500 hover:text-white"
  };
  return <button className={`${base} ${variants[variant]}`}>{text}</button>
};

export default CustomButton