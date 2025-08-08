"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const dvrData = [
  {
    brand: "Orange 16 Ch.",
    dvrs: [
      {
        model: "CP-UVR-1601L1N-4KI3-V2",
        description: "16Ch. 4K/5MP Digital Video Recorder",
        price: "₹8,500",
        features:[
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Support upto 8MP IP Camera",
  "Instastream/ H.265 dual-stream video compression",
  "Max 32 channels IP camera inputs, each channel up to 6MP; Max 128 Mbps incoming bandwidth",
  "Support 1 SATA HDD up to 16TB, 2 USB Ports",
  "1 HDMI / 1 VGA simultaneous video output",
  "Up to 8 channels video stream (analog channel) Perimeter Protection.",
  "Up to 16 channels video stream (analog channel) SMD Plus.",
  "Up to 2 channels video stream (analog channel) human face recognition",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
        image: "/Digital Video Recorder (DVR)/16ch/l1n.svg",
      },
      {
        model: "CP-UVR-1601E1-IC2",
        description: "16Ch. 1080N Digital Video Recorder",
        price: "₹7,800",
        features: [
  "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
  "Max 18 channels IP camera inputs, each channel up to 6MP",
  "Max 64Mbps Incoming Bandwidth",
  "Instastream/H.265 dual-stream Video Compression",
  "Support 1 SATA HDD up to 16TB, 2 USB Ports",
  "Up to 8 channels video stream (analog channel) SMD Plus",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
        image:  "/Digital Video Recorder (DVR)/16ch/e1-ic2.svg",
      },
      {
        model: "CP-UVR-1616K8-I3",
        description: "16 Ch. 5M-N Digital Video Recorder",
        price: "₹9,200",
        features: [
  "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
  "Max 18 channels IP camera inputs, each channel up to 6MP",
  "Max 64Mbps Incoming Bandwidth",
  "Instastream/H.265 dual-stream Video Compression",
  "Support 1 SATA HDD up to 16TB, 2 USB Ports",
  "Up to 8 channels video stream (analog channel) SMD Plus",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
        image: "/Digital Video Recorder (DVR)/16ch/e1-ic2.svg",
      },
      {
        model: "CP-UVR-1601L1B-4KI3",
        description: "16Ch. 4K-N/5MP Digital Video Recorder",
        price: "₹9,000",
        features:[
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "AI Instastream/ Instastream/ H.265 dual-stream video compression",
  "Max 32 channels IP camera inputs, each channel up to 8MP; Max 128Mbps incoming bandwidth",
  "Up to 8 channels video stream (analog channel) Perimeter Protection",
  "Up to 16 channels video stream (analog channel) SMD Plus",
  "Up to 2 channels video stream (analog channel) human face recognition",
  "Support 1 SATA HDDs up to 16TB Each, 2 USB Ports",
  "1 HDMI / 1 VGA simultaneous video output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
        image: "/Digital Video Recorder (DVR)/16ch/1b-4k.svg",
      },
      {
        model: "CP-UVR-1601K2-I3",
        description: "16Ch. 5M-N/1080P Digital Video Recorder",
        price: "₹8,600",
        features:[
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 24 channels IP camera inputs, each channel up to 6MP; Max 128 Mbps incoming bandwidth",
  "Up to 4 channels video stream (analog channel) Perimeter Protection",
  "Instastream/ H.265 dual-stream video compression",
  "Up to 16 channels video stream (analog channel) SMD Plus",
  "Support 2 SATA HDDs up to 16TB Each, 2 USB",
  "Up to 2 channels video stream (analog channel) human face recognition",
  "IoT and POS functionalities",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
        image: "/Digital Video Recorder (DVR)/16ch/k2-i3.svg"
      },
      {
        model: "CP-UVR-1616K1-I3",
        description: "16Ch. 5M-N Digital Video Recorder",
        price: "₹8,200",
        features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 24Ch. IP camera inputs, each channel up to 6MP; Max 128Mbps incoming bandwidth",
  "Up to 2Ch. video stream (analog channel) Perimeter Protection",
  "AI Instastream/Instastream/ H.265 dual-stream encoding",
  "Up to 16Ch. video stream (analog channel) SMD Plus",
  "Support 1 SATA HDDs up to 16TB each, 2 USB Ports",
  "Up to 2Ch. video stream (analog channel) human face recognition",
  "POS & IoT Functionalities",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
        image: "/Digital Video Recorder (DVR)/16ch/1616k.svg",
      },
      {
        model: "CP-UVR-1601F1-IC",
        description: "16Ch. 5M-N Digital Video Recorder",
        price: "₹8,000",
        features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 24 channels IP camera inputs, each channel up to 6MP",
  "Supports Full-channel AI Instastream",
  "Instastream/H.265 dual-stream video compression",
  "Up to 16 channels video stream (analog channel) SMD Plus",
  "Support 1 SATA HDD up to 16TB Each, 2 USB Ports",
  "1 HDMI / 1 VGA Simultaneous Video Output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
        image: "/Digital Video Recorder (DVR)/16ch/01f1.svg",
      },
      {
        model: "CP-UVR-1601E2-I",
        description: "16Ch. 1080P Lite Digital Video Recorder",
        price: "₹7,000",
        features:[
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 18 channels IP camera inputs, each channel up to 6MP; Max 64 Mbps Incoming Bandwidth",
  "Supports Full-channel AI-Coding",
  "Instastream/H.265 video compression",
  "Up to 8 channels video stream (analog channel) SMD Plus",
  "Support 2 SATA HDD up to 10TB Each, 2 USB Ports",
  "1 HDMI / 1 VGA simultaneous video output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
        image: "/Digital Video Recorder (DVR)/16ch/160.svg",
      },
      {
        model: "CP-UVR-1601K2-V5",
        description: "16 Ch. 5M-N/1080P Digital Video Recorder",
        price: "₹8,300",
        features: [
  "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
  "Max 24 channels IP camera inputs, each channel up to 4MP",
  "Max 96Mbps Incoming Bandwidth",
  "H.264+/H.264 dual-stream video compression",
  "Support 2 SATA HDD up to 8TB Each, 2 USB Ports",
  "HDMI / VGA Simultaneous Video Output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
        image:"/Digital Video Recorder (DVR)/16ch/k2-v5.svg",
      },
    ],
  },
  {
    brand: "Indigo 16 Ch.",
    dvrs: [
      {
        model: "CP-VRA-1K1602-HV2",
        description: "16Ch. 1080N H.265 Indigo DVR",
        price: "₹7,900",
        features: [
  "Instastream/ H.265/ H.264 video compression",
  "All channel 1080N Non-Realtime Recording",
  "Support AHD, TVI, CVI, CVBS, IP Video input",
  "HDMI / VGA simultaneous video output",
  "Support 1 SATA HDD up to 8TB, 2 USB2.0",
  "Mobile Software: cMOB-20",
  "CMS Software: CVMS-2000",
  "*Only for UAE"
]
,
        image: "/Digital Video Recorder (DVR)/16ch/vra.svg",
      },
    ],
  },
];

export default function Dvr16ChPage() {
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
    
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
        16 Channel Digital Video Recorders (DVR)
      </h1>

      {dvrData.map((section) => (
        <div key={section.brand} className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">{section.brand}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {section.dvrs.map((dvr) => (
              <div
                key={dvr.model}
                className="bg-white rounded-2xl shadow-lg p-5 border border-gray-200 hover:shadow-xl transition-all"
              >
                <img
                  src={dvr.image}
                  alt={dvr.model}
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="text-lg font-bold mb-1">{dvr.model}</h3>
                <p className="text-sm mb-2 text-gray-600">{dvr.description}</p>
                <ul className="text-sm mb-3 list-disc list-inside text-gray-700">
                  {dvr.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="text-xl font-semibold text-green-700 mb-3">{dvr.price}</p>
                <Link href="/contact">
                <button className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 w-full">
                  Buy Now
                </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
