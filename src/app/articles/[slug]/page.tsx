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
    title: "Testing React Applications: A Complete Guide",
    description:
      "Learn how to implement comprehensive testing strategies in React applications using Jest, React Testing Library, and Cypress.",
    date: "2024-03-30",
    slug: "testing-react-applications",
    readTime: "15 min read",
    content: `
# Testing React Applications: A Complete Guide

Testing is a crucial part of building reliable React applications. This comprehensive guide covers different testing approaches and best practices using modern testing tools.

## Testing Pyramid in React

The testing pyramid consists of:

1. Unit Tests (Base)
2. Integration Tests (Middle)
3. End-to-End Tests (Top)

## Unit Testing with Jest and RTL

### Setting Up Jest

\`\`\`javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
\`\`\`

### Testing Components

\`\`\`typescript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('increments count when button is clicked', () => {
    render(<Counter />);
    const button = screen.getByRole('button', { name: /increment/i });
    
    fireEvent.click(button);
    
    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});
\`\`\`

## Integration Testing

Testing component interactions:

\`\`\`typescript
import { render, screen, fireEvent } from '@testing-library/react';
import UserProfile from './UserProfile';

test('updates user profile successfully', async () => {
  render(<UserProfile />);
  
  fireEvent.change(screen.getByLabelText(/name/i), {
    target: { value: 'John Doe' },
  });
  
  fireEvent.click(screen.getByRole('button', { name: /save/i }));
  
  expect(await screen.findByText(/profile updated/i)).toBeInTheDocument();
});
\`\`\`

## End-to-End Testing with Cypress

### Basic Configuration

\`\`\`javascript
// cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,
  },
});
\`\`\`

### Writing E2E Tests

\`\`\`typescript
describe('Authentication Flow', () => {
  it('successfully logs in', () => {
    cy.visit('/login');
    cy.get('[data-testid="email"]').type('user@example.com');
    cy.get('[data-testid="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
\`\`\`

## Testing Custom Hooks

\`\`\`typescript
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from './useCounter';

test('should increment counter', () => {
  const { result } = renderHook(() => useCounter());
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
\`\`\`

## Testing Best Practices

### 1. Test Behavior, Not Implementation

✅ Do:
- Test what the user sees and interacts with
- Test component behavior
- Use accessible queries

❌ Don't:
- Test implementation details
- Rely on component internals
- Use test IDs unnecessarily

### 2. Write Maintainable Tests

- Use setup and cleanup functions
- Avoid test interdependence
- Follow the Arrange-Act-Assert pattern
- Use meaningful test descriptions

### 3. Mock Wisely

\`\`\`typescript
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { id: 1, name: 'John' } })),
}));
\`\`\`

## Common Testing Patterns

### 1. Async Operations

\`\`\`typescript
test('loads and displays data', async () => {
  render(<DataComponent />);
  
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  
  const data = await screen.findByText(/loaded data/i);
  expect(data).toBeInTheDocument();
});
\`\`\`

### 2. Context Providers

\`\`\`typescript
const customRender = (ui, { providerProps, ...renderOptions }) => {
  return render(
    <ThemeProvider {...providerProps}>{ui}</ThemeProvider>,
    renderOptions
  );
};
\`\`\`

## Testing Checklist

1. ✅ Unit tests for individual components
2. ✅ Integration tests for component interactions
3. ✅ E2E tests for critical user flows
4. ✅ Hook testing
5. ✅ Error boundary testing
6. ✅ Accessibility testing
7. ✅ Performance testing

## Performance Testing

- Use React Profiler
- Test rendering performance
- Monitor bundle size
- Check memory leaks

## Continuous Integration

Set up automated testing in CI/CD:

1. Run unit and integration tests
2. Execute E2E tests
3. Generate coverage reports
4. Enforce minimum coverage thresholds

Remember: Tests should give you confidence in your code, not slow down development. Focus on testing critical paths and user interactions first.
    `,
  },
  {
    title: "Modern State Management in React: A Comprehensive Guide",
    description:
      "Exploring different state management solutions in React, from useState and useReducer to advanced libraries like Redux Toolkit and Zustand.",
    date: "2024-03-28",
    slug: "modern-state-management-react",
    readTime: "12 min read",
    content: `
# Modern State Management in React: A Comprehensive Guide

State management is a crucial aspect of React applications. This guide explores various approaches to managing state effectively, from built-in hooks to advanced state management libraries.

## Built-in React State Management

### useState Hook

The useState hook is perfect for simple state management:

\`\`\`jsx
const [count, setCount] = useState(0);
const [user, setUser] = useState(null);
\`\`\`

Best for:
- Local component state
- Simple toggle states
- Form input values
- Loading states

### useReducer Hook

useReducer provides more structured state management:

\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

Ideal for:
- Complex state logic
- Related state transitions
- State that depends on previous state
- Testing state changes

## Context API

React's Context API is great for avoiding prop drilling:

\`\`\`jsx
const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
\`\`\`

Best used for:
- Theme management
- User authentication state
- Language preferences
- Feature flags

## External State Management Libraries

### Redux Toolkit

Modern Redux with less boilerplate:

- Simplified store setup
- Built-in immutable updates
- Automatic action creators
- DevTools integration

### Zustand

Minimalist state management:

- Simple API
- No providers needed
- TypeScript support
- Middleware system

### Jotai

Atomic state management:

- Atomic approach
- No context providers
- Great for fine-grained updates
- SSR support

## Choosing the Right Solution

Consider these factors:

1. Application size
2. Team experience
3. Performance requirements
4. Development experience
5. Bundle size concerns

### Decision Matrix

| Solution      | Small Apps | Medium Apps | Large Apps | Learning Curve |
|--------------|------------|-------------|------------|----------------|
| useState     | ✅         | ⚠️          | ❌         | Easy          |
| useReducer   | ✅         | ✅          | ⚠️         | Medium        |
| Context API  | ✅         | ✅          | ⚠️         | Medium        |
| Redux Toolkit| ⚠️         | ✅          | ✅         | High          |
| Zustand     | ✅         | ✅          | ✅         | Easy          |
| Jotai       | ✅         | ✅          | ✅         | Medium        |

## Best Practices

1. Start simple with built-in solutions
2. Use Context API for global UI state
3. Consider external libraries for complex data management
4. Implement proper error boundaries
5. Plan for scalability
6. Document state management decisions

## Performance Optimization

Key strategies:

- Use selectors to prevent unnecessary rerenders
- Implement proper memoization
- Split state into smaller chunks
- Leverage middleware for side effects
- Profile and monitor performance

## Testing State Management

Essential testing approaches:

1. Unit testing reducers
2. Integration testing with providers
3. Testing selectors
4. Mocking external state
5. E2E testing state changes

Remember: The best state management solution is the one that fits your specific needs. Don't overcomplicate things early on, but be prepared to scale your solution as your application grows.
    `,
  },
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
  {
    title: "Web Accessibility: Building Inclusive React Applications",
    description:
      "A comprehensive guide to implementing accessibility features in React applications, including ARIA attributes, keyboard navigation, and semantic HTML.",
    date: "2024-03-25",
    slug: "web-accessibility-react-applications",
    readTime: "10 min read",
    content: `
# Web Accessibility: Building Inclusive React Applications

Creating accessible web applications is not just a good practice—it's essential for ensuring your content reaches all users. This guide explores implementing accessibility features in React applications.

## Understanding Web Accessibility

Web accessibility (a11y) means designing and developing websites that people with disabilities can use. This includes:

- Visual impairments
- Hearing impairments
- Motor impairments
- Cognitive disabilities

## Key Accessibility Features in React

### 1. Semantic HTML

Using semantic HTML elements is crucial for accessibility:

- Use \`<button>\` for clickable actions
- Use \`<nav>\` for navigation menus
- Use \`<main>\`, \`<article>\`, and \`<section>\` appropriately
- Implement proper heading hierarchy (\`<h1>\` through \`<h6>\`)

### 2. ARIA Attributes

ARIA attributes enhance accessibility when HTML semantics aren't enough:

- aria-label
- aria-describedby
- aria-expanded
- aria-hidden
- role attributes

### 3. Keyboard Navigation

Ensure your application is fully navigable via keyboard:

- Implement proper focus management
- Use proper tab order
- Add visible focus indicators
- Handle keyboard events appropriately

### 4. Color and Contrast

Consider visual accessibility:

- Maintain WCAG 2.1 contrast ratios
- Don't rely solely on color to convey information
- Provide sufficient color contrast
- Test with color blindness simulators

## Testing Accessibility

Regular testing is crucial:

1. Use automated tools like axe-core
2. Test with screen readers
3. Perform keyboard navigation testing
4. Conduct user testing with people with disabilities

## Best Practices

1. Start with accessibility in mind
2. Use component libraries that prioritize accessibility
3. Document accessibility features
4. Regular audit and testing
5. Stay updated with WCAG guidelines

Remember: Accessibility benefits everyone, not just users with disabilities. By implementing these features, you're creating a better experience for all users.
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
