import React from "react";
import { Urbanist } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ContactCp from "../components/contactcp";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Contact = () => {
  return (
    <div className={`bg-blackbg text-white ${urbanist.className}`}>
      <Navbar />
      <ContactCp />
      <Footer />
    </div>
  );
};

export default Contact;
