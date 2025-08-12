import React from 'react'
import Image from 'next/image';

import { ShieldCheck, Camera, Network, SatelliteDish, Database ,Building2, School, Factory, Hospital, BusFront, Landmark} from "lucide-react"; 

const page = () => {
    const services = [
  { title: "CCTV Installation & AMC", icon: Camera },
  { title: "IP & HP Camera Setup", icon: Camera },
  { title: "GPS Vehicle Tracking", icon: SatelliteDish },
  { title: "Biometric & Access Control Systems", icon: ShieldCheck },
  { title: "EPABX/Intercom Setup", icon: Network },
  { title: "Solutions Solutions (LAN/WAN)", icon: Network },
  { title: "Optical Fiber Cabling", icon: Network },
  { title: "Server Room Setup", icon: Database },
  { title: "WiFi Zone Setup", icon: Network },
  { title: "Firewall & Cyber Security", icon: ShieldCheck },
  { title: "Data Backup & NAS Solutions", icon: Database },
  { title: "IT Infrastructure Consultancy", icon: ShieldCheck }
];
const industries = [
  { name: "Homes", icon: Building2 },
  { name: "Schools / Colleges", icon: School },
  { name: "Industries", icon: Factory },
  { name: "Hospitals", icon: Hospital },
  { name: "Transport Companies", icon: BusFront },
  { name: "Government Offices", icon: Landmark },
];
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
        <h1 className="text-4xl md:text-6xl font-bold mb-4"> P2M2 Solutions Surveillance</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Monitor your property 24/7 with CP PLUS HD Cameras—offering high-definition clarity, night vision, and reliable security.
        </p>
      </div>
    </section>
  
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white py-20 px-6 overflow-hidden">
   
      <div className="absolute top-0 left-0 w-36 h-36 bg-orange-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 bg-orange-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>

    
      <div className="relative z-10 max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-10 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">
          About <span className="text-orange-500">P2M2 Camera Solutions</span><span className="block w-42 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
        </h2>

        <p className="text-lg text-gray-800 leading-relaxed">
          <span className="font-semibold text-blue-800">P2M2 Camera Solutions</span> specializes in providing
          advanced <span className="text-blue-600 font-medium">CCTV surveillance</span>,
          <span className="text-blue-600 font-medium"> IP/HD camera setups</span>, and
          <span className="text-blue-600 font-medium"> smart security systems</span> for homes, offices, commercial spaces, and industries.
          <br /><br />
          We offer end-to-end solutions — from site inspection, structured cabling, and installation to maintenance and remote monitoring — ensuring 
          <span className="text-orange-500 font-semibold"> safety, reliability, and 24/7 protection</span> for your premises.
        </p>
      </div>
    </section>

  <section className="bg-gradient-to-b from-gray-100 to-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">
        Our <span className="text-orange-500">Services</span><span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map(({ title, icon: Icon }, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center group hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <div className="bg-blue-100 text-blue-600 p-4 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-700">
              {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
      <section className="bg-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Industries <span className="text-orange-500">We Serve</span><span className="block w-24 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></span></h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
        {industries.map(({ name, icon: Icon }, index) => (
          <div
            key={index}
            className="group bg-gray-100 hover:bg-blue-100 transition-all duration-300 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-lg"
          >
            <div className="bg-blue-50 text-blue-600 p-3 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 mb-4">
              <Icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  
    </>
  )
}

export default page