"use client";

import Link from "next/link";
import {trackBlogLinkClick} from "@/lib/gtag";

interface BlogLinkTrackerProps {
  href: string;
  postTitle: string;
  children: React.ReactNode;
  className?: string;
}

export default function BlogLinkTracker({
  href,
  postTitle,
  children,
  className,
}: BlogLinkTrackerProps) {
  const handleClick = () => {
    // Track blog link click
    trackBlogLinkClick(postTitle);

    if (process.env.NODE_ENV === "development") {
      console.log("Blog link clicked:", postTitle);
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
