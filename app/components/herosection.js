"use client";

import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Import Lucid icons
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import createClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(createClient);

function urlFor(source) {
  return builder.image(source);
}

const HeroSection = () => {
  const [projects, setProjects] = useState([]);
  const token = process.env.NEXT_PUBLIC_SANITY_TOKEN;

  const fetchData = async () => {
    try {
      // Fetch Projects with category details
      const projectRes = await createClient.fetch(
        `*[_type == 'VRNProject']{
            _id,
            title,
            slug,
            publishedAt,
            'author': author->{
              name,
            },
            'category': category->{
                name,description
            },
            tags,
            body,
            metaThumbnail,
            metaDescription
          }`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setProjects(projectRes);
    } catch (error) {
      console.error("Error fetching project or category data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative mx-4 md:mx-8 w-auto h-[250px] md:h-[500px] overflow-hidden">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={true} // Enable dots as indicators
        showThumbs={false} // Hide thumbnail previews
        infiniteLoop
        autoPlay
        interval={3000}
        transitionTime={500}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && (
            <button
              className="absolute z-10 left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-headingcolor text-blackbg rounded-full p-2 shadow-md hover:scale-110 transition"
              onClick={onClickHandler}
              aria-label="Previous Slide"
            >
              <ArrowLeft size={24} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && (
            <button
              className="absolute z-10 right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-headingcolor text-blackbg rounded-full p-2 shadow-md hover:scale-110 transition"
              onClick={onClickHandler}
              aria-label="Next Slide"
            >
              <ArrowRight size={24} />
            </button>
          )
        }
      >
        {projects.map((project, index) => (
          <div key={index}>
            <img
              src={urlFor(project?.metaThumbnail)}
              alt={project?.title}
              className="w-full object-contain h-[250px] md:h-[500px] rounded-xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
