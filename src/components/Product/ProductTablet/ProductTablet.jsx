import React from 'react'
import ipadMedium from "../../../assets/images/promo_product/ipad_pro_medium.jpg";
import watchMedium from "../../../assets/images/promo_product/apple_watch_series_10_medium.jpg";
import { FaApple } from "react-icons/fa";
import macMedium from '../../../assets/images/promo_product/student.jpg'
import airpodsMedium from '../../../assets/images/promo_product/airpods_4_medium.jpg'
import macbookMedium from '../../../assets/images/promo_product/promo_macbookpro_medium.jpg'
import tradeinMedium from '../../../assets/images/promo_product/promo_iphone_tradein_medium.jpg'
import CustomButton from "../../utils/Constant/buttons";




const ProductTablet = () => {
  return (
    <>
    <div className="  hidden md:grid grid-cols-1 lg:hidden ">
        <section className="w-full h-auto relative mt-5">
          <img src={ipadMedium} alt="ipadsmall" className="w-full h-auto" />
          <div className="absolute mt-10 inset-0 text-white flex flex-col items-center gap-8">
            <h1 className="text-6xl font-bold">iPad Pro</h1>
            <p className="text-3xl font-semibold">
              Unbelievably thin. Incredibly Powerful.
            </p>
            <div className="flex gap-3">
              <CustomButton text= "Learn more" variant="primary" textSize="text-2xl"/>
              <CustomButton text="Buy" variant="dark" textSize='text-2xl'/>

            </div>
          </div>
          <p className=" absolute bottom-5 left-0 w-full text-center text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </p>
        </section>
        <section className="w-full h-auto relative mt-5">
          <img src={watchMedium} alt="watchsmall" className="w-full h-auto" />
          <div className="absolute inset-0 mt-10 text-black flex flex-col items-center  gap-8">
            <div className="flex items-center gap-2 text-6xl font-bold">
              <FaApple />
              <span>Watch</span>
            </div>
            <p className="text-3xl font-semibold">ThinStant Classic.</p>
            <div className="flex gap-3">
              <CustomButton text= "Learn more" variant="primary" textSize='text-2xl'/>
              <CustomButton text="Buy" variant="secondary"textSize='text-2xl' />
            </div>
          </div>
        </section>
        <section className="relative w-full h-auto mt-5">
          <img src={macMedium} alt="macstudent" className="w-full h-auto"
          />
          <div className="btn absolute flex flex-col items-center inset-2">
            <button className="border rounded-3xl bg-white text-xl text-black px-4 py-2 z-10">
              Learn more
            </button>
            </div>
          
        </section>

        <section className="relative w-full h-auto mt-5">
          <img src={airpodsMedium} alt="airpods" 
          className="w-full h-auto" 
          />
          <div className="absolute  inset-0 top-1/2 text-white flex flex-col items-center justify-center gap-7">
            <h1 className="text-4xl font-bold">Airpods 4</h1>
            <p className="text-xl font-semibold">Iconic. Now supersonic</p>
              <div className="flex gap-3">
              <CustomButton text= "Learn more" variant="primary"textSize='text-2xl'/>
              <CustomButton text="Buy" variant="dark"textSize='text-2xl'/>
            </div>
            </div>
           

        </section>
        <section className="w-full h-auto relative mt-5">
          <img src={macbookMedium} alt="ipadsmall" className="w-full h-auto" />
          <div className="absolute mt-10 inset-0 text-white flex flex-col items-center gap-10">
            <h1 className="text-6xl font-bold">MacBook Pro</h1>
            <p className="text-3xl font-semibold">
              A work of smart.
            </p>
            <div className="flex gap-3">
              <CustomButton text= "LearnMore" variant="primary"textSize='text-2xl'/>
              <CustomButton text="Buy" variant="dark"textSize='text-2xl'/>

            </div>
          </div>
          <p className=" absolute bottom-5 left-0 w-full text-center text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </p>
        </section>
        <section className="w-full h-auto relative mt-5">
          <img src={tradeinMedium} alt="watchsmall" className="w-full h-auto" />
          <div className="absolute mt-10 inset-0 text-black flex flex-col items-center  gap-7">
            <div className="flex items-center gap-2 text-6xl font-bold">
              <FaApple />
              <span>Trade In</span>
            </div>
            <p className="text-3xl font-semibold">Upgrade and save.It's that easy</p>
            <div className="flex gap-3">
              <CustomButton text= "LearnMore" variant="primary"textSize='text-2xl'/>
              <CustomButton text="Buy" variant="secondary"textSize='text-2xl'/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductTablet