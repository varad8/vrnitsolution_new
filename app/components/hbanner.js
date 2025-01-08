import Link from "next/link";
import React from "react";

export default function Hbanner() {
  return (
    <div className="bg-violet-500/40 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between py-4">
          {/* Text Section */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-lg lg:text-3xl font-bold mb-4 text-headingcolor">
              Get it your first custmosied project for your academics.
            </h1>
            <p className="text-md mb-6 text-gray-200">
              Get your first project done by our experts and get a chance to
              learn from them.Get it at afforable price.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-block bg-gray-600 text-white shadow-lg border  px-2 py-1 rounded-md text-lg font-semibold hover:bg-actionbtn transition"
              >
                Register Now
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10 lg:mt-0">
            <img
              src="./images/project.png" // Replace this URL with your reindeer image URL
              alt="Reindeer"
              className="w-full h-48 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
