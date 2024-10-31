import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "~/components/ui/button";

interface Article {
  title: string;
  description: string;
  date: string;
  slug: string;
  readTime: string;
  content: string;
}

// This would typically come from a CMS or database
const articles: Article[] = [
  {
    title: "Building Modern Web Applications with Next.js 13",
    description:
      "Exploring the new features and best practices in Next.js 13, including the App Router and Server Components.",
    date: "2024-03-20",
    slug: "building-modern-web-applications-nextjs-13",
    readTime: "5 min read",
    content: `
# Building Modern Web Applications with Next.js 13

Next.js 13 introduces several groundbreaking features that revolutionize how we build web applications. In this article, we'll explore the key innovations and best practices that make Next.js 13 a game-changer for modern web development.

## The App Router

The new App Router represents a fundamental shift in how Next.js applications handle routing and layouts. Built on React Server Components, it enables:

- Nested layouts with improved performance
- Simplified route handling
- Better code organization
- Improved loading states

## Server Components

React Server Components are a paradigm shift in how we think about component rendering. They offer:

- Reduced client-side JavaScript
- Improved initial page load
- Better SEO capabilities
- Direct database access

## Best Practices

When building with Next.js 13, consider these best practices:

1. Leverage Server Components by default
2. Use Client Components judiciously
3. Implement proper loading states
4. Optimize images with next/image
5. Utilize the new metadata API

Stay tuned for more in-depth articles about each of these topics!
    `,
  },
  {
    title: "TypeScript Best Practices for React Development",
    description:
      "A comprehensive guide to using TypeScript effectively in React applications.",
    date: "2024-03-15",
    slug: "typescript-best-practices-react",
    readTime: "8 min read",
    content: `
# TypeScript Best Practices for React Development

TypeScript has become an essential tool in modern React development. This guide explores best practices for leveraging TypeScript effectively in your React applications.

## Type Safety in Components

Understanding how to properly type your React components is crucial for maintaining a robust codebase. We'll cover:

- Props typing
- State management
- Event handlers
- Generic components

## Advanced TypeScript Features

Learn how to use advanced TypeScript features in your React applications:

- Utility types
- Generic constraints
- Type guards
- Mapped types

More content coming soon...
    `,
  },
];

interface Props {
  params: {
    slug: string;
  };
}

export default function ArticlePage({ params }: Props) {
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="container mx-auto mb-14 px-4 py-8">
      <div className="mb-8">
        <Link href="/articles">
          <Button variant="ghost" className="mb-4">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Articles
          </Button>
        </Link>
        <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <span>
            {new Date(article.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>{article.readTime}</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        {article.content.split("\n").map((paragraph, index) => {
          if (paragraph.startsWith("#")) {
            const level = paragraph.match(/^#+/)?.[0].length || 1;
            const text = paragraph.replace(/^#+\s/, "");
            const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
            return <HeadingTag key={index}>{text}</HeadingTag>;
          }
          return paragraph.trim() && <p key={index}>{paragraph}</p>;
        })}
      </div>
    </div>
  );
}
