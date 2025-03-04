const How = () =>{
return(
<div className="flex flex-col justify-center items-center mt-10">

  <button className="border border-amber-400 rounded-2xl w-30 h-10 md:w-40 h-12">
    How It Works
  </button>


  <div className="mt-6 text-center">
    <h1 className="text-2xl sm:text-6xl  ">
      Shopify Instant <br /> Checkout Link Generator
    </h1>
  </div>

  <div className="relative flex flex-col md:flex-row justify-between items-center bg-zinc-900 border border-gray-700 sm:w-fit w-fit rounded-lg p-6 md:p-8 mt-10 h-auto md:h-[500px]  md:w-[900px] shadow-lg">
  
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





);
};
export default How;