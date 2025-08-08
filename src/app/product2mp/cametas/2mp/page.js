
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const products = [
  {
    model: "CP-UNC-DA21L3C-Q",
    name: "2MP Network IR Dome Camera",
    range: "30Mtr",
    price: "₹2,850",
    image: "/products/cp-unc-da21l3c-q.jpg",
  },
  {
    model: "CP-UNC-TA21L3C-Q",
    name: "2MP Network IR Bullet Camera",
    range: "30Mtr",
    price: "₹2,950",
    image: "/products/cp-unc-ta21l3c-q.jpg",
  },
  {
    model: "CP-UNC-TA21L6C-Q",
    name: "2MP Network IR Bullet Camera",
    range: "60Mtr",
    price: "₹3,250",
    image: "/products/cp-unc-ta21l6c-q.jpg",
  },
  {
    model: "CP-UNC-WE21L3C-MDS-Q",
    name: "2MP Network IR Wedge Camera",
    range: "30Mtr",
    price: "₹3,050",
    image: "/products/cp-unc-we21l3c-mds-q.jpg",
  },
  {
    model: "CP-UNC-TE21ZL6C-VMDS-Q",
    name: "2MP Network IR Bullet Camera",
    range: "60Mtr",
    price: "₹3,950",
    image: "/products/cp-unc-te21zl6c-vmds-q.jpg",
  },
  {
    model: "CP-UNC-VE21ZL4C-VMDS-Q",
    name: "2MP Network IR Vandal Dome Camera",
    range: "40Mtr",
    price: "₹4,250",
    image: "/products/cp-unc-ve21zl4c-vmds-q.jpg",
  },
  {
    model: "CP-UNC-BE21C-VMDS-Q",
    name: "2MP Full HD Network Box Camera",
    range: "-",
    price: "₹3,750",
    image: "/products/cp-unc-be21c-vmds-q.jpg",
  },
];

export default function VedaanNetworkCameras() {
  return (
    <>
      <Head>
        <title>Vedaan 2MP Network Cameras</title>
        <meta
          name="description"
          content="Explore Vedaan's 2MP Network IR Dome, Bullet, Wedge, and Box Cameras with pricing"
        />
      </Head>

      <main className="px-4 py-10 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-900">
          Vedaan 2MP - Network Camera Series
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((camera, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition"
            >
              <div className="w-full h-48 relative mb-4">
                <Image
                  src={camera.image}
                  alt={camera.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                {camera.name}
              </h2>
              <p className="text-sm text-gray-500">{camera.model}</p>
              <p className="text-sm text-gray-700 mt-1">
                Range: <span className="font-medium">{camera.range}</span>
              </p>
              <p className="text-lg font-bold text-green-600 mt-2">
                Price: {camera.price}
              </p>
            </div>
          ))}
        </div>
          <section>
       <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-800">
            Upgrade to Smart Surveillance Today!
          </h3>
          <p className="text-gray-600 mt-2">
            Talk to our NVR experts or request a custom package.
          </p>
          <Link href="/contact">
            <button className="flex items-center gap-2 mx-auto bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition duration-300 shadow-md">
              <FaPhoneAlt className="text-lg" />
              Book a Free Consultation
            </button>
          </Link>
        </div>
      </section>
      </main>
    
    </>
  );
}
