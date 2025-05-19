import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AutomaticVoltageStabilizer = () => {
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
              Automatic Voltage Stabilizer
            </h2>
            <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>

            <p className="text-gray-700 mb-4">
              Our Automatic Voltage Stabilizers are designed to provide consistent voltage output to protect sensitive electrical and electronic equipment from voltage fluctuations, surges, and spikes. Suitable for both industrial and commercial applications, these stabilizers enhance equipment life and performance.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Key Features:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Microprocessor-based voltage control</li>
              <li>Wide input voltage range for stable output</li>
              <li>Fast response time for voltage correction</li>
              <li>Overload and short circuit protection</li>
              <li>Compact and rugged design</li>
              <li>Digital display for input/output voltage monitoring</li>
              <li>Suitable for various industries and applications</li>
            </ul>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src="/product_img/automatic-voltage-stabilizer.png"
              alt="Automatic Voltage Stabilizer"
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
                  <td className="py-2 px-4 border-b">Capacity</td>
                  <td className="py-2 px-4 border-b">1 KVA to 300 KVA</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Input Voltage Range</td>
                  <td className="py-2 px-4 border-b">130V to 270V (for 230V output)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Output Voltage</td>
                  <td className="py-2 px-4 border-b">230V ± 1%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Frequency</td>
                  <td className="py-2 px-4 border-b">50Hz ± 3%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Efficiency</td>
                  <td className="py-2 px-4 border-b">98% minimum</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Response Time</td>
                  <td className="py-2 px-4 border-b">Less than 20 milliseconds</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Protection</td>
                  <td className="py-2 px-4 border-b">Overload, short circuit, surge, and spike protection</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Cooling</td>
                  <td className="py-2 px-4 border-b">Forced air cooling / Natural convection</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Mounting</td>
                  <td className="py-2 px-4 border-b">Floor / Wall Mounted</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Display</td>
                  <td className="py-2 px-4 border-b">Digital LED / LCD for input & output voltage</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Field of Application */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Field of Application</h2>
            <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>
            <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-1">
              <li>Industrial Automation Equipment</li>
              <li>Medical and Laboratory Equipment</li>
              <li>Telecommunication Systems</li>
              <li>Computer and IT Equipment</li>
              <li>Office Equipment</li>
              <li>Home Appliances</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AutomaticVoltageStabilizer;
