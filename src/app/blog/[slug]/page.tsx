import {formatDate} from "@/utils/date";
import {getPostBySlug} from "../../../../lib/posts";
import {Metadata} from "next";
import BlogPostTracker from "../../components/analytics/BlogPostTracker";

type Post = {
  title: string;
  date: string;
  content: string;
  slug: string;
};

export default async function BlogPostPage(props: {
  params: Promise<{slug: string[]}>;
}) {
  const {slug} = await props.params;

  const post: Post | null = await getPostBySlug(slug);

  if (!post) {
    return (
      <div className="text-center py-10 text-gray-500">Post not found.</div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto py-10">
      {/* Analytics Tracking Component */}
      <BlogPostTracker
        postTitle={post.title}
        postSlug={Array.isArray(slug) ? slug[0] : slug}
        postDate={post.date}
      />

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.date && (
        <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
      )}
      <div className="prose prose-slate lg:prose-lg mt-4">
        <div dangerouslySetInnerHTML={{__html: post.content || ""}} />
      </div>
    </article>
  );
}

// ✅ Optional: Set Metadata for SEO
export async function generateMetadata(props: {
  params: Promise<{slug: string[]}>;
}): Promise<Metadata | undefined> {
  const {slug} = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This post does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.content?.substring(0, 150) + "...",
  };
}
