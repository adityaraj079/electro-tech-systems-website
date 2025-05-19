import React from 'react';
import { Link } from 'react-router-dom';
import { Boxes } from 'lucide-react';

// Updated product data (only 5 products here)
const products = [
  {
    id: 'air-cooled-servo-voltage-stabilizer',
    name: 'Air cooled Servo voltage stabilizer',
    description: 'Efficient voltage regulation for high-performance equipment.',
    image: 'product_img/air-cooled-servo-voltage-stabilizer.jpg',
  },
  {
    id: 'automatic-phase-sequence-corrector',
    name: 'Automatic Phase Sequence Corrector',
    description: 'Ensures correct phase sequence for system stability.',
    image: 'product_img/automatic-phase-sequence-corrector.jpg',
  },
  {
    id: 'oil-cooled-servo-voltage-stabilizer',
    name: 'Oil Cooled Servo Voltage Stabilizer',
    description: 'Provides superior cooling for reliable voltage regulation.',
    image: 'product_img/oil-cooled-servo-voltage-stabilizer.jpg',
  },
  {
    id: 'isolation-transformer',
    name: 'Isolation Transformer',
    description: 'Protects sensitive equipment from electrical faults.',
    image: 'product_img/isolation-transformer.jpg',
  },
  {
    id: 'lt-panel',
    name: 'LT Panel',
    description: 'Low Tension panels for safe and efficient power distribution.',
    image: 'product_img/lt-panel.jpg',
  },
];

const ProductGrid: React.FC = () => {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Displaying 5 Products */}
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#FFF5EE]"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </Link>
        ))}

        {/* 6th Box - Call to Action (Link to Products Page) */}
        <div className="bg-[#f9d2b6] text-[#ed6c1d] flex flex-col justify-center items-center p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
          <Boxes size={48} className="mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-center">Want More?</h3>
          <Link
            to="/products"
            className="underline font-medium hover:text-[#c7540f] transition-colors"
          >
            View full products catalog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
