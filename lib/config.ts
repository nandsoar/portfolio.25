import personalInfo from "@/data/personal-info.json";

export const siteConfig = {
  name: personalInfo.personal.fullName,
  title: `${personalInfo.personal.fullName} - ${personalInfo.personal.title}`,
  description: personalInfo.personal.tagline,
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  links: {
    twitter: personalInfo.contact.links.twitter.url,
    github: personalInfo.contact.links.github.url,
    linkedin: personalInfo.contact.links.linkedin.url,
    email: `mailto:${personalInfo.contact.email}`,
  },
  author: {
    name: personalInfo.personal.fullName,
    email: personalInfo.contact.email,
    twitter: personalInfo.contact.links.twitter.username,
  },
  keywords: [
    ...personalInfo.skills.languages.map((skill) => skill.name),
    ...personalInfo.skills.web.map((skill) => skill.name),
    "Software Engineer",
    "Developer",
    "Portfolio",
    personalInfo.personal.location.city,
  ],
};

export type SiteConfig = typeof siteConfig;
