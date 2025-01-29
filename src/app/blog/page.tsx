import Link from "next/link";
import {getSortedPostsData} from "../../../lib/posts";

interface BlogPost {
  id: string;
  title?: string;
  date?: string;
  contentHtml?: string;
}

export default function Blog() {
  const posts: BlogPost[] = getSortedPostsData();

  return (
    <div>
      <ul>
        {posts.map((post: BlogPost) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
