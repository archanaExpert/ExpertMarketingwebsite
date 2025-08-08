
'use client';

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const resolutions = [
  {
    name: "2.4 MP Cameras",
    image: "/productmp2/hdcamera/2mp.svg",
    link: "/product2mp/hd/2.4mp",
    features: [
      "Budget-friendly Surveillance",
      "720p to 1080p HD Output",
      "IR Night Vision up to 30m",
      "Ideal for Small Homes & Offices"
    ],
  },
  {
    name: "5 MP Cameras",
    image: "/productmp2/hdcamera/54mp.svg",
    link: "/product2mp/hd/5mp",
    features: [
      "Crystal Clear 2K Resolution",
      "Wider Field of View",
      "Up to 40m IR Night Vision",
      "Best for Shops, Villas & Buildings"
    ],
  },
  {
    name: "4K Ultra HD Cameras",
    image: "/productmp2/hdcamera/4k.svg",
    link: "/product2mp/hd/4k",
    features: [
      "Ultra HD 8MP Clarity",
      "Smart Motion Detection",
      "Ideal for Large Areas & Institutions",
      "Supports Cloud & NVR Storage"
    ],
  }
];

export default function CameraResolutions() {
  return (
    <section className="py-10 px-6 md:px-20 bg-white min-h-[80vh]">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        Camera Resolutions | HD, 2K & 4K Surveillance<span className="block w-72 h-1 bg-blue-800 mx-auto mt-4 rounded-full"></span>

      </h1>

      <div className="grid gap-10 md:grid-cols-3">
        {resolutions.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            aria-label={`View details of ${item.name}`}
            className="group bg-red-50 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="rounded-t-2xl object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-red-600 transition">
                {item.name}
              </h2>
              <ul role="list" className="space-y-1 text-gray-700 text-sm">
                {item.features.map((point, i) => (
                 <li key={i} className="flex items-start gap-2 text-gray-800">
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
  );
}
