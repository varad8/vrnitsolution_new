"use client"; // Ensure this component is treated as a client component
import { useEffect } from "react";
import {
  Home,
  LaptopMinimalCheck,
  Menu,
  Target,
  UserCog2,
  UserRound,
  X,
} from "lucide-react";
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    // Prevent body scroll when sidebar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Function to handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // md breakpoint
        toggleSidebar(false); // Close sidebar if width is greater than or equal to md
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen, toggleSidebar]);

  return (
    <div
      className={`fixed top-0 z-20 left-0 w-64 h-full md:shadow-none shadow-md shadow-headingcolor/50 bg-blackbg text-white transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close button positioned at the top right corner */}
      {/* <button
        className="absolute top-4 right-4 p-2 rounded-full bg-headingcolor text-blackbg"
        onClick={() => toggleSidebar(false)} // Close sidebar on button click
        aria-label="Close Sidebar"
      >
        <X size={24} />
      </button> */}
      <nav className="mt-16">
        {" "}
        {/* Add margin to push nav items down */}
        <ul>
          <li className="p-2">
            <Link href="/" className="action-btn px-3 py-5">
              <Home /> Home
            </Link>
          </li>
          <li className="p-2">
            <Link href="/about" className="action-btn px-3 py-5">
              <UserCog2 /> About
            </Link>
          </li>
          <li className="p-2">
            <Link href="/service" className="action-btn px-3 py-5">
              <Target /> Services
            </Link>
          </li>
          <li className="p-2">
            <Link href="/contact" className="action-btn px-3 py-5">
              <UserRound /> Contact
            </Link>
          </li>
          <li className="p-2">
            <Link href="/project" className="action-btn px-3 py-5">
              <LaptopMinimalCheck /> Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
