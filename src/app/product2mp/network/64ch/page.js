"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const orange64ChNvrData = [
  {
    model: "CP-UNR-4K564R8-FI",
    description: "64Ch. AI Network Video Recorder",
    price: "₹85,000",
    features: [
      "Up to 64 Channel IP camera input",
      "Max. 384 Mbps incoming/recording/outgoing bandwidth",
      "Instastream, H.265, H.264+, H.264, MJPEG codec decoding",
      "AI by Recorder: 2 Channel face detection & recognition, 20 face DBs, 20,000 face images",
      "4 Channel perimeter protection, 8 Channel SMD Plus",
      "AI by Camera: Face detection, Perimeter protection, SMD Plus, Metadata, ANPR",
      "Advanced analytics: Stereo analysis, Heat map, People counting",
      "Support 8 SATA HDDs up to 20TB Each",
      "4 USB Ports (2 front USB 2.0, 2 rear USB 3.0)",
      "Support RAID 0/1/5/6/10",
      "Support N+M cluster setup",
      "Mobile Software: iCMOB, gCMOB",
      "CMS Software: KVMS Pro Lite",
    ],
    image: "/network/64ch/4K564R8-FI.svg",
  },
  {
    model: "CP-UNR-4K5644-FI",
    description: "64Ch. 4K AI Network Video Recorder",
    price: "₹88,000",
    features: [
      "Up to 64 channel IP camera input",
      "Max. 384 Mbps incoming/recording/outgoing bandwidth",
      "Max. 32 × 1080p@30 fps or 32 × 2MP@30 fps decoding capability",
      "Instastream, H.265, H.264, MJPEG codec decoding",
      "AI by Recorder: 2 Channel face detection & recognition, up to 20 face databases and 20,000 face images",
      "4 Channel Perimeter protection, 8 Channel SMD Plus",
      "Support 4 SATA HDDs up to 20TB Each",
      "3 USB Ports (2 USB 3.0 Ports)",
      "2 HDMI / 2 VGA simultaneous video output",
      "Mobile Software: iCMOB, gCMOB",
      "CMS Software: KVMS Pro Lite",
    ],
    image: "/network/64ch/4K5644-FI.svg",
  },
  {
    model: "CP-UNR-4K5644-V2",
    description: "64 Ch. 4K Network Video Recorder",
    price: "₹89,000",
    features: [
      "Up to 64 channel IP camera input",
      "Max 320Mbps incoming bandwidth",
      "Instastream / H.265 / Smart H.264+ / H.264 / MJPEG codec decoding",
      "Up to 12MP resolution preview and playback",
      "Support 4 SATA HDDs up to 10TB Each",
      "3 USB Ports (2 USB 3.0, 1 USB 2.0)",
      "2 HDMI / 2 VGA simultaneous video output",
      "Support Multi-brand network cameras",
      "ONVIF Version 2.4 conformance",
      "Mobile Software: iCMOB, gCMOB",
      "CMS Software: KVMS Pro",
    ],
    image: "/network/64ch/4K5644-FI.svg",
  },
  {
    model: "CP-UNR-4K5648-V2",
    description: "64 Ch. 4K Network Video Recorder",
    price: "₹90,000",
    features: [
      "Up to 64 channel IP camera input",
      "Max 320Mbps incoming bandwidth",
      "Instastream / H.265 / Smart H.264+ / H.264 / MJPEG codec decoding",
      "Up to 12MP resolution preview and playback",
      "Support 8 SATA HDDs up to 10TB Each",
      "4 USB Ports (2 USB 3.0), 1 eSATA port",
      "2 HDMI / 2 VGA simultaneous video output",
      "Support Multi-brand network cameras",
      "ONVIF Version 2.4 conformance",
      "Mobile Software: iCMOB, gCMOB",
    ],
    image: "/network/64ch/4K5648-V2.svg",
  },
  {
    model: "CP-UNR-4K664R8-EV2",
    description: "64 Ch. 4K Network Video Recorder",
    price: "₹91,000",
    features: [
      "Up to 64 channel IP camera input",
      "Max 320Mbps incoming bandwidth",
      "Instastream / H.265 / Smart H.264+ / H.264 / MJPEG codec decoding",
      "Up to 12MP resolution preview and playback",
      "Support 8 SATA HDDs up to 10TB Each",
      "4 USB Ports (2 USB 3.0), 1 eSATA port",
      "2 HDMI / 2 VGA simultaneous video output",
      "Support Multi-brand network cameras",
      "ONVIF Version 2.4 conformance",
      "Mobile Software: iCMOB, gCMOB",
    ],
    image: "/network/64ch/4K664R8-EV2.svg",
  },
  {
    model: "CP-UNR-4K664R16-V2",
    description: "64 Ch. 4K Network Video Recorder",
    price: "₹94,000",
    features: [
      "Up to 64 channel IP camera input",
      "Max 320Mbps incoming bandwidth",
      "Instastream / H.265 / Smart H.264+ / H.264 / MJPEG codec decoding",
      "Up to 12MP resolution preview and playback",
      "Support 8 SATA HDDs up to 10TB Each",
      "4 USB Ports (2 USB 3.0), 1 eSATA port",
      "2 HDMI / 2 VGA simultaneous video output",
      "Support Multi-brand network cameras",
      "ONVIF Version 2.4 conformance",
      "Mobile Software: iCMOB, gCMOB",
    ],
    image: "/network/64ch/4K664R16-V2.svg",
  },
  {
    model: "CP-UNR-4K664R16-EDV2",
    description: "64 Ch. H.265 4K Network Video Recorder",
    price: "₹95,000",
    features: [
      "Up to 64 channel IP camera input",
      "Up to 12MP resolution preview and playback",
      "Max 384Mbps incoming bandwidth",
      "Support 16 SATA III ports, up to 8TB Each",
      "4 USB Ports (2 USB 3.0), 1 eSATA port",
      "Smart Tracking and Intelligent Video",
      "2 HDMI / 1 VGA simultaneous video output",
      "Support Multi-brand network cameras",
      "7-inch HD LCD Monitor",
      "Support RAID 0 / 1 / 5 / 10",
      "Redundant power supply module adopted",
      "ONVIF Version 2.4 conformance",
      "Mobile Software: iCMOB, gCMOB",
      "CMS Software: KVMS Pro",
    ],
    image: "/network/64ch/4K664R16-EDV2.svg",
  },
  {
    model: "CP-UNR-4K664R16-EV2",
    description: "64 Ch. 4K Network Video Recorder",
    price: "₹92,500",
    features: [
      "Up to 64 channel IP camera input",
      "Up to 12MP resolution preview and playback",
      "Access, storage or forwarding at 384 Mbps",
      "Support 16 SATA III ports, up to 10TB Each",
      "4 USB Ports (2 USB 3.0), 1 eSATA port",
      "AI-by-camera functions: perimeter protection, face detection and recognition, SMD Plus, video metadata, ANPR and 3D behavior analysis",
      "2 Simultaneous video output for VGA and HDMI1; 4K heterogeneous output for the 2 HDMI ports",
      "Remote configuration and management of IPCs (set parameters, acquire info, batch upgrade for same model)",
      "Support RAID 0 / 1 / 5 / 6 / 10",
      "Redundant power supply module adopted",
      "Mobile Software: iCMOB, gCMOB",
      "CMS Software: KVMS, KVMS Pro",
    ],
    image: "/network/64ch/4K664R16-EV2.svg",
  },
  {
    model: "CP-UNR-4K664R8-V2",
    description: "64 Ch. 4K Network Video Recorder",
    price: "₹89,500",
    features: [
      "Up to 64 channel IP camera input",
      "Up to 12MP resolution preview and playback",
      "Max 384Mbps incoming bandwidth",
      "Support 8 SATA HDDs up to 16TB Each",
      "4 USB Ports (2 USB 3.0), 1 eSATA port",
      "2 HDMI / 1 VGA simultaneous video output",
      "Support Multi-brand network cameras",
      "Support RAID 0 / 1 / 5 / 6 / 10",
      "ONVIF Version 2.4 conformance",
      "Smart Tracking and Intelligent Video",
      "Mobile Software: iCMOB, gCMOB",
      "CMS Software: KVMS, KVMS Pro",
    ],
    image: "/network/64ch/4K664R8-V2.svg",
  },
  {
    model: "CP-UNR-4K564R8-EI",
    description: "64Ch. 4K AI Network Video Recorder",
    price: "₹87,000",
    features: [
      "Up to 64 channel IP camera input",
      "Max. Decoding capability: 32 × 1080p@30fps",
      "Max. 512Mbps Incoming / 512Mbps Recording / 512Mbps Outgoing bandwidth",
      "AI by Recorder: 8 channel face detection and recognition, up to 20 face databases and 200,000 face images",
      "AI by Recorder: 8 channel metadata, 24 channel perimeter protection, 32 channel SMD Plus",
      "AI by Camera: Face detection and recognition, Perimeter protection, SMD Plus, Metadata, ANPR, Stereo analysis, Heat map, People counting",
      "Support redundant power supply",
      "Support RAID 0 / 1 / 5 / 6 / 10, N+M cluster",
      "Support 8 SATA HDDs up to 20TB Each",
      "4 USB Ports",
      "2 HDMI / 2 VGA simultaneous video output",
      "Mobile Software: iCMOB, gCMOB",
      "CMS Software: KVMS Pro Lite",
    ],
    image: "/network/64ch/4K564R8-EI.svg",
  },
];

const Orange64ChNVR = () => {
  return (
    <>
     
      <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/dex.svg"
          alt="Network Video Recorder"
          fill
          className="object-cover opacity-30"
          priority
        />

        <div className="z-10 px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Smart Surveillance with NVR
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Record and manage high-definition IP camera feeds with real-time
            monitoring, cloud backup, and AI analytics using advanced NVR
            solutions.
          </p>
        </div>
      </section>

    <div className="min-h-screen bg-gray-100 px-6 py-10 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
        Orange 64 Ch. - Network Video Recorders (NVR)
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {orange64ChNvrData.map((product) => (
          <div
            key={product.model}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all flex flex-col"
          >
            <Image
              src={product.image}
              alt={product.model}
              className="w-full h-52 object-cover"
            />
            <div className="flex flex-col justify-between flex-1 p-5">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.model}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {product.description}
                </p>
                <ul className="list-disc list-inside text-sm text-gray-500 mb-4">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start text-sm text-gray-700 mb-1"
                    >
                      <span className="text-orange-600 mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex justify-between items-center pt-4 border-t">
                <span className="text-orange-600 font-bold text-lg">
                  {product.price}
                </span>
                <Link href="/contact">
                  <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition">
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
};

export default Orange64ChNVR;
