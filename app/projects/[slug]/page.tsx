import { projectComponents } from "@/sanity/blockComponents";
import { urlForImage } from "@/sanity/image";
import { singleProject } from "@/sanity/sanity.query";
import { Project } from "@/sanity/types";
import formatDate from "@/util/dateFormat";
import { PortableText } from "@portabletext/react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params }: { params: { slug: string } }) {
  const project: Project = await singleProject(params.slug);
  return (
    <div className="">
      <div className="text-center w-full py-12 pt-6 md:pt-12  max-w-2xl mx-auto px-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100">
          {project.title}
        </h1>
        <h4 className="text-gray-300 text-sm md:text-base font-medium mt-2">
          {formatDate(project.publishedAt)}
        </h4>
        <p className="mt-4 text-base md:text-lg text-gray-300">
          {project.description}
        </p>
        <div className="flex items-center gap-x-4 mt-10 max-w-[14rem] md:max-w-xs mx-auto">
          {project.urls?.map((source: any, i: number) => (
            <Link
              href={source.url}
              target="_blank"
              key={i}
              className="flex items-center justify-center gap-x-2 mx-auto font-semibold"
            >
              {source._type} <MoveRight size={18} />
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-white px-5 pt-10 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="relative w-full max-h-96 aspect-video my-4">
            <Image
              src={urlForImage(project.thumbnail).url() || ""}
              alt=""
              fill
              className="object-cover w-full h-full object-top border rounded-md"
            />
          </div>
          <div className="text-black">
            <PortableText
              value={project.details}
              components={projectComponents}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
