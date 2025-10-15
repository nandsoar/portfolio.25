import { Metadata } from "next";
import personalInfo from "@/data/personal-info.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About - Keven Hernandez",
  description: "Learn more about Keven Hernandez's experience and skills.",
};

export default function AboutPage() {
  const { personal, experience, skills, achievements } = personalInfo;

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">
          About Me
        </h1>
        <div className="space-y-3 text-sm md:text-base text-foreground/80 leading-relaxed">
          <p>
            I&apos;m a software engineer located in the US 🇺🇸. I enjoy working
            with scalable systems and involving math whenever I can in my
            projects.
          </p>
          <p>
            My Army aviation training shaped my problem-solving approach and
            taught me systematic troubleshooting and a great deal about
            electricity. I also get to fly on helicopters a couple times a year.
          </p>
          <p>
            Outside of work, I stay active with soccer and calisthenics
            training.
          </p>
        </div>
      </div>

      {/* Experience Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4">
          Experience
        </h2>
        <div className="space-y-4">
          {experience.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">
                      {exp.position}
                    </CardTitle>
                    <p className="text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">
                      {exp.duration}
                    </p>
                    {exp.current && (
                      <span className="inline-block mt-1 text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                        Current
                      </span>
                    )}
                    {exp.partTime && (
                      <span className="inline-block mt-1 text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                        Part-time
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-accent px-2 py-1 rounded-md text-accent-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4">
          Skills
        </h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((lang) => (
                    <span
                      key={lang}
                      className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((db) => (
                    <span
                      key={db}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm"
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Tools & Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.tools, ...skills.concepts].map((item) => (
                    <span
                      key={item}
                      className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Achievements Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-4">
          Achievements
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg bg-accent p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span>🏆</span> Technical
            </h3>
            <ul className="space-y-2">
              {achievements.technical.map((achievement, idx) => (
                <li key={idx} className="text-sm text-muted-foreground">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg bg-accent p-6 border border-border">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span>🎖️</span> Military
            </h3>
            <ul className="space-y-2">
              {achievements.military.map((achievement, idx) => (
                <li key={idx} className="text-sm text-muted-foreground">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
