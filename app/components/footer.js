import { Facebook, Instagram, Linkedin, Twitter, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blackbg text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo and Description */}
        <div className="space-y-4">
          <div className="flex items-center">
            {/* Check if the image is available */}
            <img
              src="/images/nav_logo.png"
              alt="VRNITSOLUTION Logo"
              className="h-10 w-auto object-contain"
            />
          </div>
          <p className="text-gray-400 text-sm">
            Is a leading provider of innovative technology solutions,
            specializing in custom-tailored services for businesses. We deliver
            top-notch solutions that ensure seamless integration and optimal
            performance.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-actionbtn"
            >
              <Facebook />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-actionbtn"
            >
              <Twitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-actionbtn"
            >
              <Linkedin />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-actionbtn"
            >
              <Instagram />
            </a>
          </div>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold text-headingcolor mb-4">
            About Us
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-actionbtn">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-actionbtn">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-actionbtn">
                Our Teams
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-actionbtn">
                Project
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div>
          <h3 className="text-lg font-semibold text-headingcolor mb-4">
            Location
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>Karvanchiwadi,Ratnagiri,India-415612</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-headingcolor mb-4">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li>+91 7058834216 (only whatsapp)</li>
            <li>official.vrnsoution@gmail.com</li>
            <li>varadnikharage201@gmail.com</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
