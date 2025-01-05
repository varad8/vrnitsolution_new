import React from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const About = () => {
  const features = [
    {
      title: "Web Development Expertise",
      icon: "🌐",
      description:
        "Creating responsive, high-quality websites tailored to your needs.",
    },
    {
      title: "App Development Expertise",
      icon: "📱",
      description:
        "Building seamless and efficient mobile applications for iOS and Android.",
    },
    {
      title: "On-Time Delivery",
      icon: "⏰",
      description:
        "We ensure your project is delivered within the agreed timeline.",
    },
    {
      title: "Technical Expertise",
      icon: "👨‍💻",
      description:
        "Our developers are skilled in the latest technologies and tools.",
    },
    {
      title: "Money-Back Guarantee",
      icon: "💵",
      description:
        "Full refund if the project doesn’t meet your requirements or fails to work.",
    },
    {
      title: "Customer Support",
      icon: "📞",
      description:
        "Dedicated support team to assist you 24/7 with all your queries.",
    },
  ];

  return (
    <div className={`bg-blackbg text-white ${urbanist.className}`}>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-blackbg py-16">
          <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 space-y-4">
              <h1 className="text-headingcolor text-4xl md:text-5xl font-bold">
                VRN Solution: Delivering Excellence in Web and App Development
              </h1>
              <p className="text-gray-300 text-sm md:text-base">
                We specialize in providing high-quality, innovative, and
                reliable solutions for web and app development, ensuring your
                success.
              </p>
              <button className="bg-actionbtn text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                <Link href="/contact">Get a Quote</Link>
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/images/a_man_folded_hand.png"
                  alt="Happy Customers"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-white text-black p-4 rounded-md shadow">
                  <p className="text-sm font-bold">Projects Delivered</p>
                  <p className="text-lg font-bold">1000+ Successful Projects</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white text-black p-4 rounded-md shadow">
                  <p className="text-sm font-bold">Trusted by Businesses</p>
                  <p>⭐️⭐️⭐️⭐️⭐️ Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-blackbg py-12">
          <h2 className="text-headingcolor text-2xl md:text-3xl font-bold text-center mb-8">
            Why Choose VRN Solution?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-blackbg border border-headingcolor rounded-lg shadow-md p-6 text-center space-y-4"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-400">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
