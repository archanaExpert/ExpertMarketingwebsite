"use client";
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

export default function ContactDetails() {
  const [copied, setCopied] = useState({
    phone: false,
    email: false,
    address1: false,
    address2: false,
  });

  const [activeLocation, setActiveLocation] = useState(0);

  const locations = [
    {
      city: "Bhubaneswar",
      address: "78, Gautam Nagar, Bhubaneswar, Odisha 751014",
    },
    {
      city: "Raipur",
      address: "C,25, RAMKUND VIHAR, Samta Colony, Raipur, Chhattisgarh 492001",
    },
  ];

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied((prev) => ({ ...prev, [field]: true }));
      setTimeout(() => {
        setCopied((prev) => ({ ...prev, [field]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6 overflow-hidden relative border border-gray-100">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-20 -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-100 rounded-full filter blur-3xl opacity-20 -ml-20 -mb-20"></div>

      <h2 className="text-3xl font-bold text-gray-800 mb-6 relative z-10">
        Get in Touch
        <div className="w-16 h-1 bg-blue-500 mt-2 rounded-full"></div>
      </h2>

      <div className="space-y-5 relative z-10">
        <div
          className="flex justify-between items-center bg-blue-50 p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={() => copyToClipboard("06268916111", "phone")}
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaPhone className="text-blue-600 text-lg" />
            </div>
            <span className="font-medium text-gray-700">06268916111</span>
          </div>
          {copied.phone ? (
            <FaCheck className="text-green-500" />
          ) : (
            <FaCopy className="text-gray-400 hover:text-blue-600" />
          )}
        </div>

        <div
          className="flex justify-between items-center bg-blue-50 p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={() =>
            copyToClipboard("contact@expertsolutions.com", "email")
          }
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaEnvelope className="text-blue-600 text-lg" />
            </div>
            <span className="font-medium text-gray-700">
              contact@expertsolutions.com
            </span>
          </div>
          {copied.email ? (
            <FaCheck className="text-green-500" />
          ) : (
            <FaCopy className="text-gray-400 hover:text-blue-600" />
          )}
        </div>

        <div className="bg-gray-100 p-1 rounded-lg inline-flex mb-2">
          {locations.map((loc, index) => (
            <button
              key={index}
              onClick={() => setActiveLocation(index)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeLocation === index
                  ? "bg-white shadow-sm text-blue-600"
                  : "text-gray-600 hover:text-gray-800"
              }`}
            >
              {loc.city}
            </button>
          ))}
        </div>

        <div
          className="flex justify-between items-start bg-blue-50 p-4 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={() =>
            copyToClipboard(
              locations[activeLocation].address,
              `address${activeLocation + 1}`
            )
          }
        >
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-3 rounded-full">
              <FaMapMarkerAlt className="text-blue-600 text-lg mt-0.5" />
            </div>
            <div>
              <p className="font-medium text-gray-700">
                {locations[activeLocation].city} Office
              </p>
              <p className="text-gray-600 text-sm mt-1">
                {locations[activeLocation].address}
              </p>
            </div>
          </div>
          {copied[`address${activeLocation + 1}`] ? (
            <FaCheck className="text-green-500 mt-3" />
          ) : (
            <FaCopy className="text-gray-400 hover:text-blue-600 mt-3" />
          )}
        </div>
      </div>
    </div>
  );
}
