// components/ServicesSection.js
import { Urbanist } from "next/font/google";
import { Code, Smartphone, Film, Mail, Search } from "lucide-react"; // Importing icons from Lucide React

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights you need
  display: "swap", // Ensures the font swaps gracefully
});

export default function ServicesSection() {
  return (
    <section
      className={`${urbanist.className} bg-blackbg text-white py-10 px-6`}
    >
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-headingcolor">
          Our Services
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Delivering excellence through a range of tailored services.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Card 1: Web Development */}
        <div className="group bg-blackbg border rounded-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Code size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">
            Web Development
          </h3>
          <p className="text-gray-400 mt-2">
            Build responsive and modern websites tailored to your needs.
          </p>
        </div>

        {/* Card 2: App Development */}
        <div className="group bg-blackbg border rounded-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Smartphone size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">
            App Development
          </h3>
          <p className="text-gray-400 mt-2">
            Create high-performing mobile apps for iOS and Android.
          </p>
        </div>

        {/* Card 3: Video Editing */}
        <div className="group bg-blackbg border rounded-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Film size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">
            Video Editing
          </h3>
          <p className="text-gray-400 mt-2">
            Professional editing for your videos to bring your ideas to life.
          </p>
        </div>

        {/* Card 4: Invitation Cards */}
        <div className="group bg-blackbg border rounded-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Mail size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">
            Invitation Cards
          </h3>
          <p className="text-gray-400 mt-2">
            Design beautiful and personalized invitation cards.
          </p>
        </div>

        {/* Card 5: Digital SEO */}
        <div className="group bg-blackbg border rounded-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Search size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">
            Digital SEO
          </h3>
          <p className="text-gray-400 mt-2">
            Improve your online presence and grow your audience with SEO.
          </p>
        </div>
      </div>
    </section>
  );
}
