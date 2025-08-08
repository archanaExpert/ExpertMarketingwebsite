"use client";

const ContactHero = () => {
  return (
  <section className="relative w-full h-[60vh] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[url('/contact1.svg')] bg-cover  bg-center" />

      <div className="absolute inset-0 z-10 bg-black/60"></div>

     <div className="relative z-20 text-center px-4">
    <p className="text-2xl md:text-4xl max-w-3xl mx-auto leading-relaxed">
      Reach out to{" "}
      <span className="font-semibold text-orange-400">
        EXPERT SOLUTIONS
      </span>{" "}
      for GPS Tracking, IP Cameras, and Security Solutions.
    </p>
  </div>
    </section>
  );
};

export default ContactHero;
