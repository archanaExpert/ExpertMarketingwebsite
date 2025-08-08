import { CheckCircle } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const networkCameras = [
  {
    name: "2 MP Network Cameras",
    image: "/productmp2/hdcamera/ip2mp.svg",
    link: "/product2mp/cametas/2mp/ip/2mp",
    features: [
      "Full HD 1080p Clarity",
      "IR Night Vision up to 30m",
      "Compact Design & PoE Support",
      "Ideal for Small Business Monitoring"
    ],
  },
  {
    name: "4 MP Network Cameras",
    image: "/productmp2/hdcamera/ip4mp.svg",
    link: "/product2mp/cametas/2mp/ip/4mp",
    features: [
      "2K Resolution Output",
      "Enhanced Digital Zoom",
      "Advanced Motion Detection",
      "Perfect for Medium-scale Offices"
    ],
  },
  {
    name: "5 MP Network Cameras",
    image: "/productmp2/hdcamera/ip5mp.svg",
    link: "/product2mp/cametas/2mp/ip/5mp",
    features: [
      "Crystal Clear 5MP Footage",
      "WDR & Night Vision",
      "Weatherproof (IP67 Rated)",
      "Great for Indoor/Outdoor Use"
    ],
  },
  {
    name: "6 MP Network Cameras",
    image: "/productmp2/hdcamera/ip6mp.svg",
    link: "/product2mp/cametas/2mp/ip/6mp",
    features: [
      "High Detail Surveillance",
      "Wide Coverage Area",
      "Smart Video Analytics",
      "Suited for Large Premises"
    ],
  },
  {
    name: "8 MP (4K) Network Cameras",
    image: "/productmp2/hdcamera/ip8mp.svg",
    link: "/product2mp/cametas/2mp/ip/8mp",
    features: [
      "4K Ultra HD Quality",
      "Smart Detection & Alerts",
      "AI-based Video Processing",
      "Best for Enterprises & Projects"
    ],
  },
  {
    name: "Project Models",
    image: "/productmp2/hdcamera/p.svg",
    link: "/product2mp/cametas/2mp/ip/projects",
    features: [
      "Tailored for Enterprise Needs",
      "Integrated AI & Smart Features",
      "Multi-Camera Setup Support",
      "Compatible with VMS & Cloud"
    ],
  }
];

export default function IpCameras() {
  return (
    <>
      

      <section className="py-5 px-6 md:px-20 bg-white min-h-[80vh]">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
         Network IP Cameras by Resolution | Project-Ready Models<span className="block w-72 h-1 bg-blue-800 mx-auto mt-4 rounded-full"></span>
        </h1>

     <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {networkCameras.map((cam, index) => (
    <Link
      href={cam.link}
      key={index}
      className="group bg-blue-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
   
      <div className="relative w-full h-52">
        <Image
          src={cam.image}
          alt={cam.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

  
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
          {cam.name}
        </h2>
        <ul className="space-y-1 text-sm text-gray-700">
          {cam.features.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle size={18} className="text-green-500 mt-1" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  ))}
</div>

      </section>
    </>
  );
}
