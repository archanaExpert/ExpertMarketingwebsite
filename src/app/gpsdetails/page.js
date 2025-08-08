
"use client";
import Image from "next/image";

export default function GPSDetails() {
  return (
  <>

      <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/gpst.jpg"
          alt="GPS Vehicle Tracker"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Real-Time GPS Vehicle Tracking 
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Monitor your fleet, vehicles, and assets 24/7 with precision tracking, smart alerts, and driver insights.
          </p>
        </div>
      </section>

   
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">Advanced<span className="text-orange-500"> GPS Vehicle Trackers </span> <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span></h2>
          <p className="text-lg text-gray-600 mt-2">
            Designed for Fleets, Personal Vehicles, Logistics & Enterprise Needs
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/gpsa.svg"
              alt="GPS Tracker"
              fill
              className="object-contain"
            />
          </div>

          <div className="px-4 py-6 bg-white rounded-lg shadow-md">
  <h3 className="text-2xl font-semibold text-blue-900 mb-4 text-center">
    Key <span className="text-orange-500">Features</span>
    <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
  </h3>
  <ul className="list-disc list-inside space-y-2 text-gray-700">
    <li>Live Real-Time Tracking & Route History</li>
    <li>Geo-Fencing with Entry/Exit Alerts</li>
    <li>Driver Behavior Monitoring (Overspeeding, Harsh Braking)</li>
    <li>Ignition ON/OFF Alerts & Remote Engine Cut-off</li>
    <li>Mobile & Web Access Dashboard</li>
    <li>Smart Reports & Analytics</li>
    <li>Multi-Vehicle Dashboard & Admin Panel</li>
    <li>Battery & Wired Tracker Options</li>
  </ul>
</div>

        </div>

       
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-blue-900 mb-4 text-center">
            Perfect <span className="text-orange-500">For</span> <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-gray-700">
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🚚 <strong className="block text-lg mt-2">Fleet Owners</strong>
              <p className="text-sm mt-2">
                Manage, monitor, and optimize fleet performance from one dashboard.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🚗 <strong className="block text-lg mt-2">Personal Vehicles</strong>
              <p className="text-sm mt-2">
                Keep your car or bike safe and monitor its real-time location anytime.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏭 <strong className="block text-lg mt-2">Logistics & Delivery</strong>
              <p className="text-sm mt-2">
                Ensure timely deliveries with route optimization and smart alerts.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏢 <strong className="block text-lg mt-2">Enterprises</strong>
              <p className="text-sm mt-2">
                Improve operational control with centralized fleet tracking.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🛵 <strong className="block text-lg mt-2">Rental & Leasing</strong>
              <p className="text-sm mt-2">
                Track usage, recover stolen vehicles, and control unauthorized trips.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🧱 <strong className="block text-lg mt-2">Construction & Mining</strong>
              <p className="text-sm mt-2">
                Monitor machinery and reduce misuse with location & engine reports.
              </p>
            </div>
          </div>
        </div>

        
        <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 md:px-20 mt-16">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="text-orange-500">Our GPS Tracker?</span> <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              Empower your operations with reliable, scalable, and smart tracking — from personal to enterprise-level use.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">📍 Real-Time Accuracy</h4>
                <p className="text-gray-600">
                  Get precise location data with minimal delay, powered by 4G/GPS.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">🔒 Secure & Tamper-Proof</h4>
                <p className="text-gray-600">
                  Built with anti-theft, tamper alerts, and password-protected access.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">📊 Powerful Dashboard</h4>
                <p className="text-gray-600">
                  Visualize trips, analytics, and reports from an intuitive interface.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">⚙️ Easy Integration</h4>
                <p className="text-gray-600">
                  Integrates with APIs, ERPs, transport systems & more.
                </p>
              </div>
            </div>
          </div>
        </section>

       
      </section>
      </>
  );
}
