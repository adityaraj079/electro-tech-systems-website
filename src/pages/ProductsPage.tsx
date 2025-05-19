import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';  // Import Navbar
import Footer from '../components/Footer';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Navbar */}
      <Navbar />

      <section className="my-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Products</h2>
        <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>
      </section>

      {/* Products Grid */}
      <section className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Product 1 */}
          <Link
            to="/products/air-cooled-servo-voltage-stabilizer"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF5EE]"
          >
            <img
              src="product_img/air-cooled-servo-voltage-stabilizer.jpg"
              alt="Air Cooled Servo Voltage Stabilizer"
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Air cooled Servo Voltage Stabilizer</h3>
            <p className="text-gray-600">Efficient voltage regulation for high-performance equipment.</p>
          </Link>

          {/* Product 2 */}
          <Link
            to="/products/automatic-phase-sequence-corrector"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF5EE]"
          >
            <img
              src="product_img/automatic-phase-sequence-corrector.jpg"
              alt="Automatic Phase Sequence Corrector"
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Automatic Phase Sequence Corrector</h3>
            <p className="text-gray-600">Ensures correct phase sequence for system stability.</p>
          </Link>

          {/* Product 3 */}
          <Link
            to="/products/oil-cooled-servo-voltage-stabilizer"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF5EE]"
          >
            <img
              src="product_img/oil-cooled-servo-voltage-stabilizer.jpg"
              alt="Oil Cooled Servo Voltage Stabilizer"
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Oil Cooled Servo Voltage Stabilizer</h3>
            <p className="text-gray-600">Provides superior cooling for reliable voltage regulation.</p>
          </Link>

          {/* Product 4 */}
          <Link
            to="/products/isolation-transformer"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF5EE]"
          >
            <img
              src="product_img/isolation-transformer.jpg"
              alt="Isolation Transformer"
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Isolation Transformer</h3>
            <p className="text-gray-600">Protects sensitive equipment from electrical faults.</p>
          </Link>

          {/* Product 5 */}
          <Link
            to="/products/lt-panel"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF5EE]"
          >
            <img
              src="product_img/lt-panel.jpg"
              alt="LT Panel"
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">LT Panel</h3>
            <p className="text-gray-600">Low Tension panels for safe and efficient power distribution.</p>
          </Link>

          {/* Product 6 */}
          <Link
            to="/products/ups-system"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF5EE]"
          >
            <img
              src="product_img/ups-system.png"
              alt="UPS System"
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">UPS System</h3>
            <p className="text-gray-600">Uninterrupted power supply for critical equipment.</p>
          </Link>

          {/* Product 7 */}
          <Link
            to="/products/automatic-voltage-stabilizer"
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF5EE]"
          >
            <img
              src="product_img/automatic-voltage-stabilizer.png"
              alt="Automatic Voltage Stabilizer"
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Automatic Voltage Stabilizer</h3>
            <p className="text-gray-600">Ensures stable power supply in varying conditions.</p>
          </Link>
          
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductsPage;
