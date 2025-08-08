
"use client";
import React from "react";
import Image from "next/image";

const orangeNvrData = [
  {
    model: "CP-UNR-104F1-P4",
    name: "4Ch. Network Video Recorder with 4 PoE Port",
    price: "₹5,999",
    image: "/network/4ch/P4.svg",
    features: [
  "Support 4 channel IP camera input",
  "Max 80Mbps Network Bandwidth",
  "Instastream/H.265/Smart H.264+/H.264 codec decoding",
  "Up to 8MP resolution preview and playback",
  "Support 4 PoE Ports",
  "Support 1 SATA HDDs up to 8TB Each, 2 USB Ports (USB2.0)",
  "VGA/HDMI simultaneous video output, maximum resolution of HDMI is 1080P",
  "Support Multi-brand network cameras",
  "ONVIF Version conformance",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K2041-4PG",
    name: "4 Ch. 4G Network Video Recorder",
    price: "₹8,499",
    image: "/network/4ch/4pc.svg",
    features: [
  "Support up to 4Ch. IP Camera Input",
  "H.265/H.264 dual codec decoding",
  "Up to 8MP resolution preview and playback",
  "Max 80Mbps incoming bandwidth",
  "Support 1 SATA HDDs up to 8TB, 2 USB ports(2.0), 4 PoE Ports",
  "HDMI / VGA simultaneous video output",
  "Support 4G Network (Embedded 4G Sim Card slot)",
  "Support Wi-Fi, ONVIF Version 2.4 conformance",
  "Support Multi-brand network cameras",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K4042-P4V3",
    name: "4Ch. 4K Network Video Recorder with 4PoE Port",
    price: "₹10,999",
    image: "/network/4ch/4k40.svg",
    features: [
  "Up to 4 channel IP camera input",
  "Max. decoding capability: 8 x 1080p@30fps. Supports adaptive decoding",
  "Instastream/H.265/Smart H.264plus/H.264/MJPEG codec decoding",
  "Supports Mainstream cameras of ONVIF and RTSP protocols",
  "Support 4 PoE Ports",
  "Support 2 SATA HDDs up to 10TB Each, 2 USB Ports",
  "VGA/HDMI simultaneous video output, maximum resolution of HDMI is 4K",
  "AI by Camera: Face detection, Perimeter protection, IVS, People counting, Heat map, and SMD",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-104F1",
    name: "4Ch. Network Video Recorder",
    price: "₹4,999",
    image: "/network/4ch/4f1.svg",
    features: [
  "Up to 4 channel IP camera input",
  "Max. decoding capability: 8 x 1080p@30fps. Supports adaptive decoding",
  "Instastream/H.265/Smart H.264plus/H.264/MJPEG codec decoding",
  "Supports Mainstream cameras of ONVIF and RTSP protocols",
  "Support 4 PoE Ports",
  "Support 2 SATA HDDs up to 10TB Each, 2 USB Ports",
  "VGA/HDMI simultaneous video output, maximum resolution of HDMI is 4K",
  "AI by Camera: Face detection, Perimeter protection, IVS, People counting, Heat map, and SMD",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
];

const OrangeNVRPage = () => {
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

    <div className="min-h-screen bg-gray-100 px-6 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
        Orange 4 Ch. Network Video Recorders (NVR)
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {orangeNvrData.map((product) => (
          <div
            key={product.model}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
          >
            <Image
              src={product.image}
              alt={product.model}
              className="w-full h-52 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800">{product.model}</h3>
              <p className="text-sm text-gray-600 mb-2">{product.name}</p>
              <ul className="list-disc list-inside text-sm text-gray-500 mb-4">
                {product.features.map((feature, i) => (
                   <div
              key={i}
              className="flex items-start text-sm text-gray-700 mb-1"
            >
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span>{feature}</span>
            </div>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-orange-600 font-bold text-lg">{product.price}</span>
                <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default OrangeNVRPage;
