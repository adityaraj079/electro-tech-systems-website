import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const IsolationTransformer = () => {
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
              Isolation Transformer
            </h2>
            <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>

            <p className="text-gray-700 mb-4">
              Our Isolation Transformers are specially designed to protect sensitive equipment from voltage spikes, noise, and ground loops. They provide clean and noise-free power by isolating the equipment from the power source. These transformers are ideal for medical, industrial, and communication applications.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Key Features:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>Galvanic isolation between input and output</li>
              <li>Reduces electrical noise and surges</li>
              <li>Improves safety and protects critical equipment</li>
              <li>Customized input/output voltage available</li>
              <li>High-quality CRGO/EI/Strip wound core</li>
              <li>Low magnetizing current and low core losses</li>
              <li>Compact and durable design</li>
            </ul>
          </div>

          {/* Product Image */}
          <div className="md:w-1/2">
            <img
              src="/product_img/isolation-transformer.jpg"
              alt="Isolation Transformer"
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
                  <td className="py-2 px-4 border-b">1 KVA to 500 KVA</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Input Voltage</td>
                  <td className="py-2 px-4 border-b">230V / 415V / Customized</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Output Voltage</td>
                  <td className="py-2 px-4 border-b">230V / 415V / Customized</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Voltage Ratio</td>
                  <td className="py-2 px-4 border-b">1:1 / Custom Ratios Available</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Frequency</td>
                  <td className="py-2 px-4 border-b">50Hz / 60Hz</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Insulation Class</td>
                  <td className="py-2 px-4 border-b">Class A / B / F / H</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Impedance</td>
                  <td className="py-2 px-4 border-b">3% - 6%</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Coupling Capacitance</td>
                  <td className="py-2 px-4 border-b">Less than 0.005 pF</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Core</td>
                  <td className="py-2 px-4 border-b">CRGO / Strip Wound / EI Core</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Winding</td>
                  <td className="py-2 px-4 border-b">Copper / Aluminum</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b">Mounting</td>
                  <td className="py-2 px-4 border-b">Floor / Panel Mounted</td>
                </tr>
              </tbody>
            </table>
          </div>

        {/* Field of Application */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Field of Application</h2>
          <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>
          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-1">
            <li>Medical Equipment</li>
            <li>Industrial Automation Systems</li>
            <li>Telecom & Communication Systems</li>
            <li>UPS and Power Conditioning Units</li>
            <li>Data Centers</li>
            <li>Control Panels</li>
          </ul>
        </div>
        
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default IsolationTransformer;
