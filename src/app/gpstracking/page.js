import React from "react";
import Image from "next/image";
import {
  FaMapMarkedAlt,
  FaCarCrash,
  FaRoute,
  FaSatelliteDish,
  FaLock,

  FaMagnet,
  FaBatteryFull,
  FaBell,
  FaClock,
  FaEye,
} from "react-icons/fa";
import { MdUpdate, MdBatteryChargingFull } from "react-icons/md";
import { GiSatelliteCommunication } from "react-icons/gi";
import Link from "next/link";
const features = [
  {
    icon: <FaMapMarkedAlt size={28} />,
    title: "Real-Time Tracking",
    desc: "Track vehicle movement live with GPS precision.",
  },
  {
    icon: <FaCarCrash size={28} />,
    title: "Accident Alerts",
    desc: "Get notified during sudden stops or collisions.",
  },
  {
    icon: <FaRoute size={28} />,
    title: "Route History",
    desc: "Review previous travel history with location points.",
  },
  {
    icon: <FaSatelliteDish size={28} />,
    title: "Geo-Fencing",
    desc: "Set boundaries and get alerts when crossed.",
  },
  {
    icon: <FaLock size={28} />,
    title: "Anti-Theft",
    desc: "Remotely lock the engine to prevent theft.",
  },
  {
    icon: <MdBatteryChargingFull size={28} />,
    title: "Battery Backup",
    desc: "Continue tracking even after power cut.",
  },
  {
    icon: <GiSatelliteCommunication size={28} />,
    title: "SIM Validity",
    desc: "Monitor SIM/data expiry & alerts.",
  },
  {
    icon: <MdUpdate size={28} />,
    title: "Automatic Updates",
    desc: "Receive OTA updates without hassle.",
  },
];

const benefits = [
  "Improves driver accountability",
  "Reduces fuel and maintenance cost",
  "Enables better route planning",
  "Provides safety to family & assets",
  "Supports fleet productivity & growth",
  "24/7 customer support available",
];

