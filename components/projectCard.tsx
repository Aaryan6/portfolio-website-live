import { urlForImage } from "@/sanity/image";
import { Project } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectCard({ proj }: { proj: Project }) {
  const getUrl = async (url: any) => {
    const icon = url && (await urlForImage(url)).url();
    return icon;
  };

  return (
    <Link
      href={`/projects/${proj.slug.current}`}
      className="border border-gray-800 bg-[#0c1119] rounded-md p-8 grid place-content-between place-items-start cursor-pointer hover:scale-105 duration-300"
    >
      <div className={``}>
        <div className="grid">
          <div className="flex gap-x-3">
            <Image
              src={(await getUrl(proj.icon)) ?? "/vercel.jpg"}
              alt="logo"
              width={30}
              height={30}
              className="object-contain rounded-full bg-center"
            />
            <h1 className="text-xl font-semibold text-gray-100">
              {proj.title}
            </h1>
          </div>
          <p
            className={`text-gray-400 ${
              proj.tag === "top" ? "leading-loose mt-4" : "leading-normal mt-3"
            }`}
          >
            {proj.description}
          </p>
        </div>
        {proj.tag === "top" && (
          <button className="mt-5">Read more -&gt;</button>
        )}
      </div>
    </Link>
  );
}
