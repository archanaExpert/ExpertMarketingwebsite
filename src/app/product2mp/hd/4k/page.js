import Image from "next/image";
import Link from "next/link";

const orange4kCameras = [
  {
    model: "CP-UVC-RC4K08L2-VD",
    name: "Multi-Lens Panoramic HDCVI IR Camera",
    range: "20 Mtr.",
    image: "/4k/RC4K08L2-VD.svg",
    price: "₹8,499",
    description:
      "Ideal for wide-area surveillance with panoramic coverage and 4K clarity. Great for parking lots and large spaces.",
    features: [
      "Three 1/2.8” 2MP Progressive Scan CMOS Image Sensors (7.112 cm)",
      "Max. 15fps@4K, 25fps@4MP",
      "1 panoramic view + 3 individual 2MP video outputs simultaneously",
      "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
      "3.6mm fixed lens",
      "IR Range of 20 Mtrs with Smart IR",
      "IP67 Weatherproof, IK10 Vandal-Proof",
      "Up to 500m transmission via RG59 coaxial cable",
    ],
  },
  {
    model: "CP-UVC-EC4K08L2C-D",
    name: "4K WDR HDCVI IR Fisheye Camera",
    range: "15 Mtr.",
    image: "/4k/EC4K08L2C-D.svg",
    price: "₹7,999",
    description:
      "Fisheye lens for 360° monitoring with true 4K resolution. Compact design and easy ceiling mount.",
    features: [
      "1/2” 8 Megapixel Progressive Scan CMOS (1.27cm)",
      "Max. 15fps@4K resolution",
      "Panoramic fisheye lens for 360° coverage",
      "Multiple correction modes: original, panoramic, double panoramic",
      "Up to 500m transmission via RG59 coaxial cable",
      "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
      "IR Range of 15 Mtrs with Smart IR",
      "IP67 Weatherproof & IK10 Vandal-Proof design",
    ],
  },
  {
    model: "CP-UVC-BC4K08C-D",
    name: "4K WDR HDCVI Box Camera",
    range: "—",
    image: "/4k/BC4K08C-D.svg",
    price: "₹6,899",
    description:
      "Professional-grade box camera offering excellent detail and customizable lens options for flexible setups.",
    features: [
      "4/3” 8 Megapixel Progressive Scan CMOS (3.38667 cm)",
      "30fps@3840×2160 (HDMI), 15fps@3840×2160 (BNC)",
      "M43 lens interface for interchangeable lenses",
      "Up to 500m transmission with 75-3 coaxial cable",
      "WDR (140dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
      "Built-in Microphone for audio recording",
      "Direct HDMI video output for real-time 4K monitoring",
    ],
  },
  {
    model: "CP-UVC-VC4K08ZL5H-VD",
    name: "4K WDR HDCVI IR Vandal Dome Camera",
    range: "50 Mtr.",
    image: "/4k/VC4K08ZL5H-VD.svg",
    price: "₹9,499",
    description:
      "Vandal-resistant dome camera with 4K recording and extended IR night vision. Perfect for high-risk areas.",
    features: [
      "1/2” 8 Megapixel Progressive Scan CMOS (1.27 cm)",
      "Max. 15fps@3840×2160 (4K resolution)",
      "3.7–11mm Motorized Varifocal Lens",
      "Up to 500m transmission via RG59 coaxial cable",
      "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
      "3x Optical Motorized Zoom Lens",
      "IR Range of 50 Mtrs with Smart IR",
      "IP67 Weatherproof & IK10 Vandal-Proof Housing",
    ],
  },
  {
    model: "CP-UVC-VC4K08ZL5-VD",
    name: "4K WDR HDCVI IR Vandal Dome Camera",
    range: "50 Mtr.",
    image: "/4k/VC4K08ZL5-VD.svg",
    price: "₹9,199",
    description:
      "Same robust features as ZL5H model, with reliable 4K monitoring and rugged build quality.",
    features: [
      "1/2” 8 Megapixel Progressive Scan CMOS (1.27 cm)",
      "Max. 15fps@3840×2160 (4K resolution)",
      "3.7–11mm Motorized Varifocal Lens",
      "Up to 500m transmission via RG59 coaxial cable",
      "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
      "3x Optical Motorized Zoom Lens",
      "IR Range of 50 Mtrs with Smart IR",
      "IP67 Weatherproof & IK10 Vandal-Proof Housing",
    ],
  },
  {
    model: "CP-UVC-TC4K08ZL10H-VD",
    name: "4K WDR HDCVI IR Bullet Camera",
    range: "100 Mtr.",
    image: "/4k/TC4K08ZL10H-VD.svg",
    price: "₹10,999",
    description:
      "Long-range 4K bullet camera with 100m IR coverage. Excellent for perimeter and highway surveillance.",
    features: [
      "1/2” 8 Megapixel Progressive Scan CMOS (1.27 cm)",
      "Max. 15fps@3840×2160 (4K resolution)",
      "3.7–11mm Motorized Varifocal Lens",
      "3x Optical Motorized Zoom Lens",
      "Up to 500m transmission via RG59 coaxial cable",
      "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
      "IR Range of 100 Mtrs with Smart IR",
      "IP67 Weatherproof, IK10 Vandal-Proof Housing",
    ],
  },
  {
    model: "CP-UVC-TC4K08ZL10-VD",
    name: "4K WDR HDCVI IR Bullet Camera",
    range: "100 Mtr.",
    image: "/4k/TC4K08ZL10-VD.svg",
    price: "₹10,499",
    description:
      "Compact and powerful bullet camera with ultra-clear 4K output and extended infrared reach.",
    features: [
      "1/2” 8Megapixel progressive scan CMOS (1.27cm)",
      "Max. 15fps@3840×2160",
      "3.7-11mm motorized lens",
      "3x optical motorized zoom lens",
      "Up to 500m transmission with RG59 coaxial cable",
      "WDR (120dB), Day/Night (ICR), 2D/3D-DNR, AWB, AGC, BLC, HLC",
      "IR Range of 100 Mtrs.",
      "IP67, IK10",
    ],
  },
];

export default function Orange4KPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Crystal Clear HD Surveillance
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Monitor your property 24/7 with CP PLUS HD Cameras—offering
            high-definition clarity, night vision, and reliable security.
          </p>
        </div>
      </section>
      <div className="min-h-screen bg-white text-gray-800 p-6">
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-10">
          Orange 4K - Analog HD Cameras
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {orange4kCameras.map((camera) => (
            <div
              key={camera.model}
              className="bg-gray-50 shadow-lg rounded-2xl p-5 flex flex-col hover:shadow-orange-400 transition duration-300"
            >
              <Image
                src={camera.image}
                alt={camera.model}
                width={500}
                height={300}
                className="rounded-xl object-cover w-full h-52"
              />

              <div className="mt-4 flex-1 flex flex-col">
                <h2 className="text-xl font-semibold text-gray-900">
                  {camera.model}
                </h2>
                <p className="text-sm text-orange-600 font-medium">
                  {camera.name}
                </p>
                <p className="text-sm text-gray-600 mb-2">{camera.range}</p>
                <p className="text-sm text-gray-700 mb-3">
                  {camera.description}
                </p>

                {camera.features && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mb-4 space-y-1">
                    {camera.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start text-sm text-gray-700 mb-1"
                      >
                        <span className="text-orange-600 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </ul>
                )}

                <div className="mt-auto">
                  <div className="font-bold text-lg text-green-600">
                    {camera.price}
                  </div>
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
  );
}
