import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const OilCooledServoVoltageStabilizer = () => {
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
              Oil Cooled Servo Voltage Stabilizer
            </h2>
            <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>

            <p className="text-gray-700 mb-4 p-2">
              Our Oil Cooled Servo Voltage Stabilizer is engineered to provide precise voltage regulation for heavy-duty industrial applications. Designed with robust components and advanced technology, it ensures optimal performance and longevity even under challenging conditions.
            </p>
            <h2 className="text-xl font-semibold mt-6 mb-2">Key Features:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>High efficiency with minimal waveform distortion</li>
              <li>Oil-cooled system for enhanced thermal management</li>
              <li>Microprocessor-controlled for accurate voltage correction</li>
              <li>Comprehensive protection against voltage fluctuations</li>
              <li>Suitable for continuous 24x7 operations</li>
            </ul>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src="/product_img/oil-cooled-servo-voltage-stabilizer.jpg"
              alt="Oil Cooled Servo Voltage Stabilizer"
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
                  <td className="py-2 px-4 border-b">5 KVA to 3000 KVA</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Input Voltage Range</td>
                  <td className="py-2 px-4 border-b">
                    a) 300V - 460V<br />
                    b) 340V - 480V<br />
                    c) 360V - 460V
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Nominal Output Voltage</td>
                  <td className="py-2 px-4 border-b">400/415V</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Output Voltage Accuracy</td>
                  <td className="py-2 px-4 border-b">±1%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Line Frequency Variation</td>
                  <td className="py-2 px-4 border-b">47Hz - 53Hz</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Efficiency</td>
                  <td className="py-2 px-4 border-b">Better than 98%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Cooling</td>
                  <td className="py-2 px-4 border-b">Natural Oil Cooled</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Response Time</td>
                  <td className="py-2 px-4 border-b">Less than 10 ms</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Waveform Distortion</td>
                  <td className="py-2 px-4 border-b">Nil</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Protection Features</td>
                  <td className="py-2 px-4 border-b">
                    Overload Cut-Off<br />
                    Short Circuit Protection<br />
                    Low/High Voltage Alarm or Cut-Off<br />
                    Phase Missing / Phase Reversal Alarm or Cut-Off
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Display</td>
                  <td className="py-2 px-4 border-b">Digital Multifunction Meter</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Control</td>
                  <td className="py-2 px-4 border-b">Microprocessor Based Technology</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Duty Cycle</td>
                  <td className="py-2 px-4 border-b">Continuous 24x7</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Installation</td>
                  <td className="py-2 px-4 border-b">Indoor / Outdoor</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Standards</td>
                  <td className="py-2 px-4 border-b">IS 9815, ISO 9001-2015, ISO 14001-2015, CE</td>
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
            <li>Heavy Industrial Machinery</li>
            <li>Medical Equipment & Diagnostic Centers</li>
            <li>Textile and Spinning Mills</li>
            <li>Pharmaceutical Industries</li>
            <li>Plastic Molding Units</li>
            <li>Printing & Packaging Industry</li>
            <li>Educational & Research Institutions</li>
            <li>Data Centers and IT Infrastructure</li>
            <li>Hotels and Commercial Buildings</li>
            <li>Telecommunication Equipment</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OilCooledServoVoltageStabilizer;
