export const metadata = {
  title: "Bismi Electrical & Plumbing | Electrician & Plumber in Trichy",
  description:
    "Reliable electrician and plumber services in Trichy. Fast response, affordable pricing. Call now or book service.",
};



export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="min-h-[80vh] bg-green-100 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-4xl flex flex-col items-center justify-center text-center">
          
          {/* LOGO CONTAINER - Fixed for Centering */}
          <div className="mb-8 w-full flex justify-center">
            <img 
              src="/logo.png" 
              alt="BEP Logo" 
              className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-green-600 shadow-xl"
            />
          </div>

          {/* TEXT CONTENT */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Reliable Electrician & Plumber
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl">
            Serving your local area with fast and trusted service
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="tel:8667697839"
              className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all shadow-md flex items-center justify-center gap-2"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/918667697839?text=Hi%20*Bismi%20Electrical%20%26%20Plumbing*%2C%0A%0AI%20need%20service."
              target="_blank"
              className="bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-500 transition-all shadow-md flex items-center justify-center gap-2"
            >
              💬 Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-4 bg-red-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Services
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Electrician */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">
              🔌 Electrician Services
            </h3>

            <ul className="text-gray-600 space-y-2">
              <li>• Wiring & Rewiring</li>
              <li>• Fan & Light Installation</li>
              <li>• Switch & Socket Repair</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href="tel:8667697839"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Call
              </a>

              <a
                href="https://wa.me/918667697839?text=Hi%20*Bismi%20Electrical%20and%20Plumbing*,%0A%0AI%20need%20electrician%20service%20for%20me.%0A%0A%20My%20Name%20is:%0A%0APlease%20contact%20me.%0AThank%20you."
                target="_blank"
                className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700"
              >
                💬 Book on WhatsApp
              </a>

            </div>
          </div>

          {/* Plumber */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-2xl font-semibold mb-4">
              🚰 Plumber Services
            </h3>

            <ul className="text-gray-600 space-y-2">
              <li>• Leak Fixing</li>
              <li>• Tap & Pipe Repair</li>
              <li>• Drain Cleaning</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href="tel:8667697839"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Call
              </a>
              <a
                href="https://wa.me/918667697839?text=Hi%20*Bismi%20Electrical%20and%20Plumbing*,%0A%0AI%20need%20plumber%20service%20for%20me.%0A%0A%20My%20Name%20is:%0A%0APlease%20contact%20me.%0AThank%20you."
                target="_blank"
                className="bg-green-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-700"
              >
                💬 Book on WhatsApp
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-green-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Why Choose Us
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                👨‍🔧 Local Professionals
              </h3>
              <p className="text-gray-600">
                Experienced electricians and plumbers from your local area.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                ⚡ Fast Response
              </h3>
              <p className="text-gray-600">
                Quick service for urgent electrical and plumbing issues.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                💰 Affordable Pricing
              </h3>
              <p className="text-gray-600">
                Transparent and fair pricing with no hidden charges.
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                ⭐ Trusted Service
              </h3>
              <p className="text-gray-600">
                Reliable service trusted by local customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            How It Works
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold mb-2">
                Call or Book Service
              </h3>
              <p className="text-gray-600">
                Contact us instantly or submit a quick booking form.
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-semibold mb-2">
                Technician Assigned
              </h3>
              <p className="text-gray-600">
                A skilled electrician or plumber is assigned quickly.
              </p>
            </div>

            <div className="p-6">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">
                Problem Solved
              </h3>
              <p className="text-gray-600">
                We fix the issue efficiently and professionally.
              </p>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
