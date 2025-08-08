
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppIcon() {
  return (
    <a
      href="https://wa.me/7509617777" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-transform transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
