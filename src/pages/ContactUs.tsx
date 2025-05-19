import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Home } from 'lucide-react';

const ContactUs: React.FC = () => {
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);
      // Simple email regex validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    };
  
    return (
      <div className="min-h-screen bg-gray-50 max-w-6xl mx-auto px-4 sm:px-6">
        <Navbar />
        {/* Heading and other sections remain same */}
  
        <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-12">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/xeogvnkw"
            method="POST"
            className="md:col-span-2 space-y-6 bg-white p-6 shadow-lg rounded-lg"
          >
            <h2 className="text-2xl font-semibold text-accent mb-4">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="Name"
                placeholder="Name"
                required
                className="input-field focus:ring-accent focus:border-accent"
              />
              
              <input
                type="text"
                name="City"
                placeholder="City"
                className="input-field focus:ring-accent focus:border-accent"
              />

                <div className="flex flex-col">
                <input
                  type="email"
                  name="Email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Email"
                  required
                  className="input-field focus:ring-accent focus:border-accent"
                />
                {!isEmailValid && email && (
                  <p className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>
                )}
              </div>
              <input
                type="tel"
                name="Mobile Number"
                placeholder="Mobile Number"
                required
                className="input-field focus:ring-accent focus:border-accent"
              />
            </div>
            <textarea
              placeholder="Your message..."
              name="Message"
              rows={5}
              className="input-field w-full focus:ring-accent focus:border-accent"
            />
            <button
              type="submit"
              disabled={!isEmailValid}
              className={`bg-accent text-white font-semibold py-2 px-6 rounded-lg transition ${
                !isEmailValid ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'
              }`}
            >
              Submit
            </button>
          </form>

        {/* Contact Info Sidebar */}
        <div className="space-y-8">
          <h2 className="text-xl font-bold text-accent">Quick Contact</h2>
          <p className="text-gray-600">
            If you have any query or requirement, feel free to contact our customer executive.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-4">
              <div className="border-2 border-dashed border-accent p-2 rounded">
                <Home className="text-accent" />
              </div>
              <div>
                <p>
                  <strong>Head Office</strong> - CB-288, Naraina Ring Road, Mahatma Gandhi Road, Naraina,
                  <p>New Delhi - 110028</p>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="border-2 border-dashed border-accent p-2 rounded">
                <Phone className="text-accent" />
              </div>
              <div>
                <p><strong>Call Us On</strong></p>
                <p>
                  <a href="tel:+919810293136" className="text-blue-600 hover:underline hover:text-[#c95712] transition-colors">
                    +91-9810293136
                  </a>
                </p>
                <p>
                  <a href="tel:+919599261939" className="text-blue-600 hover:underline hover:text-[#c95712] transition-colors">
                    +91-9599261939
                  </a>
                </p>
              </div>
            </div>


            <div className="flex items-center gap-4">
              <div className="border-2 border-dashed border-accent p-2 rounded">
                <Mail className="text-accent" />
              </div>
              <div>
                <p><strong>Email</strong></p>
                <p>
                  <a
                    href="mailto:saleselectrotechsystem@gmail.com"
                    className="text-[#ed6c1d] hover:text-[#c95712] transition-colors"
                  >
                    saleselectrotechsystem@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Google Map Embed */}
          <div className="mt-6">
            <iframe
              title="Electro Tech Systems Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0675695486194!2d77.1341446!3d28.6235681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0331066a8a85%3A0x54464de3a1767fd7!2sElectro%20Tech%20Systems!5e0!3m2!1sen!2sin!4v1715930912345!5m2!1sen!2sin"
              width="100%"
              height="200"
              className="rounded-lg border"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>


        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
