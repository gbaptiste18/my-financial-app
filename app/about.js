export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>We teach financial literacy to help our community thrive.</p>
    </div>
  );
}
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Welcome to SÒYÈT AKADEMI
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Empowering the Haitian community with financial literacy and smart investment strategies.
          </p>
          <a href="/about">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
              Learn More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
