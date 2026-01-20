"use client";

export default function FloatingWhatsApp() {
  const whatsappLink =
    "https://wa.me/917010239825?text=Hi%20*SparkFlow%20Services*,%0A%0A%0A%0AI%20need%20electrician/plumber%20service%20in%20my%20area.%0A%0A%0A%0A%20My%20name%20is:%0A%0APlease%20contact%20me.%0AThank%20you.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-5
        left-5
        z-50
        bg-green-600
        hover:bg-green-700
        text-white
        p-4
        rounded-full
        shadow-lg
        flex
        items-center
        justify-center
      "
    >
      {/* <span className="text-2xl">💬</span> */}
      <img
        src="/whatsapp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
    </a>
  );
}
