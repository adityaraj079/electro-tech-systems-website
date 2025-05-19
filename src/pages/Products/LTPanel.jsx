import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const LTPanel = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Product Overview */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Description */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              LT Panel
            </h2>
            <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>

            <p className="text-gray-700 mb-4">
              Our LT Panels are designed to distribute electrical power efficiently and safely. They are built with high-quality materials and adhere to industry standards, ensuring reliable performance in various applications.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Key Features:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Robust construction for long-term durability</li>
              <li>High short-circuit withstand capacity</li>
              <li>Modular design for easy maintenance</li>
              <li>Customizable configurations to meet specific requirements</li>
              <li>Compliance with international safety standards</li>
            </ul>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src="/product_img/lt-panel.jpg"
              alt="LT Panel"
              className="w-full max-w-md rounded shadow mx-auto"
            />
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Technical Specifications
          </h2>
          <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>
          <div className="overflow-x-auto p-4">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-[#ed6c1d] text-white">
                  <th className="py-2 px-4 border-b">Parameter</th>
                  <th className="py-2 px-4 border-b">Specification</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr>
                  <td className="py-2 px-4 border-b">Current Rating</td>
                  <td className="py-2 px-4 border-b">Up to 4000 Amps</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Voltage Range</td>
                  <td className="py-2 px-4 border-b">3 Phase, 415 / 690 V AC</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Short Circuit Withstand Capacity</td>
                  <td className="py-2 px-4 border-b">50KA 1Sec / Peak – 105 KA</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Busbar Configuration</td>
                  <td className="py-2 px-4 border-b">Main Horizontal and Vertical Busbars</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Busbar Rating</td>
                  <td className="py-2 px-4 border-b">Up to 4000 Amps</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Construction</td>
                  <td className="py-2 px-4 border-b">Modular design with segregated compartments</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Protection Degree</td>
                  <td className="py-2 px-4 border-b">IP42 / IP54 / IP65</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Standards</td>
                  <td className="py-2 px-4 border-b">IEC 61439-1 & 2</td>
                </tr>
              </tbody>
            </table>
          </div>

        {/* Field of Application */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Field of Application</h2>
          <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>
          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-1">
            <li>Industrial manufacturing units</li>
            <li>Commercial buildings</li>
            <li>Power distribution networks</li>
            <li>Hospitals and healthcare facilities</li>
            <li>Data centers</li>
            <li>Infrastructure projects</li>
          </ul>
        </div>
        
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LTPanel;
