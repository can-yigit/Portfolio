"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PinIcon, ClockIcon, TagIcon } from "lucide-react";
import type { BlogPost, BlogCategory } from "@/lib/api";
import AuthorStack from "./components/AuthorStack";
import "@/styles/blog/blog-list.scss";

const isValidImageUrl = (url: string) => {
  if (!url) return false;
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const lowerUrl = url.toLowerCase();
  return imageExtensions.some(ext => lowerUrl.includes(ext)) || lowerUrl.includes('/cdn/');
};

interface BlogClientProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    let filtered = posts;
    
    if (selectedCategoryId) {
      filtered = filtered.filter(post => 
        post.categories?.some(cat => cat.id === selectedCategoryId)
      );
    }
    
    return filtered;
  }, [posts, selectedCategoryId]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="blog-tabs">
        <button
          onClick={() => setSelectedCategoryId(null)}
          className={`blog-tabs__item ${!selectedCategoryId ? 'blog-tabs__item--active' : ''}`}
        >
          Overview
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategoryId(category.id)}
            className={`blog-tabs__item ${
              selectedCategoryId === category.id ? 'blog-tabs__item--active' : ''
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="blog-container">
        {filteredPosts.length > 0 ? (
          <div className="blog-posts">
            {filteredPosts.map((post) => {
              const readingTime = Math.ceil(post.content.split(' ').length / 100);
              
              return (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="blog-post">
                    <div className="blog-post__image">
                      {post.image && isValidImageUrl(post.image) ? (
                        <img src={post.image} alt={post.title} />
                      ) : (
                        <div className="blog-post__placeholder">
                          <span>{post.title.charAt(0)}</span>
                        </div>
                      )}
                      {post.pinned && (
                        <div className="blog-post__pinned">
                          <PinIcon size={12} />
                        </div>
                      )}
                    </div>
                    
                    <div className="blog-post__content">
                      <div className="blog-post__meta">
                        {post.categories && post.categories.length > 0 && (
                          <>
                            <div className="blog-post__categories">
                              {post.categories.map((cat) => (
                                <span key={cat.id} className="blog-post__category">
                                  <TagIcon size={10} />
                                  {cat.name}
                                </span>
                              ))}
                            </div>
                            <span className="blog-post__dot" />
                          </>
                        )}
                        <span>{formatDate(post.created_at)}</span>
                        <span className="blog-post__dot" />
                        <span className="blog-post__reading-time">
                          <ClockIcon size={12} />
                          {readingTime} min
                        </span>
                      </div>
                      
                      <h2 className="blog-post__title">{post.title}</h2>
                      <p className="blog-post__excerpt">{post.excerpt}</p>
                      
                      {post.authors && post.authors.length > 0 && (
                        <AuthorStack authors={post.authors.map(author => ({ ...author, id: String(author.id) }))} size="sm" />
                      )}
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="blog-empty">
            <p className="blog-empty__title">No posts found</p>
            <p className="blog-empty__description">Try selecting a different category.</p>
          </div>
        )}
      </div>
    </>
  );
}
