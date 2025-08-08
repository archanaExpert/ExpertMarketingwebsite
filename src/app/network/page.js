import Image from "next/image";

const NVRSection = () => {
  return (
    <>
      <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/dex.svg"
          alt="Network Video Recorder"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Smart Surveillance with NVR
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Record and manage high-definition IP camera feeds with real-time
            monitoring, cloud backup, and AI analytics using advanced NVR
            solutions.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">
            {" "}
            Network
            <span className="text-orange-500">
              {" "}
              Video Recorders (NVR){" "}
            </span>{" "}
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Future-Ready IP Camera Recording and Management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-6 md:p-12">
          <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
            <Image
              src="/network.svg"
              alt="NVR Device"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="rounded-xl shadow-2xl p-6 bg-white">
            <h3 className="text-3xl font-bold text-blue-900 text-center">
              Key <span className="text-orange-500">Features</span>
            </h3>
            <div className="w-24 h-1 bg-blue-600 mt-2 mb-6 mx-auto rounded-full"></div>

            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
              <li>Supports up to 64 IP camera channels</li>
              <li>
                Max 384 Mbps total bandwidth (incoming/recording/outgoing)
              </li>
              <li>
                Advanced AI by Recorder: Face recognition (2-ch), Perimeter
                protection &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(4-ch), SMD Plus
                (8-ch)
              </li>
              <li>
                AI by Camera: Face recognition, Perimeter protection, ANPR,
                People &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;counting, Heat map
              </li>
              <li>Supports H.265 / H.264+ / H.264 / MJPEG decoding</li>
              <li>8 SATA HDDs supported (up to 20TB each)</li>
              <li>RAID 0 / 1 / 5 / 6 / 10 support for data protection</li>
              <li>4 USB Ports (2× USB 2.0 front, 2× USB 3.0 rear)</li>
              <li>Supports N+M cluster failover system</li>
              <li>
                Mobile Apps: <strong>iCMOB</strong>, <strong>gCMOB</strong> |
                CMS: <strong>KVMS Pro Lite</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Perfect For
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center text-gray-700">
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏠 <strong className="block text-lg mt-2">Smart Homes</strong>
              <p className="text-sm mt-2">
                Manage all IP cameras with a centralized NVR system.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏢{" "}
              <strong className="block text-lg mt-2">Corporate Offices</strong>
              <p className="text-sm mt-2">
                Monitor multiple entry points and sensitive areas in real time.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏫{" "}
              <strong className="block text-lg mt-2">
                Educational Campuses
              </strong>
              <p className="text-sm mt-2">
                Ensure student & staff safety across multiple blocks.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏭{" "}
              <strong className="block text-lg mt-2">Industrial Zones</strong>
              <p className="text-sm mt-2">
                Secure high-value assets and sensitive operations.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🏬{" "}
              <strong className="block text-lg mt-2">Malls & Complexes</strong>
              <p className="text-sm mt-2">
                Cover large commercial spaces with multiple camera inputs.
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
              🛡️{" "}
              <strong className="block text-lg mt-2">Security Agencies</strong>
              <p className="text-sm mt-2">
                Offer robust surveillance solutions to clients at scale.
              </p>
            </div>
          </div>
        </div>

        <section className="bg-gradient-to-br from-white to-blue-50 py-16 px-6 md:px-20 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              Why Choose <span className="text-orange-500">NVR?</span>
            </h2>
            <p className="text-gray-700 text-lg mb-10">
              NVR systems offer smarter, scalable, and higher-quality
              surveillance tailored for modern needs.
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  📶 Wireless Integration
                </h4>
                <p className="text-gray-600">
                  Seamlessly integrates with Wi-Fi enabled IP cameras for easy
                  setup.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  🌐 Remote Access
                </h4>
                <p className="text-gray-600">
                  Access live feeds and recordings anytime via mobile or web.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300">
                <h4 className="text-xl font-semibold text-blue-800 mb-2">
                  🧠 Smart Features
                </h4>
                <p className="text-gray-600">
                  Enjoy AI-powered analytics like facial recognition & intrusion
                  detection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default NVRSection;
