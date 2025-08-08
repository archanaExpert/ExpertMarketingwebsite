import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

export default function Vedaan8MPNetworkCameraPage() {
  const cameras = [
    {
      model: "CP-UNC-VC81ZL5C-VMD-Q",
      name: "8MP Network IR Vandal Dome Camera - 50Mtr.",
      image: "/ip/8ch/ZL5C-VMD-Qe.svg",
      price: "₹14,200",
      features: [
        '1/2.7” 8MP PS CMOS Image Sensor (0.9407 cm)',
        'Max. 8MP (3840 × 2160)@1–20 fps',
        'Instastream, H.265, H.264, MJPEG',
        'Support Quad Stream',
        'WDR(120dB), Day/Night(ICR), 3D NR, ROI, BLC, HLC',
        'AWB, AGC, Digital Watermarking',
        '2.7 mm–13.5 mm Motorized Lens',
        'IR Range of 50 Mtr.',
        'Starlight Technology, Built-in Mic',
        'Micro SD Card, IP67, IK10, PoE'
      ]
    },
    {
      model: "CP-UNC-TE81ZL6C-VMDS-Q",
      name: "8MP Network IR Bullet Camera - 60Mtr.",
      image: "/ip/8ch/TE81ZL6C-VMDS-Q.svg",
      price: "₹14,800",
      features: [
      '1/2.5" 8MP PS CMOS Image Sensor (1.016 cm)',
      'Max. 8MP (3840 x 2160)@25/30fps',
      'Instastream, H.265, H.264, MJPEG',
      'Quad Stream, 2.7–13.5mm Motorized Lens',
      'WDR(120dB), 3D NR, Defog, BLC, HLC, AWB, AGC',
      'Digital Watermarking, Starlight Technology',
      'IR Range: 60 Mtrs, Built-in Mic',
      'Micro SD Card Support, IP67, IK10, PoE'
    ]
    }
  ];

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

      <div className="min-h-screen bg-gray-100 text-gray-800 p-4 md:p-6 flex flex-col items-center">
        <div className="w-full max-w-6xl">
          <Link href="/" className="text-sm text-blue-600 hover:underline mb-4 inline-block">
            ← Back to 8MP Network Cameras
          </Link>

          <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">Vedaan 8MP - Network Cameras</h1>

          <div className="grid gap-8 md:grid-cols-2">
            {cameras.map((camera, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col">
                <Image
                  src={camera.image}
                  alt={camera.name}
                  title={camera.name}
                  width={500}
                  height={400}
                  className="rounded-lg object-cover mb-4"
                />

                <h2 className="text-xl font-semibold text-gray-800 mb-1 text-center">{camera.model}</h2>
                <p className="text-md text-gray-600 mb-2 text-center">{camera.name}</p>

                {camera.price && (
                  <p className="text-lg font-bold text-green-600 mb-4 text-center">
                    Price: {camera.price}
                  </p>
                )}

                {camera.features && (
                  <ul className="text-sm text-gray-700 mb-4 list-disc pl-5 space-y-1">
                    {camera.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                )}
<div className="flex w-full justify-center mt-auto">
  <Link href="/contact" passHref legacyBehavior>
    <a aria-label={`Buy Now - ${camera.model}`} className="w-full">
      <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded-lg transition">
        Buy Now
      </button>
    </a>
  </Link>
</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
