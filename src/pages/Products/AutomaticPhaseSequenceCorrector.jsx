import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AutomaticPhaseSequenceCorrector = () => {
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
              Automatic Phase Sequence Corrector
            </h2>
            <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>

            <p className="text-gray-700 mb-4 p-2">
              Our Automatic Phase Sequence Corrector is designed to prevent damages caused by phase reversal in three-phase power systems. Utilizing superior quality raw materials, it ensures the correct phase sequence, safeguarding sensitive equipment from potential harm.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Key Features:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Prevents equipment damage due to phase reversal</li>
              <li>Microcontroller-based technology for accurate detection and correction</li>
              <li>Provides protection against under-voltage, over-voltage, and phase failure</li>
              <li>Compact design suitable for various industrial applications</li>
              <li>Easy installation and maintenance</li>
            </ul>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src="/product_img/automatic-phase-sequence-corrector.jpg"
              alt="Automatic Phase Sequence Corrector"
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
                  <td className="py-2 px-4 border-b">Power Capacity</td>
                  <td className="py-2 px-4 border-b">6 KVA</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Input Phase and Voltage</td>
                  <td className="py-2 px-4 border-b">3 Phase</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Output Voltage</td>
                  <td className="py-2 px-4 border-b">410 V</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Output Frequency</td>
                  <td className="py-2 px-4 border-b">50 Hz</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Technology</td>
                  <td className="py-2 px-4 border-b">Microcontroller-based</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Ambient Temperature</td>
                  <td className="py-2 px-4 border-b">46°C</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Operating Temperature</td>
                  <td className="py-2 px-4 border-b">50°C</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">AC Overcurrent Protection</td>
                  <td className="py-2 px-4 border-b">Yes</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">AC Short Circuit Protection</td>
                  <td className="py-2 px-4 border-b">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Field of Application */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Field of Application
          </h2>
          <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>
          <ul className="list-disc list-inside text-gray-700 p-4">
            <li>Industrial automation systems</li>
            <li>Manufacturing plants</li>
            <li>Commercial buildings</li>
            <li>HVAC systems</li>
            <li>Pumping stations</li>
            <li>Elevator control systems</li>
            <li>Data centers</li>
            <li>Telecommunication facilities</li>
            <li>Power distribution networks</li>
            <li>Renewable energy systems</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AutomaticPhaseSequenceCorrector;
