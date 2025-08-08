import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const nvrs = [
  {
    name: "4 Ch. - Network Video Recorder (NVR)",
    image: "/productmp2/hdcamera/nvr.svg",
    link: "/product2mp/network/4ch",
    features: [
      "Supports 2MP IP Cameras",
      "H.265 Compression & Real-Time Recording",
      "Mobile Access via iCMOB/gCMOB",
    ],
  },
  {
    name: "8 Ch. - Network Video Recorder (NVR)",
    image: "/productmp2/hdcamera/8ch.svg",
    link: "/product2mp/network/8ch",
    features: [
      "Supports 4MP IP Cameras",
      "AI Integration: Face Detection, SMD",
      "Up to 4 SATA HDDs (Up to 10TB Each)",
    ],
  },
  {
    name: "16 Ch. - Network Video Recorder (NVR)",
    image: "/productmp2/hdcamera/ch.svg",
    link: "/product2mp/network/16ch",
    features: [
      "High-Resolution 5MP Recording",
      "Smart Search & Backup Options",
      "Multi-Brand Camera Compatibility",
    ],
  },
  {
    name: "32 Ch. - Network Video Recorder (NVR)",
    image: "/productmp2/hdcamera/16.svg",
    link: "/product2mp/network/32ch",
    features: [
      "6MP Input & Recording Support",
      "HDMI/VGA Output for Live Monitoring",
      "AI by Camera: People Counting, Heat Maps",
      "Redundant Recording with RAID",
    ],
  },
  {
    name: "64 Ch. - Network Video Recorder (NVR)",
    image: "/productmp2/hdcamera/64.svg",
    link: "/product2mp/network/64ch",
    features: [
      "Supports up to 8MP / 4K IP Cameras",
      "384 Mbps Bandwidth | 64 Channel Support",
      "Advanced AI Analytics: ANPR, Intrusion, Face Recog.",
      "8 SATA HDDs (Up to 20TB Each), RAID 0/1/5/6/10",
    ],
  },
];

export default function Video() {
  return (
    <>
      <Head>
        <title>NVR Models | Expert Surveillance Solutions</title>
      </Head>

      <section className="py-5 px-6 md:px-20 bg-white min-h-[80vh]">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Network Video Recorder (NVR) Models by Resolution<span className="block w-72 h-1 bg-blue-800 mx-auto mt-4 rounded-full"></span>
        </h1>

     <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {nvrs.map((nvr, index) => (
    <Link
      href={nvr.link}
      key={index}
      className="group bg-orange-50 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
     
      <div className="relative w-full h-52">
        <Image
          src={nvr.image}
          alt={nvr.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

     
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
          {nvr.name}
        </h2>
        <ul className="space-y-1 text-sm text-gray-700">
          {nvr.features.map((point, i) => (
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
