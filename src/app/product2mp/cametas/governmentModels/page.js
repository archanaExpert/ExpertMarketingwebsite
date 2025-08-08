// components/GovernmentProjectSection.jsx
import Image from "next/image";
import Link from "next/link";

const governmentProjects = [
  {
    name: "CP-UE04",
    description: "4 Channel H.264 Network Video Server",
    price: "₹7,999",
    image: "/gov/ue04.svg",
    features: ["H.264 compression", "4 channels", "Network Video Streaming"],
  },
  {
    name: "CP-UE01",
    description: "1 Channel H.264 Network Video Server",
    price: "₹4,999",
    image: "/gov/ue01.svg",
    features: ["H.264 compression", "1 channel", "Compact Design"],
  },
  {
    name: "CP-UAR-0416K",
    description: "16 Ch. 720P Tribrid HDCVI DVR",
    price: "₹12,499",
    image: "/gov/uar0416k.svg",
    features: ["720P resolution", "Tribrid DVR", "16 Channels"],
  },
  {
    name: "CP-UAP-36W-O",
    description: "35x IR Speed Dome Camera (Outdoor)",
    price: "₹35,999",
    image: "/gov/uap36wo.svg",
    features: ["35x Zoom", "IR Night Vision", "Weatherproof"],
  },
  {
    name: "CP-UAP-36W-I",
    description: "35x IR Speed Dome Camera (Indoor)",
    price: "₹34,499",
    image: "/gov/uap36wi.svg",
    features: ["35x Zoom", "Indoor Use", "IR Night Vision"],
  },
  {
    name: "CP-UAP-28W-O",
    description: "23x IR Speed Dome Camera (Outdoor)",
    price: "₹29,999",
    image: "/gov/uap28wo.svg",
    features: ["23x Zoom", "Outdoor Design", "IR Night Vision"],
  },
  {
    name: "CP-UAP-28W-I",
    description: "23x IR Speed Dome Camera (Indoor)",
    price: "₹28,499",
    image: "/gov/uap28wi.svg",
    features: ["23x Zoom", "Indoor Use", "IR Night Vision"],
  },
  {
    name: "CP-EAC-DVW-O",
    description: "1 MP HDCVI IR Vandal Dome Camera - 30Mtr. (Outdoor)",
    price: "₹2,599",
    image: "/gov/dvwo.svg",
    features: ["1 MP", "Vandal Proof", "30Mtr IR", "Outdoor Use"],
  },
  {
    name: "CP-EAC-DVW-I",
    description: "1 MP HDCVI IR Vandal Dome Camera - 30Mtr. (Indoor)",
    price: "₹2,499",
    image: "/gov/dvwi.svg",
    features: ["1 MP", "Vandal Proof", "30Mtr IR", "Indoor Use"],
  },
  {
    name: "CP-EAC-DFW-O",
    description: "1 MP HDCVI IR Dome Camera - 20Mtr. (Outdoor)",
    price: "₹2,199",
    image: "/gov/dfwo.svg",
    features: ["1 MP", "IR Dome", "20Mtr IR", "Outdoor Use"],
  },
  {
    name: "CP-EAC-DFW-O 1",
    description: "1 MP HDCVI IR Vandal Dome Camera - 30Mtr. (Outdoor)",
    price: "₹2,699",
    image: "/gov/dfwo1.svg",
    features: ["1 MP", "Vandal Dome", "30Mtr IR", "Outdoor Use"],
  },
  {
    name: "CP-EAC-DFW-I",
    description: "1 MP HDCVI IR Dome Camera - 20Mtr. (Indoor)",
    price: "₹2,199",
    image: "/gov/dfwi.svg",
    features: ["1 MP", "IR Dome", "20Mtr IR", "Indoor Use"],
  },
  {
    name: "CP-EAC-DBW-O",
    description: "1 MP HDCVI IR Vandal Dome Camera - 30Mtr. (Outdoor)",
    price: "₹2,899",
    image: "/gov/dbwo.svg",
    features: ["1 MP", "Vandal Proof", "30Mtr IR", "Outdoor"],
  },
  {
    name: "CP-EAC-BW-H",
    description: "1 MP HDCVI IR Bullet Camera - 60Mtr. (High Range)",
    price: "₹3,199",
    image: "/gov/bwh.svg",
    features: ["1 MP", "IR Bullet", "60Mtr IR", "High Range"],
  },
  {
    name: "CP-EAC-BW",
    description: "1 MP HDCVI IR Bullet Camera - 60Mtr.",
    price: "₹2,999",
    image: "/gov/bw.svg",
    features: ["1 MP", "IR Bullet", "60Mtr IR"],
  },
];


const GovernmentProjectSection = () => {
  return (
    <section id="government-projects" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Government Project - Project Models</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {governmentModels.map((model) => (
            <div key={model.name} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
              <Image
                src={model.image}
                alt={model.name}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">{model.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{model.description}</p>
              <ul className="text-sm text-gray-700 list-disc list-inside mb-3">
                {model.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                  
                ))}
              </ul>
              <p className="text-lg font-bold text-orange-600 mb-4">{model.price}</p>
              <Link href="/contact">
                <button className="w-full bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition">
                  Buy Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GovernmentProjectSection;
