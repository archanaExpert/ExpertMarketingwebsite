
export default function GoogleMapEmbed() {
  return (
       <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0471725887514!2d85.83435087500952!3d20.25687828120627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a700350543ad%3A0x707ee02080f4788d!2sMSIMAYA%20SOFTWARE%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1753161018153!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="border-0 w-full h-full"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
