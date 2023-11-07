import { groq } from "next-sanity";
import { client } from "../sanity/client";

export async function getPosts() {
  return client.fetch(
    groq`*[_type == "post"]{
        _id,
        title,
        slug,
        body,
        publishedAt,
        mainImage,
      }`
  );
}

export async function singlePost(slug: string) {
  const blogPostQuery = `*[_type == "post" && slug.current == $slug][0]`;
  const blogPost = await client.fetch(blogPostQuery, { slug });
  return blogPost;
}

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        title,
        slug,
        thumbnail,
        icon,
        publishedAt,
        tag,
        details,
        url,
        urls,
        description
      }`
  );
}

export async function singleProject(slug: string) {
  const projectQuery = `*[_type == "project" && slug.current == $slug][0]`;
  const project = await client.fetch(projectQuery, { slug });
  return project;
}
