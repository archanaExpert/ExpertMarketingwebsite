import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function FisheyeCameraPage() {
  const camera = {
    model: "CP-UNC-EE61L2C-VMD-Q",
    name: "6MP Network IR Fisheye Camera",
    image: "/productmp2/hdcamera/ip6mp.svg", // Make sure this image exists in /public
    price: "₹10,800", // Optional, update as needed
    specs: [
      '1/2.5” 6MP PS CMOS Image Sensor (1.016 cm)',
      "Max. 6MP (2560 × 2560) @ 1–25/30 fps",
      "1.68 mm Fixed-focal Lens",
      "Instastream, H.265, H.264, H.264H, MJPEG",
      "Support Triple Stream",
      "WDR (120 dB), Day/Night (ICR), 2D ND & 3D NR, AWB, AGC, BLC, HLC",
      "Support Built-in Mic",
      "Support Micro SD Card, IP67, IK10, PoE",
    ],
  };

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

      <div className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-6 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            ← Back to 6MP Network Cameras
          </Link>

          <h1 className="text-3xl font-bold text-orange-600 mb-2 text-center">{camera.name}</h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-6 text-center">{camera.model}</h2>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <Image
                  src={camera.image}
                  alt={camera.name}
                  title={camera.name}
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>

              <div className="md:w-1/2">
                <h3 className="text-lg font-semibold mb-4">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                  {camera.specs.map((item, index) => (
                     <div
              key={index}
              className="flex items-start text-sm text-gray-700 mb-1"
            >
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span>{item}</span>
            </div>
                  ))}
                </ul>

                {camera.price && (
                  <p className="text-xl text-green-600 font-bold mt-6">
                    Price: {camera.price}
                  </p>
                )}
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            <div className="flex justify-center">
              <Link href="/contact" passHref legacyBehavior>
                <a aria-label="Buy Now - Contact Us">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition">
                    Buy Now
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
