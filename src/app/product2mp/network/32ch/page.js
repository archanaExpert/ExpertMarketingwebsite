
"use client";
import React from "react";
import Image from "next/image";
const orange32ChNvrData = [
  {
    model: "CP-UNR-4K4322-V4",
    name: "32 Ch. 4K Network Video Recorder",
    price: "₹24,999",
    image: "/network/32ch/4K4322-V4.svg",
    features: [
  "Up to 32 channel IP camera input",
  "Instastream, H.265, H.264, MJPEG Decoding",
  "Max. decoding capability: 8 × 1080p@30 fps or 2 × 8 MP@30 fps",
  "Max. 160/128/60 Mbps Incoming / Recording / Outgoing Bandwidth",
  "Support 2 SATA HDDs up to 20TB each, 2 USB Ports",
  "HDMI / VGA simultaneous video output",
  "AI by Camera: Face detection and recognition, Perimeter protection, SMD Plus, People counting, Stereo analysis and Heat map",
  "Support Multi-brand network cameras",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
  },
  {
    model: "CP-UNR-4K5324-V3",
    name: "32 Ch. H.265 Network Video Recorder",
    price: "₹27,499",
    image: "/network/32ch/4K5324-V3.svg",
    features:[
  "Up to 32 channel IP camera input",
  "AI Disabled: 2 Channel 16 MP@30 fps, AI Enabled: 1 Channel 16 MP@30 fps",
  "AI Disabled: 256 Mbps incoming, AI Enabled: 180 Mbps incoming",
  "Instastream, H.265, H.264, MJPEG Decoding",
  "Up to 16MP Video Resolution",
  "Support 4 SATA ports, up to 16TB, 2 USB (1 front USB 2.0 Port, 1 rear USB 3.0 Port)",
  "1 HDMI, 1 VGA simultaneous video output",
  "Support ONVIF 22.06",
  "Support SMD Plus",
  "Mobile Software: iCMOB, gCMOB"
]
,
  },
  {
    model: "CP-UNR-4K4324-FI",
    name: "32 Ch. H.265 Network Video Recorder",
    price: "₹26,999",
    image: "/network/32ch/4K4324-FI.svg",
    features: [
  "Up to 32 channel IP camera input",
  "AI disabled: 2-channel 16 MP@30 fps, AI enabled: 1-channel 16 MP@30 fps",
  "H.265, H.264, MJPEG",
  "Up to 16MP Video Resolution",
  "AI disabled: 256 Mbps incoming, AI enabled: 180 Mbps incoming",
  "Support 4 SATA ports, up to 16TB, 3 USB (1 front USB 2.0 port, 2 rear USB 3.0 ports)",
  "1 HDMI, 1 VGA simultaneous video output",
  "Support ONVIF",
  "Support SMD Plus",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
  },
  {
    model: "CP-UNR-4K5324-FI",
    name: "32Ch. 4K AI Network Video Recorder",
    price: "₹29,999",
    image: "/network/32ch/4K5324-FI.svg",
    features:[
  "Up to 32 channel IP camera input",
  "Max. 384 Mbps incoming/recording/outgoing bandwidth",
  "Instastream / H.265 / Smart H.264+ / H.264 / MJPEG codec decoding",
  "AI by Recorder: 2-channel face detection or recognition, 4-channel perimeter protection, 8-channel SMD Plus",
  "AI by Camera: Face detection and recognition, perimeter protection, SMD Plus, metadata, ANPR, stereo analysis, heat map, and people counting",
  "Support 4 SATA HDDs up to 16TB each, 3 USB Ports (2 USB 3.0)",
  "2 HDMI / 2 VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K5322-FI",
    name: "32Ch. 4K AI Network Video Recorder",
    price: "₹28,999",
    image: "/network/32ch/4K5322-FI.svg",
    features:[
  "Up to 32 channel IP camera input",
  "Max. 384 Mbps incoming/recording/outgoing bandwidth",
  "Instastream / H.265 / Smart H.264+ / H.264 / MJPEG codec decoding",
  "AI by Recorder: 2-channel face detection or recognition, 4-channel perimeter protection, 8-channel SMD Plus",
  "AI by Camera: Face detection and recognition, perimeter protection, SMD Plus, metadata, ANPR, stereo analysis, heat map, and people counting",
  "Support 2 SATA HDDs up to 16TB each, 2 USB Ports (1 USB 3.0)",
  "HDMI / VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K532R8-FI",
    name: "32Ch. 4K AI Network Video Recorder",
    price: "₹30,999",
    image: "/network/32ch/4K532R8-FI.svg",
    features: [
  "Up to 32 Channel IP camera input",
  "Max. 384 Mbps incoming/recording/outgoing bandwidth",
  "Instastream, H.265, H.264+, H.264, MJPEG codec decoding",
  "AI by Recorder: 2 Channel face detection and recognition, up to 20 face databases and 20,000 face images, 4 Channel perimeter protection, 8 Channel SMD Plus",
  "Support 8 SATA HDDs up to 20TB Each, 4 USB Ports (2 front USB 2.0 ports, 2 rear USB 3.0 ports)",
  "AI by Camera: Face detection and recognition, Perimeter protection, SMD Plus, Metadata, ANPR, Stereo analysis, Heat map, People counting",
  "Support RAID 0/1/5/6/10",
  "Support Multi-brand network cameras",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
  },
  {
    model: "CP-UNR-4K4324-I",
    name: "32 Ch. 4K Network Video Recorder",
    price: "₹25,499",
    image: "/network/32ch/4K4324-I.svg",
    features: [
  "Up to 32 channel IP camera input",
  "AI disabled: 2-channel 16 MP@30 fps, AI enabled: 1-channel 16 MP@30 fps",
  "H.265, H.264, MJPEG",
  "Up to 16MP Video Resolution",
  "AI disabled: 256 Mbps incoming, AI enabled: 180 Mbps incoming",
  "Support 4 SATA ports, up to 16TB, 3 USB (1 front USB 2.0 port, 2 rear USB 3.0 ports)",
  "1 HDMI, 1 VGA simultaneous video output",
  "Support ONVIF",
  "Support SMD Plus",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
  },
  {
    model: "CP-UNR-4K4322-V3",
    name: "32Ch. 4K Network Video Recorder",
    price: "₹23,999",
    image: "/network/32ch/4K4322-V3.svg",
    features: [
  "Up to 32 channel IP camera input",
  "Instastream/H.265/Smart H.264+/H.264/MJPEG",
  "Max. decoding capability: 8 x 1080p@30fps. Supports adaptive decoding",
  "Supports mainstream cameras of ONVIF and RTSP protocols",
  "Support 2 SATA HDDs up to 10TB Each, 2 USB Ports",
  "VGA/HDMI simultaneous video output, maximum resolution of HDMI is 4K",
  "Support Multi-brand network cameras",
  "AI by Camera: Face detection, perimeter protection, IVS, people counting, heat map, and SMD",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K5322-V2",
    name: "32 Ch. 4K Network Video Recorder",
    price: "₹24,499",
    image:  "/network/32ch/4K5322-V2.svg",
    features: [
  "Up to 32 channel IP camera input",
  "Max 320Mbps incoming bandwidth",
  "Instastream/H.265/Smart H.264+/H.264/MJPEG codec decoding",
  "Up to 12MP resolution preview and playback",
  "Support 2 SATA HDDs up to 10TB Each, 2 USB Ports (1 USB 3.0)",
  "HDMI/ VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "ONVIF Version 2.4 conformance",
  "Mobile Software: iCMOB, gCMOB"
]
,
  },
  {
    model: "CP-UNR-4K532R8-EI",
    name: "32Ch. 4K AI Network Video Recorder",
    price: "₹31,999",
    image:  "/network/32ch/4K532R8-EI.svg",
    features:[
  "Up to 32 channel IP camera input",
  "Max. Decoding capability: 32 × 1080p@30fps",
  "Max. 512/512/512 Mbps Incoming/ Recording/ Outgoing bandwidth",
  "AI by Recorder: Supports 8 Channel face detection and recognition, up to 20 face databases and 200,000 face images, 8 Channel metadata, 24 Channel perimeter protection, 32 Channel SMD+",
  "AI by Camera: Supports face detection and recognition, Perimeter protection, SMD+, Metadata, ANPR, Stereo analysis, Heat map, and people counting",
  "Support redundant power, RAID 0/1/5/6/10, N+M cluster",
  "Support 8 SATA HHDs up to 20TB Each, 4 USB Port",
  "2 HDMI / 2 VGA simultaneous video output",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro Lite"
]
,
  },
  {
    model: "CP-UNR-4K5324-V2",
    name: "32 Ch. 4K Network Video Recorder",
    price: "₹27,999",
    image:  "/network/32ch/4K5324-V2.svg",
    features: [
  "Up to 32 channel IP camera input",
  "Max 320Mbps incoming bandwidth",
  "Instastream/H.265/Smart H.264+/H.264/MJPEG codec decoding",
  "Up to 12MP resolution preview and playback",
  "Support 4 SATA HDDs up to 10TB Each, 3 USB Ports (2 USB 3.0, 1 USB 2.0)",
  "2 HDMI / 2 VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "ONVIF Version 2.4 conformance",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]

  },
  {
    model: "CP-UNR-4K532R8-V2",
    name: "32 Ch. 4K Network Video Recorder",
    price: "₹29,499",
    image:  "/network/32ch/4K532R8-V2.svg",
    features:[
  "Up to 32 channel IP camera input",
  "Max 320Mbps incoming bandwidth",
  "Instastream/H.265/Smart H.264+/H.264/MJPEG codec decoding",
  "Up to 12MP resolution preview and playback",
  "Support 4 SATA HDDs up to 10TB Each, 3 USB Ports (2 USB 3.0, 1 USB 2.0)",
  "2 HDMI / 2 VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "ONVIF Version 2.4 conformance",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
  {
    model: "CP-UNR-4K632R8-V2",
    name: "32 Ch. 4K Network Video Recorder",
    price: "₹32,999",
    image: "/network/16ch/4K632R8-V2.svg",
    features: [
  "Up to 32 channel IP camera input",
  "Up to 12MP resolution preview and playback",
  "Max 384Mbps incoming bandwidth",
  "Support 8 SATA HDDs up to 10TB Each, 4 USB Ports (2 USB 3.0), 1 eSATA port",
  "2 HDMI / 1 VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "Support RAID 0/1/5/6/10",
  "Supported AI Functions by Camera: Face detection and recognition, SMD Plus, Video metadata, ANPR, and 3D behaviour analysis",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
  },
];

const Orange32ChNVRPage = () => {
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
    Orange 32 Ch. Network Video Recorders (NVR)
  </h1>

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {orange32ChNvrData.map((product) => (
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
            <h3 className="text-lg font-semibold text-gray-800">{product.model}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.name}</p>
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
            <span className="text-orange-600 font-bold text-lg">{product.price}</span>
            <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
</>
  );
};

export default Orange32ChNVRPage;
