import React from "react";
import CustomButton from "../../utils/Constant/buttons";
import { FaApple } from "react-icons/fa";

const PromoSection = ({
  imgSrc,
  alt,
  title,
  subtitle,
  btn1Text,
  btn2Text,
  variant1,
  variant2,
  titleClass,
  textColor,
  showAppleIcon = false
}) => {
  return (
    <section className="relative w-full h-auto mt-5">
      <img src={imgSrc} alt={alt} className="w-full h-auto" />
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${textColor}`}
      >
        {showAppleIcon ? (
          <div className="flex items-center gap-2 text-3xl font-bold">
            <FaApple />
            <span>{title}</span>
          </div>
        ) : (
          <h1 className={titleClass}>{title}</h1>
        )}
        <p className="text-lg font-semibold">{subtitle}</p>
        <div className="flex gap-3">
          <CustomButton text={btn1Text} variant={variant1} />
          <CustomButton text={btn2Text} variant={variant2} />
        </div>
      </div>
    </section>
  );
};

export default PromoSection