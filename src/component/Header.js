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
    <header className="bg-white px-6 pl-15 shadow-md sticky top-0 z-50">
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

        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/home"
            className="hover:text-blue-600 font-medium"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-600 font-medium"
            onClick={handleLinkClick}
          >
            About Us
          </Link>

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
                  <li>
                    <Link
                      href="/gpstracking"
                      onClick={handleLinkClick}
                      className="hover:bg-blue-50 px-4 py-2 block"
                    >
                      GPS Vehicle Tracking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hdcamera"
                      onClick={handleLinkClick}
                      className="hover:bg-blue-50 px-4 py-2 block"
                    >
                      HD Cameras
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/ipcamera"
                      onClick={handleLinkClick}
                      className="hover:bg-blue-50 px-4 py-2 block"
                    >
                      CCTV Cameras (IP)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/p2m2"
                      onClick={handleLinkClick}
                      className="hover:bg-blue-50 px-4 py-2 block"
                    >
                      P2M2 Networking
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/network"
                      onClick={handleLinkClick}
                      className="hover:bg-blue-50 px-4 py-2 block"
                    >
                      Network Video Recorder (NVR)
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="hover:text-blue-600 font-medium"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white px-4 py-3 space-y-3 shadow-md">
          <Link
            href="/home"
            className="block hover:text-blue-600"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block hover:text-blue-600"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <div>
            <button
              onClick={toggleServices}
              className="flex items-center w-full justify-between hover:text-blue-600"
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div className="mt-2 space-y-2 pl-4">
                <Link
                  href="/gpstracking"
                  onClick={handleLinkClick}
                  className="block text-sm"
                >
                  GPS Vehicle Tracking
                </Link>
                <Link
                  href="/hdcamera"
                  onClick={handleLinkClick}
                  className="block text-sm"
                >
                  HD Cameras
                </Link>
                <Link
                  href="/ipcamera"
                  onClick={handleLinkClick}
                  className="block text-sm"
                >
                  CCTV Cameras
                </Link>
                <Link
                  href="/p2m2"
                  onClick={handleLinkClick}
                  className="block text-sm"
                >
                  P2M2 Networking
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="block hover:text-blue-600"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
