import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AirCooledServoVoltageStabilizer = () => {
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
              Air Cooled Servo Voltage Stabilizer
            </h2>
            <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>

            <p className="text-gray-700 mb-4 p-2">
              The Air Cooled Servo Voltage Stabilizer offers a reliable and energy-efficient solution for maintaining voltage stability in varying power conditions. It is best suited for environments with clean ambient air and lighter industrial or commercial loads.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Key Features:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Efficient voltage correction with minimal distortion</li>
              <li>Air-cooled design for low maintenance</li>
              <li>Microprocessor-controlled system</li>
              <li>Enhanced protection features for sensitive equipment</li>
              <li>Ideal for indoor installations with low thermal stress</li>
            </ul>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src="/product_img/air-cooled-servo-voltage-stabilizer.jpg"
              alt="Air Cooled Servo Voltage Stabilizer"
              className="w-full max-w-md rounded shadow mx-auto"
            />
          </div>
        </div>

        {/* Specifications Table */}
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
                  <td className="py-2 px-4 border-b">Rating</td>
                  <td className="py-2 px-4 border-b">5 KVA to 100 KVA</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Input Voltage Range</td>
                  <td className="py-2 px-4 border-b">
                    a) 170V - 270V<br />
                    b) 140V - 280V<br />
                    c) 90V - 300V
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Nominal Output Voltage</td>
                  <td className="py-2 px-4 border-b">230V ± 1%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Line Frequency</td>
                  <td className="py-2 px-4 border-b">47Hz - 53Hz</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Cooling</td>
                  <td className="py-2 px-4 border-b">Air Cooled</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Efficiency</td>
                  <td className="py-2 px-4 border-b">Better than 95%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Waveform Distortion</td>
                  <td className="py-2 px-4 border-b">Nil</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Response Time</td>
                  <td className="py-2 px-4 border-b">Less than 10 ms</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Display</td>
                  <td className="py-2 px-4 border-b">Digital Display</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Control</td>
                  <td className="py-2 px-4 border-b">Microcontroller Based</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Protection Features</td>
                  <td className="py-2 px-4 border-b">
                    High/Low Voltage Cut-Off<br />
                    Overload Protection<br />
                    Short Circuit Protection<br />
                    Surge Suppression
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Duty Cycle</td>
                  <td className="py-2 px-4 border-b">Continuous</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Installation</td>
                  <td className="py-2 px-4 border-b">Indoor</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Compliance</td>
                  <td className="py-2 px-4 border-b">ISO 9001-2015, CE</td>
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
            <li>Hospitals and Medical Clinics</li>
            <li>Schools and Educational Institutions</li>
            <li>Retail Shops and Showrooms</li>
            <li>Office Spaces and Commercial Complexes</li>
            <li>Residential Buildings with Voltage Fluctuation</li>
            <li>Laboratories and Testing Equipment</li>
            <li>Small-Scale Industries</li>
            <li>ATMs and Banking Equipment</li>
            <li>Telecom Towers and IT Rooms</li>
            <li>Lighting Systems and Studio Equipment</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AirCooledServoVoltageStabilizer;
