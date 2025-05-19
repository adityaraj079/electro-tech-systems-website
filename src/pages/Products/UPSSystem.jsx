import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const UPSSystem = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Product Overview */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-900 mb-2">
              UPS System
            </h2>
            <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>

            <p className="text-gray-700 mb-4">
              Our UPS Systems are designed to provide reliable power backup solutions for various applications. They ensure uninterrupted power supply, protecting your equipment from power outages and voltage fluctuations.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Key Features:</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>High efficiency and reliability</li>
              <li>Advanced protection features</li>
              <li>Compact and modular design</li>
              <li>Suitable for a wide range of applications</li>
              <li>Compliance with international standards</li>
            </ul>
          </div>

          <div className="md:w-1/2">
            <img
              src="/product_img/ups-system.png"
              alt="UPS System"
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

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                <tr className="bg-[#ed6c1d] text-white">
                  <th className="py-2 px-4 border-b">Parameter</th>
                  <th 
                    className="py-2 px-4 border-b text-center" 
                    colSpan={7}  
                  >Specification</th>
                </tr>
              </thead>
              <thead>
                <tr>
                    <th className="px-4 py-3 text-left border">Model</th>
                    <th className="px-4 py-3 font-medium border">EO310D</th>
                    <th className="px-4 py-3 font-medium border">EO315D</th>
                    <th className="px-4 py-3 font-medium border">EO320D</th>
                    <th className="px-4 py-3 font-medium border">EO330D</th>
                    <th className="px-4 py-3 font-medium border">EO340D</th>
                    <th className="px-4 py-3 font-medium border">EO360D</th>
                    <th className="px-4 py-3 font-medium border">EO380D</th>
                </tr>
                </thead>
                <tbody>
                <tr className="">
                    <td className="px-4 py-3 text-left font-medium border">Output Power (KVA)</td>
                    <td className="px-4 py-3 border">10</td>
                    <td className="px-4 py-3 border">15</td>
                    <td className="px-4 py-3 border">20</td>
                    <td className="px-4 py-3 border">30</td>
                    <td className="px-4 py-3 border">40</td>
                    <td className="px-4 py-3 border">60</td>
                    <td className="px-4 py-3 border">80</td>
                </tr>
                <tr>
                    <td className="px-4 py-3 border text-left font-medium">Nominal Active Power (kW)</td>
                    <td className="px-4 py-3 border">8</td>
                    <td className="px-4 py-3 border">12</td>
                    <td className="px-4 py-3 border">16</td>
                    <td className="px-4 py-3 border">24</td>
                    <td className="px-4 py-3 border">32</td>
                    <td className="px-4 py-3 border">48</td>
                    <td className="px-4 py-3 border">64</td>
                </tr>
                <tr><td className="px-4 py-2 border-b font-medium">Power Factor</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>0.8</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Input Phases</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>3PH+N+PE</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Input Voltage</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>380V / 400V / 415V</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Voltage Range (%100 load)</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>(-15)% (+27)% (Ph-N)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Voltage Range (%64 load)</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>(-45)% (+27)% (Ph-N)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Voltage Range (%42 load)</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>(-65)% (+27)% (Ph-N)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Nominal Frequency</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>50Hz or 60Hz</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Frequency Range (Online)</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>±10%</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Input Current THD</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>0/6%</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Input Power Factor</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>0.99</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Output Voltage</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>380V / 400V / 415V</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Static Voltage Regulation</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>&lt;1%</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Voltage THD</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>&lt;3%</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Crest Factor</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>3:1</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Free Running Frequency</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>±0.01%</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Overload Capacity</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>125% for 10 mins, 150% for 1 min</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Efficiency</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>92%</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Bypass Voltage Range</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>220V / 230V (Ph-N) ±10%</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Bypass Frequency Range</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>47Hz - 53Hz (Configurable)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Battery Type</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>Maintenance Free</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Battery Quantity</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>62 (2x31)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Battery Protection</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>Deep Discharge Protection with Auto Cut Off</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Battery Test</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>Standard (Auto & Manual)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Communication Ports</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>RS232 & RS422</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Dry Contact Signals</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>AC Failure, Battery Under Voltage, Bypass Operation, Output Failure</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Others</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7} >EPO, General Interface</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Storage Temp Range</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>-25°C to +55°C (15–40°C recommended)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Operating Temp Range</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>0°C to 40°C (20–25°C recommended)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Relative Humidity</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>0–95% (Non-condensing)</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Max Altitude (No Derating)</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>1000m</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Protection Level</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>IP20</td></tr>

                <tr><td className="px-4 py-2 border font-medium">Dimensions (W×D×H)</td>
                <td className="py-2 px-4 border text-center" colSpan={2}>40×78×107 cm</td>
                <td className="py-2 px-4 border text-center" colSpan={2}>52×90×130 cm</td>
                <td className="py-2 px-4 border text-center" colSpan={3}>67×73×153 cm</td>
                </tr>

                <tr><td className="px-4 py-2 border font-medium">Weight (kg)</td>
                <td className="py-2 px-4 border text-center" colSpan={2}>102 / 110</td>
                <td className="py-2 px-4 border text-center" colSpan={2}>240 / 242</td>
                <td className="py-2 px-4 border text-center" colSpan={3}>260</td>
                </tr>

                <tr><td className="px-4 py-2 border-b font-medium">Certification</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>CE</td></tr>
                <tr><td className="px-4 py-2 border-b font-medium">Options</td><td className="py-2 px-4 border-b text-center" 
                    colSpan={7}>Parallel Kit, SNMP card, Bypass, Monitoring Panel, Isolation Transformer, Battery Cabinet</td></tr>
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
          <ul className="list-disc ml-6 text-gray-700 space-y-1 mt-4">
            <li>Data Centers</li>
            <li>Hospitals</li>
            <li>Industrial Equipment</li>
            <li>Telecom Stations</li>
            <li>Laboratories</li>
            <li>Government Institutions</li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UPSSystem;
