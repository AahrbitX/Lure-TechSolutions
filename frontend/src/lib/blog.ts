/**
 * Blog data layer — filesystem adapter (S3-ready)
 *
 * To swap to S3/CMS later, implement the BlogAdapter interface and replace
 * `currentAdapter` at the bottom. All page code calls the exported helpers
 * and never touches the adapter directly.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;         // ISO string "YYYY-MM-DD"
  author: string;
  authorRole?: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: string;
  featured?: boolean;
  content?: string;     // HTML — only present when fetching a single post
}

// ─── Adapter interface (swap this for S3 / Sanity / Contentful later) ────────

interface BlogAdapter {
  /** Return all posts sorted newest-first (no content body). */
  getAllPosts(): Promise<BlogPost[]>;
  /** Return a single post with rendered HTML content, or null if not found. */
  getPost(slug: string): Promise<BlogPost | null>;
  /** Return all available slugs (used by generateStaticParams). */
  getAllSlugs(): Promise<string[]>;
}

// ─── Filesystem Adapter ───────────────────────────────────────────────────────

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

class FilesystemAdapter implements BlogAdapter {
  private parseFile(filename: string): Omit<BlogPost, "content"> {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString().split("T")[0],
      author: data.author ?? "Entice Innovations",
      authorRole: data.authorRole,
      category: data.category ?? "General",
      tags: Array.isArray(data.tags) ? data.tags : [],
      image: data.image,
      readTime: data.readTime ?? "5 min read",
      featured: data.featured ?? false,
    };
  }

  async getAllPosts(): Promise<BlogPost[]> {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".md"));

    return files
      .map((f) => this.parseFile(f))
      .sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  async getPost(slug: string): Promise<BlogPost | null> {
    const filepath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filepath)) return null;

    const raw = fs.readFileSync(filepath, "utf-8");
    const { data, content: mdContent } = matter(raw);

    const processed = await remark()
      .use(remarkGfm)
      .use(remarkHtml, { sanitize: false })
      .process(mdContent);

    return {
      slug,
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? new Date().toISOString().split("T")[0],
      author: data.author ?? "Entice Innovations",
      authorRole: data.authorRole,
      category: data.category ?? "General",
      tags: Array.isArray(data.tags) ? data.tags : [],
      image: data.image,
      readTime: data.readTime ?? "5 min read",
      featured: data.featured ?? false,
      content: processed.toString(),
    };
  }

  async getAllSlugs(): Promise<string[]> {
    if (!fs.existsSync(BLOG_DIR)) return [];
    return fs
      .readdirSync(BLOG_DIR)
      .filter((f) => f.endsWith(".md"))
      .map((f) => f.replace(/\.md$/, ""));
  }
}

// ─── Active adapter (swap here to change source) ─────────────────────────────

const currentAdapter: BlogAdapter = new FilesystemAdapter();

// ─── Public API ──────────────────────────────────────────────────────────────

export const getAllPosts = () => currentAdapter.getAllPosts();
export const getPost = (slug: string) => currentAdapter.getPost(slug);
export const getAllSlugs = () => currentAdapter.getAllSlugs();

/** All unique categories across all posts */
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const cats = new Set(posts.map((p) => p.category));
  return ["All", ...Array.from(cats)];
}

/** Format "YYYY-MM-DD" → "15 June 2025" */
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