const useCases = [
  {
    title: "Logistics & Transport",
    desc: "Manage large fleets with location & performance tracking.",
  },
  {
    title: "Taxi Aggregators",
    desc: "Track rides, optimize routes, improve rider safety.",
  },
  {
    title: "School Buses",
    desc: "Monitor pickup/drop with alerts for parents & staff.",
  },
  {
    title: "Personal Cars",
    desc: "Get theft alerts, family safety, and trip history.",
  },
  {
    title: "Construction Vehicles",
    desc: "Track movement, optimize idle time & fuel usage.",
  },
  {
    title: "Government Fleets",
    desc: "Ensure transparency and efficient usage of resources.",
  },
];
const GPSTracking = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-800">
        <section className="relative h-[60vh] bg-blue-900 text-white flex items-center justify-center text-center">
          <Image
            src="/gps0.jpg"
            alt="GPS Tracking"
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
          <div className="z-10 px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Real-Time GPS Vehicle Tracking
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Track your vehicles live, monitor behavior, and ensure complete
              control over your fleet.
            </p>
          </div>
        </section>
        <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              GPS <span className="text-orange-500">Tracking System</span>
              <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
            </h2>
            <p className="text-gray-600 text-lg">
              Empower your vehicle management with real-time GPS technology –
              secure, reliable, and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition duration-300 text-center"
              >
                <div className="text-blue-600 flex justify-center mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-md p-10 mb-20 max-w-5xl mx-auto">
            <h3 className="text-4xl font-bold text-blue-900 mb-4 text-center  ">
              Benefits of{" "}
              <span className="text-orange-500">Tracking System</span>{" "}
              <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
            </h3>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
              {benefits.map((benefit, index) => (
                <li key={index} className="hover:text-blue-700 transition">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center text-blue-900 mb-12">
              Best <span className="text-orange-500">Use Cases</span>
              <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((use, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold text-blue-700 mb-2">
                    {use.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{use.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-6 md:px-20 bg-white">
          <h2 className="text-4xl font-bold text-blue-900 text-center mb-6">
            Live Vehicle <span className="text-orange-500">Location</span>
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
          </h2>
          <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-[400px]">
            <div className="relative w-full h-[60vh] flex items-center justify-center">
              <Image
                src="/Rise.jpg"
                alt="GPS Tracking"
                fill
                className="object-cover "
              />
            </div>
          </div>
        </section>

        <section className="py-10 px-6 md:px-20 bg-blue-50">
          <h3 className="text-2xl font-semibold mb-6">Vehicle Details</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Vehicle", value: "MH12AB1234" },
              { label: "Speed", value: "62 km/h" },
              { label: "Status", value: "Moving" },
              { label: "Driver", value: "Rahul Sharma" },
              { label: "Last Location", value: "Pune - Mumbai Expressway" },
              { label: "Last Updated", value: "1 min ago" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl shadow">
                <p className="text-sm text-gray-500">{item.label}</p>
                <p className="text-xl font-bold text-blue-900">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 md:px-20 bg-gradient-to-r from-blue-50 to-blue-100">
          <h2 className="text-4xl font-bold  text-blue-900 text-center mb-12">
            Why Choose{" "}
            <span className="text-orange-500">Our GPS Tracking?</span>
            <span className="block w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              {
                icon: "📍",
                title: "Live Tracking",
                desc: "View exact vehicle location in real-time.",
              },
              {
                icon: "🚗",
                title: "Speed Alerts",
                desc: "Instant notifications on overspeeding.",
              },
              {
                icon: "🕒",
                title: "History Playback",
                desc: "Review past travel routes and stops.",
              },
              {
                icon: "📊",
                title: "Analytics",
                desc: "Fleet performance & usage reports.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow p-6 hover:shadow-xl transition"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-blue-900 mb-4">
                Magnetic <span className="text-orange-500">GPS Tracker </span>{" "}
                <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full" />
              </h2>
              <p className="text-gray-600 m-2 text-lg">
                Powerful, Discreet & Easy-to-Install Tracking Solution for
                Vehicles & Assets.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-blue-900 mb-8 text-center">
                Top <span className="text-orange-500">Features:</span>{" "}
                <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <FaMagnet />,
                    title: "Strong Magnetic Mount",
                    desc: "Easily attach to any metal surface without wiring.",
                  },
                  {
                    icon: <FaMapMarkedAlt />,
                    title: "Real-Time Tracking",
                    desc: "Track movement live with high precision.",
                  },
                  {
                    icon: <FaBatteryFull />,
                    title: "Long Battery Life",
                    desc: "Runs up to 30 days depending on usage.",
                  },
                  {
                    icon: <FaBell />,
                    title: "Geo-Fencing Alerts",
                    desc: "Get notified if the device leaves a set area.",
                  },
                  {
                    icon: <FaClock />,
                    title: "History Playback",
                    desc: "View complete travel history & routes.",
                  },
                  {
                    icon: <FaEye />,
                    title: "Stealth Mode",
                    desc: "Compact, covert design with no flashing lights.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-blue-900  flex justify-center text-4xl mb-4 mx-auto">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-blue-900 mb-8 text-center">
                Benefits of{" "}
                <span className="text-orange-500">Magnetic GPS</span>{" "}
                <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full" />
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Easy installation with no wiring required",
                  "Ideal for tracking cars, bikes, or valuable assets",
                  "Works in urban and rural areas alike",
                  "Supports tamper alerts and low battery notifications",
                  "Access tracking via mobile/web app",
                  "Discreet placement prevents detection",
                ].map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-xl shadow-sm p-4"
                  >
                    <span className="text-blue-600 text-xl">✔</span>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-4xl font-semibold text-blue-900 mb-8 text-center">
                Best<span className="text-orange-500"> Use Cases</span>{" "}
                <div className="h-1 w-24 bg-blue-600 mx-auto mt-4 rounded-full" />
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Fleet & Vehicle Tracking",
                    desc: "Keep an eye on your fleet's movement & prevent misuse.",
                  },
                  {
                    title: "Rental Car Monitoring",
                    desc: "Track rented vehicles and ensure safe return.",
                  },
                  {
                    title: "Cargo & Asset Protection",
                    desc: "Secure your goods and detect any unauthorized movement.",
                  },
                  {
                    title: "Child & Elder Safety",
                    desc: "Place in school bags or elder’s vehicle for safety monitoring.",
                  },
                  {
                    title: "Covert Surveillance",
                    desc: "Use for undercover investigations or vehicle recovery.",
                  },
                  {
                    title: "Personal Car Anti-theft",
                    desc: "Track your car even if it’s towed or stolen.",
                  },
                ].map((useCase, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-50 p-5 rounded-xl shadow-md hover:shadow-lg"
                    whileHover={{ y: -5 }}
                  >
                    <h4 className="text-blue-800 font-semibold mb-2">
                      {useCase.title}
                    </h4>
                    <p className="text-gray-700">{useCase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GPSTracking;
