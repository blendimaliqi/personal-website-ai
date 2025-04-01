import { HobbyProject } from "@/types/hobby-project";

export const hobbyProjects: HobbyProject[] = [
  {
    title: "I Revisjon AS",
    description: "Fullstack Developer",
    shortDescription: "Corporate website for a Norwegian audit firm",
    content: `Sometimes the most impactful projects aren't the most technically complex ones. When "I Revisjon AS", a local Norwegian audit firm, approached me about creating their first real web presence, I saw a perfect opportunity to help a small business make a significant digital leap forward.

The firm had been relying solely on word of mouth and traditional networking to find clients. This is a common situation for many professional service providers. I worked closely with them to understand their business goals and brand identity before creating a clean, professional website that would serve as their digital business card.

Using Next.js with TypeScript, I built a straightforward but effective site that communicates exactly who they are and what services they offer. While the site isn't packed with fancy features or complex functionality, it solves the exact problem they had: establishing a professional online presence that builds credibility when potential clients search for them.

I particularly enjoyed the SEO aspects of this project. I took the time to:
- Implement proper metadata and semantic HTML structure
- Sit down with the owner to set up their Google Business Profile
- Walk them through Google Search Console and explain how it would help them track their online visibility
- Explain the importance of local SEO for their type of business

What made this project personally rewarding was seeing how something relatively simple from a technical perspective could have such a meaningful impact on a small business. The owner was genuinely excited to finally have a professional website they could direct potential clients to, and I've already heard they've received inquiries through it.

It reminded me that web development isn't always about building the most complex solutions. Sometimes it's about creating the right solution for a specific need, no matter how straightforward it might be.`,
    technologies: "Next.js, React, TypeScript, Tailwind CSS, SEO Optimization",
    logo: "/irevisjon.png",
    githubUrl: "https://github.com/blendimaliqi/i-revisjon",
    websiteUrl: "https://irevisjonas.no/",
  },
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
