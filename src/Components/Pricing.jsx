import React from "react";

const PricingCard = () => {
  return (
    <div className="card2 flex flex-col md:flex-row justify-center items-center min-h-screen px-4 gap-6 mt-0 ">
      {/* Left Section */}
      <div className="bg-black text-white p-6 md:p-8 rounded-lg w-full md:w-1/2 md:mb-31 border-2">
        <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs md:text-sm font-semibold ">
          🔴 Only 1 slot available
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 md:mt-4">Join 100xelevate</h1>

        {/* Book Call */}
        <div className="mt-4 p-3 md:p-4 border border-gray-700 rounded-lg flex justify-between items-center transition cursor-pointer">
          <div>
            <h3 className="text-lg md:text-xl font-bold">Book a 15-min intro call</h3>
            <p className="text-gray-400 text-sm">
              Learn more about how 100xelevate works and how it can help you.
            </p>
          </div>
          <span className="text-yellow-400 text-xl">➝</span>
        </div>

        {/* Refer a Friend */}
        <div className="mt-4 p-3 md:p-4 border border-gray-700 rounded-lg flex justify-between items-center transition cursor-pointer">
          <div>
            <h3 className="text-lg md:text-xl font-bold">Refer a friend & earn</h3>
            <p className="text-gray-400 text-sm">
              Earn 10% monthly recurring commission for each referral.
            </p>
          </div>
          <span className="text-yellow-400 text-xl">➝</span>
        </div>
      </div>

      {/* Right Section - Pricing */}
      <div className="bg-white p-6 md:p-8 rounded-lg w-full md:w-1/2 shadow-lg text-black relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <h2 className="text-lg font-bold mb-2 md:mb-0">Pricing Plans</h2>
          <div className="flex gap-2">
            <button className="bg-black text-white px-3 py-1 rounded-full transition cursor-pointer text-sm">
              Elevate Starter
            </button>
            <button className="border border-gray-400 px-3 py-1 rounded-full text-gray-600 transition cursor-pointer text-sm">
              Elevate Pro
            </button>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mt-2 md:mt-4">$2,799</h1>

        {/* Plan Includes */}
        <div className="border border-gray-300 p-2 md:p-3 rounded-lg mt-4 text-xs md:text-sm mx-auto my-4 max-w-xs">
          <span className="font-semibold">Plan includes:</span> ✅ Home page ✅ Product detail page ✅ Collection page
        </div>

        {/* Features - Two Column Layout */}
        <h3 className="text-lg font-bold mt-4 md:mt-6">What you get:</h3>
        <div className="grid grid-cols-2 gap-2 mt-2 text-gray-700 text-sm">
          {/* Left Column - Included Features */}
          <div>
            <p>✅ Branding & Logo</p>
            <p>✅ Designing UI & UX</p>
            <p>✅ Advisory + Tech Enablement</p>
            <p>❌ Development</p>
            <p>❌ CRO Optimization</p>
          </div>

          {/* Right Column - Excluded Features */}
          <div className="text-right">
            <p>❌ AI & Automation</p>
            <p>❌ Subscription Tech</p>
            <p>❌ Landers & Funnels</p>
            <p>❌ Multi Store Setup</p>
          </div>
        </div>

        {/* Get Started Button */}
        <button className="w-full mt-4 md:mt-6 bg-black text-white py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold flex items-center justify-center transition cursor-pointer">
          Get started ➝
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
