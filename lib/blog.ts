import { BlogPost } from "@/types";
import { blogPosts as fallbackPosts } from "@/lib/data";

const BLOG_POSTS_URL = "https://blog-rba.vercel.app/api/posts.json";

export async function getLatestPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(BLOG_POSTS_URL, { next: { revalidate: 60 } });
    if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
    const posts: BlogPost[] = await res.json();
    return posts.slice(0, 3);
  } catch {
    // Fallback to hardcoded data if blog is unreachable
    return [...fallbackPosts]
      .sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, 3);
  }
}
