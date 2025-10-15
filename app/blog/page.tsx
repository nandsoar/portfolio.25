import Link from "next/link";
import { Metadata } from "next";
import personalInfo from "@/data/personal-info.json";

export const metadata: Metadata = {
  title: "Blog - Keven Hernandez",
  description:
    "Articles and thoughts on software engineering, systems design, and technology.",
};

export default function BlogPage() {
  const { blog } = personalInfo;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">
          Blog
        </h1>
        <p className="text-muted-foreground">Thoughts and blogs</p>
      </div>

      <div className="flex flex-col gap-6">
        {blog.posts.map((post) => (
          <article
            key={post.id}
            className="group rounded-lg border border-border p-6 transition-all hover:bg-accent"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                {post.featured && (
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-md ml-4 whitespace-nowrap">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <p className="text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          </article>
        ))}
      </div>

      {blog.posts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No blog posts yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  );
}
