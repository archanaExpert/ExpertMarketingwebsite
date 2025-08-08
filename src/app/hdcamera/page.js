
import Image from "next/image";


const HDCameraSection = () => {
  return (
    <>
      <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/hdc.svg"
          alt="CP PLUS HD Camera"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Crystal Clear HD Surveillance
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Monitor your property 24/7 with CP PLUS HD Cameras—offering
            high-definition clarity, night vision, and reliable security.
          </p>
        </div>
      </section>
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 ">
            CP PLUS <span className="text-orange-500">HD Camera</span>{" "}
            <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Advanced Surveillance with Crystal-Clear Imaging
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              src="/cp.jpg"
              alt="CP Plus HD Camera"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="text-center px-4 md:px-8 lg:px-16 py-10 bg-white rounded-2xl shadow-md">
            <h3 className="text-4xl font-semibold text-blue-900 mb-6">
              Top <span className="text-orange-500">Features</span>:
              <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-left max-w-xl mx-auto">
              <li>HD Resolution: 720p / 1080p Clarity</li>
              <li>IR Night Vision up to 30m</li>
              <li>Weatherproof Body (IP66 Rated)</li>
              <li>Motion Detection Alerts</li>
              <li>Real-time Live View via Mobile App</li>
              <li>Wide Angle Lens (2.8mm - 3.6mm)</li>
              <li>Plug & Play with DVR Support</li>
              <li>Durable Metal Casing</li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-blue-900 mb-4 text-center">
            Ideal <span className="text-orange-500">For</span>{" "}
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-gray-700">
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏠 <strong className="block text-lg mt-2">Home Security</strong>
              <p className="text-sm mt-2">
                Monitor your entrance, parking, and backyard 24/7.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏢 <strong className="block text-lg mt-2">Office & Shops</strong>
              <p className="text-sm mt-2">
                Track customers and employees for safety and accountability.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏫{" "}
              <strong className="block text-lg mt-2">
                Schools & Institutions
              </strong>
              <p className="text-sm mt-2">
                Ensure student safety in corridors, gates & common areas.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏭{" "}
              <strong className="block text-lg mt-2">
                Factories & Warehouses
              </strong>
              <p className="text-sm mt-2">
                Secure stockrooms, loading bays and critical production zones.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏬{" "}
              <strong className="block text-lg mt-2">
                Malls & Parking Areas
              </strong>
              <p className="text-sm mt-2">
                Prevent theft and monitor large premises effectively.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🛣️{" "}
              <strong className="block text-lg mt-2">
                Street & Society Surveillance
              </strong>
              <p className="text-sm mt-2">
                Monitor lanes, entry gates, and public areas in real-time.
              </p>
            </div>
          </div>
        </div>
        <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 md:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="text-orange-500">HD Camera?</span>{" "}
              <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              HD cameras are a smart and budget-friendly choice for basic
              surveillance needs without compromising on clarity.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
             
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  💰 Affordable
                </h4>
                <p className="text-gray-600">
                  Cost-effective option for small homes and shops without
                  over-investing.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  🔌 Coaxial Compatibility
                </h4>
                <p className="text-gray-600">
                  Works with your existing coaxial cables — no rewiring needed.
                </p>
              </div>

          
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  🏠 Easy & Effective
                </h4>
                <p className="text-gray-600">
                  Perfect for straightforward surveillance in homes and small
                  commercial spaces.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HDCameraSection;
