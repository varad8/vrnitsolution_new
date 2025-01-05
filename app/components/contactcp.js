"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactCp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_fj18dhw"; // Replace with your EmailJS service ID
    const templateID = "template_d3m7r9z"; // Replace with your EmailJS template ID
    const userID = "8Xb3azwPwxPC-y1u4"; // Your EmailJS Public Key

    // Define the email parameters
    const emailParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      to_email: "varadnikharage201@gmail.com",
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, emailParams, userID).then(
      (response) => {
        console.log("Success!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (err) => {
        console.error("Failed to send message:", err);
        setStatus("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <main>
      {/* Contact Section */}
      <section className="bg-blackbg py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          {/* Left Side - Image and Info */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-headingcolor text-3xl md:text-4xl font-bold">
              Contact <span className="text-actionbtn">Us</span>
            </h2>
            <p className="text-gray-300">
              Let's get in touch! Our expert support team will assist you with
              any questions or concerns you may have.
            </p>
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold text-black">Contact us</p>
                <p className="text-gray-700 text-sm">
                  Our expert team is here to help.
                </p>
              </div>
              <div className="mt-4">
                <button className="bg-actionbtn text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition">
                  Message
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-lg">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-black"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full mt-2 p-3 border text-black border-gray-300 rounded-md focus:ring-actionbtn focus:border-actionbtn"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-black"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full mt-2 p-3 border text-black border-gray-300 rounded-md focus:ring-actionbtn focus:border-actionbtn"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject of Your Message"
                  className="w-full mt-2 p-3 border text-black border-gray-300 rounded-md focus:ring-actionbtn focus:border-actionbtn"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-black"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  className="w-full mt-2 p-3 border text-black border-gray-300 rounded-md focus:ring-actionbtn focus:border-actionbtn"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-actionbtn text-white py-3 rounded-md hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
            {status && (
              <p className="mt-4 text-center text-red-500">{status}</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactCp;
