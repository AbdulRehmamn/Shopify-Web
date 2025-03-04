const expertiseData = [
  { title: "Shopify Advisory / Enablement", textSize: "md:text-8xl sm:text-6xl lg:text-7xl" },
  
  { title: "Subscription Tech", textSize: "md:text-9xl sm:text-5xl lg:text-6xl"},
  { title: "AI & Workflow Automation", textSize: "md:text-8xl sm:text-5xl lg:text-6xl" },
  { title: "Technical Partner to the C-Suite", textSize: "md:text-7xl sm:text-4xl lg:text-5xl" },
  { title: "Strategic Roadmapping", textSize: "md:text-8xl sm:text-5xl lg:text-6xl" },
  
];

const Expertise = () => {
  return (
    <div className="bg-zinc-900 w-full min-h-screen px-6 sm:px-10 py-16">
      
      <div className="relative flex flex-col justify-center w-full items-center md:items-start">
        <button className="h-12 w-40 border border-yellow-500 text-yellow-400 font-bold mt-5 rounded-lg">
          Our Expertise
        </button>

        <h1 className="text-3xl md:text-5xl font-bold text-white mt-6 leading-tight text-center md:text-left">
          Elevate your business to new heights <br /> with 100xelevate proven formula
        </h1>
      </div>

      <div className="mt-20 space-y-12 px-2 sm:px-6 md:px-16">
        {expertiseData.map((item, index) => (
          
          <div 
            key={index} 
            className="flex flex-col md:flex-row items-center md:items-start justify-between w-full text-center md:text-left space-y-6 md:space-y-0"
          >
            <h1 className={`text-white ${item.textSize} sm:text-3xl md:text-6xl leading-tight`}>{item.title}</h1>
            <button className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-yellow-500 rounded-2xl transition duration-300 hover:bg-black mt-2 md:mt-5 md:ml-6">
              <span className="text-xl hover:text-white">↗</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
