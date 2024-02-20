import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const NOTION_SECRET = process.env.NOTION_SECRET;
const DATABASE_KEY = process.env.NOTION_DATABASE_CONTENT_ID;

const notion = new Client({
  auth: NOTION_SECRET,
});

export async function GET(req: Request) {
  if (!DATABASE_KEY || !NOTION_SECRET)
    throw new Error("Notion secret or database key not found");

  const query = await notion.databases.query({
    database_id: DATABASE_KEY!,
  });

  //   @ts-ignore
  const data = query.results.map((page) => page.properties);

  const tagline_content = data.filter(
    (page) => page.title.title[0]?.text.content === "Tagline"
  )[0].content.rich_text[0].plain_text;

  const bio_content = data.filter(
    (page) => page.title.title[0]?.text.content === "About"
  )[0].content.rich_text[0].plain_text;

  const result = {
    tagline: tagline_content,
    bio: bio_content,
  };
  return new NextResponse(JSON.stringify(result));
}
