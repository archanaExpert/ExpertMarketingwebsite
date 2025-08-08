

import ContactDetails from "@/component/ContactDetails";
import ContactForm from "@/component/ContactForm";
import ContactHero from "@/component/ContactHero";
import GoogleMapEmbed from "@/component/GoogleMapEmbed";



export default function Contact() {
  return (
    <>
     <ContactHero/>
    <main className="min-h-screen p-4 md:p-12 bg-gray-50">
      
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-900">Contact < span className="text-orange-400">Us </span><span className="block w-22 h-1 bg-blue-700 mx-auto mt-4 rounded-full"></span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
       
        <ContactForm />
        <ContactDetails />
      </div>
      <div className="mt-12">
        <GoogleMapEmbed/>
      </div>
    </main>
    </>
  );
}
