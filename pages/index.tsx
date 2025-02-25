import BlogHeader from "@/components/BlogHeader";
import PostGrid from "@/components/PostGrid";
import { BasicPost } from "@/types/BasicPost";
import { PostWithDetails } from "@/types/PostWithDetails";
import { apiToMockPost } from "@/utils/apiToMockPost";
import { GetStaticProps } from "next";
import Head from "next/head";

import styles from "@/styles/Home.module.scss";

export const getStaticProps: GetStaticProps<{
  posts: PostWithDetails[];
}> = async () => {
  const res = await fetch(`${process.env.API_URL}/posts`);
  const apiPosts = await res.json();
  const posts = apiPosts.map((post: BasicPost) => apiToMockPost(post));

  const revalidate = process.env.REVALIDATE_TIME
    ? parseInt(process.env.REVALIDATE_TIME)
    : undefined;

  return {
    props: {
      posts,
    },
    revalidate,
  };
};

export default function Home({ posts }: { posts: PostWithDetails[] }) {
  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BlogHeader />
      <div className={styles.logoContainer}>
        <div className={styles.logo}>THE BLOG</div>
      </div>
      <main className={styles.main}>
        <PostGrid title="Latest posts" posts={posts} />
      </main>
    </>
  );
}
