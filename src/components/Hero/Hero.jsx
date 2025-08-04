import React from "react";
import iphone16max from "../../assets/images/Hero/iphone_16_family_max.jpg";
import iphone16min from "../../assets/images/Hero/iphone_16_family_min.jpg";
import macbooklarge from "../../assets/images/Hero/macbookair_large.jpg";
import macbooksmall from "../../assets/images/Hero/macbookair_small.jpg";
function Hero() {
  return (
    <>
      {/* mobile */}

      <div className="container mt-5 w-full relative lg:hidden ">
        <img src={iphone16min} alt="iphone16" className="w-full h-auto" />
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex flex-col gap-1 text-black justify-center items-center">
          <h1 className="text-4xl font-bold">iPhone</h1>
          <p className="text-xl font-semibold">Meet the iPhone 16 family.</p>
          <div className="flex gap-2">
            <button className="border rounded-3xl bg-blue-500 text-black px-4 py-2">
              Learn More
            </button>
            <button className="border border-blue-500 rounded-3xl to-blue-500  bg-white text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white">
              Shop iPhone
            </button>
          </div>
          <p className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </p>
        </div>
      </div>

      <div className="container mt-5 w-full relative lg:hidden ">
        <img src={macbooksmall} alt="iphone16" className="w-full h-auto" />
        <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex flex-col gap-1 text-black justify-center items-center">
          <h1 className="text-3xl font-bold">Macbook Air</h1>
          <p className="text-lg font-semibold">Sky blue colour.</p>
          <p className="text-lg font-semibold">
            Sky high performance with M4.
          </p>
          <div className="flex gap-2">
            <button className="border rounded-3xl bg-blue-500 text-black px-4 py-2">
              Learn More
            </button>
            <button className="border border-blue-500 rounded-3xl to-blue-500  bg-white text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white">
              Shop iPhone
            </button>
          </div>
        </div>
        <p className=" absolute bottom-5 left-0 w-full text-center text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Built for Apple Intelligence.
        </p>
      </div>

      {/* Lapton */}
      <div className=" hidden  lg:block mt-5 w-full relative">
        <img src={iphone16max} alt="iPhone" className="w-full h-auto" />

        <div className="absolute top-20  left-1/2 transform -translate-x-1/2 flex flex-col gap-3 text-black justify-center items-center">
          <h1 className="text-6xl font-bold">iPhone</h1>
          <p className="text-3xl font-semibold">Meet the iPhone 16 family.</p>
          <div className="flex gap-3">
            <button className="border rounded-3xl bg-blue-500 text-black px-4 py-2">
              Learn More
            </button>
            <button className="border border-blue-500 rounded-3xl to-blue-500  bg-white text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white">
              Shop iPhone
            </button>
          </div>
          <p className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </p>
        </div>
      </div>

      <div className=" hidden lg:block mt-5 w-full relative">
        <img src={macbooklarge} alt="macbook" className="w-full h-auto" />
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 text-black justify-center items-center">
          <h1 className="text-6xl font-bold">Macbook Air</h1>
          <p className="text-3xl font-semibold">Sky blue colour.</p>
          <p className="text-3xl font-semibold">
            Sky high performance with M4.
          </p>
          <div className="flex gap-3">
            <button className="border rounded-3xl bg-blue-500 text-white px-4 py-2">
              Learn More
            </button>
            <button className="border border-blue-500 rounded-3xl to-blue-500  bg-white text-blue-500 px-4 py-2 hover:bg-blue-500 hover:text-white">
              Buy
            </button>
          </div>
          <p className="text-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Built for Apple Intelligence.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
