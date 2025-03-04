import React from "react";

const benefits = [
  {
    id: "01",
    img: "rev1.png",
    title: "Buy a plan",
    description: "Choose a plan that fits your needs, and watch us create magic.",
  },
  {
    id: "02",
    img: "rev2.png",
    title: "Lightning fast delivery",
    description:
      "Receive lightning-fast design and development delivery in just a few days.",
  },
  {
    id: "03",
    img: "rev3.png",
    title: "Fixed rate",
    description: "No surprises here! Pay the same fixed price.",
  },
  {
    id: "04",
    img: "rev4.png",
    title: "Top-notch quality",
    description:
      "Insane design quality at your fingertips whenever you need it.",
  },
  {
    id: "05",
    img: "rev5.png",
    title: "Flexible and scalable",
    description: "Scale up or down as needed.",
  },
  {
    id: "06",
    img: "rev6.png",
    title: "Unique and all yours",
    description:
      "Each store’s design and development is crafted exclusively for you and remains 100% yours.",
  },
];

const Reviews = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col items-center ">
        <div className="pt-20 md:pt-44">
          <h1 className="md:text-7xl text-4xl text-center">
            Benefits to join 100xelevate
          </h1>
          <h3 className="text-center mt-8 md:mt-24 px-6 md:px-45 text-lg md:text-2xl md:-translate-7">
            Perks so good you’ll never need to go anywhere else Seriously! <br />
            
          </h3>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-10 mx-auto   ">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-4 md:p-6 bg-black text-white rounded-lg border-t-2"
            >
              <span className="text-sm md:text-lg font-bold text-gray-400">
                {benefit.id}
              </span>
              <img
                src={benefit.img}
                alt={benefit.title}
                className="w-8 md:w-10 h-8 md:h-10 my-2 md:my-3 "
              />
              <h1 className="text-base md:text-lg font-bold text-white ">
                {benefit.title}
              </h1>
              <p className="text-gray-400 text-xl">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
