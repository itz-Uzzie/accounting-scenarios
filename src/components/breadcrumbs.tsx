"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  if (pathname === "/") return null;

  return (
    <nav aria-label="Breadcrumb" className="flex mb-8 animate-fade-in">
      <ol className="flex items-center space-x-2 text-sm font-medium">
        <li>
          <Link
            href="/"
            className="flex items-center text-zinc-500 hover:text-white transition-colors"
          >
            <Home className="w-4 h-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          const title =
            segment.charAt(0).toUpperCase() +
            segment.slice(1).replace(/-/g, " ");

          return (
            <li key={href} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-zinc-700 shrink-0" />
              {isLast ? (
                <span className="text-white font-semibold" aria-current="page">
                  {title}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
