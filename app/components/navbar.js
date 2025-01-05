"use client"; // Ensure this component is treated as a client component
import { useEffect, useState } from "react";
import {
  Home,
  LaptopMinimalCheck,
  Menu,
  Target,
  UserCog2,
  UserRound,
  X,
} from "lucide-react";
import Sidebar from "./sidebar"; // Ensure the correct import path
import Link from "next/link";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (value) => {
    setIsSidebarOpen((prev) => (value !== undefined ? value : !prev));
  };

  // Close sidebar on window resize if the width is greater than or equal to md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(false); // Close sidebar if width is greater than or equal to md
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center p-4 bg-blackbg text-white">
      <div className="flex items-center">
        {/* Check if the image is available */}
        <img
          src="/images/nav_logo.png"
          alt="VRNITSOLUTION Logo"
          className="h-10 w-auto object-contain"
        />
      </div>

      <div
        className="md:hidden cursor-pointer bg-headingcolor text-blackbg rounded-full p-2"
        onClick={() => toggleSidebar()}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </div>
      <div className="hidden md:flex space-x-4 text-headingcolor">
        <Link href="/" className="action-btn">
          <Home /> Home
        </Link>
        <Link href="/about" className="action-btn">
          <UserCog2 /> About
        </Link>
        <Link href="/service" className="action-btn">
          <Target /> Services
        </Link>
        <Link href="/contact" className="action-btn">
          <UserRound /> Contact
        </Link>
        <Link href="/project" className="action-btn">
          <LaptopMinimalCheck /> Projects
        </Link>
      </div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
