"use client";

import { PostWithDetails } from "@/types/PostWithDetails";
import { useEffect, useState } from "react";
import PostInfo from "./PostInfo";
import TagChip from "./TagChip";

import styles from "@/styles/components/PostCard.module.scss";

export default function PostCard({
  postUrl,
  post,
}: {
  postUrl: string;
  post: PostWithDetails;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <article className={styles.container}>
      <figure>
        <img className={styles.image} src={post.thumbnailUrl} alt={post.alt} />
      </figure>
      <PostInfo post={post} />
      <h2 className={styles.title}>{post.title}</h2>
      <p className={styles.excerpt}>{post.body}</p>
      <a href={postUrl} className={styles.button}>
        Read more 🡢
      </a>
      {mounted && (
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <TagChip key={tag} text={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
