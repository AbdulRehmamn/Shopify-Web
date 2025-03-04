const TrustedBrands = () => {
  return (
    <div className="flex-1 text-white py-10 px-8 mt-8 flex flex-col md:flex-row items-center md:items-start gap-6  md:mx-15  ">
     
      <h1 className="text-center md:text-left text-3xl sm:text-2xl md:text-3xl font-bold md:w-1/4 px-3.5 ">
        Trusted by the world’s <br /> biggest brands
      </h1>

      
      <div className="flex flex-wrap justify-center items-center gap-6 w-full md:w-3/4 py-3">
        {[7, 6, 5, 9, 11, 12, 13, "wild", 15].map((img, index) => (
          <img key={index} src={`${img}.png`} alt="" className="w-20 h-10 sm:w-24 sm:h-10 md:w-25 md:h-15 object-contain xl:w-20 xl:h-20" />
        ))}
      </div>
    </div>
   
  );
};

export default TrustedBrands;
