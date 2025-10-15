"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    let lastY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide navbar when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastY) {
        setIsScrollingDown(false);
      }

      lastY = currentScrollY;
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          "sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 navbar",
          isScrollingDown && "navbar-hidden",
        )}
      >
        <div className="w-full px-4 md:px-8 py-1 md:py-2">
          <div className="mx-auto max-w-2xl flex h-12 items-center justify-between">
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative text-base font-medium transition-colors hover:text-foreground pb-1",
                    pathname === item.href
                      ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-10 w-10 rounded-lg md:hidden"
            >
              <HamburgerMenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-10 w-10 rounded-lg"
            >
              <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t">
            <div className="container px-4 md:px-8">
              <nav className="mx-auto max-w-2xl flex flex-col gap-4 py-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-foreground",
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1 container px-4 md:px-8 pt-4 md:pt-6">
        {children}
      </main>

      <footer className="border-t mt-8">
        <div className="container px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Keven Hernandez. All rights
              reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="mailto:hkeven89@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Email
              </Link>
              <Link
                href="https://github.com/aerov8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </Link>
              <Link
                href="https://linkedin.com/in/eskevv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
