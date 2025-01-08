export async function generateMetadata() {
  return {
    title: "VRNITSOLUTION | Student Projects",
    description:
      "VRNITSOLUTION Student Projects,for your academic projects,24x7 support,purchase source code",
    keywords: [
      "student projects",
      "academic projects",
      "source code",
      "Angular Projects",
      "MERN Projects",
    ],
    authors: ["VRNITSOLUTION"],
    openGraph: {
      images: ["./images/student_project.jpeg"],
    },
  };
}

export default function ProjectLayout({ children, params }) {
  return <>{children}</>;
}
