import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const products = [
  {
    name: "GPS Vehicle Tracker",
    image: "/gpsa.svg",
        link:"/gpsdetails",

    description: [
      "Real-time tracking",
      "Geo-fencing & alerts",
      "Driver behaviour reports",
      "Mobile & web access"
    ],
  },
   {
    name: "Magnetic GPS Tracker",
    image: "/gpsm1.svg",
    link:"/magneticgps",
    description: [
      "Strong magnetic mount for hidden placement",
      "No wiring required — hassle-free installation",
      "Long-lasting battery-powered device",
      "Real-time tracking via mobile & web app",
      "Ideal for cars, bikes, containers, and assets"
    ],
  },
   {
    name: "Asset GPS Tracker",
    image: "/gpsb.svg",
    link: "/gpsdetails",
    description: [
      "Designed for containers & equipment",
      "Waterproof & rugged design",
      "Long battery life (up to 90 days)",
      "Track valuable assets remotely",
    ],
  },


];

export default function GpsProduct() {
  return (
    <>
      <Head>
        <title>Our Products | Expert Solutions</title>
      </Head>
      <section className="py-16 px-6 md:px-20 bg-gray-50 min-h-[60vh] md:min-h-[80vh]">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-800">
          Our Smart GPS & Sensor Solutions<span className="block w-72 h-1 bg-blue-800 mx-auto mt-4 rounded-full"></span>
        </h1>
<div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
  {products.map((product, index) => (
    <Link
      href={product.link}
      key={index}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
    >
      
      <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center overflow-hidden rounded-t-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

     
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 mb-4">
          {product.name}
        </h2>

        <ul className="space-y-2">
          {product.description.map((point, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700">
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
