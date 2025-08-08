import Image from "next/image";
import Link from "next/link";

const cctvCameras5MP = [
  {
    model: "CP-URC-DC51PL3C",
    name: "5MP IR Dome Camera - 30Mtr.",
    price: "₹2,450",
    image: "/5 mp/DC51PL3C.svg",
    type: "Dome",
    irRange: "30Mtr",
    wdr: false,
    resolution: "5MP",
    specialFeatures: [
  "1/3\" 5MP CMOS Image Sensor (0.84667 centimeters)",
  "DWDR, Day/Night (ICR), 2D DNR, BLC",
  "3.6mm Fixed lens",
  "IR Range of 30 Mtrs.",
  "Support Built-in Mic, Smart IR"
]
,
  },
  {
    model: "CP-URC-TC51PL3C",
    name: "5MP IR Bullet Camera - 30Mtr.",
    price: "₹2,550",
    image: "/5 mp/TC51PL3C.svg",
    type: "Bullet",
    irRange: "30Mtr",
    wdr: false,
    resolution: "5MP",
   specialFeatures: [
  "1/3\" 5MP CMOS Image Sensor (0.84667 centimeters)",
  "DWDR, Day/Night (ICR), 2D DNR, BLC",
  "3.6mm Fixed lens",
  "IR Range of 30 Mtrs., Smart IR, IP67",
  "Support Built-in Mic"
]
,
  },
  {
    model: "CP-USC-TC51PL3C",
    name: "5MP IR Dome Camera - 30Mtr.",
    price: "₹2,480",
    image: "/5 mp/TC51PL3C1.svg",
    type: "Dome",
    irRange: "30Mtr",
    wdr: false,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP PS CMOS Image Sensor (0.9407 cm)",
  "Max. 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm optional)",
  "IR Range of 30 Mtrs., IP67",
  "Support Built-in Mic",
  "OSD Menu, control over coaxial cable, 2D-DNR",
  "CVI/CVBS/AHD/TVI Switchable"
],
  },
  {
    model: "CP-USC-DC51PL3C",
    name: "5MP IR Dome Camera - 30Mtr.",
    price: "₹2,480",
    image: "/5 mp/DC51PL3C1.svg",
    type: "Dome",
    irRange: "30Mtr",
    wdr: false,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP PS CMOS Image Sensor (0.9407 cm)",
  "DWDR, Day/Night (ICR), 2D DNR, BLC, HLC",
  "3.6mm Fixed lens (2.8mm Optional)",
  "IR Range of 30 Mtrs., Smart IR",
  "Support Built-in Mic"
]
,
  },
  {
    model: "CP-USC-TC51PL2-V5",
    name: "5MP IR Bullet Camera - 20Mtr.",
    price: "₹2,350",
    image:  "/5 mp/TC51PL2-V5.svg",
    type: "Bullet",
    irRange: "20Mtr",
    wdr: false,
    resolution: "5MP",
   specialFeatures: [
  "1/2.7” 5MP PS CMOS Image Sensor (0.9407cm)",
  "Max. 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-NR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm optional)",
  "IR Range of 20 Mtrs., IP67",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-USC-DC51PL2-V5",
    name: "5MP IR Dome Camera - 20Mtr.",
    price: "₹2,350",
    image: "/5 mp/DC51PL2-V5.svg",
    type: "Dome",
    irRange: "20Mtr",
    wdr: false,
    resolution: "5MP",
   specialFeatures: [
  "1/2.7” 5MP PS CMOS Image Sensor (0.9407cm)",
  "Max. 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-NR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm optional)",
  "IR Range of 20 Mtrs.",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-UVC-TB50ZL8C-DS",
    name: "5MP IR Bullet Camera",
    price: "₹3,850",
    image: "/5 mp/TB50ZL8C-DS.svg",
    type: "Bullet",
    irRange: "60Mtr",
    wdr: true,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP Progressive Scan CMOS Image Sensor (0.9407 cm)",
  "Max 25fps@5MP (16:9 video output)",
  "WDR (120dB), Day/Night (ICR), 3D-NR, Electronic Defog, AWB, AGC, BLC, HLC",
  "2.7mm~13.5mm Motorized Lens",
  "IR Range of 80 Mtrs., Smart IR, IP67",
  "CVI/CVBS/AHD/TVI Switchable",
  "Support Starlight Technology",
  "Support Built-in Mic"
]
,
  },
  {
    model: "CP-UVC-VB50ZL3-DS",
    name: "5MP IR Vandal Dome Camera",
    price: "₹3,950",
     image: "/5 mp/VB50ZL3-DS.svg",
    type: "Vandal Dome",
    irRange: "30Mtr",
    wdr: true,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP Progressive Scan CMOS Image Sensor (0.9407 cm)",
  "Max 25fps@5MP (16:9 video output)",
  "WDR (120dB), Day/Night (ICR), 3D-NR, Electronic Defog, AWB, AGC, BLC, HLC",
  "2.7mm~13.5mm Motorized Lens",
  "IR Range of 30 Mtrs., Smart IR, IP67, IK10",
  "CVI/CVBS/AHD/TVI Switchable",
  "Support Starlight Technology"
]
,
  },
  {
    model: "CP-USC-TC51PL2",
    name: "5MP IR Bullet Camera - 20Mtr.",
    price: "₹2,300",
      image: "/5 mp/TC51PL22.svg",
    type: "Bullet",
    irRange: "20Mtr",
    wdr: false,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP CMOS Image Sensor (0.9407cm)",
  "Max. 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm optional)",
  "IR Range of 20 Mtrs., IP67",
  "OSD Menu, control over coaxial cable, 2D-DNR",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-USC-TA50L8C-S",
    name: "5MP IR Bullet Camera",
    price: "₹3,700",
    image: "/5 mp/TA50L8C-S.svg",
    type: "Bullet",
    irRange: "60Mtr",
    wdr: true,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP Progressive Scan CMOS Image Sensor (0.9407 cm)",
  "Max 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm Fixed lens (2.8mm, 6mm, 8mm optional)",
  "IR Range of 80 Mtrs., Smart IR, IP67",
  "CVI/CVBS/AHD/TVI Switchable",
  "Support Built-in Mic",
  "Support Starlight Technology"
]
,
  },
  {
    model: "CP-USC-TC51ZL6-V3",
    name: "5MP IR Bullet Camera - 60Mtr.",
    price: "₹4,200",
    image: "/5 mp/TC51ZL6-V3.svg",
    type: "Bullet",
    irRange: "60Mtr",
    wdr: true,
    resolution: "5MP",
   specialFeatures: [
  "1/2.7” 5MP PS CMOS Image Sensor (0.9407cm)",
  "Max. 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-NR, AWB, AGC, BLC, HLC",
  "2.7mm ~ 12mm Motorized lens",
  "IR Range of 60 Mtrs., Smart IR, IP67",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-USC-TA50ML3-S",
    name: "5MP IR Bullet Camera",
    price: "₹3,600",
    image: "/5 mp/TA50ML3-S.svg",
    type: "Bullet",
    irRange: "50Mtr",
    wdr: true,
    resolution: "5MP",
   specialFeatures: [
  "1/2.7” 5MP Progressive Scan CMOS Image Sensor (0.9407 cm)",
  "Max 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm Fixed lens (2.8mm optional)",
  "IR Range of 30 Mtrs., Smart IR, IP67",
  "Support Starlight Technology",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-USC-DC51ZL4-V3",
    name: "5MP IR Dome Camera - 40Mtr.",
    price: "₹3,950",
    image:  "/5 mp/DC51ZL4-V3.svg",
    type: "Dome",
    irRange: "40Mtr",
    wdr: true,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP PS CMOS Image Sensor (0.9407 cm)",
  "Max. 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "2.7mm ~ 12mm Motorized Lens",
  "IR Range of 40 Mtrs., IP67",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-USC-TA50L3-S",
    name: "5MP IR Bullet Camera",
    price: "₹3,450",
    image:  "/5 mp/TA50L3-S.svg",
    type: "Bullet",
    irRange: "50Mtr",
    wdr: true,
    resolution: "5MP",
  specialFeatures: [
  "1/2.7” 5MP Progressive Scan CMOS Image Sensor (0.9407 cm)",
  "Max 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm Fixed Lens (2.8mm optional)",
  "IR Range of 30 Mtrs., Smart IR, IP67",
  "Support Starlight Technology",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-USC-TA50L5-S",
    name: "5MP IR Bullet Camera",
    price: "₹3,500",
    image: "/5 mp/TA50L5-S.svg",
    type: "Bullet",
    irRange: "50Mtr",
    wdr: true,
    resolution: "5MP",
  specialFeatures: [
  "1/2.7” 5MP Progressive Scan CMOS Image Sensor (6.858 cm)",
  "Max 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm Fixed Lens (6mm optional)",
  "IR Range of 40–50 Mtrs., Smart IR, IP67",
  "Support Starlight Technology",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-USC-DC51PL2",
    name: "5MP Full HD IR Dome Camera - 20Mtr.",
    price: "₹2,300",
    image:"/5 mp/DC51PL2.svg",
    type: "Dome",
    irRange: "20Mtr",
    wdr: false,
    resolution: "5MP",
   specialFeatures: [
  "1/2.7” 5MP CMOS Image Sensor (0.9407 cm)",
  "Max. 20fps@5MP",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm, 6mm optional)",
  "IR Range of 20 Mtrs., Smart IR",
  "OSD Menu, control over coaxial cable, 2D-DNR",
  "HD and SD output switchable"
]
,
  },
  {
    model: "CP-USC-TC51PL2C",
    name: "5MP IR Bullet Camera - 20Mtr.",
    price: "₹2,380",
    image:"/5 mp/TC51PL2C.svg",
    type: "Bullet",
    irRange: "20Mtr",
    wdr: false,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP CMOS Image Sensor (0.9407 cm)",
  "Max. 25fps@5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm optional)",
  "IR Range of 20 Mtrs., IP67",
  "OSD Menu, control over coaxial cable, 2D-DNR",
  "CVI/CVBS/AHD/TVI Switchable",
  "Support Built-in Mic"
]
,
  },
  {
    model: "CP-USC-DC51PL2C",
    name: "5MP IR Dome Camera - 20Mtr.",
    price: "₹2,380",
    image: "/5 mp/DC51PL2.svg",
    type: "Dome",
    irRange: "20Mtr",
    wdr: false,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP CMOS Image Sensor (0.9407 cm)",
  "Max. 25fps @ 5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm optional)",
  "IR Range of 20 Mtrs.",
  "OSD Menu, control over coaxial cable",
  "CVI/CVBS/AHD/TVI Switchable",
  "Support Built-in Mic"
]
,
  },
  {
    model: "CP-USC-TC51PL2-V3",
    name: "5MP IR Bullet Camera - 20Mtr.",
    price: "₹2,390",
    image: "/5 mp/TC51PL2-V3.svg",
    type: "Bullet",
    irRange: "20Mtr",
    wdr: false,
    resolution: "5MP",
    specialFeatures: [
  "1/2.7” 5MP CMOS Image Sensor (0.9407 cm)",
  "Max. 25fps @ 5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm optional)",
  "IR Range of 20 Mtrs., IP67",
  "OSD Menu, control over coaxial cable",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-USC-DC51PL2-V3",
    name: "5MP IR Dome Camera - 20Mtr.",
    price: "₹2,390",
    image: "/5 mp/DC51PL2-V3.svg",
    type: "Dome",
    irRange: "20Mtr",
    wdr: false,
    resolution: "5MP",
   specialFeatures: [
  "1/2.7” 5MP CMOS Image Sensor (0.9407 cm)",
  "Max. 25fps @ 5MP (16:9 video output)",
  "DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC",
  "3.6mm fixed lens (2.8mm optional)",
  "IR Range of 20 Mtrs.",
  "OSD Menu, control over coaxial cable, 2D-DNR",
  "CVI/CVBS/AHD/TVI Switchable"
]
,
  },
  {
    model: "CP-UVC-EB50L1C-D",
    name: "5MP WDR IR HDCVI FishEye Camera - 10 Mtr.",
    price: "₹5,800",
    image: "/5 mp/DA50ZL6C-DS.svg",
    type: "FishEye",
    irRange: "10Mtr",
    wdr: true,
    resolution: "5MP",
    specialFeatures: [
  "1/2.8” 5MP Progressive Scan CMOS (7.112 cm)",
  "Max. 20fps @ 5MP",
  "Panoramic fisheye lens",
  "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
  "Support Built-in Mic",
  "OSD Menu, control over coaxial cable, 2D/3D-DNR",
  "IR Range of 10 Mtr., Smart IR"
]
,
  },
  {
    model: "CP-USC-TA50ZL6C-DS",
    name: "5MP WDR IR Cosmic Bullet Camera - 60Mtr.",
    price: "₹5,950",
    image: "/5 mp/TA50ZL6C-DS.svg",
    type: "Bullet",
    irRange: "60Mtr",
    wdr: true,
    resolution: "5MP",
    specialFeatures: [
  '1/2.7" 5MP CMOS Image Sensor (6.858 cm)',
  'Max. 20fps @ 5MP',
  '2.7–12mm Motorized Lens',
  'WDR (100dB), Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC',
  'Starlight Technology',
  'Max. IR Length 60m, Smart IR',
  'Built-in Mic',
  'IP67 Rated',
  'OSD Menu, Control Over Coaxial Cable, 2D-DNR',
  'HD and SD Output Switchable'
]
,
  },
  {
    model: "CP-USC-DA50ZL6C-DS",
    name: "5MP WDR IR Cosmic Dome Camera - 60Mtr.",
    price: "₹5,950",
    image: "/5 mp/DA50ZL6C-DS.svg",
    type: "Dome",
    irRange: "60Mtr",
    wdr: true,
    resolution: "5MP",
    specialFeatures: [
  '1/2.7" 5MP CMOS Image Sensor (6.858 cm)',
  'Max. 20fps @ 5MP',
  '2.7–12mm Motorized Lens',
  'WDR (100dB), Day/Night (ICR), 2D-DNR, AWB, AGC, BLC, HLC',
  'Starlight Technology',
  'Max. IR Length 60m, Smart IR',
  'Built-in Mic',
  'IP67 Rated',
  'OSD Menu, Control Over Coaxial Cable',
  'HD and SD Output Switchable'
]
,
  },
];


export default function FiveMPCameras() {
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
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Crystal Clear HD Surveillance</h1>
    <p className="text-lg md:text-xl max-w-2xl mx-auto">
      Monitor your property 24/7 with CP PLUS HD Cameras—offering high-definition clarity, night vision, and reliable security.
    </p>
  </div>
</section>
 <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
  <h1 className="text-3xl font-bold text-center mb-8">5MP CCTV Cameras</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {cctvCameras5MP.map((cam, i) => (
      <div
        key={cam.model}
        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
      >
        <Image
          src={cam.image}
          alt={cam.name}
          width={400}
          height={250}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold">{cam.name}</h3>
            <p className="text-sm text-gray-600">{cam.model}</p>
            <p className="text-sm text-gray-600 mt-1">{cam.desc}</p>

            <ul className="text-sm text-gray-700 mt-2 list-disc list-inside space-y-1">
              {cam.specialFeatures?.map((specialFeatures, idx) => (
                <li key={idx}>{specialFeatures}</li>
              ))}
            </ul>

            <p className="text-orange-600 font-semibold mt-3">{cam.price}</p>
          </div>

          <div className="mt-4">
             <Link href="/contact">
            <button className="mt-3 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition">
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
  )}