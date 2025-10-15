import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  content: string;
}

export interface SerializedPost extends BlogPost {
  mdxSource: any;
}

export async function getPostBySlug(
  slug: string,
): Promise<SerializedPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    });

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      tags: data.tags || [],
      featured: data.featured || false,
      readTime: data.readTime,
      content,
      mdxSource,
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  try {
    const files = fs.readdirSync(postsDirectory);
    return files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => file.replace(/\.mdx$/, ""));
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

export function getAllPosts(): BlogPost[] {
  try {
    const slugs = getAllPostSlugs();
    const posts = slugs
      .map((slug) => {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: data.tags || [],
          featured: data.featured || false,
          readTime: data.readTime,
          content,
        };
      })
      .sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });

    return posts;
  } catch (error) {
    console.error("Error loading all posts:", error);
    return [];
  }
}
