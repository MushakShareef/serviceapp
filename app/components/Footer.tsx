export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white">
            SparkFlow Services
          </h3>
          <p className="mt-2 text-sm">
            Reliable Electrician & Plumber services for your local area.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            Services
          </h4>
          <ul className="space-y-1 text-sm">
            <li>Electrician Services</li>
            <li>Plumber Services</li>
            <li>Emergency Repairs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">
            Contact
          </h4>
          <p className="text-sm">
            📞 <a href="tel:1234567890" className="hover:underline">
              7010239825
            </a>
          </p>
          <p className="text-sm mt-1">
            Serving your local area
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm py-4">
        © {new Date().getFullYear()} SparkFlow Services.
      </div>
    </footer>
  );
}
