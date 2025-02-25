import { BasicPost } from "./BasicPost";

export interface PostWithDetails extends BasicPost {
  views: number;
  date: string;
  imageUrl: string;
  thumbnailUrl: string;
  tags: string[];
  alt: string;
}
