import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts.find(p => p.title === "Top 10 Hindu Rituals and Their Significance: How to Prepare and What to Expect") || allPosts[0];

  const morePosts = allPosts.filter(p => p.title !== "Top 10 Hindu Rituals and Their Significance: How to Prepare and What to Expect")

  return (
    <main className="mt-[70px] pt-5 bg-white">
      <Container>
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
