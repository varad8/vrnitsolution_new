import React from "react";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ServicesSection from "../components/servicessection";

const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
