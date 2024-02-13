import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const NOTION_SECRET = process.env.NOTION_SECRET;
const DATABASE_KEY = process.env.NOTION_DATABASE_ID;

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

  return new NextResponse(JSON.stringify(data));
}

export async function POST(req: Request) {
  const body = await req.json();
  const { slug } = body;

  if (!DATABASE_KEY || !NOTION_SECRET)
    throw new Error("Notion secret or database key not found");

  const query = await notion.databases.query({
    database_id: DATABASE_KEY!,
  });

  //   @ts-ignore
  const res = query.results.map((page) => page.properties);
  const data = res.find(
    (project: any) => project.slug?.rich_text[0]?.text.content === slug
  );

  return new NextResponse(JSON.stringify(data));
}
