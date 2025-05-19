import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage'; // Correct the path if necessary
import Home from './Home'; // Ensure the Home component path is correct
import ScrollToTop from './components/ScrollToTop';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import AirCooledServoVoltageStabilizer from './pages/Products/AirCooledServoVoltageStabilizer';
import OilCooledServoVoltageStabilizer from './pages/Products/OilCooledServoVoltageStabilizer';
import AutomaticPhaseSequenceCorrector from './pages/Products/AutomaticPhaseSequenceCorrector';
import IsolationTransformer from './pages/Products/IsolationTransformer';
import LTPanel from './pages/Products/LTPanel';
import UPSSystem from './pages/Products/UPSSystem';
import AutomaticVoltageStabilizer from './pages/Products/AutomaticVoltageStabilizer';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this here */}
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<Home />} />
        
        {/* Products page */}
        <Route path="/products" element={<ProductsPage />} />

        <Route path="/about-us" element={<AboutUs />} />

        <Route path="/contact-us" element={<ContactUs />} />

        <Route
          path="/products/air-cooled-servo-voltage-stabilizer"
          element={<AirCooledServoVoltageStabilizer />}
        />

        <Route
          path="/products/oil-cooled-servo-voltage-stabilizer"
          element={<OilCooledServoVoltageStabilizer />}
        />

        <Route
          path="/products/automatic-phase-sequence-corrector"
          element={<AutomaticPhaseSequenceCorrector />}
        />

        <Route
          path="/products/isolation-transformer"
          element={<IsolationTransformer />}
        />

        <Route
          path="/products/lt-panel"
          element={<LTPanel />}
        />

        <Route
          path="/products/ups-system"
          element={<UPSSystem />}
        />

        <Route
          path="/products/automatic-voltage-stabilizer"
          element={<AutomaticVoltageStabilizer />}
        />

      </Routes>
    </Router>
  );
}

export default App;
