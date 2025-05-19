import Navbar from './components/Navbar';
import ProductSlideshow from './components/ProductSlideshow';
import CompanyDescription from './components/CompanyDescription';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto px-4 sm:px-6">
      <Navbar />

      {/* Slideshow */}
      <ProductSlideshow />

      {/* Company Description */}
      <CompanyDescription />

      {/* Product Section */}
      <section className="my-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Our Products</h2>
        <div className="w-24 h-1 bg-orange-400 mt-2 rounded-full"></div>
      </section>
      <ProductGrid />
      
      <Footer />
    </div>
  );
}

export default Home;
