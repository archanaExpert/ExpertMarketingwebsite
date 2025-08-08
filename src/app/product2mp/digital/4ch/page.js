"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const dvrData = [
  {
    model: "CP-UVR-0401E1-IC2",
    description: "4Ch. 1080N Digital Video Recorder",
    price: "₹4,800",
    features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 6 channels IP camera inputs, each channel up to 6MP; Max 32Mbps Incoming Bandwidth",
  "Supports Full-channel AI-Instastream",
  "Support 1 SATA HDD up to 16TB Each, 2 USB Ports",
  "Up to 4 channels video stream (analog channel) SMD Plus.",
  "1 HDMI / 1 VGA Simultaneous Video Output",
  "AI Instastream/Instastream/H.265 dual-stream video compression",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
],
    image: "/Digital Video Recorder (DVR)/4ch/4ch.svg",
  },
  {
    model: "CP-UVR-0401L1-4KI3",
    description: "4Ch. 4K-N/5MP Digital Video Recorder",
    price: "₹6,700",
    features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 5 channels IP camera inputs, each channel up to 2MP; Max 20Mbps Incoming Bandwidth",
  "Support 1 SATA HDD up to 6TB, 2 USB Ports",
  "1 HDMI / 1 VGA Simultaneous Video Output",
  "Instastream/H.265/H.264+/H.264 video compression",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro",
],
    image: "/Digital Video Recorder (DVR)/4ch/4ch1.svg",
  },
  {
    model: "CP-UVR-0401E1-CV2",
    description: "4Ch. 1080N Digital Video Recorder",
    price: "₹4,600",
    features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 5 channels IP camera inputs, each channel up to 2MP; Max 20Mbps Incoming Bandwidth",
  "Instastream/H.265/H.264+/H.264 video compression",
  "1 HDMI / 1 VGA Simultaneous Video Output",
  "Support 1 SATA HDD up to 6TB, 2 USB Ports",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
    image: "/Digital Video Recorder (DVR)/4ch/4ch2.svg",
  },
  {
    model: "CP-UVR-0401L1-4KI2",
    description: "4Ch. 4K-N Digital Video Recorder",
    price: "₹6,400",
    features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 8 channels IP camera inputs, each channel up to 8MP; Max 64 Mbps incoming bandwidth.",
  "Up to 2 channels video stream (analog channel) Perimeter Protection.",
  "Instastream/H.265+ dual-stream video compression",
  "Up to 2 channels video stream (analog channel) SMD Plus.",
  "Support 1 SATA HDDs up to 10TB, 2 USB Ports",
  "Up to 2 channels video stream (analog channel) human face recognition.",
  "1 HDMI / 1 VGA simultaneous video output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro",
  "*Only for Middle East/ Africa/ EU Region"
]
,
    image: "/Digital Video Recorder (DVR)/4ch/4ch3.svg",
  },
  {
    model: "CP-UVR-0401F1-IC",
    description: "4Ch. 5M-N Digital Video Recorder",
    price: "₹5,500",
    features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 6 channels IP camera inputs, each channel up to 8MP; Max 36Mbps Incoming Bandwidth",
  "Supports Full-channel AI-Coding",
  "Instastream/H.265 dual-stream video compression",
  "Up to 4 channels video stream (analog channel) SMD Plus.",
  "Support 1 SATA HDD up to 6TB, 2 USB Ports",
  "1 HDMI / 1 VGA Simultaneous Video Output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro",
],
    image: "/Digital Video Recorder (DVR)/4ch/4ch4.svg",
  },
  {
    model: "CP-UVR-0401E1-IC",
    description: "4Ch. 1080N Digital Video Recorder",
    price: "₹4,400",
    features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 5 channels IP camera inputs, each channel up to 2MP; Max 20Mbps Incoming Bandwidth",
  "Supports Full-channel AI-Coding",
  "Instastream/H.265 dual-stream video compression",
  "Up to 4 channels video stream (analog channel) SMD Plus.",
  "Support 1 SATA HDD up to 6TB, 2 USB Ports",
  "1 HDMI / 1 VGA Simultaneous Video Output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
],
    image:  "/Digital Video Recorder (DVR)/4ch/4ch6.svg",
  },
  {
    model: "CP-UVR-0401E1-HC",
    description: "4 Ch. 1080P Lite Cosmic HD DVR",
    price: "₹4,200",
    features: [
  "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
  "Support upto 2MP IP Camera",
  "Max 20Mbps Incoming Bandwidth",
  "Instastream/H.265 dual-stream Video Compression",
  "All channel 1080P Lite Realtime Recording",
  "Support 1 SATA HDD up to 6TB, 2 USB2.0",
  "HDMI / VGA Simultaneous Video Output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
    image: " /Digital Video Recorder (DVR)/4ch/4ch7.svg",
  },
  {
    model: "CP-UVR-0401E1-CS",
    description: "4 Ch. 1080P Lite Cosmic HD DVR",
    price: "₹4,200",
    features: [
  "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
  "Support upto 8MP IP Camera",
  "Max 24Mbps Incoming Bandwidth",
  "H.265Plus /H.265 dual-stream Video Compression",
  "HDMI / VGA Simultaneous Video Output",
  "Support 1 SATA HDD up to 10TB, 2 USB Ports(2.0)",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS, KVMS Pro"
],
    image: "/Digital Video Recorder (DVR)/4ch/4ch8.svg",
  },
  {
    model: "CP-UVR-0401L1-4KH",
    description: "4 Ch. 4K H.265 Cosmic HD DVR",
    price: "₹7,200",
    features:  [
    "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
    "Support upto 8MP IP Camera",
    "Max 24Mbps Incoming Bandwidth",
    "H.265Plus / H.265 dual-stream Video Compression",
    "HDMI / VGA Simultaneous Video Output",
    "Support 1 SATA HDD up to 10TB, 2 USB Ports (2.0)",
    "Mobile Software: iCMOB, gCMOB",
    "CMS Software: KVMS, KVMS Pro"
  ],
    image: "/Digital Video Recorder (DVR)/4ch/4ch9.svg",
  },
  {
    model: "CP-UVR-0401L1B-4KH",
    description: "4 Ch. 4K H.265 Cosmic HD DVR",
    price: "₹7,400",
    features: [
    "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
    "Support upto 8MP IP Camera",
    "Max 24Mbps Incoming Bandwidth",
    "Instastream / H.265 dual-stream Video Compression",
    "HDMI / VGA Simultaneous Video Output",
    "Support 1 SATA HDD up to 10TB, 2 USB Ports (2.0)",
    "Mobile Software: iCMOB, gCMOB",
    "CMS Software: KVMS Pro"
  ],
    image: "/Digital Video Recorder (DVR)/4ch/4ch10.svg",
  },
  {
    model: "CP-UVR-0401F1-IC2",
    description: "4Ch. 5M-N Digital Video Recorder",
    price: "₹5,700",
    features: [
    "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
    "Max 6 channels IP camera inputs, each channel up to 6MP; Max 32Mbps Incoming Bandwidth",
    "Supports Full-channel AI-Instastream",
    "Support 1 SATA HDD up to 16TB Each, 2 USB Ports",
    "Up to 4 channels video stream (analog channel) SMD Plus",
    "1 HDMI / 1 VGA Simultaneous Video Output",
    "AI Instastream / Instastream / H.265 dual-stream video compression",
    "Mobile Software: iCMOB, gCMOB",
    "CMS Software: KVMS Pro Lite"
  ],
    image: "/Digital Video Recorder (DVR)/4ch/Ic2.svg",
  },
  {
    model: "CP-UVR-0401E1-CV5",
    description: "4Ch. 1080N Digital Video Recorder",
    price: "₹4,800",
    features:  [
    "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
    "Max 6 channels IP camera inputs, each channel up to 6MP; Max 32Mbps Incoming Bandwidth",
    "Supports Full-channel AI-Instastream",
    "Support 1 SATA HDD up to 16TB Each, 2 USB Ports",
    "Up to 4 channels video stream (analog channel) SMD Plus",
    "1 HDMI / 1 VGA Simultaneous Video Output",
    "AI Instastream / Instastream / H.265 dual-stream video compression",
    "Mobile Software: iCMOB, gCMOB",
    "CMS Software: KVMS Pro Lite"
  ],
    image: "/Digital Video Recorder (DVR)/4ch/ic5.svg",
  },
];

export default function OrangeDVRPage() {
  return (
    <>
    <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center overflow-hidden">
  <Image
    src="/Digital Video Recorder (DVR)/4ch/4ch1.svg" 
    alt="CP PLUS Digital Video Recorder"
    fill
    className="object-cover opacity-30"
    priority
  />

  <div className="z-10 px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      Reliable & Secure DVR Solutions
    </h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Record, store, and manage surveillance footage with high-definition clarity, powerful compression, and advanced playback features using CP PLUS Digital Video Recorders.
    </p>
  </div>
</section>

   <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
        Orange 4 Ch. Digital Video Recorders (DVR)
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dvrData.map((dvr, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col"
          >
            <Image
              src={dvr.image}
              alt={dvr.model}
              className="w-full h-52 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-gray-800">
                {dvr.model}
              </h2>
              <p className="text-sm text-gray-600">{dvr.description}</p>
              <ul className="list-disc text-sm text-gray-700 pl-5">
                {dvr.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-orange-600 font-bold">{dvr.price}</p>

              <div className="mt-auto pt-4">
                <Link href="/contact">
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded">
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
}
