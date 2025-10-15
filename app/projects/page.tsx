import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import personalInfo from "@/data/personal-info.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Keven Hernandez",
  description:
    "A collection of my software engineering projects including regex engines, CLI tools, and web applications.",
};

export default function ProjectsPage() {
  const { projects } = personalInfo;

  const projectsByCategory = projects.reduce(
    (acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    },
    {} as Record<string, typeof projects>,
  );

  return (
    <div className="mx-auto flex max-w-2xl flex-col items-start justify-center">
      <Link
        href="/"
        className="mb-8 flex items-center gap-x-2 text-muted-foreground transition-all hover:text-primary"
      >
        <ArrowLeftIcon />
        Back to home
      </Link>

      <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
        Projects
      </h1>
      <p className="mb-8 text-muted-foreground">
        A collection of projects I&apos;ve built to explore different
        technologies and solve interesting problems.
      </p>

      <div className="w-full space-y-12">
        {Object.entries(projectsByCategory).map(
          ([category, categoryProjects]) => (
            <div key={category}>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">
                {category}
              </h2>
              <div className="grid gap-4 md:grid-cols-1">
                {categoryProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-border p-6 transition-all hover:bg-accent"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground capitalize ml-4">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ),
        )}
      </div>

      <div className="mt-12 w-full rounded-lg bg-accent p-6 border border-border">
        <h3 className="text-lg font-semibold mb-2">
          Interested in collaborating?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          I&apos;m always open to interesting projects and ideas. Feel free to
          reach out!
        </p>
        <Link
          href={`mailto:${personalInfo.contact.email}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          Get in touch →
        </Link>
      </div>
    </div>
  );
}
