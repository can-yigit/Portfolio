"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PinIcon, ClockIcon } from "lucide-react";
import type { BlogPost } from "@/lib/api";
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
  categories: string[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("Overview");

  const validPosts = useMemo(() => {
    return posts.filter(post => 
      post.id &&
      post.slug &&
      post.slug.trim().length > 0 &&
      post.title &&
      post.title.trim().length > 0 &&
      post.excerpt &&
      post.created_at &&
      post.authors &&
      post.authors.length > 0
    );
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "Overview") {
      return validPosts;
    }
    return validPosts.filter(post => {
      const postCategory = post.category?.trim() || "";
      const selectedCat = selectedCategory.trim();
      return postCategory.toLowerCase() === selectedCat.toLowerCase();
    });
  }, [validPosts, selectedCategory]);

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
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`blog-tabs__item ${
              selectedCategory === category ? 'blog-tabs__item--active' : ''
            }`}
          >
            {category}
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
                        {post.category && (
                          <>
                            <span className="blog-post__category">{post.category}</span>
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
