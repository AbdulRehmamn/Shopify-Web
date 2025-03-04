"use client";
import React from "react";

const testimonials = [
  {
    "heading": "Reliable Assistance: Swift & Efficient",
    "text": "The dedication and expertise of 100xelevate have made a significant impact on our business. We’re thrilled with the results and their ongoing support!",
    "img": "Peter.png",
    "name": "Peter B.",
    "title": "CFO"
  },
  {
    "heading": "Quick Help: Efficient & Reliable",
    "text": "We’ve experienced top-tier customer service with 100xelevate. Their professionalism and attention to detail are unmatched.",
    "img": "Jenny.png",
    "name": "Jenny S.",
    "title": "Interior Designer"
  },
  {
    "heading": "Solid Support: Efficient and Trustworthy",
    "text": "Thanks to 100xelevate, our operations have improved dramatically. Their innovative strategies brought real growth.",
    "img": "Matt.png",
    "name": "Mat H.",
    "title": "Small Business Owner"
  },
  {
    "heading": "Exceptional Support & Service",
    "text": "We’ve experienced top-tier customer service with 100xelevate. Their professionalism and attention to detail are unmatched.",
    "img": "Jenny.png",
    "name": "Sarah M.",
    "title": "CEO"
  },
  {
    "heading": "Transformative Business Solutions",
    "text": "Thanks to 100xelevate, our operations have improved dramatically. Their innovative strategies brought real growth.",
    "img": "Matt.png",
    "name": "David R.",
    "title": "Marketing Head"
  },
  {
    "heading": "Transformative Business Solutions",
    "text": "Thanks to 100xelevate, our operations have improved dramatically. Their innovative strategies brought real growth.",
    "img": "Matt.png",
    "name": "David R.",
    "title": "Marketing Head"
  }
];

const TestimonialCard = () => {
  return (
    <div className="flex flex-col items-center space-y-4 px-2">
      <button className="h-10 w-30 border-2 border-yellow-400 text-yellow-400 mt-9">
        Reviews
      </button>

      <h1 className="text-center text-2xl text-sm:font-extrabold sm:text-4xl md:text-6xl">
        Client testimonials, <br /> real voices heard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-zinc-900 text-white rounded-xl p-6 max-w-md shadow-lg transform"
          >
            <span className="text-yellow-400 text-2xl font-bold">99</span>
            <h2 className="text-xl font-bold mt-2">{testimonial.heading}</h2>
            <p className="text-gray-400 mt-2">{testimonial.text}</p>
            <div className="flex items-center mt-4">
              <img src={testimonial.img} alt="" className="h-10 w-10" />
              <div className="ml-4">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
