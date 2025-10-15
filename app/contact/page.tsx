import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import personalInfo from "@/data/personal-info.json";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact - Keven Hernandez",
  description:
    "Get in touch with Keven Hernandez for collaboration opportunities or inquiries.",
};

export default function ContactPage() {
  const { contact, personal, availability } = personalInfo;
  const referrals = (personalInfo as any).referrals || [];

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
        Get in Touch
      </h1>
      <p className="mb-8 text-muted-foreground">
        I&apos;m always interested in hearing about new opportunities and
        projects. Feel free to reach out!
      </p>

      {availability.status === "available" && (
        <div className="w-full mb-8 rounded-lg bg-accent p-6 border border-border">
          <h3 className="text-lg font-semibold mb-2">
            ✨ {availability.message}
          </h3>
          <p className="text-sm text-muted-foreground">
            Currently open to: {availability.openTo.join(", ")}
          </p>
        </div>
      )}

      <div className="w-full space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <EnvelopeClosedIcon className="h-5 w-5" />
              Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              The best way to reach me is via email:
            </p>
            <Link
              href={`mailto:${contact.email}`}
              className="text-lg font-medium text-primary hover:underline"
            >
              {contact.email}
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Phone</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-2">
              You can also reach me by phone:
            </p>
            <Link
              href={`tel:${contact.phone}`}
              className="text-lg font-medium text-primary hover:underline"
            >
              {contact.phone}
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-muted-foreground mb-1">GitHub</p>
                <Link
                  href={contact.links.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @{contact.links.github.username}
                </Link>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                <Link
                  href={contact.links.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {contact.links.linkedin.username}
                </Link>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Twitter</p>
                <Link
                  href={contact.links.twitter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @{contact.links.twitter.username}
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{personal.location.display}</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 w-full">
        <h2 className="text-2xl font-bold mb-4">Professional References</h2>
        <p className="text-muted-foreground mb-6">
          Available upon request. I can provide contact information for{" "}
          {referrals.length} professional references.
        </p>
      </div>
    </div>
  );
}
