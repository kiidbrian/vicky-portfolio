import {formatDate} from "@/utils/date";
import {getPostBySlug} from "../../../../lib/posts";

function getPost(slug: string) {
  const post = getPostBySlug(slug);
  return post;
}

export default async function Page({params}: {params: {slug: string}}) {
  type Post = {
    title?: string;
    date?: string;
    content?: string;
    slug?: string;
  };

  const post: Post = await getPost(await params.slug);
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">{post?.title}</h1>
      <div className="text-gray-700 !mb-8">
        {post?.date && formatDate(post.date)}
      </div>
      <div className="post-content prose prose-slate lg:prose-lg mt-4">
        <div dangerouslySetInnerHTML={{__html: post?.content || ""}} />
      </div>
    </div>
  );
}
