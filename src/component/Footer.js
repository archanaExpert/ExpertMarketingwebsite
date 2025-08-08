import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
} from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
    
<section className="py-16 px-6 md:px-20 bg-blue-800 text-white text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Ready to Secure & Track Your Assets?
  </h2>
  <p className="mb-6 max-w-2xl mx-auto ">
    Schedule a free demo or contact us to learn how GPS tracking can improve your operations. 
    Talk to our team and get your CP PLUS packages & P2M2 Solutions Surveillance set up.
  </p>

  <Link href="/contact" >
    <button
      className="flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full 
                 hover:bg-orange-600 transition duration-300 shadow-md mx-auto"
      aria-label="Book a Free Consultation"
    >
      <FaPhoneAlt className="text-lg" />
      Book a Free Consultation
    </button>
  </Link>
</section>

      <footer className="bg-blue-900 text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 text-sm">
        
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-gray-300 leading-relaxed text-justify">
              We are{" "}
              <span className="text-white font-semibold">EXPERT SOLUTIONS</span>{" "}
              — pioneers in providing state-of-the-art security and monitoring
              systems for businesses, fleets, and homes. We specialize in IP
              CCTV cameras, advanced GPS tracking, and fuel monitoring solutions
              to ensure safety, efficiency, and peace of mind.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

         
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {[
                ["Home", "/home"],
                ["About Us", "/about"],
                ["GPS Tracking", "/gpstracking"],
                ["IP Cameras", "/ipcamera"],
                ["HD Cameras", "/hdcamera"],
                ["P2MP Solution", "/p2m2"],
                ["Contact Us", "/contact"],
              ].map(([text, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-orange-400 transition duration-200"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-bold mb-4">Address</h4>

            <div className="mb-4 text-gray-300 space-y-1">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>
                  <span className="text-white font-medium">Head Office:</span>
                  <br />
                  Expert Solutions,
                  <br />
                  Raipur, Chhattisgarh
                  <br />
                  India - 492001
                </span>
              </p>
            </div>

            <div className="mb-4 text-gray-300 space-y-1">
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>
                  <span className="text-white font-medium">Branch Office:</span>
                  <br />
                  78, Gautam Nagar,
                  <br />
                  Bhubaneswar, Odisha - 751014
                </span>
              </p>
            </div>

            <div className="text-gray-300 space-y-2">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                7509617777
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                expgpsrpr@gmail.com
              </p>
            </div>
          </div>

        
          <div className="w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7475489357203!2d81.62139289999999!3d21.2418571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28ddea63ba0585%3A0xc79accfb8d22592d!2sEXPERT%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1753083698581!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      
        <div className="mt-10 border-t border-blue-800 pt-6 text-center text-xs text-gray-400">
          Copyright © 2025{" "}
          <span className="text-white font-semibold">EXPERT SOLUTIONS</span>.
          All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
