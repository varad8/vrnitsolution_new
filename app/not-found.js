import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-blackbg text-white">
        {/* Background Image */}
        <img
          src="/images/not-found.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute  inset-0 bg-blackbg opacity-50 z-0"></div>
        <div className="absolute  inset-0 bg-headingcolor opacity-10 z-0"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 lg:text-8xl text-6xl font-semibold">404</div>
          <h1 className="lg:text-3xl text-2xl font-bold mb-4">
            The page you are looking for can't be found.
          </h1>
          <div className="flex space-x-4 mt-4">
            <Link
              href="/"
              className="px-6 py-2 bg-actionbtn text-white rounded-md "
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
