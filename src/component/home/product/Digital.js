import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const dvrs = [
  {
    name: "4 Channel DVR",
    image: "/productmp2/hdcamera/d1.svg",
    link: "/product2mp/digital/4ch",
    features: [
      "Supports 4 Analog HD Cameras",
      "H.264+/H.265 Compression",
      "HDMI/VGA Output",
      "Mobile View via iCMOB/gCMOB"
    ],
  },
  {
    name: "8 Channel DVR",
    image: "/productmp2/hdcamera/d2.svg",
    link: "/product2mp/digital/8ch",
    features: [
      "Supports 8 Camera Inputs",
      "Real-Time Recording & Playback",
      "Up to 2 SATA HDDs Supported",
      "Backup via USB or Network"
    ],
  },
  {
    name: "16 Channel DVR",
    image: "/productmp2/hdcamera/d31.svg",
    link: "/product2mp/digital/16ch",
    features: [
      "Supports 16 HD Analog Channels",
      "Motion Detection & Alerts",
      "HDMI/VGA Simultaneous Output",
      "CMS Software Integration"
    ],
  },
  {
    name: "32 Channel DVR",
    image: "/productmp2/hdcamera/32d.svg",
    link: "/product2mp/digital/32ch",
    features: [
      "Connects up to 32 Cameras",
      "Multiple Video Formats Supported",
      "Supports RAID & Network Storage",
      "Ideal for Enterprises & Institutions"
    ],
  }
];

export default function Digital() {
  return (
    <>
      <Head>
        <title>DVR Models | Expert Surveillance Solutions</title>
      </Head>

      <section className="py-5 px-6 md:px-20 bg-white min-h-[80vh]">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Digital Video Recorder (DVR) Models by Channel<span className="block w-72 h-1 bg-blue-800 mx-auto mt-4 rounded-full"></span>
        </h1>

       <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {dvrs.map((dvr, index) => (
    <Link
      href={dvr.link}
      key={index}
      className="group bg-green-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >

      <div className="relative w-full h-52">
        <Image
          src={dvr.image}
          alt={dvr.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

   
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
          {dvr.name}
        </h2>
        <ul className="space-y-1 text-sm text-gray-700">
          {dvr.features.map((point, i) => (
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
