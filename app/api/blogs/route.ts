import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const NOTION_SECRET = process.env.NOTION_SECRET;
const DATABASE_KEY = process.env.NOTION_DATABASE_BLOGS_ID;

const notion = new Client({
  auth: NOTION_SECRET,
});

export async function GET(req: Request) {
  if (!DATABASE_KEY || !NOTION_SECRET)
    throw new Error("Notion secret or database key not found");

  //   const query = await notion.databases.query({
  //     database_id: DATABASE_KEY!,
  //   });
  //   const query = await notion.pages.retrieve({
  //     page_id: "1ecbb598-0902-42b5-a5e0-f46a18701f3e",
  //   });
  const query = await notion.blocks.children.list({
    block_id: "1ecbb598-0902-42b5-a5e0-f46a18701f3e",
  });

  const data = query.results.map((page: any) => page);
  console.log(data);
  const title = data[0]?.heading_1.rich_text[0].text.content;
  const sections = [] as any[];

  for (let i = 1; i < data.length; i++) {
    const block = data[i];

    if (block.type === "heading_2") {
      const sectionTitle = block.heading_2.rich_text[0].text.content;
      sections.push({ title: sectionTitle, content: [] });
    } else if (block.type === "paragraph") {
      const content = block.paragraph?.rich_text[0]?.text?.content;
      sections[sections.length - 1].content.push(content);
    }
  }

  //   return { title, sections };
  console.log(title, sections);

  //   @ts-ignore
  //   const data = query.results.map((page) => page.properties);
  return new NextResponse(JSON.stringify(query));
}
