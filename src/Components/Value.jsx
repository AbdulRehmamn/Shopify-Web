import React from "react";

let processSteps = [
  {
    img: "subscription-1.png",
    title: "Buy a plan",
    description: "Design & Development subscriptions for everyone.",
  },
  {
    img: "vector-alt-1.png",
    title: "Receive design within a week",
    description: "Get your design in just a week on average.",
  },
  {
    img: "display-code-1.png",
    title: "Development within two weeks",
    description: "Receive the initial draft of your store developed within just 2 weeks.",
  },



  
];


const ProcessSection = () => {
  return (
    <div className="flex flex-col items-center text-center mt-24">
    
      <h1 className="text-white text-2xl  md:text-6xl font-bold sm:text-2xl">
        We didn’t reinvent the <br /> wheel. Just develop.
      </h1>

      <h3 className="text-white md:text-xl mt-6 sm:font-light">
        
      </h3>

     
      <div className="md:flex sm:flex sm:flex-row flex-wrap justify-center gap-10 text-center mt-12">
        {processSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10">
            <img src={step.img} alt={step.title} className="w-20 h-20" />
            <h1 className="text-white text-2xl font-bold mt-4">{step.title}</h1>
            <h3 className="text-white text-lg mt-2">{step.description}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
