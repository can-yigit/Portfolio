import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { getPostBySlug, getAdjacentPosts, blogPosts } from "../data";
import ShareButton from "./ShareButton";

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { prev, next } = getAdjacentPosts(slug);

  return (
    <>
      <Header />
      <main className="main-content min-h-screen">
        {/* Navigation Bar */}
        <section className="pt-24 pb-4 px-4 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <Link 
              href="/blog"
              className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeftIcon size={16} />
              <span>Blog</span>
            </Link>
            
            <div className="flex items-center gap-2">
              {/* Share Button */}
              <ShareButton />
              
              {/* Navigation Arrows */}
              {prev && (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  title={prev.title}
                >
                  <ArrowLeftIcon size={16} />
                </Link>
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="w-9 h-9 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                  title={next.title}
                >
                  <ArrowRightIcon size={16} />
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="pt-12 pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-4">
                {post.excerpt}
              </p>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">
                {post.date}
              </p>
            </header>

            {/* Featured Image */}
            {post.image && (
              <div className="mb-10 rounded-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed prose-a:text-neutral-900 dark:prose-a:text-white prose-a:underline prose-a:underline-offset-2 prose-strong:text-neutral-900 dark:prose-strong:text-white prose-ul:text-neutral-600 dark:prose-ul:text-neutral-400 prose-li:marker:text-neutral-400">
              {post.content.split('\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                
                if (!trimmed) return null;
                
                // H2 Headers
                if (trimmed.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-semibold text-neutral-900 dark:text-white mt-10 mb-4">
                      {trimmed.replace('## ', '')}
                    </h2>
                  );
                }
                
                // H3 Headers
                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-neutral-900 dark:text-white mt-8 mb-3">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }
                
                // List items
                if (trimmed.startsWith('- ')) {
                  return (
                    <li key={index} className="text-neutral-600 dark:text-neutral-400 ml-4">
                      {trimmed.replace('- ', '')}
                    </li>
                  );
                }
                
                // Regular paragraphs
                return (
                  <p key={index} className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Post Navigation */}
            <nav className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <div className="grid md:grid-cols-2 gap-4">
                {prev && (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                      Previous
                    </span>
                    <p className="text-neutral-900 dark:text-white font-medium mt-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors line-clamp-1">
                      {prev.title}
                    </p>
                  </Link>
                )}
                {next && (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors md:text-right"
                  >
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                      Next
                    </span>
                    <p className="text-neutral-900 dark:text-white font-medium mt-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors line-clamp-1">
                      {next.title}
                    </p>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

