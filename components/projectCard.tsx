import { Project } from "@/util/types";
import Image from "next/image";
import Link from "next/link";
import WebsiteLogo from "@/public/website-logo.svg";

export default async function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="border border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 hover:from-gray-900 hover:to-gray-900 hover:via-gray-950 duration-500 transition-all rounded-md p-8 grid place-content-between place-items-start cursor-pointer hover:scale-105 w-full"
    >
      <div className="grid space-y-4">
        {project.priority === "intern" && (
          <h3 className="bg-gray-800 text-gray-300 font-medium border border-gray-600 px-4 py-1 rounded-full w-fit text-sm">
            Internship
          </h3>
        )}
        <div className="flex gap-x-3">
          <Image
            src={project.icon ?? WebsiteLogo}
            alt="logo"
            width={30}
            height={30}
            className="object-contain rounded-full bg-center "
          />
          <h1 className="text-xl font-semibold text-gray-100">
            {project.title}
          </h1>
        </div>
        <p
          className={`text-gray-400 ${
            project.priority === "high"
              ? "leading-loose mt-4"
              : "leading-normal mt-3"
          }`}
        >
          {project.description}
        </p>
      </div>
      {project.priority !== "low" && (
        <button className="mt-5">Read more -&gt;</button>
      )}
    </Link>
  );
}
