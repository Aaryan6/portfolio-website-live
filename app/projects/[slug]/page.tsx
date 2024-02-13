import { Project } from "@/sanity/types";
import formatDate from "@/util/dateFormat";
import axios from "axios";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getProject = async (slug: string) => {
  const fetchUrl = "https://developeraaryan.vercel.app/api/projects";
  try {
    const { data } = await axios.post(fetchUrl, {
      slug,
    });

    const project: Project = {
      title: data.title.title[0]?.text.content,
      description: data.description?.rich_text[0]?.text.content,
      web_url: data.web_url?.url,
      github_url: data.github_url?.url,
      details: data.details.rich_text,
      thumbnail: data.thumbnail.files[0]?.file.url,
      release_date: data.release_date?.date.start,
    };
    return project;
  } catch (error: any) {
    console.log(error);
  }
};

export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const project = await getProject(slug);
  if (!project) return;
  return (
    <div className="">
      <div className="text-center w-full py-12 pt-6 md:pt-12  max-w-2xl mx-auto px-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
          {project!.title}
        </h1>
        <h4 className="text-gray-300 text-sm md:text-base font-medium mt-2">
          {formatDate(project!.release_date)}
        </h4>
        <p className="mt-4 text-base md:text-lg text-gray-300">
          {project!.description}
        </p>
        <div className="flex items-center gap-x-4 mt-10 max-w-[14rem] md:max-w-xs mx-auto">
          {project && project.web_url && (
            <Link
              href={project.web_url}
              target="_blank"
              className="flex items-center justify-center gap-x-2 mx-auto font-semibold"
            >
              Website <MoveRight size={18} />
            </Link>
          )}
          {project && project.github_url && (
            <Link
              href={project.github_url}
              target="_blank"
              className="flex items-center justify-center gap-x-2 mx-auto font-semibold"
            >
              Github <MoveRight size={18} />
            </Link>
          )}
        </div>
      </div>
      <div className="bg-white px-5 pt-10 py-20">
        <div className="max-w-3xl mx-auto">
          {project?.thumbnail && (
            <div className="relative w-full max-h-96 aspect-video my-4">
              <Image
                src={project.thumbnail || ""}
                alt=""
                fill
                className="object-cover w-full h-full object-top border rounded-md"
              />
            </div>
          )}
          {project?.details &&
            project.details.map((item, i) => (
              <span
                className={`text-black ${
                  item.annotations.bold && "font-bold"
                } ${item.annotations.italic && "italic"}`}
                key={i}
              >
                {item.text.content}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
