// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useTheme } from "next-themes";
// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { useEffect, useState } from "react";

// const navItems = [
//   { href: "/", label: "Home" },
//   { href: "/about", label: "About" },
//   { href: "/projects", label: "Projects" },
//   { href: "/blog", label: "Blog" },
// ];

// export function Header() {
//   const pathname = usePathname();
//   const { theme, setTheme } = useTheme();
//   const [isScrollingDown, setIsScrollingDown] = useState(false);

//   useEffect(() => {
//     let lastY = 0;

//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       // Hide navbar when scrolling down past 100px, show when scrolling up
//       if (currentScrollY > lastY && currentScrollY > 100) {
//         setIsScrollingDown(true);
//       } else if (currentScrollY < lastY) {
//         setIsScrollingDown(false);
//       }

//       lastY = currentScrollY;
//     };

//     // Add scroll event listener
//     window.addEventListener("scroll", handleScroll, { passive: true });

//     // Cleanup
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={cn(isScrollingDown && "navbar-hidden")}>
//       <nav className="w-full px-4 md:px-8 flex h-16 items-center justify-between">
//         <div className="flex items-center gap-6">
//           <Link href="/" className="flex items-center space-x-2">
//             <span className="font-bold text-xl">KH</span>
//           </Link>
//           <div className="hidden md:flex gap-6">
//             {navItems.map((item) => (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={cn(
//                   "text-sm font-medium transition-colors hover:text-primary",
//                   pathname === item.href
//                     ? "text-foreground"
//                     : "text-muted-foreground",
//                 )}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//         <Button
//           variant="ghost"
//           size="icon"
//           onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           className="rounded-full"
//         >
//           <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </nav>
//     </header>
//   );
// }
