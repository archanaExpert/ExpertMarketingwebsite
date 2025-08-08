import Image from "next/image";
import Link from "next/link";

export default function CPUNCBE51EVMDQPage() {
  const cameras = [
    {
      model: "CP-UNP-Z6481H",
      name: "Thermal Network Hybrid PTZ Camera",
      image: "/project/Z6481H.svg",
      price: "₹85,000",
      features: [
        '1/2.5" 8MP PS CMOS Image Sensor (1.016 cm)',
        "Maximum Resolution: 8MP (3840 × 2160) @ 1–25/30fps",
        "Video Compression: Instastream, H.265, H.264, H.264H, H.264B, MJPEG",
        "Supports Quad Stream",
        "Image Enhancements: WDR (120dB), Day/Night (ICR), 3D NR, Defog, BLC, HLC, AWB, AGC, Digital Watermarking",
        "2.7mm–13.5mm Motorized Lens",
        "IR Range: Up to 60 Meters",
        "Supports Starlight Technology",
        "Built-in Microphone",
        "Storage & Protection: Micro SD Card Support, IP67, IK10, PoE",
      ],
    },
    {
      model: "CP-V33G",
      name: "3MP 4G Camera",
      image: "/project/CP-V33G.svg",
      price: "₹12,800",
      features: [
        "1/2.7” 3MP CMOS Image Sensor (0.9407 cm)",
        "Video Compression: H.265 / H.264",
        "Max. 3MP (25/30fps)",
        "Supports RJ45 Port and 4G SIM",
        "Two-way Audio Communication",
        "Supports Micro SD Card up to 256GB",
        "IR Range: 20–30 Meters, Spotlight: 15 Meters",
        "Weather Protection: IP66 Rated",
        "Night Vision: Infrared & Spotlight, Three Modes – Full Color, Infrared, Smart Mode (adjustable)",
      ],
    },
  ];
  const orangeSmbProjectNVRs = [
    {
      model: "CP-UNR-4K4324N-I",
      description: "32 Ch. H.265+ 4K Network Video Recorder",
      price: "₹24,999",
      image: "/project/smb/4K4324N-I.svg",
      features: [
        "32 Channel IP Video Access",
        "Access, Storage, or Forwarding at 256 Mbps (160 Mbps with AI enabled)",
        "Supports 4 SATA HDDs up to 10TB Each, 2 USB Ports",
        "AI by NVR: 1-Channel Face Detection & Recognition, 2-Channel Perimeter Protection, Up to 10 Face Databases & 20,000 Face Images, 4-Channel SMD Plus",
        "1 HDMI / 1 VGA Simultaneous Video Output",
        "AI by Camera: Face Detection & Recognition, Perimeter Protection, SMD Plus, ANPR, People Counting, Stereo Analysis, Heat Map",
        "Mobile Software: iCMOB, gCMOB",
        "CMS Software: KVMS Pro",
      ],
    },
    {
      model: "CP-UNR-4K4164N-I",
      description: "16 Ch. H.265+ 4K Network Video Recorder",
      price: "₹18,500",
      image: "/project/smb/4K4324N-I.svg",
      features: [
        "16 Channel IP video access",
        "Access, storage or forwarding at 256 Mbps (160 Mbps when AI function enabled)",
        "Support 4 SATA HDDs up to 10TB Each, 2 USB Ports",
        "AI by NVR: 1-channel face detection and recognition; 2-channel perimeter protection; up to 10 face databases and 20,000 face images; 4-channel SMD Plus",
        "1 HDMI / 1 VGA simultaneous video output",
        "AI by Camera: Face detection and recognition, perimeter protection; SMD Plus; ANPR; people counting; stereo analysis; heat map",
        "Mobile Software: iCMOB, gCMOB",
        "CMS Software: KVMS Pro",
      ],
    },
    {
      model: "CP-UNR-216F2N-I",
      description: "16Ch. AI Network Video Recorder",
      price: "₹16,750",
      image: "/project/smb/216F2N-Ii.svg",
      features: [
        "16 Channel IP video access",
        "Instastream / H.265 / Smart H.264+ / H.264 / MJPEG",
        "Max. decoding capability: 4 × 1080p@30fps. Supports adaptive decoding",
        "1-channel face detection and recognition (AI by NVR); or 2-channel perimeter detection (AI by NVR); or 4-channel SMD (AI by NVR); up to 10 face databases and 5,000 face images",
        "1 VGA / 1 HDMI simultaneous video output by default, the maximum resolution of HDMI is 4K; and non-simultaneous video output is also supported, the maximum resolution is 1080P",
        "Support 2 SATA HDDs up to 8TB Each, 2 USB Ports",
        "Support Multi-brand network cameras",
        "Mobile Software: iCMOB, gCMOB",
        "CMS Software: KVMS Pro",
      ],
    },
    {
      model: "CP-UNR-208F2N-I",
      description: "8Ch. AI Network Video Recorder",
      price: "₹13,999",
      image: "/project/smb/208F2N-I.svg",
      features: [
        "8 Channel IP video access",
        "Instastream / H.265 / H.264 / Smart H.264+ / MJPEG",
        "Remote surveillance, live view and video playback on mobile phone App",
        "Max. decoding capability: 4 × 1080P@30fps. Supports adaptive decoding",
        "1 VGA / 1 HDMI simultaneous video output by default, max HDMI resolution: 4K; non-simultaneous output supports up to 1080P",
        "1-channel face detection and recognition (AI by NVR); or 2-channel perimeter detection (AI by NVR); or 4-channel SMD (AI by NVR); up to 10 face databases and 5,000 face images",
        "Support 2 SATA HDDs up to 8TB each, 2 USB Ports (1 Rear USB 2.0, 1 Front USB 2.0)",
        "All-channel AI by camera: face detection and comparison, perimeter protection, and SMD",
        "Supports mainstream cameras with ONVIF and RTSP protocols",
        "Mobile Software: iCMOB, gCMOB",
        "CMS Software: KVMS Pro",
      ],
    },
    {
      model: "CP-UNR-4K4322N-V2",
      description: "32 Ch. H.265+ 4K Network Video Recorder",
      price: "₹23,800",
      image: "/project/smb/4K4322N-V2.svg",
      features: [
        "Up to 32 channel IP camera input",
        "Max 200Mbps incoming bandwidth",
        "Instastream / H.265 / Smart H.264+ / H.264 codec decoding",
        "Up to 8MP resolution preview and playback",
        "Support 2 SATA HDDs up to 10TB each, 2 USB Ports (1 USB 3.0)",
        "HDMI / VGA simultaneous video output",
        "Support multi-brand network cameras",
        "ONVIF Version 2.4 conformance",
        "Mobile Software: iCMOB, gCMOB",
        "CMS Software: KVMS Pro",
      ],
    },
    {
      model: "CP-UNR-4K4162N-V2",
      description: "16 Ch. H.265+ 4K Network Video Recorder",
      price: "₹17,500",
      image: "/project/smb/4K4162N-V2.svg",
      features: [
        "Up to 16 channel IP camera input",
        "Max 200Mbps incoming bandwidth",
        "Instastream / H.265 / Smart H.264+ / H.264 codec decoding",
        "Up to 8MP resolution preview and playback",
        "Support 2 SATA HDDs up to 10TB each, 2 USB Ports (1 USB 3.0)",
        "HDMI / VGA simultaneous video output",
        "Support multi-brand network cameras",
        "ONVIF Version 2.4 conformance",
        "Mobile Software: iCMOB, gCMOB",
        "CMS Software: KVMS Pro",
      ],
    },
    {
      model: "CP-UNR-216T1N-V2",
      description: "16Ch. Network Video Recorder",
      price: "₹14,200",
      image: "/project/smb/4K4162N-V24.svg",
      features: [
        "Support 16 channel IP camera input",
        "H.264+ / H.264 dual codec decoding",
        "Up to 6MP resolution preview and playback",
        "Max 80Mbps incoming bandwidth",
        "Support 1 SATA HDD up to 6TB each, 2 USB Ports",
        "HDMI / VGA simultaneous video output",
        "Support multi-brand network cameras",
        "ONVIF Version 2.4 conformance",
        "Mobile Software: iCMOB, gCMOB",
        "CMS Software: KVMS Pro",
      ],
    },
  ];
  const orangeNVRs = [
    {
      model: "CP-UVS-6167R",
      image:"/project/nvrs/6167R.svg",
      price: "₹1,20,000",
     features: [
  "Total Throughput up to 1600Mbps",
  "08 HDDs, SAS/NL-SAS/SATA, Hot-Swap",
  "Redundant Power Supply",
  "Supports RAID 0/1/5/6/10",
  "Instastream, H.265, H.264, MPEG-4, M-JPEG, MPEG",
  "24-HDD Bays",
  "Dual Controller Architecture",
  "Enterprise-Grade Storage",
  "RAID Support",
  "High Throughput"
]
,
    },
    {
      model: "CP-UNR-7256R24D-EA8",
      image: "/project/nvrs/7256R24D-EA8.svg",
      price: "₹3,50,000",
      features: [
  "Max 256 Ch. IP video access",
  "Max 512Mbps incoming bandwidth",
  "3 HDMI / 1 VGA video output",
  "Up to 128-channel perimeter protection",
  "Up to 64-channel face recognition with normal IPC",
  "Up to 160-channel face recognition with face detection IPC",
  "Up to 32-channel video metadata",
  "Up to 50 face databases with 300,000 face pictures in total",
  "Supports RAID 0/1/5/6/10",
  "Support Multi-brand network cameras",
  "Redundant Power Supply",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
    },
    {
      model: "CP-UNR-4K5082-V2",
      image: "/project/nvrs/4K5082-V2.svg",
      price: "₹65,000",
     features: [
  "Up to 8 channel IP camera input",
  "Max 320Mbps incoming bandwidth",
  "Instastream / H.265 / Smart H.264+ / H.264 / MJPEG codec decoding",
  "Up to 12MP resolution preview and playback",
  "Support 2 SATA Ports up to 10TB Each",
  "2 USB Ports (1 USB 3.0)",
  "HDMI / VGA simultaneous video output",
  "Support Multi-brand network cameras",
  "ONVIF Version 2.4 conformance",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]
,
    },
  ];
  const dvrModels = [
    {
      category: "DVRs Project - Project Models",
      model: "CP-UNR-24T7-RD",
      name: "24-HDD Enterprise Video Storage with Dual Controller",
      image: "/project/dvrs/24T7-RD.svg",
      features: [
  "Max 512 IP Camera Inputs",
  "Dual Controller Architecture",
  "24 HDDs, SAS, Hot-Swap",
  "Max 1024Mbps Incoming/Recording Bandwidth",
  "iSCSI and Mini SAS for Expanded Storage Space",
  "Redundant Power Supply",
  "Supports RAID 0/1/3/4/5/6/10/50/60/JBOD, Hotspare",
  "Supports Standard iSCSI Protocol Storage",
  "Modular & Cable-less Design"
]
,
      price: "Contact for Price",
    },
    {
      category: "Red DVRs Project - Project Models",
      model: "CP-ER-8K2",
      name: "8 Ch. 2MP HDX DVR",
      image: "/project/dvrs/ER-8K2.svg",
     features: [
  "H.264 Dual-Stream Video Compression",
  "All Channel AHD-H Realtime Encoding",
  "8Ch. 1080N / 8Ch. AHD-H @12fps",
  "HDMI / VGA Simultaneous Video Output",
  "Support 2 SATA HDD up to 12TB",
  "2 USB 2.0 Ports",
  "Mobile Software: RMOB",
  "CMS Software: RVMS"
]
,
      price: "Contact for Price",
    },
  ];
const mdvrProducts = [
  {
    name: "CP-UNR-408T2-MW2",
    description: "8Ch. PoE + 8Ch. Non-PoE Mobile Network Video Recorder",
    price: "₹38,000",
    image:"/project/mdvr/408T2-MW2.svg",
    features: [
  "Support 8 Ch. PoE + 8 Ch. Non-PoE IP cameras input",
  "Support H.265/smart H.265 video compression",
  "Support 8 channels 4MP Realtime recording",
  "VGA, TV, HDMI simultaneous video output",
  "Support 2 SATA HDDs, SD Card, 3 USB Port",
  "Aviation connectors adopted",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]

  },
  {
    name: "CP-UNR-404T2-MW2",
    description: "4 Ch. 4PoE Mobile Network Video Recorder",
    price: "₹26,000",
    image:"/project/mdvr/404T2-MW2.svg",
    features: [
  "Support 4 channels PoE IP Camera Input",
  "Support H.265/Smart H.265 video compression",
  "Support 4 channels 4MP Realtime Recording",
  "Aviation connectors adopted",
  "Support 2 HDD Ports, 3 USB Ports (2.0)",
  "VGA, TV, HDMI simultaneous video output",
  "Micro SD card, Up to 256GB",
  "Mobile Software: iCMOB, gCMOB",
  "CMS Software: KVMS Pro"
]

  },
  {
    name: "CP-RMC-D12",
    description: "1MP HD IR AHD Mobile Camera - 20 Mtr.",
    price: "₹3,800",
    image: "/project/mdvr/-D12.svg",
   features: [
  "1/3\" 1 MP CMOS Image Sensor (0.84667 cm)",
  "25/30fps @ 720P resolution",
  "Day/Night (ICR), AWB, AGC, BLC support",
  "3.6mm and 2.8mm lens options",
  "IR range of 20 meters"
]

  },
  {
    name: "CP-SMR-N41G",
    description: "4 Ch. H.264 Mobile NVR",
    price: "₹14,500",
    image: "/project/mdvr/N41G.svg",
    features: [
  "4 channels 1080P channel IPC",
  "Built-in 4G/3G for live view",
  "H.264 video compression",
  "Supports SD card for mirror recording",
  "Supports Hard disk for main recording",
  "Supports GPS for location tracking"
]

  },
  {
    name: "CP-SMR-41G",
    description: "4 Ch. AHD + 1 Ch. 720p H.264 Mobile DVR",
    price: "₹13,500",
    image:  "/project/mdvr/41G.svg",
    features: [
  "Supports 4 channels AHD + 1 channel 720P",
  "Supports Hard disk for main recording",
  "Built-in 3G/4G for live view and remote management",
  "Supports GPS for location tracking",
  "Vibration-resistant design to meet various environment needs",
  "Supports USB2.0 high-speed backup",
  "Pre-recording up to 60 minutes",
  "Tamper-proof watermarks",
  "Modular design for easy maintenance"
]

  },
  {
    name: "CP-SMR-41",
    description: "4 Ch. AHD + 1 Ch. 720p H.264 Mobile DVR",
    price: "₹13,200",
    image: "/project/mdvr/SMR-41.svg",
  features: [
  "Supports 4 channels AHD + 1 channel 720P",
  "Supports hard disk for main recording",
  "Supports GPS for location tracking",
  "Vibration-resistant design for tough environments",
  "Supports USB 2.0 high-speed backup",
  "Pre-recording up to 60 minutes",
  "Tamper-proof watermarks for data integrity",
  "Modular design for easy maintenance"
]

  },
  {
    name: "CP-SMR-42",
    description: "4 Ch. WD1 + 1 Ch. 720P H.264 Mobile DVR",
    price: "₹12,800",
    image: "/project/mdvr/SMR-42.svg",
   features: [
  "Supports 4 channels WD1 + 1 channel 720P",
  "Supports SD card for main recording",
  "Supports GPS for location tracking",
  "Supports 360° anti-vibration technology",
  "Supports data recovery technology",
  "Supports USB 2.0 high-speed backup",
  "Pre-recording up to 60 minutes",
  "Tamper-proof watermarks for data security",
  "Modular design for easy maintenance"
]

  },
  {
    name: "CP-SMR-42G",
    description: "4 Ch. WD1 + 1 Ch. 720P H.264 Mobile DVR",
    price: "₹13,000",
    image: "/project/mdvr/42g.svg",
    features: [
  "Supports 4 channels WD1 + 1 channel 720P",
  "Supports SD card for main recording",
  "Built-in 3G/4G for live view and remote management",
  "Supports GPS for location tracking",
  "Supports 360° anti-vibration technology",
  "Supports data recovery technology",
  "Supports USB 2.0 high-speed backup",
  "Pre-recording up to 60 minutes",
  "Tamper-proof watermarks for data security",
  "Modular design for easy maintenance"
]

  }
];

  const governmentProjects = [
    {
      name: "CP-UE04",
      description: "4 Channel H.264 Network Video Server",
      price: "₹7,999",
      image: "/project/gov/UE04.svg",
      features: [
  "4-channel video and audio input",
  "H.264 video compression and JPEG image capture",
  "Full-channel @960H real-time encoding",
  "High-quality two-way audio communication",
  "Dual stream encoding supported",
  "TV output with simple OSD display",
  "Supports 4 alarm inputs / 2 alarm outputs",
  "Hot-swappable SD card for local storage",
  "Built-in web server, CMOB & KVMS (CMS) support"
]
,
    },
    {
      name: "CP-UE01",
      description: "1 Channel H.264 Network Video Server",
      price: "₹4,999",
      image: "/project/gov/UE01.svg",
      features: [
  "1Ch. Video and Audio input",
  "H.264 video compression and JPEG image capture",
  "Full channel @960H realtime encoding",
  "High quality two-way talk",
  "Dual encoding stream supported",
  "Support TV output with simple OSD display",
  "4 Alarm inputs / 2 Alarm output supported",
  "Hot-swap SD Card for local storage",
  "Built-in web server, CMOB & KVMS (CMS)"
]
,
    },
    {
      name: "CP-UAR-0416K",
      description: "16 Ch. 720P Tribrid HDCVI DVR",
      price: "₹12,499",
      image: "/project/gov/0416k.svg",
      features: [
  "Tribrid: Each channel supports Analog / HDCVI / IP video input",
  "All channels support 720P real-time recording",
  "H.264 dual-stream video compression",
  "HDMI / VGA / TV simultaneous video output",
  "Supports multi-brand network cameras",
  "Supports 4 SATA HDDs up to 16TB each",
  "Supports 1 eSATA up to 16TB",
  "3 × USB 2.0 ports for backup and connectivity",
  "Mobile software: iCMOB, gCMOB, wCMOB",
  "CMS software: KVMS, KVMS Pro"
]
,
    },
    {
      name: "CP-UAP-36W-O",
      description: "35x IR Speed Dome Camera (Outdoor)",
      price: "₹35,999",
      image: "/project/gov/36W-O.svg",
     features: [
  "High resolution of 650TVL",
  "Minimum illumination: 0.01 Lux @ F1.6, 0 Lux (IR ON)",
  "Powerful 35x optical zoom",
  "DWDR, Day/Night (ICR), 2D-DNR, Auto Iris, Auto Focus, AWB, AGC, BLC",
  "Supports up to 255 presets, 8 tours, 5 patterns, and 5 auto scans",
  "Maximum 240°/s pan speed with 360° continuous pan rotation",
  "1 alarm input / 1 alarm output",
  "IR range up to 100 meters",
  "Weatherproof design with IP66 rating"
]
,
    },
    {
      name: "CP-UAP-36W-I",
      description: "35x IR Speed Dome Camera (Indoor)",
      price: "₹34,499",
      image: "/project/gov/36W-I.svg",
     features: [
  "High resolution of 650TVL",
  "Minimum illumination: 0.01 Lux @ F1.6, 0 Lux (IR ON)",
  "Powerful 35x optical zoom",
  "DWDR, Day/Night (ICR), 2D-DNR, Auto Iris, Auto Focus, AWB, AGC, BLC",
  "Up to 255 presets, 8 tours, 5 patterns, 5 auto scans",
  "Max 240°/s pan speed with 360° continuous pan rotation",
  "1 alarm input / 1 alarm output",
  "IR range of 100 meters"
]
,
    },
    {
      name: "CP-UAP-28W-O",
      description: "23x IR Speed Dome Camera (Outdoor)",
      price: "₹29,999",
      image: "/project/gov/28W-O.svg",
      features: [
  "High resolution of 650TVL",
  "Minimum illumination: 0.01 Lux @ F1.6, 0 Lux (IR ON)",
  "Powerful 23x optical zoom",
  "DWDR, Day/Night (ICR), 2D-DNR, Auto Iris, Auto Focus, AWB, AGC, BLC",
  "Up to 255 presets, 8 tours, 5 patterns, 5 auto scans",
  "Max 240°/s pan speed with 360° continuous pan rotation",
  "1 alarm input / 1 alarm output",
  "IR range of 100 meters",
  "IP66 weatherproof rating"
]
,
    },
    {
      name: "CP-UAP-28W-I",
      description: "23x IR Speed Dome Camera (Indoor)",
      price: "₹28,499",
      image: "/project/gov/28W-I.svg",
      features: [
  "High resolution of 650TVL",
  "Minimum illumination: 0.01 Lux @ F1.6, 0 Lux (IR ON)",
  "Powerful 23x optical zoom",
  "DWDR, Day/Night (ICR), 2D-DNR, Auto iris, Auto focus, AWB, AGC, BLC",
  "Up to 255 presets, 8 tours, 5 patterns, 5 auto scans",
  "Max 240°/s pan speed with 360° continuous pan rotation",
  "1 alarm input / 1 alarm output",
  "IR range of 100 meters"
]
,
    },
    {
      name: "CP-EAC-DVW-O",
      description: "1 MP HDCVI IR Vandal Dome Camera - 30Mtr. (Outdoor)",
      price: "₹2,599",
      image: "/project/gov/eac.svg",
     features: [
  '1/2.9" 1MP HQIS Pro Image Sensor',
  'Max 25/30fps @ 720P',
  'High-speed, long-distance real-time transmission',
  'DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC',
  '2.7~12mm vari-focal lens',
  'IR range of 30 meters',
  'IP66 weatherproof rating',
  'IK10 vandal-proof rating'
]
,
    },
    {
      name: "CP-EAC-DVW-I",
      description: "1 MP HDCVI IR Vandal Dome Camera - 30Mtr. (Indoor)",
      price: "₹2,499",
      image:"/project/gov/DVW-I.svg",
     features: [
  '1/2.9" 1MP HQIS Pro Image Sensor',
  'Max 25/30fps @ 720P',
  'High-speed, long-distance real-time transmission',
  'DWDR, Day/Night (ICR), 2D-DNR, AWB, AGC, BLC',
  '2.7~12mm vari-focal lens',
  'IR range of 30 meters'
]
,
    },
    {
      name: "CP-EAC-DFW-O",
      description: "1 MP HDCVI IR Dome Camera - 20Mtr. (Outdoor)",
      price: "₹2,199",
      image: "/project/gov/DFWO1.svg",
      features: [
  '1/2.9" 1MP HQIS Pro Image Sensor (7.366 cm)',
  'Max 25/30fps @ 720P',
  'High-speed, long-distance real-time transmission',
  'DWDR, Day/Night (ICR), 3D-DNR, AWB, AGC, BLC',
  '3.6mm fixed lens (2.8mm, 6mm, 8mm Optional)',
  'IR Range of 20 meters, Smart IR',
  'IP66 Weatherproof Rating'
]
,
    },
    {
      name: "CP-EAC-DFW-O 1",
      description: "1 MP HDCVI IR Vandal Dome Camera - 30Mtr. (Outdoor)",
      price: "₹2,699",
      image:  "/project/gov/78.svg",
      features: [
  '1/2.9" 1MP HQIS Pro Image Sensor (7.366 cm)',
  'Max 25/30fps @ 720P',
  'High-speed, long-distance real-time transmission',
  'Day/Night (ICR), 2D-DNR, AWB, AGC, BLC',
  '2.7~12mm vari-focal lens',
  'IR Range of 30 meters',
  'IP66 Weatherproof & IK10 Vandal-proof'
]
,
    },
    {
      name: "CP-EAC-DFW-I",
      description: "1 MP HDCVI IR Dome Camera - 20Mtr. (Indoor)",
      price: "₹2,199",
      image: "/project/gov/-DFW-I.svg",
      features: [
  '1/2.9" 1MP HQIS Pro Image Sensor (7.366 cm)',
  'Max 25/30fps @ 720P',
  'High-speed, long-distance real-time transmission',
  'DWDR, Day/Night (ICR), 3D-DNR, AWB, AGC, BLC',
  '3.6mm fixed lens (6mm optional)',
  'IR Range of 20 meters with Smart IR'
]
,
    },
    {
      name: "CP-EAC-DBW-O",
      description: "1 MP HDCVI IR Vandal Dome Camera - 30Mtr. (Outdoor)",
      price: "₹2,899",
      image: "/project/gov/BW-O.svg",
      features: [
  '1/2.9" 1MP HQIS Pro Image Sensor (7.366cm)',
  'Max 25/30fps@720P',
  'High speed, long distance real-time transmission',
  'DWDR, Day/Night(ICR),2D-DNR, AWB, AGC, BLC',
  '2.7~12mm vari-focal lens',
  'IR Range of 30 Mtrs, IP66, IK10'
]
,
    },
    {
      name: "CP-EAC-BW-H",
      description: "1 MP HDCVI IR Bullet Camera - 60Mtr. (High Range)",
      price: "₹3,199",
      image:  "/project/gov/BW-H.svg",
      features: [
  '1/2.9" 1 MP HQIS Pro Image Sensor (7.366cm)',
  'Max 25/30/50/60fps@720P',
  'High speed, long distance real-time transmission',
  'DWDR, Day/Night(ICR), 3D-DNR, AWB, AGC, BLC',
  '2.8~10mm vari-focal lens',
  'IR Range of 60 Mtrs',
  'IP67'
]
,
    },
    {
      name: "CP-EAC-BW",
      description: "1 MP HDCVI IR Bullet Camera - 60Mtr.",
      price: "₹2,999",
      image: "/project/gov/C-BW.svg",
      features: [
  '1/2.9" 1 MP HQIS Pro Image Sensor (7.366cm)',
  'Max 25/30/50/60fps@720P',
  'High speed, long distance real-time transmission',
  'DWDR, Day/Night(ICR), 3D-DNR, AWB, AGC, BLC',
  '2.8~10mm vari-focal lens',
  'IR Range of 60 Mtrs'
]
,
    },
  ];
  const bodyWornCameras = [
    {
      name: "CP-EBC-1073-K",
      description: "2K Body Worn Camera",
      price: "₹12,499",
      image: "/body/73-K.svg",
      features: [
  "2K Ultra HD Recording",
  "2.4\" Color Touch Screen",
  "H.265/H.264/MP4/TVI Video Compression",
  "Built-in 4G for Live Video Transmission",
  "Built-in GPS & Wi-Fi for Tracking and Uploading",
  "Optional G-sensor & Gyroscope",
  "Dual Camera Support (Front & Back)",
  "Hot-swappable 3050mAh Lithium Battery",
  "Up to 512GB Storage (128GB Standard Built-in)",
  "Network PTT Function Support",
  "Rugged & Waterproof Design",
  "Long Battery Life"
]
,
    },
    {
      name: "CP-DBC-2602",
      description: "2MP Full HD Body Worn Camera",
      price: "₹10,999",
      image: "/body/2602.svg",
      features:[
  "130° Wide Angle View",
  "2MP High Definition Recording",
  "H.264 & MJPEG Dual-Stream Encoding",
  "Color Recording in Night Mode",
  "Supports External Camera",
  "2.0\" LCD Display",
  "Built-in Shake Motor for Alerts",
  "IP65 Rated (Dust & Water Resistant)",
  "Replaceable Battery Support"
]
,
    },
    {
      name: "CP-DBP-H2PG",
      description: "Full HD Body Worn Camera",
      price: "₹9,499",
      image: "/body/H2PG.svg",
      features: [
  "1080P Color Video Recording",
  "Built-in GPS",
  "Built-in 4G for Live Streaming & Data Upload",
  "2m Drop-Tested Durability",
  "One-Touch Easy Recording",
  "2\" LCD Screen with Instant Playback (Video, Photo, Audio)",
  "Built-in High-Quality Microphone & Speaker",
  "Internal Storage Options: 32GB / 64GB / 128GB",
  "Capture Up to 20 High-Resolution 32MP Images",
  "10 Meter IR Night Vision Range",
  "IP66 Rated for Dust & Water Resistance"
]
,
    },
    {
      name: "CP-DBP-H2",
      description: "Full HD Body Worn Camera",
      price: "₹8,999",
      image: "/body/H2.svg",
      features: [
  "1080P Color Video Recording",
  "2m Drop-Tested Durability",
  "One-Touch Easy Recording",
  "2\" LCD Screen with Instant Playback (Video, Photos, Audio)",
  "Built-in High-Quality Microphone & Speaker",
  "16GB Inbuilt Storage, Expandable up to 128GB",
  "Capture up to 20 High-Resolution 32MP Images",
  "IP66 Rated for Dust & Water Resistance"
]
,
    },
  ];
  const accessoriesProjectModels = [
    {
      name: "CP-UA-RD24M",
      description: "Multilane Radar Detector",
      image: "/project/accessories/RD24M.svg", 
      features:  [
    "One single radar covers up to 32 vehicles of 1–4 lanes",
    "Precisely detects speed and position of vehicles when they are 18 m–35 m (59.1 ft–114.8 ft) away",
    "Flexible to install: Either installed over the lane or at the side of a lane",
    "Special functions such as detection of illegal lane change and wrong-way driving",
    "The detection performance is not impaired by adjacent lane or vehicles in front of or behind the target vehicle"
  ],
      price: "₹Contact for Price",
    },
    {
      name: "CP-UA-L3035-W",
      description: "IR Illuminator - 35 Meter",
      image: "/project/accessories/L3035-W.svg",
      features:[
  "Balanced Lighting with Elegant Design",
  "Durable Die-Cast Aluminium Body",
  "Waterproof & Dust-Proof for Enhanced Durability",
  "Synchronized Lighting for Photos & Videos",
  "Bracket Mount with IP66 Rating for Reliability"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UA-F1810",
      description: "IR Strobe Light",
      image:  "/project/accessories/F1810.svg",
      features:[
    "Operates effectively in any weather condition",
    "Features an impressive exposure index of up to 64 GN",
    "Designed for durability with up to 10 million cycles",
    "Effectively illuminates 1 lane"
  ],
      price: "₹Contact for Price",
    },
    {
      name: "CP-HA-RK5560-9U",
      description: "9U DVR/NVR Network Rack",
      image:   "/project/accessories/RK5560-9U.svg",
      features: [
  "Wall Mount Rack 9U – 550mm (W) x 600mm (D), 19” Mounting Rails",
  "1.6mm Vertical Mounting Rails with Clear 'U' Markings",
  "0.8mm CRCA Sheet Construction",
  "Supports Cooling Fan Options (Minimum 1)",
  "Dual Cable Entry/Exit (Top & Bottom) with Rubber Edges",
  "Toughened 5mm Glass Front Door with Lock",
  "Powder Coated – Color RAL 7035",
  "6-Socket PDU (5 Amp)",
  "Includes Wall Mounting Kit",
  "Conforms to DIN 41494 / ISO 9001:2015 & 14001:2015 Standards",
  "Load Bearing Capacity – 40Kg",
  "Ideal for Networking, Telecom, Audio/Video, CCTV Applications",
  "CE & RoHS Compliant"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-HA-RK5550-9UO",
      description: "9U DVR/NVR Outdoor Rack",
      image:  "/project/accessories/RK5550-9UO.svg",
      features:[
  "Wall Mount Rack 9U",
  "Basic Frame: 0.8mm Thick CRCA (MS Sheet)",
  "Welded Construction for Durability",
  "Cooling Fan Provision on Left and Right Sides",
  "Plain Top with Extended Edges on Left, Right & Front",
  "Front Plain Door with Key Lock and Gasket Seal",
  "Includes Two 90CFM 230V AC Cooling Fans (Minimum)",
  "Self-Adhesive Thermal Foam on Inside of Door",
  "Two Heavy-Duty Door Hinges",
  "Rigid Frame Fixable to Pole",
  "6-Socket PDU (5 Amp)",
  "Bottom Cable Entry/Exit Cut-Outs (2 Nos.) with Rubber Protection",
  "Wall or Pole Mountable with Brackets",
  "IP56 Rated – Dustproof, Rustproof & Rainwater Protected",
  "Standard Powder Coated Finish – RAL 7035 PP (Light Grey)",
  "Dimensions: 550mm (W) x 500mm (D)"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-EUT-6TGD-305-J",
      description: "Cat6 23AWG UTP Outdoor LAN Cable (Double Jacket)",
      image: "/project/accessories/305-j.svg",
      features: [
  "Solid Bare Electrolytic Grade Copper",
  "High-Density Polyethylene (HDPE) Insulation",
  "4-Pair Separator Design for Reduced Crosstalk",
  "23 AWG Outdoor Cable"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-FA-M100",
      description: "CCTV Microphone",
      image: "/project/accessories/M100.svg",
      features:[
  "360° Surround Sound Pickup for Capturing Subtle Sounds",
  "Modern Housing with Stylish Metal Mesh Design",
  "Hi-Fi Silver-Plated Vibration Membrane Capacitor Microphone",
  "Covers 10~100m² with High Definition and Fidelity",
  "Built-in AGC & DTS for Automatic Noise Reduction and Voice Adjustment",
  "Equipped with Advanced DNP & DSP Digital Processing for Enhanced Voice Clarity",
  "Micro Adjustment Potentiometer with Snap-In Design for Various Installations",
  "International-Level Echo Cancellation Technology",
  "ATDA Dynamic Noise Detection with Adaptive Bandpass Filter",
  "Supports Long-Distance Audio Transmission (Up to 3km) via RVVP 3x0.5mm² Shielded Cable",
  "Integrated Professional Audio Amplifier for Direct Output to DVR, Speakers, Earphones",
  "Ideal for Banks, Schools, Interrogation Rooms, Prisons & Other Secure Environments"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UA-M71T",
      description: '7" Touch Screen',
      image: "/project/accessories/M71T.svg",
      features:[
  "Multi-Touch & Button Control Interface",
  "Supports Auxiliary Control with 5m Extension Cables",
  "Capacitive Touchscreen with 10-Point Multi-Touch",
  "Hand Gesture Slide Control Support"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UA-MK31",
      description: "Mobile Control Keyboard",
      image: "/project/accessories/MK31.svg",
      features:[
  "Compact Size – Ideal for Patrol Cars, Buses & Embedded Systems",
  "Three-Dimensional Operation Joystick for Enhanced Control",
  "Optimized for In-Vehicle Use with Low Power Consumption",
  "Designed to Deliver High Functionality in a Small Form Factor"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UML-AF550",
      description: "6MP 1/2.7” 5-50mm Vari-focal Lens",
      image: "/project/accessories/AF550.svg",
      features: [
  "CS Mount Lens",
  "6MP High-Resolution Lens",
  "1/2.7” Image Format Compatibility"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-ANW-HP24G2F2-25",
      description: "24 Port AI PoE Switch",
      image: "/project/accessories/HP24G2F2-25.svg",
      features:[
  "AI Extend: Ports 1–8 Support 250M Long-Distance Power Supply in Extend Mode",
  "AI VLAN: Isolates Ports 1–24 to Prevent Network Storms and Enhance Performance",
  "AI QoS: Prioritizes Video Data for Smoother Video Transmission",
  "AI PoE: Auto Detection, Power-Off, and Device Restart Functionality",
  "Supports 24-Port 10/100Mbps PoE, IEEE802.3af/at Standards",
  "Includes One Gigabit SFP Port (SFP1) for Gigabit SFP Module"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-SA-L1524",
      description: "IR Illuminator - 240 Meter",
      image: "/project/accessories/L1524.svg",
      features: [
  "To improve performance of the weak light camera, thereby enhancing the picture effects at night.",
  "The function of video analysis at night.",
  "Conventional night monitoring.",
  "Reduce signal noise and other image distortion.",
  "Reduce the network bandwidth requirements.",
  "Energy saving by power factor correction.",
  "Indoor and Outdoor use"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UCS-MS710",
      description: "Massive Structured Big Data System",
      image: "/project/accessories/-MS710.svg",
      features: [
  "Single license supports 500 million data storage.",
  "The system can be extended to support a second-level search of no less than 25 billion pieces of data.",
  "Support multi-dimensional conditional retrieval and provide rich combinations of search conditions.",
  "Support to query the passing information that meets the given query conditions according to the precise conditions.",
  "Support to query the passing information that meets the given query conditions according to the fuzzy conditions.",
  "Support the inquiry of the information of the unidentified vehicles.",
  "Support to query the vehicle information that passes through the A slot of the A bay and the B bay of the B bayonet.",
  "Support the inquiry of the same driving information with the driving route within one second interval of a certain car.",
  "Support query for the first arrival information in several bayonet ports.",
  "Support to query vehicle information that has passed more than N times in a certain period of time on a certain date.",
  "Ability to query again in the result set of the previous query.",
  "Single node failure, data is not lost, and services are not interrupted.",
  "Support online expansion and uninterrupted business."
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UA-B043",
      description: "Housing Bracket",
      image: "/project/accessories/B043.svg",
      features: [
  "Material: aluminum",
  "Aesthetic design",
  "Housing bracket",
  "Support three-axis rotation for housing installation"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UA-B05W",
      description: "Wall Mount Bracket",
      image: "/project/accessories/B05W.svg",
      features:[
  "Material: Aluminium",
  "Wall Mount Bracket",
  "Neat & Integrated design",
  "Safety rope hook attached, secure and reliable"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UA-B3P",
      description: "Pole Mount Adapter",
      image: "/project/accessories/B3P.svg",
      features:[
  "Material: Aluminium",
  "Pole Mount Bracket",
  "Neat & Integrated design"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UNK-331",
      description: "Network Control Keyboard",
      image: "/project/accessories/331.svg",
      features:[
  "3 Dimension Joystick Control of PTZ Functions",
  "Preset Position, Auto Scan, Auto Pan, Auto Tour & Pattern Control",
  "Supports RS485, RS422, USB, RS232 and Network",
  "Auxiliary Functions",
  "Network Video Server",
  "On-Screen Menu & User Operation Procedure Tips",
  "Connect KVMS Pro via USB"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-PA-RK5563-6U",
      description: "6U Rack",
      image: "/project/accessories/PA-RK5563-6U.svg",
      features: [
  "Wall Mount Rack 6U 630mm deep 19\"",
  "1.6MM Vertical Mounting Rail with clear 'U' Marking",
  "0.8MM CRCA Sheet",
  "Cooling Fan options (min 2)",
  "Cable entry/exit provision at top and bottom with rubber at edges",
  "Front with Toughened Glass Door & Lock (5 MM)",
  "Powder coated Color - RAL-7035",
  "Finished with 7 Process pre-treated powder coating",
  "Wall Mounting Kit",
  "Conforms to DIN41494 or equivalent ISO 9001:2015 and 14001:2015 Standards",
  "For Small Networking, Telecom, Audio Video, CCTV Applications",
  "CE & RoHS Compliance"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-EUT-6TGLP-305",
      description: "CAT6, 4Pair UTP Cable",
      image: "/project/accessories/p-305.svg",
      features:[
  "IEC 11801, IEC 61156-5, ANSI/TIA/EIA-568-C.2 Class E Standards backward",
  "Excellent Margin with suppression of Cross Talk (NEXT)",
  "4 Pair Separator Design",
  "ISO Category 6"
]
,
      price: "₹Contact for Price",
    },
    {
      name: "CP-UML-4K-AL1042",
      description: "12MP 4K CS Mount Lens",
      image: "/project/accessories/-AL1042.svg",
      features: [
  "CS Mount Lens",
  "Focal Length 10~42mm",
  "P-Iris"
]
,
      price: "₹Contact for Price",
    },
  ];
  const CPTAMS = {
    name: "CP-TAMS-PRO",
    title: "Facial Recognition Time & Attendance Solution",
    price: "₹25,999",
    features: [
  "Forehead Temperature Measurement",
  "Face Recognition",
  "Mask Detection",
  "Fever Warning",
  "Temperature measurement Distance 1Mtr.",
  "Time & Attendance Management",
  "Data Query"
]
,
    image: "/project/accessories/-PRO.svg", 
  };

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
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <aside className="md:col-span-1 space-y-4">
          <h2 className="text-xl font-semibold border-b pb-2">Categories</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#cameras" className="hover:text-orange-600">
                Cameras
              </Link>
            </li>
            <li>
              <Link href="#smb" className="hover:text-orange-600">
                SMB
              </Link>
            </li>
            <li>
              <Link href="#nvrs" className="hover:text-orange-600">
                NVRs
              </Link>
            </li>
            <li>
              <Link href="#dvrs" className="hover:text-orange-600">
                DVRs Project
              </Link>
            </li>
            <li>
              <Link href="#mdvr" className="hover:text-orange-600">
                MDVR
              </Link>
            </li>
            <li>
              <Link
                href="#government-projects"
                className="hover:text-orange-600"
              >
                Government Project
              </Link>
            </li>
            <li>
              <Link href="#body-worn" className="hover:text-orange-600">
                Body Worn Camera
              </Link>
            </li>
            <li>
              <Link href="#accessories" className="hover:text-orange-600">
                Accessories
              </Link>
            </li>
            <li>
              <Link href="#software" className="hover:text-orange-600">
                Software Solutions
              </Link>
            </li>
          </ul>
        </aside>

      
        <main id="camera" className="md:col-span-3 bg-gray-100 rounded-lg p-6">
          <h1 className="text-4xl font-bold text-orange-600 mb-8 text-center">
            Special Camera Series
          </h1>

      <div className="grid gap-6 md:grid-cols-2">
  {cameras.map((camera, idx) => (
    <div
      key={idx}
      className="bg-white rounded-xl shadow-md p-6 flex flex-col"
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src={camera.image}
          alt={camera.name}
          title={camera.name}
          width={300}
          height={250}
          className="mb-4 object-cover"
        />
        <h2 className="text-xl font-bold text-gray-800">
          {camera.model}
        </h2>
        <p className="text-gray-700 mb-3">{camera.name}</p>
        <p className="text-lg font-bold text-green-600 mb-3">
          Price: {camera.price}
        </p>
        <div className="w-full text-left mb-4">
          {camera.features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start text-sm text-gray-700 mb-1"
            >
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

  
      <div className="w-full mt-auto pt-4">
        <Link href="/contact" passHref legacyBehavior>
          <a aria-label={`Buy Now - ${camera.model}`}>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Buy Now
            </button>
          </a>
        </Link>
      </div>
    </div>
  ))}
</div>

          <div id="smb" className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-orange-600 text-center mb-10">
              Orange SMB - Project Models
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {orangeSmbProjectNVRs.map((nvr) => (
                <div
                  key={nvr.model}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative w-full h-52 mb-4">
                    <Image
                      src={nvr.image}
                      alt={nvr.model}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xl"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {nvr.model}
                  </h2>
                  <p className="text-gray-600 mb-3">{nvr.description}</p>
                  <p className="text-orange-600 font-bold mb-3">{nvr.price}</p>

                  {/* Feature List + Button */}
                  <div className="mt-auto flex flex-col justify-between h-full">
                    <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
                      {nvr.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="text-orange-600 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </ul>

                    <a
                      href="/contact"
                      className="inline-block bg-orange-600 text-white text-center py-2 px-4 rounded-lg hover:bg-orange-700 transition"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            id="nvrs"
            className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8"
          >
            <h1
              className="text-4xl font-bold text-center text-orange-600 mb-10"
              id="orange-nvr-section"
            >
              Orange NVRs - Project Models
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {orangeNVRs.map((nvr) => (
                <div
                  key={nvr.model}
                  className="bg-white shadow-lg rounded-2xl overflow-hidden transition transform hover:scale-105"
                >
                  <Image
                    src={nvr.image}
                    alt={nvr.model}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {nvr.model}
                    </h2>
                    <p className="text-lg text-green-600 mt-2 font-bold">
                      {nvr.price}
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-4 space-y-1">
                      {nvr.features.map((feature, i) => (
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
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/contact">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-lg">
                  Contact for Purchase
                </button>
              </Link>
            </div>
          </div>

         <div id="dvrs" className="min-h-screen bg-gray-50 p-6">
  <h1 className="text-4xl font-bold text-center mb-10 text-orange-700">
    DVRs Project Models
  </h1>

  <div className="grid gap-6 md:grid-cols-2">
    {dvrModels.map((dvr, index) => (
      <div
        key={index}
        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between h-full"
      >
        <div className="flex flex-col items-center text-center flex-grow">
          <Image
            src={dvr.image}
            alt={dvr.model}
            title={dvr.model}
            width={300}
            height={200}
            className="mb-4 object-cover"
          />
          <h2 className="text-xl font-bold text-gray-800">{dvr.model}</h2>
          <p className="text-gray-700 mb-2">{dvr.name}</p>
          <p className="text-lg font-bold text-green-600 mb-3">
            Price: {dvr.price}
          </p>

          <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1 text-left">
            {dvr.features.map((feature, i) => (
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

       
        <div className="mt-auto pt-4 flex justify-center">
          <Link href="/contact" passHref legacyBehavior>
            <a
              aria-label={`Buy Now - ${dvr.model}`}
              className="w-full text-center"
            >
              <button className="w-full bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition">
                Buy Now
              </button>
            </a>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
<div
  id="mdvr"
  className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-12 text-gray-800"
>
  <h1 className="text-4xl font-bold text-orange-600 text-center mb-12">
    Orange MDVR & Mobile DVR Project Models
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {mdvrProducts.map((product, index) => (
      <div
        key={index}
        className="bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-5 flex flex-col justify-between"
      >
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={250}
            className="rounded-lg object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-orange-700 mb-1">
            {product.name}
          </h2>
          <p className="text-sm text-gray-700 mb-2">
            {product.description}
          </p>

       
          {product.features && (
            <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
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
          )}

          <p className="text-base font-bold text-green-600 mb-4">
            Price: {product.price}
          </p>
        </div>

        <div className="mt-auto">
          <Link href="/contact" passHref>
            <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

          
        <section id="government-projects" className="py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center text-orange-500 mb-10">
      Government Project - Project Models
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {governmentProjects.map((model) => (
        <div
          key={model.name}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition flex flex-col justify-between"
        >
          <div>
            <Image
              src={model.image}
              alt={model.name}
              width={300}
              height={200}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900">
              {model.name}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {model.description}
            </p>
            <ul className="text-sm text-gray-700 list-disc list-inside mb-3">
              {model.features.map((feature, index) => (
                 <div
              key={index}
              className="flex items-start text-sm text-gray-700 mb-1"
            >
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span>{feature}</span>
            </div>
              ))}
            </ul>
            <p className="text-lg font-bold text-orange-600 mb-4">
              {model.price}
            </p>
          </div>

          <div className="mt-auto">
            <Link href="/contact" passHref>
              <button className="w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<div
  id="body-worn"
  className="min-h-screen bg-gray-50 py-10 px-4 md:px-12"
>
  <h1 className="text-4xl font-bold text-center text-orange-600 mb-10">
    Body Worn Cameras – Project Models
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {bodyWornCameras.map((camera, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
      >
        <div>
          <div className="flex flex-col items-center text-center">
            <Image
              src={camera.image}
              alt={camera.name}
              width={240}
              height={160}
              className="mb-4 rounded-xl object-cover"
            />
            <h2 className="text-xl font-semibold text-gray-800">
              {camera.model}
            </h2>
            <p className="text-sm text-gray-600">{camera.name}</p>
            <p className="text-lg text-orange-500 font-bold mt-2">
              {camera.price}
            </p>
          </div>

          <ul className="mt-4 text-sm text-gray-700 list-disc list-inside">
            {camera.features.map((feature, i) => (
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

        <div className="mt-6">
          <Link href="/contact" passHref>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-full hover:bg-orange-700 transition">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>


         <section id="accessories" className="mb-20 scroll-mt-24">
  <h2 className="text-4xl text-center font-bold text-orange-700 border-b border-gray-300 pb-3 mb-6">
    Accessories – Project Models
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {accessoriesProjectModels.map((product) => (
      <div
        key={product.name}
        className=" rounded-xl shadow-lg p-4 hover:shadow-xl transition flex flex-col justify-between"
      >
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={200}
            className="object-cover w-full h-48 rounded mb-3"
          />
          <h3 className="text-lg font-bold">{product.name}</h3>
          <p className="text-sm text-gray-700 mb-2">{product.description}</p>
          <ul className="text-sm text-gray-600 list-disc list-inside mb-4">
            {product.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start text-sm text-gray-700 mb-1"
            >
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span>{feature}</span>
            </div>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <p className="text-orange-600 font-semibold mb-3">
            ₹Contact for Price
          </p>
          <Link href="/contact" passHref>
            <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>


          <div
            id="software"
            className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:flex gap-10"
          >
            <div className="md:w-1/2">
              <Image
                src={CPTAMS.image}
                alt={CPTAMS.name}
                width={500}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>

            <div className="md:w-1/2 mt-6 md:mt-0 space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                {CPTAMS.name}
              </h2>
              <p className="text-lg text-gray-700">{CPTAMS.title}</p>
              <p className="text-xl font-bold text-green-600">
                Price: {CPTAMS.price}
              </p>

              <h3 className="text-lg font-semibold mt-4 text-gray-800">
                Key Features:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {CPTAMS.features.map((feature, i) => (
               <div
              key={i}
              className="flex items-start text-sm text-gray-700 mb-1"
            >
              <span className="text-orange-600 mr-2 mt-1">•</span>
              <span>{feature}</span>
            </div>
                ))}
              </ul>

              <div className="pt-6">
                <Link href="/contact">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200 shadow-md">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </>
  );
}
