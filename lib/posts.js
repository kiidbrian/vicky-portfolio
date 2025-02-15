import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark()
    .use(html, {
      sanitize: false,
      handlers: {
        link: (h, node) => ({
          type: "element",
          tagName: "a",
          properties: {
            href: node.url,
            target: "_blank",
            rel: "noopener noreferrer",
          },
          children: node.children,
        }),
      },
    })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    description: matterResult.data.description,
    content: contentHtml,
  };
}
