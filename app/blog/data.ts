// Blog posts data
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string | null;
  pinned: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "building-scalable-ecommerce-with-shopware-6",
    title: "Building Scalable E-Commerce with Shopware 6",
    excerpt: "A deep dive into creating high-performance online stores using Shopware 6's powerful architecture and plugin system.",
    date: "24.11.2024",
    image: "/image.png",
    pinned: true,
    content: `
A deep dive into creating high-performance online stores using Shopware 6's powerful architecture and plugin system.

## Introduction

Shopware 6 has become one of the leading e-commerce platforms in Europe, and for good reason. Its modern architecture, built on Symfony and Vue.js, provides a solid foundation for building scalable online stores.

In this article, I'll share my experience building enterprise-level e-commerce solutions with Shopware 6, including best practices, performance optimizations, and common pitfalls to avoid.

## Architecture Overview

Shopware 6 follows a clean architecture pattern with clear separation of concerns:

- **Core**: Business logic and domain models
- **Storefront**: Customer-facing frontend built with Twig and Bootstrap
- **Administration**: Vue.js-based admin panel
- **API**: RESTful and Store API for headless commerce

## Performance Optimizations

When dealing with large catalogs (10k+ products), performance becomes critical. Here are some strategies I've found effective:

### 1. Elasticsearch Integration

For stores with extensive product catalogs, Elasticsearch is essential. It dramatically improves search performance and enables advanced filtering capabilities.

### 2. HTTP Caching

Shopware's built-in HTTP cache can significantly reduce server load. Configure it properly for static pages while keeping dynamic content fresh.

### 3. Database Indexing

Custom indexes on frequently queried fields can make a huge difference in response times.

## Plugin Development

One of Shopware's strengths is its extensibility. Here's a basic plugin structure:

The plugin system allows you to hook into virtually any part of the platform, from cart calculations to checkout flows.

## Conclusion

Shopware 6 is a powerful platform for building scalable e-commerce solutions. With proper architecture decisions and performance optimizations, it can handle enterprise-level traffic while maintaining excellent developer experience.
    `,
  },
  {
    id: 2,
    slug: "modern-react-patterns-2024",
    title: "Modern React Patterns for 2024",
    excerpt: "Exploring the latest patterns and best practices in React development, from Server Components to the new use() hook.",
    date: "15.11.2024",
    image: null,
    pinned: true,
    content: `
Exploring the latest patterns and best practices in React development, from Server Components to the new use() hook.

## The Evolution of React

React has evolved significantly over the years. What started as a simple view library has grown into a full ecosystem with server-side rendering, streaming, and now Server Components.

## Server Components

React Server Components represent a paradigm shift in how we think about React applications. They allow us to render components on the server, reducing the JavaScript bundle sent to the client.

### Benefits

- Smaller client-side bundles
- Direct database access from components
- Improved initial page load
- Better SEO out of the box

### When to Use

Server Components are ideal for:
- Data fetching
- Accessing backend resources
- Keeping sensitive information server-side

## The use() Hook

The new \`use()\` hook is a game-changer for handling promises and context in React components.

## Compound Components Pattern

This pattern remains incredibly useful for building flexible, composable UI components.

## Conclusion

React continues to evolve, and staying up-to-date with modern patterns helps us build better applications. The key is understanding when to apply each pattern based on your specific use case.
    `,
  },
  {
    id: 3,
    slug: "docker-best-practices-development",
    title: "Docker Best Practices for Development",
    excerpt: "How to set up an efficient Docker workflow that speeds up development while maintaining production parity.",
    date: "28.10.2024",
    image: null,
    pinned: false,
    content: `
How to set up an efficient Docker workflow that speeds up development while maintaining production parity.

## Why Docker for Development?

Docker provides consistency across development environments and makes onboarding new team members a breeze. No more "works on my machine" issues.

## Development vs Production

A common mistake is using the same Dockerfile for both development and production. Here's a better approach:

### Development Dockerfile

- Mount source code as volumes
- Enable hot reloading
- Include development dependencies
- Use development-specific environment variables

### Production Dockerfile

- Multi-stage builds for smaller images
- Only production dependencies
- Optimized for performance
- Security hardening

## Docker Compose for Local Development

Docker Compose is invaluable for managing multi-container setups locally.

## Performance Tips

### 1. Use .dockerignore

Exclude unnecessary files from the build context to speed up builds.

### 2. Layer Caching

Order your Dockerfile commands to maximize cache hits. Put rarely-changing commands first.

### 3. Volume Mounts

Use named volumes for better performance on macOS and Windows.

## Conclusion

Docker has transformed how we develop software. With these best practices, you can create a development environment that's fast, consistent, and closely mirrors production.
    `,
  },
  {
    id: 4,
    slug: "type-safe-apis-typescript",
    title: "Type-Safe APIs with TypeScript",
    excerpt: "Building end-to-end type-safe APIs using TypeScript, from database to frontend with tRPC and Prisma.",
    date: "10.10.2024",
    image: null,
    pinned: false,
    content: `
Building end-to-end type-safe APIs using TypeScript, from database to frontend with tRPC and Prisma.

## The Type Safety Dream

Imagine catching API errors at compile time instead of runtime. That's the promise of end-to-end type safety.

## The Stack

- **Prisma**: Type-safe database access
- **tRPC**: End-to-end typesafe APIs
- **Zod**: Runtime validation with TypeScript inference
- **React Query**: Server state management

## Prisma for Database

Prisma generates TypeScript types from your database schema, ensuring your queries are always type-safe.

## tRPC for APIs

tRPC eliminates the need for REST or GraphQL while providing full type safety between client and server.

## Zod for Validation

Zod schemas provide both runtime validation and TypeScript type inference.

## Benefits

- Catch errors at compile time
- Better developer experience with autocomplete
- Reduced need for API documentation
- Safer refactoring

## Conclusion

End-to-end type safety might seem like extra work initially, but it pays dividends in reduced bugs and improved developer experience. The TypeScript ecosystem has matured to make this achievable with relatively little overhead.
    `,
  },
  {
    id: 5,
    slug: "power-of-tailwind-css",
    title: "The Power of Tailwind CSS",
    excerpt: "Why utility-first CSS changed my workflow and how to build beautiful interfaces faster than ever.",
    date: "22.09.2024",
    image: null,
    pinned: false,
    content: `
Why utility-first CSS changed my workflow and how to build beautiful interfaces faster than ever.

## My Journey to Tailwind

I was skeptical at first. "Classes in HTML? That's going backwards!" But after trying it on a real project, I was hooked.

## Why Utility-First Works

### 1. No Context Switching

You stay in your component file instead of jumping between HTML and CSS files.

### 2. Design Constraints

Tailwind's default scale encourages consistency. No more arbitrary pixel values.

### 3. Dead Code Elimination

Unused styles are automatically removed in production builds.

## Common Patterns

### Component Extraction

When you find yourself repeating the same combination of utilities, extract them into components.

### Using @apply Sparingly

While @apply exists, it's often better to use component abstractions in your framework.

### Custom Configuration

Tailwind's configuration file lets you customize everything from colors to spacing.

## Performance

Tailwind's JIT compiler generates only the CSS you use, resulting in tiny production bundles.

## Conclusion

Tailwind CSS has fundamentally changed how I approach styling. It's not just about writing less CSS—it's about building consistent, maintainable interfaces faster.
    `,
  },
  {
    id: 6,
    slug: "getting-started-nextjs-15",
    title: "Getting Started with Next.js 15",
    excerpt: "Everything you need to know about Next.js 15's new features and how to migrate your existing projects.",
    date: "05.09.2024",
    image: null,
    pinned: false,
    content: `
Everything you need to know about Next.js 15's new features and how to migrate your existing projects.

## What's New in Next.js 15

Next.js 15 brings significant improvements in performance, developer experience, and stability.

### Improved Caching

The caching behavior has been refined to be more predictable and easier to understand.

### Turbopack Stability

Turbopack is now stable for development, offering significantly faster hot module replacement.

### React 19 Support

Full support for React 19 features including the new compiler.

## Migration Guide

### Step 1: Update Dependencies

Start by updating your Next.js and React versions.

### Step 2: Review Breaking Changes

Check the official migration guide for any breaking changes that affect your codebase.

### Step 3: Test Thoroughly

Run your test suite and manually verify critical paths.

## New App Router Features

The App Router continues to evolve with better patterns for:

- Parallel Routes
- Intercepting Routes
- Server Actions

## Performance Improvements

Next.js 15 includes optimizations for:

- Faster cold starts
- Reduced memory usage
- Improved streaming

## Conclusion

Next.js 15 is a solid release that continues to push the boundaries of what's possible with React applications. The migration path is straightforward for most projects, and the performance improvements are worth the effort.
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const currentIndex = blogPosts.findIndex(post => post.slug === slug);
  return {
    prev: currentIndex > 0 ? blogPosts[currentIndex - 1] : null,
    next: currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null,
  };
}

