"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setServicesOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 lg:px-24 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/lo.svg"
            alt="Expert Solution Logo"
            width={100}
            height={80}
            className="object-contain"
          />
        </Link>

       
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/home" className="hover:text-blue-600 font-medium" onClick={handleLinkClick}>Home</Link>
          <Link href="/about" className="hover:text-blue-600 font-medium" onClick={handleLinkClick}>About Us</Link>

       
          <div className="relative group">
            <button
              onClick={toggleServices}
              className="hover:text-blue-600 font-medium flex items-center"
            >
              Services <ChevronDown className="w-4 h-4 ml-1" />
            </button>
            {servicesOpen && (
              <div className="absolute top-8 left-0 bg-white border rounded-md shadow-lg w-60 z-50">
                <ul className="flex flex-col p-2 space-y-1 text-sm text-gray-700">
                  {[
                    { href: "/gpstracking", text: "GPS Vehicle Tracking" },
                    { href: "/hdcamera", text: "HD Cameras" },
                    { href: "/ipcamera", text: "CCTV Cameras (IP)" },
                    { href: "/p2m2", text: "P2M2 Networking" },
                    { href: "/network", text: "Network Video Recorder (NVR)" },
                  ].map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={handleLinkClick}
                        className="hover:bg-blue-50 px-4 py-2 block"
                      >
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-blue-600 font-medium" onClick={handleLinkClick}>Contact Us</Link>
        </nav>

       
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

    
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 space-y-3 border-t">
          <Link href="/home" className="block py-2 border-b hover:text-blue-600" onClick={handleLinkClick}>Home</Link>
          <Link href="/about" className="block py-2 border-b hover:text-blue-600" onClick={handleLinkClick}>About Us</Link>

       
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center w-full justify-between py-2 hover:text-blue-600"
            >
              Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="mt-2 space-y-2 pl-4 border-l border-gray-200">
                {[
                  { href: "/gpstracking", text: "GPS Vehicle Tracking" },
                  { href: "/hdcamera", text: "HD Cameras" },
                  { href: "/ipcamera", text: "CCTV Cameras" },
                  { href: "/p2m2", text: "P2M2 Networking" },
                  { href: "/network", text: "Network Video Recorder (NVR)" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="block text-sm py-1 hover:text-blue-600"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="block py-2 hover:text-blue-600" onClick={handleLinkClick}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
