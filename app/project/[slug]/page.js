"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import createClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "react-portable-text";
import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import {
  Calendar,
  ChartBarStacked,
  Share2Icon,
  Tag,
  UserPen,
} from "lucide-react";
import {
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import ReactPlayer from "react-player";

const builder = imageUrlBuilder(createClient);

function urlFor(source) {
  return builder.image(source);
}

export default function ProjectMain({ params: paramsPromise }) {
  const [params, setParams] = useState(null);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    const fetchParams = async () => {
      try {
        const unwrappedParams = await paramsPromise;
        setParams(unwrappedParams);
      } catch (err) {
        console.error("Failed to fetch params:", err);
      }
    };

    fetchParams();
  }, [paramsPromise]);

  useEffect(() => {
    if (!params) return;

    const fetchData = async () => {
      try {
        const projectRes = await createClient.fetch(
          `*[_type == 'VRNProject' && slug.current == $slug][0]{
            _id,
            title,
            slug,
            publishedAt,
            'author': author->{
              name,
              avatar
            },
            'category': category->{
                name,description
            },
            tags,
            body,
            metaThumbnail,
            metaDescription
          }`,
          { slug: params.slug }
        );
        setProject(projectRes);
      } catch (error) {
        console.error("Error fetching project data:", error);
        setError("Failed to load project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="project-details bg-blackbg text-white">
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="rounded-md overflow-hidden w-full lg:h-[600px]">
          <img
            src={urlFor(project.metaThumbnail).url()}
            alt={project.title}
            className="w-full h-full object-cover lg:object-contain"
          />
        </div>
        <div className="flex gap-2 md:gap-8 flex-wrap items-center">
          <div className="flex gap-2 items-center">
            <UserPen />
            <img
              className="rounded-full w-8 h-8 object-contain border"
              src={urlFor(project.author.avatar)}
              alt={project.author.name}
            />
            <p>{project?.author?.name}</p>
          </div>

          <div className="flex gap-3 items-center">
            <Calendar />
            {formatDate(project?.publishedAt)}
          </div>
          <div className="flex gap-3 items-center">
            <Tag />
            <div>
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 mt-2 lg:mt-0 text-black rounded-full px-3 py-1 text-sm font-semibold mr-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <ChartBarStacked />
            <p>{project.category?.name || "Unknown"}</p>
          </div>

          <div className="flex gap-3 items-center mt-2 lg:m-0">
            <Share2Icon />
            <TwitterShareButton
              url={`https://vrnitsolution.vercel.app/project/${project?.slug?.current}`}
              title={project?.title}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton
              url={`https://vrnitsolution.vercel.app/project/${project?.slug?.current}`}
              title={project?.title}
              summary={project?.metaDescription}
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TelegramShareButton
              url={`https://vrnitsolution.vercel.app/project/${project?.slug?.current}`}
              title={project?.title}
            >
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <WhatsappShareButton
              url={`https://vrnitsolution.vercel.app/project/${project?.slug?.current}`}
              title={project?.title}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton
              url={`https://vrnitsolution.vercel.app/project/${project?.slug?.current}`}
              subject={project?.title}
              body={project?.metaDescription}
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>

        <br />
        <h1 className="md:text-3xl text-2xl font-bold text-headingcolor">
          {project.title}
        </h1>
        <p className="md:text-lg text-sm">{project.metaDescription}</p>

        <p className="text-md">Tags: {project.tags.join(", ")}</p>
        <PortableText
          content={project?.body || []}
          projectId="7u5ya2hf"
          dataset="production"
          serializers={{
            h1: (props) => (
              <h1 className="md:text-3xl text-2xl font-bold leading-normal mt-3 mb-3 text-headingcolor">
                {props.children}
              </h1>
            ),
            h2: (props) => (
              <h2 className="md:text-2xl text-xl font-bold leading-normal mt-3 mb-3 text-headingcolor">
                {props.children}
              </h2>
            ),
            h3: (props) => (
              <h3 className="md:text-xl text-lg font-bold leading-normal mt-3 mb-3 text-headingcolor">
                {props.children}
              </h3>
            ),
            h4: (props) => (
              <h4 className="md:text-lg text-md font-bold leading-normal mt-3 mb-3 text-headingcolor">
                {props.children}
              </h4>
            ),
            h5: (props) => (
              <h5 className="md:text-md text-sm font-bold leading-normal mt-3 mb-3 text-headingcolor">
                {props.children}
              </h5>
            ),
            h6: (props) => (
              <h6 className="md:text-sm text-xs font-bold leading-normal mt-3 mb-3 text-headingcolor">
                {props.children}
              </h6>
            ),
            ul: ({ children }) => (
              <ul className="list-disc ml-6 text-gray-300">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal ml-6 text-gray-300">{children}</ol>
            ),
            li: ({ children }) => <li className="leading-loose">{children}</li>,

            code: ({ children }) => (
              <div className="bg-gray-900 p-4 mt-5 mb-5 rounded-lg shadow-lg relative">
                <div className="dots flex absolute right-2 top-5 transform -translate-y-1/2">
                  <div className="w-2 h-2 rounded-full bg-red-500 mb-1"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500 mb-1"></div>
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <pre
                  className="text-gray-100 font-mono text-sm break-words"
                  style={{ whiteSpace: "normal" }}
                >
                  <code>{children}</code>
                </pre>
              </div>
            ),
            blockquote: ({ children }) => (
              <div className="overflow-hidden">
                <div className="p-6">
                  <blockquote className="border-l-4 border-gray-500 pl-4 text-justify">
                    {children}
                  </blockquote>
                </div>
              </div>
            ),
            normal: ({ children }) => (
              <div className="text-justify text-gray-300 leading-loose mt-3 mb-3">
                {children}
              </div>
            ),
            image: ({ asset, alt }) => (
              <div className="rounded-md overflow-hidden w-full lg:h-[400px] mt-5 mb-5">
                <img
                  src={urlFor(asset)}
                  alt={alt}
                  className="w-full h-full object-cover lg:object-contain"
                />
              </div>
            ),

            youtube: ({ title, videoUrl }) => {
              return (
                <div className="mt-3 mb-5 p-3">
                  {/* Aspect ratio wrapper */}
                  <div className="relative aspect-video">
                    <ReactPlayer
                      url={videoUrl}
                      controls
                      width="100%"
                      height="100%"
                      className="absolute top-0 left-0"
                    />
                  </div>
                  {/* Video title */}
                  <p className="text-lg md:text-sm font-bold mt-3">{title}</p>
                </div>
              );
            },
            table: (props) => {
              const { row, someDocumentType } = props;
              return (
                <div className="overflow-auto mt-3 mb3">
                  <table className="border-collapse border border-gray-300 shadow-md">
                    <thead>
                      <tr>
                        {row.columns.map((column, index) => (
                          <th
                            key={index}
                            className="border border-gray-500 p-2"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {someDocumentType.rows.map((tableRow, index) => (
                        <tr
                          key={index}
                          className="transition-colors duration-300 hover:bg-gray-100"
                        >
                          {tableRow.columns.map((column, columnIndex) => (
                            <td
                              key={columnIndex}
                              className="border border-gray-500 p-2 "
                            >
                              {column}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            },
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
