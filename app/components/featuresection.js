// components/FeatureSection.js
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights you need
  display: "swap", // Ensures the font swaps gracefully
});

export default function FeatureSection() {
  return (
    <section className={`${urbanist.className} bg-blackbg py-10`}>
      {/* Title Section */}
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-headingcolor">
          Expert-Led App & Web Development Services
        </h1>
        <p className="text-lg md:text-xl text-actionbtn mt-2">
          We Don't Just Build Apps and Websites, We Create Digital Solutions
        </p>
        <p className="text-base md:text-lg text-gray-200 mt-1">
          Practical Expertise Delivered Through Real-World Projects
        </p>
      </div>

      {/* Container Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center px-4 md:px-10">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src="/images/feature_girl_1.png"
            alt="Development Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Description */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-actionbtn/80">
            Build Your Digital Presence
          </h2>
          <p className="text-gray-300 mt-4">
            Our expert team specializes in delivering top-notch app and web
            development services. From idea to execution, we provide innovative
            solutions tailored to your business needs.
          </p>
          <p className="text-gray-300 mt-2">
            Experience unmatched quality and practical expertise by working on
            live projects that bring your vision to life.
          </p>
          <button className="mt-6 px-6 py-3 bg-actionbtn text-white text-lg font-medium rounded-lg shadow-md hover:bg-actionbtn/80 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
