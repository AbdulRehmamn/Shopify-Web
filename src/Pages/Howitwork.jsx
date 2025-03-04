import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import StickyProjectSection from '../Components/Sticky'
import Button from '../Components/Button'
import ProcessSection from '../Components/Value'
import Reviews from '../Components/Review'
import TestimonialCard from '../Components/Ex'
import Footer from '../Components/Footer'
import PricingCard from '../Components/Pricing'

function Howitwork() {
  return (
    <div>
      < Navbar />
      < Header />
      <div className='flex justify-center mt-10 md:mt-15'>
    < Button  text="See Plans " className="flex justify-center bac " link="/pricing"/>
    </div>
      <div className="flex-1 text-white py-10 px-8 mt-8 flex flex-col md:flex-row items-center md:items-start gap-6  md:mx-15  ">
     
      <h1 className="text-center md:text-left text-3xl sm:text-2xl md:text-3xl font-bold md:w-1/4 px-3.5">
        Trusted by the world’s <br /> biggest brands
      </h1>

      
      <div className="grid grid-cols-3 sm:grid-cols-3 md:flex md:flex-wrap md:justify-start items-center gap-6 w-full md:w-3/4 py-3">
        {[7, 6, 5, 9, 11, 12, 13, "wild", 15].map((img, index) => (
          <img key={index} src={`${img}.png`} alt="" className="w-20 h-10 xsm:h-auto sm:w-24 sm:h-10 md:w-25 md:h-15 object-contain xl:w-20 xl:h-20 sm:d-block mx-auto" />
        ))}
      </div>
    </div>
    <div className="text-white flex flex-col md:flex-row justify-between items-start md:px-24 px-6 py-12">
  <h1 className="flex-1 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
    We work  forward-thinking,<br />
    consumer-friendly <span className="text-yellow-300">DTC</span> <br />
    <span className="text-yellow-300">brands.</span>
  </h1>

  <p className="text-xl mt-8 md:mt-15 md:relative md:right-8 md:ml-12  sm:text-lg leading-relaxed font-light max-w-lg">
    In addition to our offering, we have developed a comprehensive suite of tools aimed at helping our clients identify
    their top customers and reduce friction, enabling them to deliver exceptional, customer-focused experiences that
    drive repeat business.
  </p>
</div>


< StickyProjectSection />
<div className='flex justify-center mt-10 '>
   < Button  text="View Our Work "  link="/Our-Work" />
   </div>
< ProcessSection />

<div className=''>< PricingCard />
</div>



    < Reviews />

    < TestimonialCard />


    <div className="flex flex-col justify-center items-center mt-10">

  <button className="border border-amber-400 rounded-2xl w-30 h-10 md:w-40 ">
    How It Works
  </button>


  <div className="mt-6 text-center">
    <h1 className="text-2xl sm:text-6xl  ">
      Shopify Instant <br /> Checkout Link Generator
    </h1>
  </div>

  <div className="relative flex flex-col md:flex-row justify-between items-center bg-zinc-900 border border-gray-700 rounded-lg p-6 md:p-8 mt-10 h-auto md:h-[500px] w-full md:w-[900px] shadow-lg">
  
  {/* Left Section */}
  <div className="flex flex-col justify-center w-full md:w-1/2 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold">Free Tool</h1>
    <h3 className="mt-4 text-lg sm:text-xl text-gray-300">
      Use our suggestions to refine the <br className="hidden md:block" />
      output or accept it as is. Creativity is <br className="hidden md:block" />
      at your fingertips.
    </h3>
    <button className="bg-yellow-400 transition cursor-pointer text-black h-10 sm:h-12 w-36 sm:w-44 mt-6 rounded-lg shadow-md hover:bg-yellow-500 font-semibold mx-auto md:mx-0">
      Generate Link
    </button>
  </div>

  {/* Right Section */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0">
    <img src="Product.png" alt="Product" className="w-[80%] sm:w-[500px] md:w-[550px] h-auto object-contain rounded-lg" />
    <div className="absolute top-2 sm:top-3 right-2 sm:right-3 bg-yellow-400 text-black px-3 sm:px-4 py-1 rounded-full rotate-12 font-bold text-xs sm:text-sm">
      Free Tool
    </div>
  </div>
</div>




</div>
< Footer />




    </div>
  )
}

export default Howitwork
