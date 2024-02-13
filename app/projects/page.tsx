import ProjectCard from "@/components/projectCard";
import { Project } from "@/sanity/types";
import axios from "axios";

const getProjects = async () => {
  const fetchUrl = "/api/projects";
  try {
    const res = await axios.get(fetchUrl);

    const projects: Project[] = res.data.map((data: any) => {
      return {
        title: data.title.title[0]?.text.content,
        description: data.description?.rich_text[0]?.text.content,
        icon: data.icon.files[0]?.file.url,
        priority: data.priority?.select.name,
        slug: data.slug?.rich_text[0]?.text.content,
        list: data.list?.number,
      };
    });
    return projects;
  } catch (error: any) {
    console.log(error);
  }
};

export default async function ProjectsPage() {
  const data = await getProjects();
  if (!data) return;
  const projects: Project[] = data;
  if (!projects) return;
  const topProject = projects.filter((pro) => pro.priority === "high");
  const normalProject = projects
    .filter((pro) => pro.priority === "low")
    ?.sort((a, b) => a.list! - b.list!);

  return (
    <div className="max-w-7xl w-full mx-auto py-2 pb-20 px-5">
      <div className="border-b border-b-gray-600 pb-6">
        <h1 className="text-2xl font-semibold text-gray-100">Projects</h1>
        <p className="mt-2 text-gray-400">
          Some of the projects are from work and some are on my own time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-4">
        {topProject?.map((item: Project, i: number) => (
          <ProjectCard key={i} project={item} />
        ))}
        <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-3 gap-6">
          {normalProject?.map((item: Project, i: number) => (
            <ProjectCard key={i} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
