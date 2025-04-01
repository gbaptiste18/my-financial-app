export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">SÒYÈT AKADEMI</h1>
      <div>
        <a href="/" className="text-gray-700 px-4 hover:text-blue-600">Home</a>
        <a href="/about" className="text-gray-700 px-4 hover:text-blue-600">About</a>
        <a href="/contact" className="text-gray-700 px-4 hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
}
