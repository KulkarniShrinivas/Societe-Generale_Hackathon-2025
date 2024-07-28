import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import { MoreStories } from "@/app/_components/more-stories";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  const allPosts = getAllPosts();
  const morePosts = allPosts.filter(p => p.title !== post.title);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (

    <main className="mt-[70px] pt-10 bg-white">
      <Container>
        <article className="pb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
      <section className="px-5">
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </section>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Marathi Sarva Pooja ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
