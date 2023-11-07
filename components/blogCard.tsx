import { urlForImage } from "@/sanity/image";
import { Posts } from "@/sanity/types";
import moment from "moment";
import Image from "next/image";

import Link from "next/link";

export default async function BlogCard({ blog }: { blog: Posts }) {
  const formatDate = (d: Date) => {
    const date = moment(new Date(d).toISOString()).format("MMMM Do YYYY");
    return date.toString();
  };

  const thumbnail = (await urlForImage(blog.mainImage)).url();

  if (thumbnail) {
    return (
      <Link href={"/blogs/" + blog.slug?.current}>
        <div className="relative bg-white w-fit h-fit border border-gray-800">
          <div className="relative w-full h-auto">
            <Image
              src={thumbnail}
              alt="image"
              width={1000}
              height={1000}
              className="-z-10 aspect-auto object-cover object-center"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-full p-6 z-10">
            <h1 className="text-2xl font-bold">{blog.title}</h1>
            <p className="font-medium mt-2">{formatDate(blog.publishedAt)}</p>
          </div>
          <div className="bg-gradient-to-t from-black via-black via-25% to-100% to-transparent absolute top-0 left-0 w-full h-full" />
        </div>
      </Link>
    );
  }
}
