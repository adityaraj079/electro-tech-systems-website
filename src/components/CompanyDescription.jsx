import React from 'react';

function CompanyDescription() {
  return (
    <section className="bg-white py-12 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left side Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <img 
            src="/company-banner.png"  
            alt="India's Top Dealer in Power Engineering" 
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* Right side Statistics */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {/* 1 */}
            <div>
              <h3 className="text-4xl font-bold text-[#ed6c1d]">45+</h3>
              <p className="text-gray-700 mt-2">Years of Trust</p>
            </div>

            {/* 2 */}
            <div>
              <h3 className="text-4xl font-bold text-[#ed6c1d]">40+</h3>
              <p className="text-gray-700 mt-2">Exporting Countries</p>
            </div>

            {/* Horizontal Line */}
            <div className="col-span-2 border-t border-gray-300 my-4"></div>

            {/* 3 */}
            <div>
              <h3 className="text-4xl font-bold text-[#ed6c1d]">100%</h3>
              <p className="text-gray-700 mt-2">Customer Satisfaction</p>
            </div>

            {/* 4 */}
            <div>
              <h3 className="text-4xl font-bold text-[#ed6c1d]">7+</h3>
              <p className="text-gray-700 mt-2">Products</p>
            </div>

            {/* Horizontal Line */}
            <div className="col-span-2 border-t border-gray-300 my-4"></div>

            {/* 5 */}
            <div>
              <h3 className="text-4xl font-bold text-[#ed6c1d]">36+</h3>
              <p className="text-gray-700 mt-2">State Operations</p>
            </div>

            {/* 6 */}
            <div>
              <h3 className="text-4xl font-bold text-[#ed6c1d]">20+</h3>
              <p className="text-gray-700 mt-2">Government Authorizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyDescription;
