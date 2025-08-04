import React from "react";
import ipadSmall from "../../../assets/images/promo_product/ipad_pro_small.jpg";
import watchSmall from "../../../assets/images/promo_product/apple_watch_series_10_small.jpg";
import { FaApple } from "react-icons/fa";
import macStudent from '../../../assets/images/promo_product/student.jpg'
import airpods from '../../../assets/images/promo_product/airpods_4_small.jpg'
import macbook from '../../../assets/images/promo_product/promo_macbookpro__small.jpg'
import tradein from '../../../assets/images/promo_product/promo_iphone_tradein_small.jpg'
import CustomButton from "../../utils/Constant/buttons";






const ProductMobile = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:hidden">
        <section className="w-full h-auto relative mt-5">
          <img src={ipadSmall} alt="ipadsmall" className="w-full h-auto" />
          <div className="absolute mt-2 inset-0 text-white flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold">iPad Pro</h1>
            <p className="text-lg font-semibold">
              Unbelievably thin. Incredibly Powerful.
            </p>
            <div className="flex gap-3">
              <CustomButton text= "LearnMore" variant="primary"/>
              <CustomButton text="Buy" variant="dark"/>

            </div>
          </div>
          <p className=" absolute bottom-5 left-0 w-full text-center text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </p>
        </section>
        <section className="w-full h-auto relative mt-5">
          <img src={watchSmall} alt="watchsmall" className="w-full h-auto" />
          <div className="absolute inset-0 text-black flex flex-col items-center  gap-2">
            <div className="flex items-center gap-2 text-3xl font-bold">
              <FaApple />
              <span>Watch</span>
            </div>
            <p className="text-lg font-semibold">ThinStant Classic.</p>
            <div className="flex gap-3">
              <CustomButton text= "LearnMore" variant="primary"/>
              <CustomButton text="Buy" variant="secondary"/>
            </div>
          </div>
        </section>
        <section className="relative w-full h-auto mt-5">
          <img src={macStudent} alt="macstudent" className="w-full h-auto"
          />
          <div className="btn absolute flex flex-col items-center inset-2">
            <button className="border rounded-3xl bg-white text-black px-4 py-2 z-10">
              Learn More
            </button>
            </div>
          
        </section>

        <section className="relative w-full h-auto mt-5">
          <img src={airpods} alt="airpods" 
          className="w-full h-auto" 
          />
          <div className="absolute inset-0 top-1/2 text-white flex flex-col items-center justify-center gap-4">
            <h1 className="text-4xl font-bold">Airpods 4</h1>
            <p className="text-xl font-semibold">Iconic. Now supersonic</p>
              <div className="flex gap-3">
              <CustomButton text= "LearnMore" variant="primary"/>
              <CustomButton text="Buy" variant="dark"/>
            </div>
            </div>
           

        </section>
        <section className="w-full h-auto relative mt-5">
          <img src={macbook} alt="ipadsmall" className="w-full h-auto" />
          <div className="absolute mt-3 inset-0 text-white flex flex-col items-center gap-2">
            <h1 className="text-3xl font-bold">MacBook Pro</h1>
            <p className="text-lg font-semibold">
              A work of smart.
            </p>
            <div className="flex gap-3">
              <CustomButton text= "LearnMore" variant="primary"/>
              <CustomButton text="Buy" variant="dark"/>

            </div>
          </div>
          <p className=" absolute bottom-5 left-0 w-full text-center text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </p>
        </section>
        <section className="w-full h-auto relative mt-5">
          <img src={tradein} alt="watchsmall" className="w-full h-auto" />
          <div className="absolute mt-5 inset-0 text-black flex flex-col items-center  gap-2">
            <div className="flex items-center gap-2 text-3xl font-bold">
              <FaApple />
              <span>Trade In</span>
            </div>
            <p className="text-lg font-semibold">Upgrade and save.It's that easy</p>
            <div className="flex gap-3">
              <CustomButton text= "LearnMore" variant="primary"/>
              <CustomButton text="Buy" variant="secondary"/>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductMobile;
