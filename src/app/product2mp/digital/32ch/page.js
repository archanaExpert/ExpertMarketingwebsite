"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const dvrData = [
  {
    brand: "Orange 32 Ch. - Digital Video Recorder (DVR)",
    models: [
      {
        model: "CP-UVR-3201E2-I",
        description: "32 Ch. 1080N/720P Digital Video Recorder",
        price: "₹12,000",
        features: [
          "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
          "Max 16 channels IP camera inputs, each channel up to 6MP; Max 128 Mbps incoming bandwidth",
          "Supports 8-channel AI Instastream",
          "AI Instastream/ Instastream/ H.265 dual-stream video compression",
          "Up to 16 channels video stream (analog channel) SMD Plus",
          "Support 2 SATA HDDs up to 16TB Each, 2 USB Ports",
          "1 HDMI / 1 VGA / 1 TV Video output",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS Pro",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/e2-i.svg",
      },
      {
        model: "CP-UVR-3201K2-I3",
        description: "32 Ch. 5M-N Digital Video Recorder",
        price: "₹13,500",
        features: [
          "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
          "AI Instastream/ Instastream/ H.265 dual-stream video compression",
          "Max 32 channels IP camera inputs, each channel up to 6MP; Max 128Mbps incoming bandwidth",
          "Up to 4 channels video stream (analog channel) Perimeter Protection",
          "Up to 16 channels video stream (analog channel) SMD Plus",
          "Up to 2 channels video stream (analog channel) human face recognition",
          "Support 2 SATA HDDs up to 16TB Each, 2 USB Ports",
          "1 HDMI / 1 VGA / 1 TV simultaneous video output",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS Pro",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/1k2-i3.svg",
      },
      {
        model: "CP-UVR-3201K2-V4",
        description: "32 Ch. 1080P HD DVR",
        price: "₹14,800",
        features: [
          "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
          "Support upto 5MP IP Camera",
          "Max 128Mbps Incoming Bandwidth",
          "H.264+ / H.264 dual-stream video compression",
          "HDMI / VGA Simultaneous Video Output",
          "Support 2 SATA HDD up to 16TB, 2 USB Ports",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS, KVMS Pro",
        ],
        image: " /Digital Video Recorder (DVR)/32ch/k2-v4.svg",
      },
      {
        model: "CP-UVR-3201K2-V5",
        description: "32 Ch. 5M-N/1080P Digital Video Recorder",
        price: "₹15,000",
        features: [
          "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
          "Max 32 channels IP camera inputs, each channel up to 4MP",
          "Max 128Mbps Incoming Bandwidth",
          "H.264+/H.264 dual-stream video compression",
          "Support 2 SATA HDD up to 8TB Each, 2 USB Ports",
          "Supports 5MP camera input",
          "HDMI/ VGA/ TV Simultaneous Video Output",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS Pro",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/k2-v5.svg",
      },
      {
        model: "CP-UVR-3201K2-I2",
        description: "32 Ch. 5M-N Digital Video Recorder",
        price: "₹13,000",
        features: [
          "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
          "Max 32 channels IP camera inputs, each channel up to 6MP; Max 128 Mbps incoming bandwidth",
          "Up to 2 channels video stream (analog channel) Perimeter Protection",
          "Instastream/H.265 dual-stream video compression",
          "Up to 16 channels video stream (analog channel) SMD Plus",
          "Support 2 SATA HDDs up to 10TB Each, 2 USB Ports",
          "Up to 2 channels video stream (analog channel) human face recognition",
          "1 HDMI / 1 VGA simultaneous video output",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS Pro",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/k2-i2.svg",
      },
      {
        model: "CP-UVR-3216L8-4KI2",
        description: "32Ch. 4K-N Digital Video Recorder",
        price: "₹18,900",
        features: [
          "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
          "Max 32 channels IP camera inputs, each channel up to 12MP; Max 128 Mbps incoming bandwidth",
          "Up to 6 channels video stream (analog channel) Perimeter Protection",
          "Instastream/H.265 dual-stream video compression",
          "Up to 32 channels video stream (analog channel) SMD Plus",
          "Support 8 SATA HDDs up to 10TB each, 4 USB Ports",
          "Up to 6 channels video stream (analog channel) human face recognition",
          "HDMI/VGA simultaneous video output",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS Pro",
          "*Only for Middle East/ Africa/ EU Region",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/l8-4k.svg",
      },
      {
        model: "CP-UVR-3204L4-4KI2",
        description: "32Ch. 4K-N Digital Video Recorder",
        price: "₹18,000",
        features: [
          "Supports HDCVI/AHD/TVI/CVBS/IP video inputs",
          "Max 32 channels IP camera inputs, each channel up to 12MP; Max 128 Mbps incoming bandwidth",
          "Up to 6 channels video stream (analog channel) Perimeter Protection",
          "Instastream/H.265 dual-stream video compression",
          "Up to 32 channels video stream (analog channel) SMD Plus",
          "Support 4 SATA HDDs up to 10TB each, 3 USB Ports",
          "Up to 6 channels video stream (analog channel) human face recognition",
          "HDMI/VGA simultaneous video output",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS Pro",
          "*Only for Middle East/ Africa/ EU Region",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/l4-4k.svg",
      },
      {
        model: "CP-UVR-3216K8-H",
        description: "32 Ch. 1080P H.265 Cosmic HD DVR",
        price: "₹16,900",
        features: [
          "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
          "Support upto 8MP IP Camera",
          "Max 128Mbps Incoming Bandwidth",
          "H.265+ /H.265 dual-stream Video Compression",
          "2 HDMI / 1 VGA Simultaneous Video Output",
          "Support 8 SATA HDD up to 10TB Each, 4 USB Ports",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS, KVMS Pro",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/k8-h.svg",
      },
      {
        model: "CP-UVR-3204K4-H",
        description: "32 Ch. 1080P H.265 Cosmic HD DVR",
        price: "₹16,200",
        features: [
          "Auto Adaptive HDCVI/AHD/TVI/CVBS/IP signals",
          "Support upto 8MP IP Camera",
          "Max 128Mbps Incoming Bandwidth",
          "Instastream/ H.265 dual-stream Video Compression",
          "2 HDMI / 1 VGA Simultaneous Video Output",
          "Support 4 SATA HDD up to 10TB Each, 3 USB Ports",
          "Mobile Software: iCMOB, gCMOB",
          "CMS Software: KVMS, KVMS Pro",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/4k4.svg",
      },
    ],
  },
  {
    brand: "Indigo 32 Ch. - Digital Video Recorder (DVR)",
    models: [
      {
        model: "CP-VRA-2K3216-H",
        description: "32 Ch. 1080N H.265 Indigo DVR",
        price: "₹14,500",
        features: [
          "H.265/ H.264 dual-stream video compression",
          "All channel 1080N Non-Realtime Recording",
          "Support AHD, TVI, CVI, CVBS, IP Video input",
          "HDMI / VGA simultaneous video output",
          "Support 2 SATA HDD up to 16TB, 2 USB2.0",
          "Mobile Software: cMOB-20",
          "CMS Software: CVMS-2000",
          "*Only for UAE",
        ],
        image: "/Digital Video Recorder (DVR)/32ch/216.svg",
      },
    ],
  },
];

const Orange32ChDVRPage = () => {
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
            Record, store, and manage surveillance footage with high-definition
            clarity, powerful compression, and advanced playback features using
            CP PLUS Digital Video Recorders.
          </p>
        </div>
      </section>

      <div className="min-h-screen bg-white p-6 text-gray-800">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
          32 Channel DVR – Orange & Indigo Series
        </h1>

        {dvrData.map((section, i) => (
          <div key={i} className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-700 border-b pb-2">
              {section.brand}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.models.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-xl shadow-sm hover:shadow-lg transition p-4 h-full"
                >
                  <img
                    src={item.image}
                    alt={item.model}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold text-orange-500">
                    {item.model}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {item.description}
                  </p>
                  <p className="text-base font-bold text-green-600 mb-2">
                    {item.price}
                  </p>
                  <ul className="text-sm text-gray-600 mb-4 list-disc list-inside">
                    {item.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link href="/contact">
                      <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Orange32ChDVRPage;
