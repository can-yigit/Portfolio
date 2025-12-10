import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { getBlogPostBySlug, getAllBlogSlugs, getBlogPosts } from "@/lib/api";
import ShareButton from "../../components/ShareButton";
import "@/styles/blog/blog-detail.scss";

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getBlogPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === slug);
  const prev = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const next = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const date = new Date(post.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const readingTime = Math.ceil(post.content.split(' ').length / 100);
  const author = post.authors?.[0];

  return (
    <>
      <Header />
      <main className="blog-article">
        <nav className="blog-article-nav">
          <div className="blog-article-nav__container">
            <Link href="/blog" className="blog-article-nav__back">
              <ArrowLeftIcon size={16} />
              <span>Back</span>
            </Link>
            
            <div className="blog-article-nav__actions">
              <ShareButton title={post.title} />
              {prev && (
                <Link href={`/blog/${prev.slug}`} className="blog-article-nav__btn" title={prev.title}>
                  <ArrowLeftIcon size={16} />
                </Link>
              )}
              {next && (
                <Link href={`/blog/${next.slug}`} className="blog-article-nav__btn" title={next.title}>
                  <ArrowRightIcon size={16} />
                </Link>
              )}
            </div>
          </div>
        </nav>

        <header className="blog-article-header">
          {post.categories?.[0] && (
            <span className="blog-article-header__category">{post.categories[0].name}</span>
          )}
          <h1 className="blog-article-header__title">{post.title}</h1>
          <p className="blog-article-header__excerpt">{post.excerpt}</p>
          
          <div className="blog-article-header__meta">
            {author && (
              <>
                <div className="blog-article-header__avatar">
                  {author.avatar ? (
                    <img src={author.avatar} alt={author.name} />
                  ) : (
                    author.name.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="blog-article-header__info">
                  <p className="blog-article-header__author">{author.name}</p>
                  <p className="blog-article-header__date">{date}</p>
                </div>
              </>
            )}
            <span className="blog-article-header__reading-time">{readingTime} min read</span>
          </div>
        </header>

        {post.image && (
          <div className="blog-article-image">
            <img src={post.image} alt={post.title} />
          </div>
        )}

        <article className="blog-article-content">
          {post.content.split('\n').map((paragraph, index) => {
            const trimmed = paragraph.trim();
            
            if (!trimmed) return null;
            
            if (trimmed.startsWith('### ')) {
              return <h3 key={index}>{trimmed.replace('### ', '')}</h3>;
            }
            
            if (trimmed.startsWith('## ')) {
              return <h2 key={index}>{trimmed.replace('## ', '')}</h2>;
            }
            
            if (trimmed.startsWith('# ')) {
              return <h1 key={index}>{trimmed.replace('# ', '')}</h1>;
            }
            
            if (trimmed.startsWith('- ')) {
              return <li key={index}>{trimmed.replace('- ', '')}</li>;
            }
            
            return <p key={index}>{trimmed}</p>;
          })}
        </article>

        <nav className="blog-article-pagination">
          <div className="blog-article-pagination__grid">
            {prev && (
              <Link href={`/blog/${prev.slug}`} className="blog-article-pagination__link">
                <span className="blog-article-pagination__label">
                  <ArrowLeftIcon size={12} />
                  Previous
                </span>
                <p className="blog-article-pagination__title">{prev.title}</p>
              </Link>
            )}
            {next && (
              <Link href={`/blog/${next.slug}`} className="blog-article-pagination__link blog-article-pagination__link--next">
                <span className="blog-article-pagination__label">
                  Next
                  <ArrowRightIcon size={12} />
                </span>
                <p className="blog-article-pagination__title">{next.title}</p>
              </Link>
            )}
          </div>
        </nav>
      </main>
      <Footer />
    </>
  );
}

