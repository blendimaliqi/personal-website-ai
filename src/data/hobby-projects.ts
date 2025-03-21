import { HobbyProject } from "@/types/hobby-project";

export const hobbyProjects: HobbyProject[] = [
  {
    title: "Borgen Bilsalg",
    description: "Fullstack Developer",
    shortDescription: "Car dealership landing page with Next.js",
    content: `My friend asked if I could create a website for his car dealership business. I saw this as an opportunity to help a friend and create something that is used in real legitimate business!

He wanted to create a simple and professional landing page that would showcase his inventory and services while being easy to navigate for potential customers. I chose Next.js 15 as the foundation. It has great built in SEO capabilites which could result in more potential customers finding his business and is superfast with SSR. I also combined it with Tailwind CSS + shadcn for styling.

Key features of the website include:
- Responsive design that looks great on all devices
- Automated inventory management through Finn.no integration
- Animations using Framer Motion for enhanced user experience
- Services section highlighting the dealership's offerings                 

The application uses a compliant web scraping approach with JSDOM to fetch and parse car listings from Finn.no. Also has good caching to save fetches while still ensuring the inventory stays automatically synchronized with their Finn.no listings.

I also put effort into SEO optimization so that the dealership would have strong online visibility:
- Implemented Next.js metadata API for dynamic SEO tags
- Set up comprehensive meta descriptions and titles 
- Added structured data for better search engine understanding
- Assisted with Google Search Console setup and monitoring
- Created and optimized Google Business Profile, linking it to the website
- Implemented proper semantic HTML structure for better crawlability

It was cool to see how the website helped modernize my friend's business presence online and attract more customers to his dealership through improved search engine visibility and local SEO optimization.`,
    technologies:
      "Next.js 15.1, React 19, TypeScript, Tailwind CSS, JSDOM, Framer Motion, Shadcn",
    logo: "/borgenbilsalg-512x.png",
    githubUrl: "https://github.com/blendimaliqi/borgen-bilsalg",
    websiteUrl: "https://www.borgenbilsalg.no/",
  },
  {
    title: "Event Photos",
    description: "Fullstack Developer",
    shortDescription: "Web application for event photo management and sharing",
    content: `This project was born from a real need when my cousin approached me about creating a photo-sharing solution for her wedding. She wanted guests to be able to easily share their perspectives of the special day through a simple upload and viewing gallery interface.

I saw this as an excellent opportunity to strengthen my backend development skills. I made the frontend with regular React from vite build. I was excited to dive deeper into backend development using .NET 9 and PostgreSQL, allowing me to create a robust fullstack application.

The application includes features such as:
- Drag-and-drop photo upload interface optimized for mobile devices
- Secure photo storage with file type validation
- Featured "hero" photo capability for each event
- Responsive image gallery with description support
- Admin panel for event and photo management

This project not only solved a real problem (and made a good weeding gift) but also helped me grow as a fullstack developer. Particularly backend development in .NET, database design and deployment strategies.`,
    technologies:
      "React, TypeScript, .NET 9, PostgreSQL, Entity Framework Core, TailwindCSS, Coolify, Hetzner Cloud",
    logo: "/eventphotosmol.jpeg",
    githubUrl: "https://github.com/blendimaliqi/event-photos",
  },
  {
    title: "YouTube Music Volume Control",
    description: "Chrome Extension Developer",
    shortDescription:
      "A Chrome extension for precise volume control in YouTube Music",
    content: `I found myself constantly frustrated with the default volume controls in Youtube Music webapp. The built-in volume slider was too rough, which resulted with audio that was too loud even at the lowest levels, leaving very little space on the slider to control volume for my liking. This personal pain point motivated me to create a solution.

I developed this Chrome extension to add a more precise volume control slider to YouTube Music. Since this worked good for me i thought others could use it too and therefore put it on the chrome webstore. Key features include:

- Custom volume control slider 
- Logarithmic volume scaling for better control at lower volumes
- Persistent volume settings between sessions
- Works automatically on music.youtube.com
`,
    technologies: "JavaScript, Chrome Extension API, HTML, CSS",
    logo: "/icon128.png",
    githubUrl: "https://github.com/blendimaliqi/youtube-music-volume-control",
    chromeStoreUrl:
      "https://chromewebstore.google.com/detail/youtube-music-volume-cont/hmbkfihljlgkkhnlcifdgooddhjahmga",
  },

  {
    title: "Crypto Tracker",
    description: "Fullstack Developer",
    shortDescription: "Cryptocurrency listing monitoring and notification tool",
    content: `This tool monitors major cryptocurrency exchanges for new coin listings and upcoming announcements, then alerts me via email before everyone else jumps in. It checks both exchange APIs for actual listings and scrapes announcement pages to catch upcoming listings early - often when prices start moving.

I created it using Node.js and TypeScript. The tool connects to several crypto exchanges including big ones like Binance, Coinbase, and Kraken (plus five others) to gather real-time data.

For data persistence, the application stores all findings in JSON files which provides a simple yet effective storage solution for this use case. When new listings or announcements are detected, the system automatically sends email notifications to users and updates the JSON data store with the new information. This approach makes it easy to track historical data while maintaining a lightweight implementation.

The application architecture follows adapter patterns to easily add new exchange support, making it highly extensible.`,
    technologies:
      "Node.js, TypeScript, API Integration, Web Scraping, Email Notification Systems, Data Persistence",
    logo: "/bitcoin-btc-logo.png",
    githubUrl: "https://github.com/blendimaliqi/crypto-tracker",
  },

  {
    title: "Kjøpskontrakt",
    description: "Fullstack Developer",
    shortDescription: "SAAS for car sales contracts in Norway",
    content: `Kjøpskontrakt (kjopskontrakt.no) is a SAAS product I developed as a side project. It creates buying contracts for selling cars in Norway. The application is built using modern web technologies and best practices. Key features and technologies:

- Built with Next.js 14
- Used shadcn component library with Tailwind CSS for styling
- Implemented backend functionality using Supabase
- Integrated Stripe for secure payment processing
- Developed user authentication, including email verification and password recovery flows

It has already had real world usecases where people have used this service to sell cars. It was really fun to develop through the whole process, from designing the frontend interface to implementing the backend functionality, setting up payment processing, and deploying the final solution.`,
    technologies: "Next.js 14, Tailwind CSS, shadcn, Supabase, Stripe",
    logo: "/logocar.jpg",
    githubUrl: "https://github.com/blendimaliqi/kjopskontrakt-next",
    websiteUrl: "https://kjopskontrakt.no/",
  },
  {
    title: "Portfolio website",
    description: "Fullstack Developer",
    shortDescription: "AI-enhanced personal portfolio website",
    content: `You're looking at this project right now! 

This website serves as both my portfolio and platform for showcasing my latest projects. I built it using Next.js 14, leveraging the latest features like the App Router and Server Components for optimal performance. The site extensively uses shadcn/ui components along with Tailwind CSS for styling, creating a clean and modern design system. The website is built with universal accessibility in mind, featuring ARIA labels, semantic HTML structure, keyboard navigation support, and maintaining WCAG 2.1 compliance to ensure a great experience for all users regardless of their browsing methods or assistive technologies.

One of the unique features is the AI assistant that I trained on my personal data, including:
- My work experience and career history
- Personal hobbies and interests
- Technical skills and competencies
- CV and professional background
- Project portfolio and achievements
`,
    technologies: "Next.js 14, TypeScript, Tailwind CSS, AI Integration",
    logo: "/android-chrome-192x192.png",
    githubUrl: "https://github.com/blendimaliqi/personal-website-ai",
    websiteUrl: "https://blendimaliqi.com/",
  },
  {
    title: "Film Med Gutta",
    description: "Fullstack Developer",
    shortDescription: "A private movie-tracking platform for my friend group",
    content: `Film Med Gutta (Movies with the Boys) is a private movie-tracking platform I built for my friend group to keep track of and discuss movies we watched together. The application allows us to add movies we've watched together, rate them, and engage in discussions through a comment system.

Key Features:
- Movie tracking and management
- Rating and comment system
- Private access to certain features (Discord server members only)
- Real-time updates
- Responsive design

The technical implementation leverages modern web technologies:
- Frontend built with Next.js 13
- Styling with Tailwind CSS for a responsive and modern UI
- Backend with Sanity.io as a headless CMS
- Authentication handled through NextAuth.js with Discord OAuth2
- Integration with TMDB API for comprehensive movie data`,
    technologies:
      "Next.js 13, TypeScript, Tailwind CSS, Sanity.io, NextAuth.js, TMDB API",
    logo: "/fmg.png",
    githubUrl: "https://github.com/blendimaliqi/filmogtekken",
    websiteUrl: "https://filmmedgutta.vercel.app/",
  },
];
