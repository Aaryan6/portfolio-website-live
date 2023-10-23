import ProjectCard from "@/components/projectCard";
import { getProjects } from "@/sanity/sanity.query";
import { Project } from "@/sanity/schemas/project";

export default async function ProjectsPage() {
  const projects: Project[] = await getProjects();
  const topProject = projects.filter((pro) => pro.tag === "top");
  const normalProject = projects.filter((pro) => pro.tag === "normal");
  return (
    <div className="max-w-7xl w-full mx-auto py-2 pb-20 px-5">
      <div className="border-b border-b-gray-600 pb-6">
        <h1 className="text-2xl font-semibold text-gray-100">Projects</h1>
        <p className="mt-2 text-gray-400">
          Some of the projects are from work and some are on my own time.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-4">
        {topProject.map((proj: any, i: number) => (
          <ProjectCard key={i} proj={proj} />
        ))}
        <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-3 gap-6">
          {normalProject.map((proj: any, i) => (
            <ProjectCard key={i} proj={proj} />
          ))}
        </div>
      </div>
    </div>
  );
}
