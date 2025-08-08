"use client";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Vedaan4MPCameraPage() {
  const [search, setSearch] = useState("");

 const vedaan4mpCameras = [
  {
    model: "CP-UNC-DA41L3C-D-Q",
    type: "4MP Network IR Dome Camera",
    range: "30Mtr",
    image: "/ip/4mp/cp-c.svg",
    price: "₹4,800",
    features: [
  "1/2.9” 4MP PS CMOS Image Sensor (0.8758 centimeters)",
  "Max. 4MP (2688 × 1520) @1–25/30fps / (2560 × 1440) @1–25/30",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Supports Triple Stream",
  "WDR (120dB), Day/Night (ICR), 3D NR, AWB, AGC, BLC, HLC, Digital Watermarking",
  "3.6mm Fixed Lens",
  "IR Range of 30 Meters",
  "IP67 Weatherproof, PoE Powered"
]

  },
  {
    model: "CP-UNC-TA41L3C-D-Q",
    type: "4MP IR Network Bullet Camera",
    range: "30Mtr",
    image:"/ip/4mp/TA41L3C-D-Q.svg",
    price: "₹5,200",
   features: [
  "1/2.9” 4MP PS CMOS Image Sensor (0.8758 centimeters)",
  "Max. 4MP (2688 × 1520)@1-25/30fps / (2560 × 1440)@1-25/30fps",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Support Triple stream",
  "DWDR, Day/Night(ICR), 3D NR, AWB, AGC, BLC, HLC, Digital watermarking",
  "3.6mm fixed Lens",
  "Support Built-in Mi",
  "IR Range of 30 Mtr., IP67, PoE"
]}
,
  {
    model: "CP-UNC-TA41L3C-Q",
    type: "4MP Network IR Bullet Camera",
    range: "30Mtr",
    image: "/ip/4mp/TA41L3C-Q.svg",
    price: "₹5,000",
   features: [
  "1/2.9” 4MP PS CMOS Image Sensor (0.8758 centimeters)",
  "Max. 4MP (2688 × 1520)@1-25/30fps / (2560 × 1440)@1-25/30fps",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Support Triple stream",
  "DWDR, Day/Night(ICR), 3D NR, AWB, AGC, BLC, HLC, Digital watermarking",
  "3.6mm fixed Lens",
  "Support Built-in Mic",
  "IR Range of 30 Mtrs, IP67, PoE"
],

  },
  {
    model: "CP-UNC-DA41L3C-Q",
    type: "4MP IR Network Dome Camera",
    range: "30Mtr",
    image:  "/ip/4mp/DA41L3C-Q.svg",
    price: "₹4,700",
   features: [
  "1/2.9” 4MP PS CMOS Image Sensor (0.8758 centimeters)",
  "Max. 4MP (2688 × 1520) @1–25/30fps / (2560 × 1440) @1–25/30fps",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Support Triple Stream",
  "DWDR, Day/Night (ICR), 3D NR, AWB, AGC, BLC, HLC, Digital Watermarking",
  "3.6mm Fixed Lens",
  "Support Built-in Mic",
  "IR Range of 30 Mtrs, IP67, PoE"
]
,
  },
  {
    model: "CP-UNC-TA41L6C-Q",
    type: "4MP Network IR Bullet Camera",
    range: "60Mtr",
    image:  "/ip/4mp/TA41L6C-Q.svg",
    price: "₹5,800",
   features: [
  "1/2.8\" 4MP PS CMOS Image Sensor (0.9071 centimeters)",
  "Max. 4MP (2688 × 1520) @1–25/30fps / (2560 × 1440) @1–25/30fps",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Support Triple Stream",
  "DWDR, Day/Night (ICR), 3D DNR, AWB, AGC, BLC, HLC",
  "6mm Fixed Lens",
  "Support Built-in Mic",
  "IR Range of 60 Mtr., IP67, PoE"
],
  },
  {
    model: "CP-UNC-TA41L6C-D-Q",
    type: "4MP Network IR Bullet Camera",
    range: "60Mtr",
    image: "/ip/4mp/VMDS-Q11.svg",
    price: "₹5,900",
   features: [
  "1/2.7\" 4MP PS CMOS Image Sensor (0.9407 centimeters)",
  "Max. 4MP (2688 × 1520) @1–25/30 fps",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Support Quad Stream",
  "WDR (120dB), Day/Night (ICR), 3D NR, ROI, Defog, BLC, HLC, AWB, AGC",
  "2.7mm ~ 13.5mm Motorized Lens",
  "IR Range of 60 Mtr.",
  "Support Starlight Technology",
  "Support Built-in Mic",
  "Micro SD, IP67, IK10, PoE"
]
,
  },
  {
    model: "CP-UNC-TE41ZL6C-VMDS-Q",
    type: "4MP Network IR Bullet Camera",
    range: "60Mtr",
    image:"/ip/4mp/ZL5C-VMD-Q.svg",
    price: "₹6,200",
   features: [
  "1/2.7\" 4MP PS CMOS Image Sensor (0.9407 centimeters)",
  "Max. 4MP (2688 × 1520) @1–20 fps / (2560 × 1440) @1–25/30 fps",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Support Quad Stream",
  "WDR (120dB), Day/Night (ICR), 3D NR, ROI, BLC, HLC, AWB, AGC",
  "2.7mm–13.5mm Motorized Lens",
  "IR Range of 50 Mtr.",
  "Support Starlight Technology",
  "Micro SD Card, IP67, IK10, PoE"
]
,
  },
  {
    model: "CP-UNC-VC41ZL5C-VMD-Q",
    type: "4MP Network IR Vandal Dome Camera",
    range: "50Mtr",
    image: "/ip/4mp/L5C-VMD-Q.svg",
    price: "₹6,800",
 features: [
  "1/2.7\" 4MP PS CMOS Image Sensor (0.9407 centimeters)",
  "Max. 4MP (2688 × 1520) @1–20 fps / (2560 × 1440) @1–25/30 fps",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Support Quad Stream",
  "WDR (120dB), Day/Night (ICR), 3D NR, ROI, BLC, HLC, AWB, AGC",
  "2.7mm–13.5mm Motorized Lens",
  "IR Range of 50 Mtr.",
  "Support Starlight Technology",
  "Micro SD Card, IP67, IK10, PoE"
]

,
  },
  {
    model: "CP-UNC-TT41L3-VMD-Q",
    type: "4MP IR AI Enforcement Camera",
    range: "AI",
    image: "/ip/4mp/L3-VMD-Q.svg",
    price: "₹9,500",
  features: [
  "1/1.8\" 4MP CMOS Image Sensor (1.411 centimeters)",
  "Max. 4MP (2688 × 1520) @30 fps",
  "H.265, H.264M, H.264H, H.264B, MJPEG",
  "10mm–50mm Motorized Lens",
  "WDR (140dB), Day/Night (ICR), 3D NR, BLC, HLC",
  "IR Range of 30 Mtr.",
  "IP67, IK10"
],
  },
  {
    model: "CP-UNC-VE41ZL5C-VMDS-Q",
    type: "4MP Network IR Vandal Dome Camera",
    range: "50Mtr",
    image:  "/ip/4mp/L6C-D-Q.svg",
    price: "₹6,900",
   features: [
  "1/2.8\" 4MP PS CMOS Image Sensor (0.9071 centimeters)",
  "Max. 4MP (2688 × 1520) @1–30 fps / 4MP (2560 × 1440) @1–25/30 fps",
  "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
  "Support Triple Stream",
  "WDR (120dB), Day/Night (ICR), 3D NR, AWB, AGC, BLC, HLC",
  "6mm Fixed Lens",
  "Support Built-in Mic",
  "IR Range of 60 Mtr.",
  "IP67, PoE"
]
,
  },
];


 
  const filteredCameras = vedaan4mpCameras.filter((cam) =>
    cam.model.toLowerCase().includes(search.toLowerCase())
  );


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
  <div className="min-h-screen bg-gray-50 py-10 px-6">
  <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
    Vedaan 4MP Network Cameras
  </h1>

  {/* Search Input */}
  <div className="max-w-md mx-auto mb-8">
    <input
      type="text"
      placeholder="Search by model..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  </div>

  {/* Camera Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {filteredCameras.map((cam) => (
      <div
        key={cam.model}
        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-4 flex flex-col h-full"
      >
        {/* Image */}
        <div className="overflow-hidden rounded-lg">
          <Image
            src={cam.image}
            alt={cam.model}
            width={400}
            height={250}
            className="rounded-lg hover:scale-105 transition-transform duration-300 object-cover w-full h-48"
          />
        </div>

        {/* Title & Type */}
        <h2 className="text-lg font-semibold text-gray-900 mt-3">{cam.model}</h2>
        <p className="text-sm text-gray-600">{cam.type}</p>

        {/* Range & Price */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full">
            {cam.range}
          </span>
          <span className="text-lg font-bold text-green-600">{cam.price}</span>
        </div>

        {/* Features List */}
        <div className="mt-2 flex-1">
          {cam.features.map((feature, idx) => (
            <div key={idx} className="flex items-start text-sm text-gray-700 mb-1">
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Buy Now Button at bottom */}
        <div className="mt-4">
          <Link href="/contact">
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
}
