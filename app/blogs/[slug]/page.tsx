import { singlePost } from "@/sanity/sanity.query";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { components } from "@/sanity/lib/blockComponents";
import formatDate from "@/util/dateFormat";
import { Posts } from "@/sanity/schemas/post";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog: Posts = await singlePost(params.slug);
  return (
    <div className="max-w-3xl w-full mx-auto md:py-10 pb-20 px-5">
      <div className="bg-gradient-to-b from-[#172943] to-transparent absolute top-0 left-0 w-full h-96 -z-10"></div>
      <div className="py-5">
        <p className="text-gray-200 font-medium mb-2">
          {formatDate(blog?.publishedAt)}
        </p>
        <h1 className="text-3xl md:text-4xl font-bold">{blog?.title}</h1>
      </div>
      <div className="w-full aspect-[16/9] my-4 relative">
        <Image
          src={urlForImage(blog.mainImage).url()}
          alt="image"
          fill
          className="h-full w-full object-center object-cover rounded-md"
        />
      </div>
      <div className="py-2">
        <PortableText value={blog?.body} components={components} />
      </div>
    </div>
  );
}
