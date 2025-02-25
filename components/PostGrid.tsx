import { PostWithDetails } from "@/types/PostWithDetails";
import PostCard from "./PostCard";

import styles from "@/styles/components/PostGrid.module.scss";

export default function PostGrid({
  title,
  posts,
  maxPosts,
}: {
  title: string;
  posts: PostWithDetails[];
  maxPosts?: number;
}) {
  return (
    <div className={styles.posts}>
      <div className={styles.sectionHeader}>{title}</div>
      {posts.slice(0, maxPosts ?? posts.length).map((post) => (
        <PostCard key={post.id} postUrl={`/posts/${post.id}`} post={post} />
      ))}
    </div>
  );
}
