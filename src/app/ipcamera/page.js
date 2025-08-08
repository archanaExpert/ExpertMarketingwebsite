// components/IPCameraSection.tsx
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const IPCameraSection = () => {
  return (
    <>
      
      <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/bip.png" 
          alt="CP PLUS IP Camera"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Smart & Secure IP Surveillance
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Experience unmatched clarity, real-time remote monitoring, and AI-powered alerts with CP PLUS IP Cameras.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">CP PLUS<span className="text-orange-500"> IP Cameras</span> <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span></h2>
          <p className="text-lg text-gray-600 mt-2">
            Advanced Digital Security for Homes, Offices & Public Spaces
          </p>
        </div>

   
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/ipc.svg" 
              alt="CP Plus IP Camera"
              fill
              className="object-contain"
            />
          </div>

         <div className="text-center px-4 md:px-8 lg:px-16 py-10 bg-white rounded-2xl shadow-md">
  <h3 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-6">
    Key <span className="text-orange-500">Features:</span>
    <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
  </h3>
  <ul className="list-disc list-inside space-y-3 text-gray-700 text-left max-w-xl mx-auto">
    <li>Up to 4K Ultra HD Resolution</li>
    <li>AI-Powered Motion Detection & Human Detection</li>
    <li>Two-Way Audio Support</li>
    <li>IR Night Vision up to 50m</li>
    <li>Wi-Fi & PoE Connectivity</li>
    <li>Remote Monitoring via CP PLUS App</li>
    <li>Cloud & SD Card Storage Options</li>
    <li>ONVIF Compliant for System Integration</li>
  </ul>
</div>

        </div>

      
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-blue-900 mb-4 text-center">
            Perfect <span className="text-orange-500">For</span> <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-gray-700">
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏡 <strong className="block text-lg mt-2">Smart Homes</strong>
              <p className="text-sm mt-2">
                Get alerts, talk through cameras, and monitor from anywhere.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏢 <strong className="block text-lg mt-2">Corporate Offices</strong>
              <p className="text-sm mt-2">
                Enhance safety and monitor employee & visitor movement.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏬 <strong className="block text-lg mt-2">Retail Stores</strong>
              <p className="text-sm mt-2">
                Prevent theft and observe customer behavior in real time.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏫 <strong className="block text-lg mt-2">Schools & Colleges</strong>
              <p className="text-sm mt-2">
                Monitor classrooms, gates, and common areas intelligently.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏥 <strong className="block text-lg mt-2">Hospitals</strong>
              <p className="text-sm mt-2">
                Ensure safety in wards, entrances, and medicine storage.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🛣️ <strong className="block text-lg mt-2">Public Surveillance</strong>
              <p className="text-sm mt-2">
                Cover highways, streets, parking, and public places 24/7.
              </p>
            </div>
          </div>
        </div>
          <section className="bg-gradient-to-br from-white to-orange-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Why Choose <span className="text-orange-500">IP Camera?</span> <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
        </h2>
        <p className="text-gray-700 text-lg mb-10">
          IP cameras offer cutting-edge surveillance with high clarity, remote access, and smart features — ideal for growing needs.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">🌙 Night Vision Clarity</h4>
            <p className="text-gray-600">Capture ultra-clear footage even in low-light or nighttime conditions.</p>
          </div>

    
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">📊 Smart Analytics</h4>
            <p className="text-gray-600">Get real-time alerts, motion detection, and intelligent video analysis.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">📱 Remote Access</h4>
            <p className="text-gray-600">View live or recorded footage from anywhere via cloud or mobile app.</p>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
            <h4 className="text-xl font-semibold text-blue-800 mb-2">🏢 Scalable & Secure</h4>
            <p className="text-gray-600">Ideal for businesses, warehouses, and large spaces with growing demands.</p>
          </div>
        </div>
      </div>
    </section>

       
      </section>
    </>
  );
};

export default IPCameraSection;
