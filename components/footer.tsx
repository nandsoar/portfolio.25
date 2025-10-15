import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { XIcon } from "@/components/icons/x-icon";
import personalInfo from "@/data/personal-info.json";

export function Footer() {
  const { contact, meta } = personalInfo;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* About Section */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Keven Hernandez</h3>
            <p className="text-sm text-muted-foreground">
              Software Engineer specializing in scalable and distributed
              systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${contact.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Connect</h3>
            <div className="flex gap-4">
              <Link
                href={contact.links.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <XIcon width={20} height={20} />
              </Link>
              <Link
                href={contact.links.github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GitHubLogoIcon width={20} height={20} />
              </Link>
              <Link
                href={contact.links.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <LinkedInLogoIcon width={20} height={20} />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              <Link
                href={`mailto:${contact.email}`}
                className="hover:text-primary transition-colors"
              >
                {contact.email}
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Keven Hernandez. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
            {meta.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
