"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SearchIcon, PinIcon } from "lucide-react";
import { blogPosts } from "./data";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="main-content min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-8 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">
              A collection of articles on development, design, and ideas.
            </p>
          </div>
        </section>

        {/* Search */}
        <section className="pb-8 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <SearchIcon 
                size={18} 
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500" 
              />
              <input
                type="text"
                placeholder="Search Blog"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:focus:ring-neutral-700 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Link 
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group cursor-pointer"
                >
                  <article>
                    {/* Image */}
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 dark:bg-neutral-800 mb-4">
                      {post.image ? (
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-neutral-600 dark:text-neutral-500 font-mono text-sm">
                            {post.title.charAt(0)}
                          </div>
                        </div>
                      )}
                      {/* Pin indicator */}
                      {post.pinned && (
                        <div className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm flex items-center justify-center text-neutral-500 dark:text-neutral-400">
                          <PinIcon size={14} />
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1 group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-neutral-400 dark:text-neutral-500">
                      {post.date}
                    </p>
                  </article>
                </Link>
              ))}
            </div>

            {/* Empty state */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-neutral-500 dark:text-neutral-400">
                  No posts found for "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
