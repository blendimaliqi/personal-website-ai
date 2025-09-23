import { HobbyProject } from "@/types/hobby-project";

export const hobbyProjects: HobbyProject[] = [
  //   {
  //     title: "I Revisjon AS",
  //     description: "Fullstack Developer",
  //     shortDescription: "Corporate website for a Norwegian audit firm",
  //     content: `
  // Sometimes the most important projects are not the most complicated. When the Norwegian audit firm "I Revisjon AS" asked me to create their first website, I saw a great chance to help a small business take a big step online.
  // Before, they found clients only through word of mouth. They needed a professional website to show who they are and what they do. I built a simple but effective site using Next.js with TypeScript, making sure it looked clean and professional without extra features they didn’t need.

  // I also helped with SEO by adding proper metadata and structuring the site correctly. I sat with the owner to set up their Google Business Profile and explained how Google Search Console could help them see their online presence. We also talked about why local SEO is important for their kind of business.

  // What made this project personally rewarding was seeing how something relatively simple from a technical perspective could have such a meaningful impact on a small business. The owner was genuinely excited to finally have a professional website they could direct potential clients to, and I've already heard they've received inquiries through it.
  // It reminded me that web development isn't always about building the most complex solutions. Sometimes it's about creating the right solution for a specific need, no matter how straightforward it might be.`,
  //     technologies: "Next.js, React, TypeScript, Tailwind CSS, SEO Optimization",
  //     logo: "/irevisjon.png",
  //     githubUrl: "https://github.com/blendimaliqi/i-revisjon",
  //     websiteUrl: "https://irevisjonas.no/",
  //   },

  {
    title: "Stilo.no",
    description: "Fullstack Developer",
    shortDescription:
      "AI-powered virtual clothing try-on for the Norwegian market",
    content: `Stilo.no is one of the most exciting projects I’ve worked on. It’s a virtual try-on platform that lets users upload a photo of themselves and see how different clothes would look on them, powered by AI. The goal was to make something that feels like a digital fitting room while being simple enough for everyday users in Norway.

I built the platform with Next.js 14 and React 18, using TypeScript and Tailwind CSS for a clean, responsive design. To handle authentication, user profiles, and storage, I integrated Supabase. The actual try-on magic comes from Google’s Generative AI models, which create realistic previews of clothing on the user’s photo.

The application supports two modes: replacing clothing or adding new items on top. Users also have a history view to revisit past try-ons. To make the business side work, I integrated Stripe for payments and subscriptions, with a free plan (5 generations/month) and a premium plan (100 generations/month at 99 NOK). Everything is tailored to the Norwegian market, with a fully localized interface.

I enjoyed this project because it combined a lot of different layers: frontend UI with shadcn components, backend data handling with Supabase, payment integration with Stripe, and AI model orchestration. It was also a real challenge to make the experience smooth, fast, and user-friendly given the complexity of AI generation. 

Stilo.no shows how AI can be turned into a real, consumer-facing product that solves a tangible problem—helping people try on clothes without leaving their home.`,
    technologies:
      "Next.js 14, React 18, TypeScript, Tailwind CSS, Shadcn, Supabase, Stripe, Google Generative AI",
    logo: "/stilo.png",
    githubUrl: "https://github.com/yourusername/stilo-no",
    websiteUrl: "https://stilo.no/",
  },

  {
    title: "Borgen Bilsalg",
    description: "Fullstack Developer",
    shortDescription: "Car dealership landing page with Next.js",
    content: `My friend asked me to make a website for his car dealership. I saw this as a great chance to help him and create something useful for a real business.
He wanted a simple and professional landing page to show his inventory and services while being easy for customers to use. I chose Next.js 15 because it has strong built-in SEO, making it easier for people to find his business. It is also super fast with SSR. For styling, I used Tailwind CSS and shadcn.

The website is fully responsive and works well on all devices. It has automated inventory management by integrating with Finn.no, smooth animations with Framer Motion, and a services section to highlight what the dealership offers. 
For fetching and updating car listings, I used a compliant web scraping approach with JSDOM. It also has good caching to reduce fetches while keeping the inventory in sync with Finn.no.

I focused on SEO to improve the dealership’s online visibility. I used the Next.js metadata API for dynamic SEO tags, set up proper meta descriptions and titles, added structured data, and ensured the HTML structure was optimized for search engines. I also helped set up Google Search Console and created a well-optimized Google Business Profile linked to the website.
It was great to see how the website helped modernize my friend’s business and attract more customers through better search visibility and local SEO.`,
    technologies:
      "Next.js 15.1, React 19, TypeScript, Tailwind CSS, JSDOM, Framer Motion, Shadcn",
    logo: "/borgenbilsalg-512x.png",
    githubUrl: "https://github.com/blendimaliqi/borgen-bilsalg",
    websiteUrl: "https://www.borgenbilsalg.no/",
  },
  {
    title: "Architecture Portfolio Website",
    description: "Frontend Developer",
    shortDescription:
      "Minimalist portfolio website for an architecture student",
    content: `My sister asked me to help her build a portfolio site for her architecture project, so I helped her. Elda frequently travels to Paris and Oslo and requested something that could show her projects with a clean touch.

I created a designer portfolio with the Next.js framework using TypeScript and the Tailwind CSS framework. The site has an easy filtering grid layout to let users browse effortlessly through various categories of projects. I used Framer Motion to add smooth transitions and page animations so users can feel like it’s a movement.

Each project has its own page containing beautiful images and contextual information (location, year, type, etc). I also put the contact & about section and a CV downloadable option for recruiters to reach out to her.

The website is designed the same way as architecture so the spaces are clear and strong. I was careful with the choice of typeface, amount of empty space and proportion so the website feels a digital space made with care like an architectural space.`,
    technologies: "Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
    logo: "/eldalogo.png",
    githubUrl: "https://github.com/yourusername/architecture-portfolio-elda",
    websiteUrl: "https://eldamaliqi.com",
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
    content: `I was  frustrated with the volume controls in YouTube Music. The default slider was too rough, making the audio either too loud or hard to adjust at lower levels. There was very little space to fine-tune the volume the way I wanted. This problem made me want to create a solution.
I built a Chrome extension that adds a more precise volume control slider to YouTube Music. It worked well for me, so I decided to share it on the Chrome Web Store so others could use it too.

The extension includes a custom volume slider with logarithmic scaling for better control at lower volumes. It also remembers your volume settings between sessions and works automatically on music.youtube.com.
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
    content: `Kjøpskontrakt (kjopskontrakt.no) is SAAS product I developed as side project. It creates buying contracts for selling cars in Norway. The application is built using modern web technologies and best practices. Key features and technologies:
Next.js 14 is the foundation of application. I used shadcn component library with Tailwind CSS for making good looking interface. Backend functionality is working with Supabase. For money processing I integrated Stripe which is very secure. User authentication is complete with email verification and also password recovery if someone forgets.

Already this service has real world usecases where people sell cars using it. It was very fun experience to develop the whole process. I enjoyed designing frontend interface and also implementing backend functionality. Setting up payment processing was interesting challenge. Final deployment of solution was satisfying moment for me.`,
    technologies: "Next.js 14, Tailwind CSS, shadcn, Supabase, Stripe",
    logo: "/logocar.jpg",
    githubUrl: "https://github.com/blendimaliqi/kjopskontrakt-next",
    websiteUrl: "https://kjopekontrakter.no/",
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
