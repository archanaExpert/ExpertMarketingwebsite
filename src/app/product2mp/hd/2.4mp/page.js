import Image from "next/image";
import Link from "next/link";

const cameras = [
  {
    brand: "Orange",
    items: [
      {
        name: "CP-URC-TC24PL3",
        desc: "2.4MP IR Bullet Camera - 30Mtr.",
        price: "₹1,399",
        image: "/2.4 MP/TC24PL3.svg",
        features: [
          "2.4MP PS CMOS Image Sensor",
          "Max. 2.4MP (1920 x 1080)@25/30fps",
          "DWDR, Day/Night (ICR), 2D DNR, AWB, AGC, BLC",
          "3.6mm Fixed lens (2.8mm and 6mm optional)",
          "IR Range of 30 Mtrs., IP67",
          "OSD Menu, control over coaxial cable, 2D-DNR",
          "CVI/CVBS/AHD/TVI switchable",
        ],
      },
      {
        name: "CP-URC-TC24PL3C-L-V2",
        desc: "2.4MP Dual Light Bullet Camera - 30Mtr.",
        price: "₹1,499",
        image: "/2.4 MP/TC24PL3.svg",
        features: [
          "2.4MP PS CMOS Image Sensor",
          "Max. 2.4MP (1920×1080)@25/30fps",
          "DWDR, Day/Night (ICR), 2D DNR, BLC, HLC",
          "3.6mm Fixed Lens (2.8 mm and 6mm optional)",
          "IR Range of 30 Mtrs., Warm Light Range of 20 Mtrs., Smart IR",
          "4 Signals over 1 Coaxial Cable",
          "Support Built-in Mic, IP67",
        ],
      },
      {
        name: "CP-URC-DC24PL3C-L-V2",
        desc: "2.4MP Dual Light Dome Camera - 30Mtr.",
        price: "₹1,549",
        image: "/2.4 MP/C-L-V2.svg",
        features: [
          "2.4MP PS CMOS Image Sensor",
          "Max. 2.4MP (1920 × 1080) @25/30fps",
          "DWDR, Day/Night (ICR), 2D DNR, BLC, HLC",
          "3.6mm Fixed Lens (2.8 mm Optional)",
          "IR Range of 30 Mtr., Warm Light Range of 20 Mtr., Smart IR",
          "4 Signals over 1 Coaxial Cable",
          "Support Built-in Mic",
        ],
      },
      {
        name: "CP-URC-TC24PL3C",
        desc: "2.4MP IR Bullet Camera - 30Mtr.",
        price: "₹1,299",
        image: "/2.4 MP/CP-URC-TC24PL3C.svg",
        features: [
          "2.4MP PS CMOS Image Sensor",
          "Max. Outputs 2.4MP (1920 × 1080) @30fps",
          "DWDR, Day/Night (ICR), 2D DNR, BLC",
          "3.6mm Lens (2.8mm, 6mm Optional)",
          "IR Range of 30 Mtrs., Smart IR, IP67",
          "Support Built-in Mic",
          "4 Signals over 1 Coaxial Cable",
        ],
      },
      {
        name: "CP-URC-DC24PL3C",
        desc: "2.4MP IR Dome Camera - 30Mtr.",
        price: "₹1,349",
        image: "/2.4 MP/DC24PL3C.svg",
        features: [
          "2.4 MP PS CMOS Image Sensor",
          "Max. Outputs 2.4MP (1920 × 1080) @25/30fps",
          "DWDR, Day/Night (ICR), 2D DNR, BLC, HLC",
          "3.6mm Fixed Lens (2.8mm Optional)",
          "IR Range of 30 Mtrs., Smart IR",
          "4 Signals over 1 Coaxial Cable",
          "Support Built-in Mic",
        ],
      },
      {
        name: "CP-URC-DC24PL3",
        desc: "2.4MP IR Dome Camera - 30Mtr.",
        price: "₹1,299",
        image: "/2.4 MP/DC24PL3.svg",
        features: [
          "2.4MP PS CMOS Image Sensor",
          "DWDR, Day/Night (ICR), 2D DNR, BLC, HLC",
          "3.6mm Fixed Lens (2.8mm Optional)",
          "IR Range of 30 Mtr., Smart IR",
          "4 Signals over 1 Coaxial Cable",
          "CVI/ CVBS/ AHD/ TVI Switchable",
        ],
      },
      {
        name: "CP-UVC-TB24FL6-B",
        desc: "2.4MP Full HD HDCVI IR Bullet Camera - 60Mtr.",
        price: "₹1,999",
        image: "/2.4 MP/TB24FL6-B.svg",
        features: [
          "1/2.8” 2.4MP CMOS Image Sensor (0.9071 centimeters)",
          "Max 30fps@2.4MP",
          "HD and SD Output Switchable",
          "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
          "2.7–13.5mm Vari-focal Lens (7–22mm Optional)",
          "IR Range of 60 Mtrs., IP67",
          "Support Starlight Technology",
        ],
      },
      {
        name: "CP-UVC-VB24FL3-B",
        desc: "2.4MP Full HD HDCVI IR Vandal Dome Camera - 30Mtr.",
        price: "₹2,099",
        image: "/2.4 MP/VB24FL3-B.svg",
        features: [
          "1/2.8” 2.4MP CMOS Image Sensor (0.9071 centimetres)",
          "Max 30fps@2.4MP",
          "HD and SD Output Switchable",
          "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
          "2.7–13.5mm Varifocal Lens",
          "IR Range of 30 Mtrs., IP67, IK10",
          "Support Starlight Technology",
        ],
      },
      {
        name: "CP-USC-PC24-VDS",
        desc: "2.4MP Pin Hole Camera",
        price: "₹2,599",
        image: "/2.4 MP/PC24-VDS.svg",
        features: [
          "1/2.8” 2.4MP PS CMOS Image Sensor (0.9071 centimeters)",
          "Max. 30fps@2.4MP",
          "WDR (120dB), Day/Night (ICR), 3D-NR, AWB, AGC, BLC, HLC",
          "2.8mm Lens",
          "1 Ch. Audio Input",
          "Support Starlight Technology",
          "HD and SD Output Switchable",
        ],
      },
      {
        name: "CP-LSC-T24L3",
        desc: "2.4MP IR Bullet Camera",
        price: "₹1,349",
        image: "/2.4 MP/T24L3.svg",
        features: [
          "1/3” 2.4MP PS CMOS Image Sensor (0.84667cm)",
          "Max 25/30fps@2.4MP",
          "DWDR, Day/Night (ICR), 3D-NR, AWB, AGC",
          "3.6mm Lens",
          "IR Range up to 30Mtrs.",
          "IP66",
        ],
      },
      {
        name: "CP-LSC-D24L3",
        desc: "2.4MP IR Dome Camera",
        price: "₹1,349",
        image: "/2.4 MP/D24L3.svg",
        features: [
          "1/3” 2.4MP PS CMOS Image Sensor (0.84667cm)",
          "Max 25/30fps@2.4MP",
          "DWDR, Day/Night (ICR), 3D-NR, AWB, AGC",
          "3.6mm Lens",
          "IR Range up to 30Mtrs.",
          "IP66",
        ],
      },
    ],
  },
  {
    brand: "Indigo",
    items: [
      {
        name: "CP-VAC-T24PL2-V3",
        desc: "2.4 MP Full HD IR Bullet Camera - 20 Mtr.",
        price: "₹1,299",
        image: "/2.4 MP/T24PL2-V3.svg",
        features: [
          "1/2.7” 2.4MP HQIS Pro Image Sensor (6.858cm)",
          "25/30fps@2.4MP",
          "DWDR, Day/Night(ICR), 3D-DNR, AWB, AGC, BLC",
          "Plug-n-Play HD/SD Camera",
          "3.6mm Lens",
          "Equipped with fine IR LEDs for clearer night vision",
          "IR Range of 20 Mtr., IP66",
          "Compatible with HDCVI, HDTVI, AHD and CVBS Formats",
          "*Only for UAE",
        ],
      },
      {
        name: "CP-VAC-T24R5-V5",
        desc: "2.4 MP Full HD Array Bullet Camera - 50 Mtr.",
        price: "₹1,599",
        image: "/2.4 MP/T24R5-V5.svg",
        features: [
          '1/2.7" 2.4 MP HD Color Image Sensor (6.858 centimeters)',
          "25/30fps@2.4MP",
          "DWDR, Day/Night(ICR), 3D-DNR, AWB, AGC, BLC",
          "Plug-n-Play HD/SD Camera",
          "6mm Lens (8mm Optional)",
          "Equipped with fine IR LEDs for clearer night vision",
          "Array Range of 50 Mtr., IP66",
          "Compatible with HDCVI, HDTVI, AHD and CVBS Formats",
        ],
      },
      {
        name: "CP-VAC-T24PL2-V5",
        desc: "2.4 MP Full HD IR Bullet Camera - 20 Mtr.",
        price: "₹1,299",
        image: "/2.4 MP/T24PL2-V5.svg",
        features: [
          '1/2.7" 2.4MP HD Color Image Sensor (6.858 centimeters)',
          "25/30fps@2.4MP",
          "DWDR, Day/Night(ICR), 3D-DNR, AWB, AGC, BLC",
          "Plug-n-Play HD/SD Camera",
          "3.6mm Lens",
          "Equipped with fine IR LEDs for clearer night vision",
          "IR Range of 20 Mtr., IP66",
          "Compatible with HDCVI, HDTVI, AHD and CVBS Formats",
        ],
      },
      {
        name: "CP-VAC-D24L2-V5",
        desc: "2.4 MP Full HD IR Dome Camera - 20 Mtr.",
        price: "₹1,349",
        image: "/2.4 MP/D24L2-V5.svg",
        features: [
          '1/2.7" 2.4MP HD Color Image Sensor (0.9407 centimeters)',
          "25/30fps @ 2.4MP",
          "DWDR, Day/Night(ICR), 3D-DNR, AWB, AGC, BLC",
          "Plug-n-Play HD/SD Camera",
          "3.6mm Lens",
          "Equipped with fine IR LEDs for clearer night vision",
          "IR Range of 20 Mtr.",
          "Compatible with HDCVI, HDTVI, AHD and CVBS Formats",
        ],
      },
    ],
  },
];

export default function OrangeCameras() {
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
     <h3 className="text-3xl font-bold text-blue-900 text-center mb-4">
  2.4 MP <span className="text-orange-500">HD Cameras</span>
  <span className="block w-24 h-1 bg-blue-600 mt-2 rounded-full mx-auto"></span>
</h3>

      {cameras.map((section) => (
        <div key={section.brand} className="mb-10">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            {section.brand} Series
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map((cam, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
              >
                <Image
                  src={cam.image}
                  alt={cam.name}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg font-bold">{cam.name}</h3>
                    <p className="text-sm text-gray-600">{cam.desc}</p>
                    <ul className="text-sm text-gray-700 mt-2 list-disc list-inside space-y-1">
                      {cam.features?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-sm text-gray-700 mb-1"
                        >
                          <span className="text-orange-600 mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </ul>
                    <p className="text-orange-600 font-semibold mt-2">
                      {cam.price}
                    </p>
                  </div>
                  <div className="mt-4">
                    <Link href="/contact">
                      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
