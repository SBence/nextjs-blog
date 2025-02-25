import { PostWithDetails } from "@/types/PostWithDetails";
import { plural } from "@/utils/plural";
import { readTime } from "@/utils/readTime";

import styles from "@/styles/components/PostInfo.module.scss";

export default function PostInfo({ post }: { post: PostWithDetails }) {
  return (
    <div
      className={styles.info}
    >{`${post.date} • ${readTime(post.body)} min read • ${plural(post.views, "view")}`}</div>
  );
}
