import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Main Heading */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold border-b-4 border-[#ed6c1d] inline-block pb-2 text-gray-800">
            About Us
          </h1>
        </div>

        {/* Company Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-bold text-[#ed6c1d]">Electro-tech Systems</span>, 
            we have been delivering trusted electrical solutions since 1985. 
            With decades of industry experience, we specialize in providing high-quality 
            electrical appliances such as Servo Voltage Stabilizers, Isolation Transformers, 
            LT Panels, UPS Systems, and more.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold border-b-2 border-[#ed6c1d] inline-block pb-1 text-gray-800 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to empower industries, institutions, and households
            with reliable, efficient, and safe electrical solutions. 
            We strive to maintain the highest standards of quality and 
            customer satisfaction through innovation and dedication.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold border-b-2 border-[#ed6c1d] inline-block pb-1 text-gray-800 mb-4">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Commitment to Quality</li>
              <li>Customer-Centric Approach</li>
              <li>Continuous Innovation</li>
              <li>Integrity and Transparency</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 flex items-center"
        >
          <div className="mr-8">
            <h2 className="text-2xl font-bold border-b-2 border-[#ed6c1d] inline-block pb-1 text-gray-800 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our vision is to lead the way in providing innovative electrical solutions
              that help businesses and individuals achieve greater efficiency and sustainability.
              We aim to continue being a trusted partner in delivering high-quality products
              and services that exceed our customers' expectations.
            </p>
          </div>
          <img
            src="/vision.png"
            alt="Our Vision"
            className="w-1/4 rounded-lg shadow-lg"  // Reduced the size
          />
        </motion.div>


        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold border-b-2 border-[#ed6c1d] inline-block pb-1 text-gray-800 mb-4">
            Certified Excellence
          </h2>
          <p className="text-gray-700 leading-relaxed">
            As an ISO Certified company and an authorized dealer for renowned brands, 
            we uphold global quality standards in every product we offer. 
            Our certifications are a testament to our unwavering focus on excellence.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
