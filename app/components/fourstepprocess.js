// components/FourStepProcess.js
import { Lightbulb, Paintbrush, Tv, Truck } from "lucide-react"; // Importing Lucide Icons
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Specify weights you need
  display: "swap", // Ensures the font swaps gracefully
});
export default function FourStepProcess() {
  return (
    <section
      className={`${urbanist.className} bg-blackbg text-white py-10 px-6`}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-headingcolor">
          Our Four-Step Process
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          A streamlined process to turn your ideas into reality.
        </p>
      </div>

      {/* Process Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Step 1: IDEA */}
        <div className="group bg-blackbg border rounded-t-[90px] rounded-b-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Lightbulb size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">IDEA</h3>
          <p className="text-gray-400 mt-2">
            We brainstorm and capture your ideas to craft a vision for your
            project.
          </p>
        </div>

        {/* Step 2: DESIGN */}
        <div className="group bg-blackbg border rounded-t-[90px] rounded-b-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Paintbrush size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">DESIGN</h3>
          <p className="text-gray-400 mt-2">
            Our team creates unique and functional designs that align with your
            vision.
          </p>
        </div>

        {/* Step 3: PRESENTATION */}
        <div className="group bg-blackbg border rounded-t-[90px] rounded-b-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Tv size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">
            PRESENTATION
          </h3>
          <p className="text-gray-400 mt-2">
            We present our work and incorporate feedback to refine the final
            product.
          </p>
        </div>

        {/* Step 4: DELIVER */}
        <div className="group bg-blackbg border rounded-t-[90px] rounded-b-lg p-6 text-center hover:shadow-lg hover:bg-gray-700 transition duration-300">
          <div className="text-headingcolor text-5xl mb-4">
            <Truck size={48} className="mx-auto" />
          </div>
          <h3 className="text-xl font-semibold text-headingcolor">DELIVER</h3>
          <p className="text-gray-400 mt-2">
            We finalize the product and deliver it, ensuring it meets your
            expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
