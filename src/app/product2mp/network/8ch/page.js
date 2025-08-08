
"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const orange8ChNvrData = [
  {
    model: "CP-UNR-4K2082-V3",
    name: "8 Ch. 4K Network Video Recorder",
    price: "₹11,499",
    image: "/network/8ch/82V3.svg",
    features: [
  "Industrial-grade processor with Embedded Linux OS",
  "Instastream/H.265/H.264 /Smart H.264 /H.264 decoding formats",
  "Max. decoding capability: 6 × 1080p@30 fps",
  "Max. 80/80/60 Mbps incoming/recording/outgoing bandwidth",
  "Support 2 SATA HDDs up to 20TB, 2 USB ports(2.0)",
  "HDMI / VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "ONVIF Version 22.12",
  "Mobile Software: iCMOB, gCMOB"
]
,
  },
  {
    model: "CP-UNR-4K4082-V4",
    name: "8CH 1U 2HDDs Network Video Recorder",
    price: "₹12,999",
    image: "/network/8ch/unr.svg",
    features: [
  "Up to 8 Channel IP Camera input",
  "Instastream, H.265, H.264, MJPEG",
  "Up to 12 MP resolution preview and playback",
  "AI disabled: 160 Mbps incoming, AI enabled: 80 Mbps incoming",
  "Support 2 SATA HDDs up to 20TB, 2 USB ports(2.0)",
  "HDMI / VGA simultaneous video output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
  },
  {
    model: "CP-UNR-4K4082-P8V4",
    name: "8Ch. 4K Network Video Recorder with 8 PoE Port",
    price: "₹14,499",
    image: "/network/8ch/P8V4.svg",
    features: [
  "Up to 8 channel IP camera input",
  "Max. decoding capability: 8 x 1080p@30fps",
  "Instastream / H.265 / Smart H.264plus / H.264 / MJPEG",
  "Support 2 SATA HDDs up to 20TB Each",
  "Max. 160/160/80 Mbps incoming/recording/outgoing bandwidth",
  "VGA / HDMI simultaneous video output, maximum resolution of HDMI is 4K",
  "AI by Camera: Face detection, perimeter protection, IVS, people counting, heat map, and SMD",
  "Support 8 PoE Ports",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-208F2-I2",
    name: "8Ch. AI Network Video Recorder",
    price: "₹15,999",
    image: "/network/8ch/saa.svg",
    features:[
  "8 Channel IP video access",
  "Intelli Code / H.265 / Smart H.264+ / H.264 / MJPEG",
  "Max. decoding capability: 6 × 1080p@30fps, supports adaptive decoding",
  "1-channel face detection and recognition (AI by NVR)",
  "1-channel perimeter protection (AI by NVR)",
  "Up to 10 face databases and 5,000 face images",
  "AI by camera: Face detection and recognition, perimeter protection and SMD",
  "Support 2 SATA HDDs up to 10TB Each, 2 USB Ports",
  "Support Multi-brand network cameras",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K4082-P8V3",
    name: "8Ch. 4K Network Video Recorder with 8 PoE Port",
    price: "₹13,999",
    image: "/network/8ch/P8V3.svg",
   features: [
  "Up to 8 channel IP camera input",
  "Max. decoding capability: 8 x 1080p@30fps. Supports adaptive decoding",
  "Instastream/H.265/Smart H.264plus/H.264/MJPEG codec decoding",
  "Supports mainstream cameras of ONVIF and RTSP protocols",
  "Support 8 PoE Ports",
  "Support 2 SATA HDDs up to 10TB Each, 2 USB Ports",
  "VGA/HDMI simultaneous video output, maximum resolution of HDMI is 4K",
  "AI by Camera: Face detection, perimeter protection, IVS, people counting, heat map, and SMD+",
  "Mobile Software: iCMOB, gCMOB"
]
,
  },
  {
    model: "CP-UNR-108F1-P8",
    name: "8Ch. Network Video Recorder with 8PoE Port",
    price: "₹10,499",
    image: "/network/8ch/P8.svg",
   features: [
  "Support 8 channel IP camera input",
  "Instastream/H.265/Smart H.264+/H.264 codec decoding",
  "Up to 8MP resolution preview and playback",
  "Max 80Mbps Network Bandwidth",
  "Support 1 SATA HDDs up to 8TB Each, 2 USB Ports (USB2.0)",
  "VGA/HDMI simultaneous video output, maximum resolution of HDMI is 1080P",
  "Support Multi-brand network cameras",
  "ONVIF Version conformance",
  "Support 8 PoE Ports",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro",
  "*Only for Middle East/ Africa/ EU Region"
]
,
  },
  {
    model: "CP-UNR-108F1",
    name: "8Ch. Network Video Recorder",
    price: "₹9,499",
    image: "/network/8ch/108F1.svg",
    features: [
  "8 Channel IP video access",
  "Intelli Code / H.265 / Smart H.264+ / H.264 / MJPEG",
  "Max. decoding capability: 6 × 1080p@30fps, supports adaptive decoding",
  "1-channel face detection and recognition (AI by NVR)",
  "1-channel perimeter protection (AI by NVR)",
  "Up to 10 face databases and 5,000 face images",
  "AI by camera: Face detection and recognition, perimeter protection and SMD",
  "Support 2 SATA HDDs up to 10TB Each, 2 USB Ports",
  "Support Multi-brand network cameras",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]

,
  },
  {
    model: "CP-UNR-4K2082-V2",
    name: "8 Ch. 4K Network Video Recorder",
    price: "₹10,999",
    image: "/network/8ch/82-V2.svg",
    features: [
  "Support up to 1ch@8MP / 4ch@1080P decoding",
  "Instastream / H.265 / H.264 / H.264 codec decoding",
  "Up to 8MP Resolution Preview and Playback",
  "Max 80Mbps incoming bandwidth",
  "Support 2 SATA HDDs up to 10TB, 2 USB ports (2.0)",
  "HDMI / VGA simultaneous video output",
  "ONVIF Version 2.4 conformance",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS, KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K4082-V2",
    name: "8 Ch. 4K Network Video Recorder",
    price: "₹11,999",
    image:  "/network/8ch/4K4082-V2.svg",
    features: [
  "Up to 8 channel IP camera input",
  "Instastream / H.265 / Smart H.264+ / H.264",
  "Up to 8MP resolution preview and playback",
  "Max 200Mbps incoming bandwidth",
  "Support 2 SATA HDDs up to 10TB Each, 2 USB (1 USB 3.0)",
  "HDMI / VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "ONVIF Version 2.4 conformance",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K5082-FI",
    name: "8Ch. 4K AI Network Video Recorder",
    price: "₹16,499",
    image:  "/network/8ch/4K5082-FI.svg",
    features:  [
  "Up to 8 channel IP camera input",
  "Max. 384 Mbps incoming/recording/outgoing bandwidth",
  "Instastream, H.265, H.264+, H.264, MJPEG codec decoding",
  "AI by recorder: 2 Channel face detection and recognition, up to 20 face databases and 20,000 face images, 4 Channel perimeter protection, 8 Channel SMD Plus",
  "AI by Camera: Face detection and recognition, Perimeter protection, SMD Plus, Metadata, ANPR, Stereo analysis, Heat map, People counting",
  "Support 2 SATA HDDs up to 20TB Each, 2 USB Ports (1 front USB 2.0 port, 1 rear USB 3.0 port)",
  "HDMI/ VGA Heterogeneous video output",
  "Support multi-brand network cameras",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
  },
];

const Orange8ChNVRPage = () => {
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
    Orange 8 Ch. Network Video Recorders (NVR)
  </h1>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {orange8ChNvrData.map((product) => (
      <div
        key={product.model}
        className="flex flex-col bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all"
      >
        <Image
          src={product.image}
          alt={product.model}
          className="w-full h-52 object-cover"
        />
        <div className="flex flex-col flex-grow p-5">
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

       
          <div className="flex justify-between items-center mt-auto">
            <span className="text-orange-600 font-bold text-lg">{product.price}</span>
            <Link href="/contact">
            <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition">
              Buy Now
            </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</>
  );
};

export default Orange8ChNVRPage;
