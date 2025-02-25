import BlogHeader from "@/components/BlogHeader";
import PostGrid from "@/components/PostGrid";
import PostInfo from "@/components/PostInfo";
import { BasicPost } from "@/types/BasicPost";
import { PostWithDetails } from "@/types/PostWithDetails";
import { apiToMockPost } from "@/utils/apiToMockPost";
import type { GetStaticPaths, GetStaticProps } from "next";

import styles from "@/styles/posts/[id].module.scss";

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetch(`${process.env.API_URL}/posts`).then((res) =>
    res.json(),
  );
  const paths = posts.map((post: BasicPost) => ({
    params: { id: String(post.id) },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<{
  post: PostWithDetails;
  posts: PostWithDetails[];
}> = async (context) => {
  if (!context.params?.id) {
    return { notFound: true };
  }
  const apiPost = await fetch(
    `${process.env.API_URL}/posts/${context.params.id}`,
  ).then((res) => res.json());
  const post = apiToMockPost(apiPost);

  const apiPosts = await fetch(`${process.env.API_URL}/posts`).then((res) =>
    res.json(),
  );
  const posts = apiPosts.map((post: BasicPost) => apiToMockPost(post));

  const revalidate = process.env.REVALIDATE_TIME
    ? parseInt(process.env.REVALIDATE_TIME)
    : undefined;

  return {
    props: { post, posts },
    revalidate,
  };
};

export default function Page({
  post,
  posts,
}: {
  post: PostWithDetails;
  posts: PostWithDetails[];
}) {
  return (
    <>
      <BlogHeader />
      <div className={styles.container}>
        <main className={styles.post}>
          <article className={styles.article}>
            <PostInfo post={post} />
            <h1>{post.title}</h1>
            <figure>
              <img
                className={styles.image}
                src={post.imageUrl}
                alt={post.alt}
              />
            </figure>
            <div>{post.body}</div>
          </article>
        </main>
        <PostGrid title="Related posts" posts={posts} maxPosts={12} />
      </div>
    </>
  );
}
