import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Section } from "@/components/ui/Section";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <div
        className="pt-28 pb-16"
        style={{ background: post.coverColor }}
      >
        <div className="max-w-3xl mx-auto px-8 md:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-white/70 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All posts
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      <div className="max-w-3xl mx-auto px-8 md:px-12 -mt-8">
        {post.coverImage ? (
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full rounded-xl border border-uc2-border shadow-lg object-cover max-h-[420px]"
          />
        ) : (
          <div className="aspect-[21/9] rounded-xl bg-uc2-surface-alt border border-uc2-border flex items-center justify-center shadow-lg">
            <span className="text-sm text-uc2-muted">Featured image — coming soon</span>
          </div>
        )}
      </div>

      {/* Content */}
      <Section>
        <article className="max-w-3xl mx-auto px-2 md:px-6 prose prose-lg prose-headings:font-semibold prose-a:text-uc2-blue prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-uc2-border prose-img:my-8 prose-img:mx-auto prose-img:block prose-img:w-full prose-img:max-h-[600px] prose-img:object-cover">
          <MDXRemote source={post.content} />
        </article>
      </Section>
    </>
  );
}
