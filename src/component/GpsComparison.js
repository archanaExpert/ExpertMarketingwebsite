"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Car,
  MapPin,
  Shield,
  Eye,
  Target,
  Tent,
  Route,
  Clock,
  Truck,
  Archive,
  Zap,
  Map,
  FileSearch,
  
} from 'lucide-react';

export default function GpsComparison() {
  const [activeTab, setActiveTab] = useState("comparison");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
       
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            GPS Tracking Technology Comparison<span className="block w-72 h-1 bg-blue-800 mx-auto mt-4 rounded-full"></span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare traditional GPS vehicle trackers with portable magnetic GPS trackers to find the best fit for your tracking needs.
          </p>
        </div>

       
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white shadow-sm">
            {["comparison", "features", "use-cases"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium ${
                  tab === "comparison"
                    ? "rounded-l-lg"
                    : tab === "use-cases"
                    ? "rounded-r-lg"
                    : ""
                } ${
                  activeTab === tab
                    ? "bg-orange-400 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab === "comparison"
                  ? "Side-by-Side"
                  : tab === "features"
                  ? "Key Features"
                  : "Best Use Cases"}
              </button>
            ))}
          </div>
        </div>

        {activeTab === "comparison" && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
      
            <div className="bg-white rounded-xl shadow-lg hover:-translate-y-1 transition-all">
              <div className="bg-blue-900 py-4 px-6">
                <h2 className="text-2xl font-bold text-white text-center">Vehicle GPS Tracker</h2>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-1 rounded-full">
                    <Image src="/gps1.svg" alt="GPS Tracker" width={200} height={200} className="object-cover rounded-full"/>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li>✔️ Wired to vehicle battery for continuous power</li>
                  <li>✔️ Real-time tracking with geofencing</li>
                  <li>✔️ Tamper-proof and secure installation</li>
                  <li>✔️ Requires professional installation</li>
                  <li>✔️ Not portable (fixed to one vehicle)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:-translate-y-1 transition-all">
              <div className="bg-blue-900 py-4 px-6">
                <h2 className="text-2xl font-bold text-white text-center">Magnetic GPS Tracker</h2>
              </div>
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 p-1  rounded-full">
                    <Image src="/m.svg" alt="Magnetic GPS" width={200} height={200} className="object-cover rounded-full" />
                  </div>
                </div>
                <ul className="space-y-3">
                  <li>✔️ Battery-powered, easy to deploy</li>
                  <li>✔️ Strong magnetic base – attach anywhere</li>
                  <li>✔️ Ideal for covert or temporary tracking</li>
                  <li>✔️ Battery needs charging/replacement</li>
                  <li>✔️ Easier to remove if discovered</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="bg-white rounded-xl shadow-lg mb-12 overflow-x-auto p-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Key Feature Comparison</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Feature</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Vehicle Tracker</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Magnetic Tracker</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr><td className="px-6 py-3">Power Source</td><td>Wired to battery</td><td>Rechargeable battery</td></tr>
                <tr><td className="px-6 py-3">Installation</td><td>Professional</td><td>Self-install, magnetic</td></tr>
                <tr><td className="px-6 py-3">Portability</td><td>Fixed to vehicle</td><td>Highly portable</td></tr>
                <tr><td className="px-6 py-3">Best For</td><td>Fleet tracking, long-term</td><td>Temporary, covert tracking</td></tr>
                <tr><td className="px-6 py-3">Battery Maintenance</td><td>No (vehicle-powered)</td><td>Yes (periodic charging)</td></tr>
              </tbody>
            </table>
          </div>
        )}

       
        {activeTab === "use-cases" && (
               <div className="grid md:grid-cols-2 gap-8 mb-12">
      
      <div className="bg-white shadow-lg rounded-xl">
        <div className="bg-blue-800 px-6 py-4 text-white text-2xl font-bold">Best for Vehicle GPS</div>
        <div className="p-6 space-y-4 text-gray-700">
          <p className="flex items-center gap-3"><Car className="w-5 h-5 text-blue-600" /> Fleet Management</p>
          <p className="flex items-center gap-3"><MapPin className="w-5 h-5 text-blue-600" /> Daily logistics operations</p>
          <p className="flex items-center gap-3"><Shield className="w-5 h-5 text-blue-600" /> Vehicle theft prevention</p>
          <p className="flex items-center gap-3"><Route className="w-5 h-5 text-blue-600" /> Route Optimization</p>
          <p className="flex items-center gap-3"><Clock className="w-5 h-5 text-blue-600" /> Real-Time Tracking</p>
          <p className="flex items-center gap-3"><Truck className="w-5 h-5 text-blue-600" /> Driver Behavior Monitoring</p>
          <p className="flex items-center gap-3"><Archive className="w-5 h-5 text-blue-600" /> Trip History Reports</p>
        </div>
      </div>

   
      <div className="bg-white shadow-lg rounded-xl">
        <div className="bg-blue-800 px-6 py-4 text-white text-2xl font-bold">Best for Magnetic GPS</div>
        <div className="p-6 space-y-4 text-gray-700">
          <p className="flex items-center gap-3"><Eye className="w-5 h-5 text-blue-600" /> Covert tracking or surveillance</p>
          <p className="flex items-center gap-3"><Target className="w-5 h-5 text-blue-600" /> Asset tracking (trailers, cargo)</p>
          <p className="flex items-center gap-3"><Tent className="w-5 h-5 text-blue-600" /> Temporary deployments</p>
          <p className="flex items-center gap-3"><Zap className="w-5 h-5 text-blue-600" /> Battery-powered operation</p>
          <p className="flex items-center gap-3"><Map className="w-5 h-5 text-blue-600" /> No wiring or installation needed</p>
          <p className="flex items-center gap-3"><FileSearch className="w-5 h-5 text-blue-600" /> Law enforcement or investigation</p>
        </div>
      </div>
    </div>
           
         
        )}
      </div>
    </div>
  );
}
