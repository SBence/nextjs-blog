import { BasicPost } from "@/types/BasicPost";
import { PostWithDetails } from "@/types/PostWithDetails";

export function apiToMockPost(post: BasicPost): PostWithDetails {
  return {
    views: 1024,
    date: "Tuesday, 25 Feb 2025",
    thumbnailUrl: "https://picsum.photos/384/240",
    imageUrl: "https://picsum.photos/778/426",
    tags: ["Design", "Research", "Presentation"],
    alt: "Blog post image",
    ...post,
  };
}
