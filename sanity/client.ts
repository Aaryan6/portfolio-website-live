import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.PROJECT_ID,
  dataset: process.env.DATASET,
  apiVersion: "2022-03-25",
  useCdn: false,
});
