import Link from "next/link";
import {
  ArrowRightIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { XIcon } from "@/components/icons/x-icon";
import personalInfo from "@/data/personal-info.json";

export default function Home() {
  const { personal, contact, availability, experience } = personalInfo;
  const currentCompany = experience.find((exp) => exp.current);

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start justify-center">
      <div className="flex flex-col-reverse items-start sm:flex-row">
        <div className="flex flex-col">
          <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-5xl">
            Hey, I&apos;m {personal.firstName} 👋
          </h1>
          <h2 className="mb-6 text-sm md:text-base text-foreground/90 font-normal">
            {personal.currentRole}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {personal.bio}
          </p>

          <div className="mt-8 mb-8 flex items-center justify-center gap-10 align-middle">
            <Link
              href={contact.links.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter)"
              className="group flex text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              <XIcon width={28} height={28} />
            </Link>
            <Link
              href={contact.links.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group flex text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              <GitHubLogoIcon width={28} height={28} />
            </Link>
            <Link
              href={contact.links.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group flex text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              <LinkedInLogoIcon width={28} height={28} />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full">
        <div className="mb-8 flex flex-row w-full items-center justify-between">
          <h3 className="align-middle text-xl font-bold tracking-tight md:text-2xl">
            Featured Projects
          </h3>
          <Link
            className="flex items-center gap-x-2 text-muted-foreground transition-all hover:text-primary"
            href="/projects"
          >
            View all
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-1">
          {personalInfo.projects
            .filter((project) => project.title !== "Fabric Nums")
            .slice(0, 2)
            .map((project) => (
              <Link
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-border p-3 transition-all hover:bg-accent"
              >
                <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
        </div>
      </div>

      <div className="mt-20 w-full">
        <div className="mb-8 flex flex-row w-full items-center justify-between">
          <h3 className="align-middle text-xl font-bold tracking-tight md:text-2xl">
            Recent Posts
          </h3>
          <Link
            className="flex items-center gap-x-2 text-muted-foreground transition-all hover:text-primary"
            href="/blog"
          >
            Read more
            <ArrowRightIcon />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {personalInfo.blog.posts
            .filter((post) => post.featured)
            .slice(0, 3)
            .map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group rounded-lg border border-border p-4 transition-all hover:bg-accent"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">
                    {post.readTime}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {post.excerpt}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground">
                      #{tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
