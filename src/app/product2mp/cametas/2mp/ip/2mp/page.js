import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
const vedaan2mpCameras = [
  {
    model: "CP-UNC-DA21L3C-Q",
    name: "2MP Network IR Dome Camera - 30Mtr",
    image: "/ip/2mp/DA21L3C-Q.svg",
    price: "₹2,499",
    features:  [
    "1/2.8\" 2MP PS CMOS Image Sensor (0.9071 cm)",
    "Max. 2MP (1920 × 1080) @ 1–25/30fps",
    "Supports Instastream, H.265, H.264, H.264H, H.264B, MJPEG compression",
    "Triple stream support",
    "Built-in Microphone",
    "3.6mm Lens (2.8mm optional)",
    "DWDR, Day/Night (ICR), 3D NR, ROI, AWB, AGC, BLC, HLC, Digital watermarking",
    "IR Range up to 30 meters",
    "Power over Ethernet (PoE)",
    "IP67 weatherproof rating"
  ],
  },
  {
    model: "CP-UNC-TA21L3C-Q",
    name: "2MP Network IR Bullet Camera - 30Mtr",
    image: "/ip/2mp/TA21L3C-Q.svg",
    price: "₹2,799",
    features: [
    '1/2.8" 2MP PS CMOS Image Sensor (0.9071 centimeters)',
    "Max. 2MP (1920 × 1080)@1-25/30fps",
    "Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
    "Support Triple stream",
    "3.6mm fixed Lens",
    "DWDR, Day/Night (ICR), 3D NR, ROI, AWB, AGC, BLC, HLC, Digital watermarking",
    "IR Range of 30 Mtr.",
    "PoE",
    "IP67"
  ]
  },
  {
    model: "CP-UNC-TA21L6C-Q",
    name: "2MP Network IR Bullet Camera - 60Mtr",
    image: "/ip/2mp/TA21L6C-Q.svg",
    price: "₹3,199",
    features:  [
  '1/2.7" 2MP PS CMOS Image Sensor (0.9407 Centimeters)',
  'Max. 2MP (1920 x 1080)@25/30fps',
  'Instastream, H.265, H.264, H.264H, H.264B, MJPEG',
  'Support Triple stream',
  'DWDR, Day/Night(ICR), 3D NR, AWB, AGC, BLC, HLC',
  '6mm Fixed Lens',
  'Support Built-in Mic',
  'IR Range of 60 Mtr.',
  'IP67 Weatherproof',
  'PoE Support'
]
  },
  {
    model: "CP-UNC-WE21L3C-MDS-Q",
    name: "2MP Network IR Wedge Camera - 30Mtr",
    image: "/ip/2mp/WE21L3C-MDS-Q.svg",
    price: "₹2,999",
    features: [
  '1/2.8” 2MP PS CMOS Image Sensor (0.9071 centimeter)',
  '1920(H) × 1080(V) @25/30 fps',
  'H.265, H.264, H.264H, H.264B, MJPEG',
  'Rotation mode, WDR (120dB), 3D DNR, HLC, BLC, AWB',
  '2.8mm fixed lens (3.6mm optional)',
  'IR Range of 30 Mtr.',
  'Built-in Mic',
  'IP67 Weatherproof',
  'IK10 Vandal Resistant',
  'Micro SD Card Support',
  'PoE Support'
]
  },
  {
    model: "CP-UNC-TE21ZL6C-VMDS-Q",
    name: "2MP Network IR Bullet Camera - 60Mtr",
    image: "/ip/2mp/VMDS-Q.svg",
    price: "₹3,499",
    features: [
  '1/2.8” 2MP PS CMOS Image Sensor (0.9071 centimeter)',
  '1920(H) × 1080(V) @25/30 fps',
  'Instastream, H.264+, H.265, H.264, H.264H, H.264B, MJPEG',
  'Support Quad Stream',
  'WDR (120dB), Two-Way Talk, Day/Night (ICR), 3D DNR, ROI, Defog, AWB, AGC, HLC, BLC',
  '2.7mm–13.5mm Motorized Lens',
  'IR Range of 60 Mtr.',
  'Support Starlight Technology',
  'Built-in Mic',
  'Digital Watermarking',
  'Micro SD Card Support',
  'IP67 Weatherproof',
  'IK10 Vandal Resistant',
  'PoE Support'
]
  },
  {
    model: "CP-UNC-VE21ZL4C-VMDS-Q",
    name: "2MP Network IR Vandal Dome Camera - 40Mtr",
    image: "/ip/2mp/VMDS-Q1.svg",
    price: "₹3,699",
    features:  [
  '1/2.8” 2MP PS CMOS Image Sensor (0.9071 Centimeter)',
  '1920(H) × 1080(V) @25/30 fps',
  'Instastream, H.265, H.264+, H.264, H.264H, H.264B, MJPEG',
  'Support Quad Stream',
  'WDR (120dB), Day/Night (ICR), 3D DNR, ROI, Defog, BLC, HLC, AWB, AGC',
  '2.7mm ~ 13.5mm Motorized Lens',
  'IR Range of 40 Mtr.',
  'Support Starlight Technology',
  'Built-in Mic',
  'Digital Watermarking',
  'Micro SD Card Support',
  'IP67 Weatherproof',
  'IK10 Vandal Resistant',
  'PoE Support'
]
  },
  {
    model: "CP-UNC-BE21C-VMDS-Q",
    name: "2MP Full HD Network Box Camera",
    image:"/ip/2mp/C-VMDS-Q.svg",
    price: "₹4,199",
    features:[
  '1/2.8” 2MP PS CMOS Image Sensor (0.9071 centimeter)',
  '1920(H) × 1080(V) @25/30 fps',
  'C/CS Mount Lens',
  'Instastream, H.265, H.264+, H.264, H.264B, H.264H, MJPEG',
  'Support Quad Stream',
  'WDR (120dB), ICR, 3D DNR, Defog, ROI, EIS, AWB, AGC, BLC, HLC',
  'Support Micro SD Card',
  'Digital Watermarking',
  'Built-in Mic',
  'PoE Support'
]
  }
];


export default function Vedaan2MPPage() {
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

    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
  <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
    Vedaan 2MP - Network Cameras
  </h1>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
    {vedaan2mpCameras.map((camera) => (
      <div
        key={camera.model}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-orange-400 transition flex flex-col"
      >
        <Image
          src={camera.image}
          alt={camera.model}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
        />
        <div className="flex flex-col justify-between flex-grow p-5">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{camera.model}</h2>
            <p className="text-gray-600 mb-2">{camera.name}</p>
           <ul className="text-sm text-gray-700 space-y-1">
  {camera.features.map((feature, index) => (
    <li key={index} className="flex items-start gap-2">
      <span className="text-orange-500 mt-1">•</span>
      <span className="break-words">{feature}</span>
    </li>
  ))}
</ul>

            <p className="text-lg font-bold text-green-600 mb-4">{camera.price}</p>
          </div>
<Link href="/contact">
          <button className="mt-auto w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded">
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
