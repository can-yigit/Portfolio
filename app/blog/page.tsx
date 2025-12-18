import Footer from "../components/Footer";
import { getBlogPosts, getCategories } from "@/lib/api";
import BlogClient from "./BlogClient";
import "@/styles/blog/blog-list.scss";

export const dynamic = 'force-dynamic';

export default async function BlogPage() {
  const [allPosts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories()
  ]);

  return (
    <>
      <main className="blog-page">
        <div className="blog-container">
          <div className="blog-header">
            <h1 className="blog-header__title">Blog</h1>
            <p className="blog-header__description">
              Thoughts, insights and tutorials about web development, design and technology.
            </p>
          </div>
          <BlogClient posts={allPosts} categories={categories} />
        </div>
      </main>
      <Footer />
    </>
  );
}
