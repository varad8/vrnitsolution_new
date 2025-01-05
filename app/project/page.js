"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import createClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const builder = imageUrlBuilder(createClient);

function urlFor(source) {
  return builder.image(source);
}

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
      setFilteredProjects(projectRes);

      // Set unique categories and tags
      const uniqueCategories = [
        ...new Set(projectRes.map((p) => p.category?.name || "Unknown")),
      ];
      const uniqueTags = [...new Set(projectRes.flatMap((p) => p.tags || []))];
      setCategories(uniqueCategories);
      setTags(uniqueTags);
    } catch (error) {
      console.error("Error fetching project or category data:", error);
    }
  };

  const applyFilters = () => {
    let filtered = projects;

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(
        (project) => project.category?.name === selectedCategory
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) =>
        selectedTags.every((tag) => project.tags?.includes(tag))
      );
    }

    // Search by name
    if (searchQuery) {
      filtered = filtered.filter((project) =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, selectedTags, searchQuery]);

  return (
    <div className={`bg-blackbg text-white ${urbanist.className}`}>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-blackbg py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-headingcolor text-4xl font-bold">
              Our <span className="text-actionbtn">Projects</span>
            </h1>
            <p className="text-gray-300 mt-4">
              Discover the projects I've worked on, showcasing my expertise in
              web and app development.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-6 bg-blackbg">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap gap-4 items-center">
            {/* Category Filter */}
            <select
              className="bg-gray-700 text-white px-4 py-2 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>

            {/* Tags Filter */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={tag}
                    checked={selectedTags.includes(tag)}
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedTags((prev) =>
                        prev.includes(value)
                          ? prev.filter((t) => t !== value)
                          : [...prev, value]
                      );
                    }}
                  />
                  <span>{tag}</span>
                </label>
              ))}
            </div>

            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search by name..."
              className="bg-gray-700 text-white px-4 py-2 rounded-md flex-grow"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-blackbg border rounded-lg shadow-lg overflow-hidden hover:bg-actionbtn transition ease-in-out duration-300"
              >
                <img
                  src={urlFor(project?.metaThumbnail)}
                  alt={project?.title}
                  width={500}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-lg font-bold text-gray-200">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-300 mt-2">
                    {project.metaDescription}
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Category: {project.category?.name || "Unknown"}
                  </p>
                  <Link
                    href={`project/${project.slug.current}`}
                    className="mt-4 inline-block bg-actionbtn text-white px-6 py-2 rounded-md transition ease-in-out duration-300 group-hover:bg-headingcolor group-hover:text-blackbg"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
