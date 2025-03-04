const Header = () => {
  return (
    <div className="translate-y-3.5">
      <div className="header-title lg:text-8xl text-white mt-11 flex justify-center gap-2 font-bold">
  <h1 className="flex items-center gap-1 text-2xl sm:text-2xl  md:text-7xl  ">
    Shopify
    <img 
  src="2.png" 
  alt="Shopify Icon" 
  className="  h-10 sm:w-8 sm:h-8 md:w-24 md:h-24 inline-block"  
/>

  development
  </h1>
</div>

<div className="header-subtitle text-white flex justify-center text-center font-medium">
  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl">agency with a twist</h1>
</div>

<div className="header-description text-white mt-10 flex justify-center text-center font-extrabold">
  <h3 className="text-xl  sm:text-4xl md:text-6xl lg:text-3xl">
    We build Brands, where customers can almost feel the product
  </h3>
</div>

    </div>
  );
};

export default Header;