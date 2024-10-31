import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "~/components/ui/card";
import Link from "next/link";

interface Article {
  title: string;
  description: string;
  date: string;
  slug: string;
  readTime: string;
}

const articles: Article[] = [
  {
    title: "Modern State Management in React: A Comprehensive Guide",
    description:
      "Exploring different state management solutions in React, from useState and useReducer to advanced libraries like Redux Toolkit and Zustand.",
    date: "2024-03-28",
    slug: "modern-state-management-react",
    readTime: "12 min read",
  },
  {
    title: "Building Modern Web Applications with Next.js 13",
    description:
      "Exploring the new features and best practices in Next.js 13, including the App Router and Server Components.",
    date: "2024-03-20",
    slug: "building-modern-web-applications-nextjs-13",
    readTime: "5 min read",
  },
  {
    title: "TypeScript Best Practices for React Development",
    description:
      "A comprehensive guide to using TypeScript effectively in React applications.",
    date: "2024-03-15",
    slug: "typescript-best-practices-react",
    readTime: "8 min read",
  },
  {
    title: "Web Accessibility: Building Inclusive React Applications",
    description:
      "A comprehensive guide to implementing accessibility features in React applications, including ARIA attributes, keyboard navigation, and semantic HTML.",
    date: "2024-03-25",
    slug: "web-accessibility-react-applications",
    readTime: "10 min read",
  },
];

const ArticlesPage = () => {
  return (
    <div className="container mx-auto mb-14 px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Articles</h1>
        <p className="mt-2 text-muted-foreground">
          Thoughts, tutorials, and insights about web development
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Link href={`/articles/${article.slug}`} key={index}>
            <Card className="h-full transition-transform hover:scale-[1.02]">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {article.readTime}
                  </span>
                </div>
                <CardTitle className="mt-2">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{article.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
