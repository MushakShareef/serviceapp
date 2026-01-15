export const metadata = {
  title: "Electrician & Plumber in Your Area | ServiceApp",
  description:
    "Reliable electrician and plumber services in Trichy. Fast response, affordable pricing. Call now or book service.",
};



export default function Home() {
  return (
    <main className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Reliable Electrician & Plumber
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Serving your local area with fast and trusted service
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7010239825"
              className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-700"
            >
              📞 Call Now
            </a>

            <a
              href="/book"
              className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
            >
              📝 Book Service
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
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
                href="tel:7010239825"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Call
              </a>
              <a
                href="/book"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Book
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
                href="tel:7010239825"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Call
              </a>
              <a
                href="/book"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-white py-16 px-4">
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
