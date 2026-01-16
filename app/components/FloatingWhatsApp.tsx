"use client";

export default function FloatingWhatsApp() {
  const whatsappLink =
    "https://wa.me/917010239825?text=Hello%20SparkFlow%20Services,%0A%0AName:%0AService%20Required:%20(Electrician%20/%20Plumber)%0AArea:%0AProblem%20Description:%0APreferred%20Time:%0A%0APlease%20contact%20me.%20Thank%20you.";

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
