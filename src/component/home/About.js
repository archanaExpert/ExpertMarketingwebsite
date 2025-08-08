"use client";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaVideo, FaSatelliteDish } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Video, ShieldCheck, Cloud, Building2 } from "lucide-react";
const testimonials = [
  {
    quote:
      "EXPERT SOLUTIONS upgraded our fleet tracking — saved us 20% on fuel costs!",
    name: "Manish R.",
    role: "Transport Manager",
  },
  {
    quote:
      " The team at EXPERT SOLUTIONS handled everything from planning to setup with exceptional professionalism.",

    name: "Anita D.",
    role: "Factory Owner",
  },
  {
    quote:
      "GPS tracking gave real-time insights — improved driver accountability.",
    name: "Neha S.",
    role: "Fleet Director",
  },
  {
    quote:
      "Their P2M2 networking made remote access smooth — zero connectivity issues!",
    name: "Suresh P.",
    role: "IT Manager",
  },
];

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="relative bg-gradient-to-r from-blue-100 via-white to-blue-100 py-20 px-6 md:px-20 text-center overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

        <div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 hidden md:block">
            <Image
              src="/ipc1.svg"
              alt="Left Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute left-28 -bottom-0.5 transform -translate-y-1/2 hidden md:block">
            <Image
              src="/megnetic.svg"
              alt="Left Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute left-36 bottom-1/2 transform -translate-y-1/2 hidden md:block">
            <Image
              src="/can.png"
              alt="Left Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute left-6 top-1/6 transform -translate-y-1/2 hidden md:block">
            <Image
              src="/d3.svg"
              alt="Left Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <div>
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden md:block">
            <Image
              src="/gpsd.svg"
              alt="Right Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute right-28 top-80 transform -translate-y-1/2 hidden md:block">
            <Image
              src="/ai1.svg"
              alt="Right Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute right-36 top-32 transform -translate-y-1/2 hidden md:block">
            <Image
              src="/d3.svg"
              alt="Right Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
          <div className="absolute right-8 top-1/5 transform -translate-y-1/2 hidden md:block">
            <Image
              src="/can.png"
              alt="Right Image"
              width={100}
              height={100}
              className="rounded-full border-4 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="relative z-10 bg-white/40 backdrop-blur-md rounded-2xl p-10 md:p-16 shadow-2xl max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-md">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
            We are{" "}
            <span className="text-blue-700 font-semibold">
              EXPERT SOLUTIONS
            </span>{" "}
            — pioneers in providing{" "}
            <span className="underline decoration-blue-400">
              state-of-the-art security
            </span>{" "}
            and monitoring systems for{" "}
            <strong className="text-black">businesses</strong>,{" "}
            <strong className="text-black">fleets</strong>, and{" "}
            <strong className="text-black">homes</strong>.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20">
        <h2 className="text-4xl font-semibold text-blue-900  text-center mb-10">
          🌟 Our <span className="text-blue-600">Solutions</span>
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaMapMarkerAlt className="text-4xl mx-auto text-blue-600 mb-2" />
            <h3 className="text-lg font-bold">GPS Vehicle Tracking</h3>
            <p className="text-sm">
              Real-time tracking & driver behavior monitoring.
            </p>
          </div>
          <div>
            <FaVideo className="text-4xl mx-auto text-blue-600 mb-2" />
            <h3 className="text-lg font-bold">HD Camera</h3>
            <p className="text-sm">
              High-definition surveillance with reliable clarity.
            </p>
          </div>

          <div>
            <FaVideo className="text-4xl mx-auto text-blue-600  mb-2" />
            <h3 className="text-lg font-bold">CCTV Installations</h3>
            <p className="text-sm">
              IP cameras, 4K recording & remote monitoring.
            </p>
          </div>
          <div>
            <FaSatelliteDish className="text-4xl mx-auto text-blue-600  mb-2" />
            <h3 className="text-lg font-bold">P2M2 Wireless Networking</h3>
            <p className="text-sm">Long-range connectivity for NVR and more.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-900  mb-12">
          🌟 Why Choose <span className="text-blue-600">IP Camera?</span>
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-start gap-4">
            <Video className="w-8 h-8 text-blue-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Ultra-clear footage</h3>
              <p className="text-sm text-gray-600">
                Even at night, capture every detail with HD clarity.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">
                Smart analytics & alerts
              </h3>
              <p className="text-sm text-gray-600">
                AI-powered detection and real-time threat alerts.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-start gap-4">
            <Cloud className="w-8 h-8 text-purple-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Access from anywhere</h3>
              <p className="text-sm text-gray-600">
                View footage anytime via cloud or mobile app.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex items-start gap-4">
            <Building2 className="w-8 h-8 text-yellow-500 mt-1" />
            <div>
              <h3 className="font-semibold text-lg">Perfect for businesses</h3>
              <p className="text-sm text-gray-600">
                Ideal coverage for growing spaces and large setups.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-blue-50 to-white py-4 px-4 ">
        <h2 className="text-4xl font-bold text-center text-blue-900  ">
          🌟 What <span className="text-blue-600">Our Clients</span> Say
          <span className="block w-24 h-1 bg-blue-600 mx-auto m-4 rounded-full"></span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="px-2"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="backdrop-blur-md bg-white/60 p-6 rounded-3xl shadow-xl border border-blue-200 hover:-translate-y-1 transition-all duration-300 h-full flex flex-col justify-between">
                <div className="relative">
                  <div className="text-5xl text-blue-500 mb-4 leading-none">
                    “
                  </div>
                  <p className="text-gray-800 text-[17px] font-medium leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="text-5xl text-blue-500 mt-2 leading-none text-right">
                    ”
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-4 justify-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full overflow-hidden">
                    <Image
                      src="/icon.svg"
                      alt="Profile"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="bg-gradient-to-br from-white via-gray-100 to-blue-50 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold text-blue-900  mb-6">
          🌟 Who <span className="text-blue-600">We</span> Are
          <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg text-gray-700 leading-relaxed">
          With over{" "}
          <span className="font-semibold text-blue-600">
            8 years of experience
          </span>
          , <strong>Expert Solutions</strong> has empowered hundreds of
          businesses and homeowners across Odisha and neighboring regions.
          <br />
          We specialize in <strong>GPS tracking</strong>,{" "}
          <strong>IP CCTV surveillance</strong>, and{" "}
          <strong>P2M2 wireless networking</strong> — delivering reliable tech
          for real-world security.
        </p>
        <p className="text-md text-gray-600">
          📍 Odisha | Jharkhand | Chhattisgarh | West Bengal
        </p>
      </section>
    </div>
  );
};

export default About;
