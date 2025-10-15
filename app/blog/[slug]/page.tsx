import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import { getPostBySlug, getAllPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Keven Hernandez`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

const mdxComponents = {
  h1: (props: any) => (
    <h1 className="text-3xl font-bold tracking-tight mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold tracking-tight mt-8 mb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-semibold mt-6 mb-3" {...props} />
  ),
  p: (props: any) => <p className="mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => <li className="ml-4" {...props} />,
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary pl-4 py-2 mb-4 italic text-muted-foreground"
      {...props}
    />
  ),
  code: (props: any) => {
    const { className, children } = props;
    const isInline = !className;

    if (isInline) {
      return (
        <code
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono"
          {...props}
        />
      );
    }

    return (
      <code className={`${className} bg-muted text-foreground`} {...props} />
    );
  },
  pre: (props: any) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-primary hover:underline font-medium"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  hr: (props: any) => <hr className="my-8 border-border" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full divide-y divide-border" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="px-4 py-2 bg-muted text-left font-semibold" {...props} />
  ),
  td: (props: any) => (
    <td className="px-4 py-2 border-t border-border" {...props} />
  ),
};

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mx-auto max-w-2xl">
      <Link
        href="/blog"
        className="mb-8 flex items-center gap-x-2 text-muted-foreground transition-all hover:text-primary inline-flex"
      >
        <ArrowLeftIcon />
        Back to blog
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="mb-8">
          {post.featured && (
            <span className="inline-block mb-4 text-xs bg-primary text-primary-foreground px-3 py-1 rounded-md">
              Featured Post
            </span>
          )}
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-secondary px-3 py-1 rounded-md text-secondary-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={mdxComponents}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Written by</p>
              <p className="font-semibold">Keven Hernandez</p>
            </div>
            <div className="flex gap-4">
              <Link
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://yoursite.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Share on Twitter
              </Link>
              <Link
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://yoursite.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Share on LinkedIn
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
