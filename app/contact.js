export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700">We’d love to hear from you!</p>
      <form className="bg-white shadow-md rounded-lg p-6 mt-6">
        <label className="block text-gray-700">Name:</label>
        <input type="text" className="w-full border px-4 py-2 rounded-md mb-4" />

        <label className="block text-gray-700">Email:</label>
        <input type="email" className="w-full border px-4 py-2 rounded-md mb-4" />

        <label className="block text-gray-700">Message:</label>
        <textarea className="w-full border px-4 py-2 rounded-md mb-4"></textarea>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
