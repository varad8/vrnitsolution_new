"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO at Example Corp.",
      review:
        "This service has been exceptional! The team understood my vision and delivered beyond expectations.",
      image: "/images/reviewer1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Manager",
      review:
        "A fantastic experience from start to finish. The design process was seamless and the end product was stunning!",
      image: "/images/reviewer2.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      role: "Freelancer",
      review:
        "I am extremely happy with the service! Highly recommended for anyone looking to build a website or app.",
      image: "/images/reviewer3.jpg",
    },
    {
      id: 4,
      name: "Sophia Williams",
      role: "Designer",
      review:
        "Their attention to detail is unmatched. I am beyond satisfied with the final product.",
      image: "/images/reviewer4.jpg",
    },
    {
      id: 5,
      name: "Liam Brown",
      role: "Project Manager",
      review:
        "A great experience overall. The team delivered exactly what we wanted within the time frame.",
      image: "/images/reviewer5.jpg",
    },
    {
      id: 6,
      name: "Liam Brown",
      role: "Project Manager",
      review:
        "A great experience overall. The team delivered exactly what we wanted within the time frame.",
      image: "/images/reviewer5.jpg",
    },
    {
      id: 7,
      name: "Liam Brown",
      role: "Project Manager",
      review:
        "A great experience overall. The team delivered exactly what we wanted within the time frame.",
      image: "/images/reviewer5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(reviews.length / visibleCards) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(reviews.length / visibleCards) - 1
        : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-blackbg py-12 px-6 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-headingcolor">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 mt-2">
          Hear directly from our satisfied customers.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto relative overflow-hidden">
        {/* Card Display */}
        <div className="flex justify-center overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              width: `${(reviews.length / visibleCards) * 100}%`,
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-2 md:px-4"
                style={{ maxWidth: `${100 / visibleCards}%` }}
              >
                <div className="flex  flex-col h-full justify-between items-center bg-blackbg/80 border rounded-lg shadow-lg p-4 md:p-6">
                  {/* Reviewer Image */}
                  <div className="w-20 h-20 rounded-full mb-4 overflow-hidden">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Name and Role */}
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-headingcolor">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                  {/* Review Text */}
                  <p className="text-gray-400 mt-4 text-center">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        {reviews.length > 0 && (
          <div className="flex justify-center items-center mt-6 space-x-2">
            <button
              onClick={handlePrev}
              className="text-headingcolor border border-headingcolor rounded-full w-8 h-8 flex items-center justify-center"
            >
              <ArrowLeft />
            </button>
            {Array.from({
              length: Math.ceil(reviews.length / visibleCards),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-headingcolor" : "bg-gray-600"
                }`}
              />
            ))}
            <button
              onClick={handleNext}
              className="text-headingcolor border border-headingcolor rounded-full w-8 h-8 flex items-center justify-center"
            >
              <ArrowRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
