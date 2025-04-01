export default function Home() {
  return (
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
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
}
<section className="mt-12 bg-white p-6 shadow-md rounded-lg">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
    What Our Students Say
  </h2>
  <div className="flex flex-col md:flex-row justify-around">
    <div className="max-w-sm p-4">
      <p className="text-gray-600">
        "Thanks to SÒYÈT AKADEMI, I learned how to manage my money and invest wisely!"
      </p>
      <p className="font-bold mt-2">— Jean Baptiste</p>
    </div>
    <div className="max-w-sm p-4">
      <p className="text-gray-600">
        "This platform gave me the tools to secure my financial future!"
      </p>
      <p className="font-bold mt-2">— Marie Claire</p>
    </div>
  </div>
</section>
