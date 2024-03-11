import { getURL } from "@/util/helpers";
import { Project } from "@/util/types";
import axios from "axios";

export async function getProjects() {
  try {
    const res = await axios.get(`${getURL()}/api/projects`);

    const projects: Project[] = res?.data?.map((data: any) => {
      return {
        title: data.title.title[0]?.text.content,
        description: data.description?.rich_text[0]?.text.content,
        icon: data.icon.files[0]?.file?.url,
        priority: data.priority?.select.name,
        slug: data.slug?.rich_text[0]?.text.content,
        rank: data.rank?.number,
      };
    });
    return projects;
  } catch (error: any) {
    console.log(error);
  }
}

export async function getProjectBySlug(slug: string) {
  const { data } = await axios.post(`${getURL()}/api/projects`, {
    slug,
  });

  const project: Project = {
    title: data.title.title[0]?.text.content,
    description: data.description?.rich_text[0]?.text.content,
    web_url: data.web_url?.url,
    github_url: data.github_url?.url,
    details: data.details.rich_text,
    thumbnail: data.thumbnail.files[0]?.file.url,
    release_date: data.release_date?.date?.start,
  };
  return project;
}

export async function getBio() {
  const { data } = await axios.get(`${getURL()}/api/content`);
  return data?.bio;
}

export async function getTagline() {
  const { data } = await axios.get(`${getURL()}/api/content`);
  return data?.tagline;
}
