"use client";

import { urlForImage } from "@/sanity/lib/image";
import { Project } from "@/sanity/schemas/project";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  proj: Project;
}

export default function ProjectCard({ proj }: ProjectCardProps) {
  const router = useRouter();
  const handleRoute = () => {
    router.push("/projects/" + proj.slug.current);
  };
  return (
    <div
      className={`border border-gray-800 bg-[#0c1119] rounded-md p-8 grid place-content-between place-items-start cursor-pointer hover:scale-105 duration-300`}
      onClick={handleRoute}
    >
      <div className="grid">
        <div className="flex gap-x-3">
          <Image
            src={proj.icon ? urlForImage(proj.icon).url() : "/vercel.jpg"}
            alt="logo"
            width={30}
            height={30}
            className="object-contain rounded-full bg-center"
          />
          <h1 className="text-xl font-semibold text-gray-100">{proj.title}</h1>
        </div>
        <p
          className={`text-gray-400 ${
            proj.tag === "top" ? "leading-loose mt-4" : "leading-normal mt-3"
          }`}
        >
          {proj.details}
        </p>
      </div>
      {proj.tag === "top" && <button className="mt-5">Read more -&gt;</button>}
    </div>
  );
}
