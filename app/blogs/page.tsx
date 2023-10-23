import BlogCard from "@/components/blogCard";
import { getBlogs } from "@/sanity/sanity.query";
import { Posts } from "@/sanity/schemas/post";

export default async function page() {
  const blogs: Posts[] = await getBlogs();

  const groupSize = Math.ceil(blogs.length / 5);
  const groups = [
    blogs.slice(0, groupSize),
    blogs.slice(groupSize, groupSize * 2),
    blogs.slice(groupSize * 2),
  ];

  return (
    <div className="max-w-6xl w-full mx-auto py-6 px-5">
      <div className="pb-16">
        <h1 className="text-center text-2xl md:text-3xl font-bold">
          As an Author
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {groups.map((subgroup, i) => (
          <div key={i} className="flex flex-col gap-4">
            {subgroup.map((blog: Posts) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
