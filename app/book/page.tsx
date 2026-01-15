export const metadata = {
  title: "Book Electrician or Plumber Service | ServiceApp",
  description:
    "Book electrician or plumber services easily in Trichy. Fast and reliable professionals.",
};



export default function BookService() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Book a Service
        </h1>

        <p className="mt-2 text-center text-gray-600">
          Electrician & Plumber Services
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
          />

          <select className="w-full border px-4 py-2 rounded">
            <option>Select Service</option>
            <option>Electrician</option>
            <option>Plumber</option>
          </select>

          <textarea
            placeholder="Describe your problem"
            className="w-full border px-4 py-2 rounded"
            rows={3}
          />

          <input
            type="text"
            placeholder="Your Area / Address"
            className="w-full border px-4 py-2 rounded"
          />

          <button
            type="button"
            className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700"
          >
            Submit Request
          </button>
        </form>
      </div>
    </main>
  );
}
