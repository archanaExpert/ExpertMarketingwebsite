
import Image from "next/image";


const MagneticGpsSection = () => {
  return (
    <>
     
      <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/bip.png"
          alt="Magnetic GPS Tracker LG300"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Magnetic GPS Vehicle Tracking — LG300
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Equipped with multiple positioning systems and a high-capacity battery, the LG300 offers long-lasting, remote tracking for vehicles or cargo.
          </p>
        </div>
      </section>

   
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-900"> LG300 Magnetic <span className="text-orange-500">  GPS Tracker</span> <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span></h2>
          <p className="text-lg text-gray-600 mt-2">
            Rugged. Reliable. Ready for Real-World Tracking.
          </p>
        </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-12 px-6 md:px-20">
 
  <div className="flex justify-center">
      <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/gpsm.svg"
              alt="LG300 Magnetic GPS"
              fill
              className="object-contain"
            />
         
    </div>
  </div>

 
 <div className="shadow-2xl p-4 rounded-2xl">
  <h3 className="text-3xl font-bold text-blue-900 text-center mb-4">
    Key <span className="text-orange-500">Features:</span>
    <span className="block w-24 h-1 bg-blue-600 mt-2 rounded-full mx-auto"></span>
  </h3>

  <ul className="list-disc list-inside space-y-2 text-gray-700 text-base leading-relaxed">
    <li>Supports GPS, LBS & AGPS positioning for precise tracking</li>
    <li>Large-capacity rechargeable battery for extended use</li>
    <li>Strong magnetic mount for hidden and easy installation</li>
    <li>Real-time monitoring via SMS, web, or mobile app</li>
    <li>IP65 waterproof and dustproof design for rugged environments</li>
    <li>Vibration and movement alerts for enhanced security</li>
    <li>Remote tracking and shutdown control</li>
    <li>Perfect for tracking vehicles, containers, and assets</li>
  </ul>
</div>

</div>


       
      <div className="text-center mt-16">
  <h3 className="text-3xl font-bold text-blue-900 text-center mb-4">
    Ideal <span className="text-orange-500">For</span>
    <span className="block w-24 h-1 bg-blue-600 mt-2 rounded-full mx-auto"></span>
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-gray-700">
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
      🚗 <strong className="block text-lg mt-2">Fleet Vehicles</strong>
      <p className="text-sm mt-2">
        Monitor movements, stops, and routes in real time.
      </p>
    </div>
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
      🚛 <strong className="block text-lg mt-2">Cargo & Logistics</strong>
      <p className="text-sm mt-2">
        Track shipments securely throughout the journey.
      </p>
    </div>
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
      🏍️ <strong className="block text-lg mt-2">Bikes & Scooters</strong>
      <p className="text-sm mt-2">
        Prevent theft and monitor usage patterns remotely.
      </p>
    </div>
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
      🚢 <strong className="block text-lg mt-2">Shipping Containers</strong>
      <p className="text-sm mt-2">
        Keep tabs on global container movements 24/7.
      </p>
    </div>
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
      🏠 <strong className="block text-lg mt-2">Valuable Assets</strong>
      <p className="text-sm mt-2">
        Secure portable equipment, trailers, and more.
      </p>
    </div>
    <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
      🛠️ <strong className="block text-lg mt-2">Temporary Projects</strong>
      <p className="text-sm mt-2">
        Great for tracking assets in short-term field operations.
      </p>
    </div>
  </div>
</div>


   
        <section className="bg-gradient-to-br from-white to-orange-50 py-16 px-6 md:px-20 mt-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="text-orange-500">LG300 Magnetic Tracker?</span>
               <span className="block w-24 h-1 bg-blue-600 mt-2 rounded-full mx-auto"></span>
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              Designed for durability and extended performance, LG300 keeps you connected with your mobile assets at all times.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">🔋 Long Battery Life</h4>
                <p className="text-gray-600">Run for days or weeks without recharging, depending on usage.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">📍 Multi-Mode Positioning</h4>
                <p className="text-gray-600">Uses GPS, AGPS, and LBS for accurate tracking in all conditions.</p>
              </div>

           
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">📡 Remote Access</h4>
                <p className="text-gray-600">Track from your phone, SMS commands, or desktop dashboard.</p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">🧲 Magnetic Mount</h4>
                <p className="text-gray-600">Install in seconds without wires or tools — fully portable.</p>
              </div>
            </div>
          </div>
        </section>

      
    </section>
    </>
  );
};

export default MagneticGpsSection;
