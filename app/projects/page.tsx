import ProjectCard from "@/components/projectCard";
import { getProjects } from "../actions";
import { Project } from "@/util/types";

export default async function ProjectsPage() {
  const data = await getProjects();
  if (!data) return;
  const projects: Project[] = data;
  if (!projects) return;

  const topProject = projects.filter((pro) => pro.priority === "high");
  const normalProject = projects
    .filter((pro) => pro.priority === "low")
    ?.sort((a, b) => a.rank! - b.rank!);
  const internProject = projects.filter((pro) => pro.priority === "intern");

  return (
    <div className="max-w-7xl w-full mx-auto py-2 pb-20 px-5">
      <div className="border-b border-b-gray-700 py-6">
        <h1 className="text-3xl font-semibold text-gray-100">Projects</h1>
        <p className="mt-2 text-gray-400">
          Some of the projects are from work and some are on my own time.
        </p>
      </div>
      <div className="my-8">
        {internProject?.map((item: Project, i: number) => (
          <ProjectCard key={i} project={item} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {topProject?.map((item: Project, i: number) => (
          <ProjectCard key={i} project={item} />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:col-span-3 gap-6">
        {normalProject?.map((item: Project, i: number) => (
          <ProjectCard key={i} project={item} />
        ))}
      </div>
    </div>
  );
}
