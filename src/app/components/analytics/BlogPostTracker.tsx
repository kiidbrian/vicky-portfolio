"use client";

import {useEffect} from "react";
import {trackBlogView} from "@/lib/gtag";

interface BlogPostTrackerProps {
  postTitle: string;
  postSlug: string;
  postDate?: string;
}

export default function BlogPostTracker({
  postTitle,
  postSlug,
  postDate,
}: BlogPostTrackerProps) {
  useEffect(() => {
    // Track blog post view
    trackBlogView(postTitle);

    if (process.env.NODE_ENV === "development") {
      console.log("Blog post tracked:", {
        title: postTitle,
        slug: postSlug,
        date: postDate,
      });
    }
  }, [postTitle, postSlug, postDate]);

  return null;
}
