import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — openUC2",
  description: "News, tutorials, and stories from the openUC2 team.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="pt-28 pb-12 bg-white">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Blog</h1>
          <p className="text-uc2-muted text-lg max-w-md">
            News, tutorials, and stories from the openUC2 team.
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-4xl mx-auto">
        {posts.length === 0 ? (
          <p className="text-uc2-muted">No posts yet. Check back soon!</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-uc2-card border border-uc2-border rounded-xl overflow-hidden hover:border-uc2-blue/50 hover:shadow-lg transition-all"
                >
                  {/* Cover with placeholder image area */}
                  <div
                    className="h-48 flex flex-col items-center justify-end p-6 relative"
                    style={{ background: post.coverColor }}
                  >
                    <div className="absolute top-4 right-4 w-16 h-16 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="text-[10px] text-white/50">IMG</span>
                    </div>
                    <h2 className="text-xl font-bold text-white group-hover:underline w-full">
                      {post.title}
                    </h2>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-uc2-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                    </div>
                    <p className="text-sm text-uc2-muted leading-relaxed">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-sm text-uc2-blue font-medium group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        )}
        </div>
      </Section>
    </>
  );
}
