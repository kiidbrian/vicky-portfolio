"use client";

import {useEffect} from "react";
import {trackBlogIndexView} from "@/lib/gtag";

export default function BlogIndexTracker() {
  useEffect(() => {
    // Track blog index view
    trackBlogIndexView();

    if (process.env.NODE_ENV === "development") {
      console.log("Blog index tracked");
    }
  }, []);

  return null;
}
