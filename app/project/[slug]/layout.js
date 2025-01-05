import createClient from "../../client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(createClient);

function urlFor(source) {
  return builder.image(source);
}

export async function generateMetadata({ params: paramsPromise }) {
  // Await the params object
  const params = await paramsPromise;
  const slug = params.slug;

  // Query to fetch project data
  const queryid = `*[_type == 'VRNProject' && slug.current == '${slug}'][0]{
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
          metaDescription,
  }`;

  // Fetch data
  const project = await createClient.fetch(queryid).then((res) => res);
  const imageLink = project?.metaThumbnail
    ? urlFor(project.metaThumbnail).url()
    : "";

  return {
    title: "VRNITSOLUTION | " + project?.title,
    description: project?.metaDescription || "",
    keywords: project?.tags || [],
    authors: project?.author ? [project.author.name] : [],

    openGraph: {
      images: imageLink ? [imageLink] : [],
    },
  };
}

export default function ProjectDetailsLayout({ children, params }) {
  return <>{children}</>;
}
