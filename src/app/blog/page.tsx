import {getSortedPostsData} from "../../../lib/posts";
import {formatDate} from "@/utils/date";
import BlogIndexTracker from "../components/analytics/BlogIndexTracker";
import BlogLinkTracker from "../components/analytics/BlogLinkTracker";

interface BlogPost {
  id: string;
  title?: string;
  date?: string;
  contentHtml?: string;
}

export default function Blog() {
  const posts: BlogPost[] = getSortedPostsData();

  return (
    <div className="">
      {/* Analytics Tracking Component */}
      <BlogIndexTracker />

      <h1 className="heading font-bold mb-4">My Blog</h1>
      <ul className="list-unstyled">
        {posts.map((post: BlogPost) => (
          <li key={post.id} className="mb-4">
            <div className="text-sm text-gray-500">
              {formatDate(post.date || "")}
            </div>
            <BlogLinkTracker
              href={`/blog/${post.id}`}
              postTitle={post.title || "Untitled Post"}
            >
              {post.title}
            </BlogLinkTracker>
          </li>
        ))}
      </ul>
    </div>
  );
}
