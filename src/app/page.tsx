"use client";
import {
  ArrowUp,
  Bot,
  Code,
  Briefcase,
  Cpu,
  ChevronRight,
  Github,
  ExternalLink,
  Maximize2,
  Minimize2,
  RefreshCw,
  Mail,
  Copy,
  Check,
} from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import Chat from "~/components/Chat";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

// Featured projects data
const featuredProjects = [
  {
    title: "Mastercard",
    description:
      "Worked on secure payment solutions and financial technology integrations for Mastercard's global platform.",
    tags: ["React", "Java", "TypeScript", "Figma", "Jest", "Playwright"],
    logoPath: "/mastercard-logo.png",
    link: "/works",
  },
  {
    title: "Borgen Bilsalg",
    description:
      "Car dealership management system with inventory tracking, customer management, and sales analytics for a Norwegian car dealer.",
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JSDOM",
      "Framer Motion",
    ],
    logoPath: "/borgenbilsalg-512x.png",
    link: "/works",
  },
  {
    title: "Event Photos",
    description:
      "Web application for event photo management with drag-and-drop upload and secure storage.",
    tags: ["React", "TypeScript", ".NET 9", "PostgreSQL"],
    logoPath: "/eventphotologo.jpeg",
    link: "/works",
  },
];

// Skills categories
const skillCategories = [
  {
    name: "Frontend",
    icon: <Code className="h-5 w-5" />,
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: <Cpu className="h-5 w-5" />,
    skills: ["C#", ".NET", "SQL", "REST API"],
  },
  {
    name: "Mobile",
    icon: <Briefcase className="h-5 w-5" />,
    skills: ["React Native", "Flutter", "Cross-Platform"],
  },
];

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [expandedChat, setExpandedChat] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const handleSendMessage = useCallback(
    async (customMessage?: string) => {
      const messageToSend = customMessage || message;
      if (!messageToSend.trim() || loading) return;

      setMessages((prev) => [
        ...prev,
        { role: "user", content: messageToSend },
      ]);
      setLoading(true);

      // Expand the chat when a message is sent
      setExpandedChat(true);

      try {
        const response = await fetch("/api/openai-stream", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: messageToSend }),
        });

        if (!response.ok || !response.body) {
          throw new Error("Server error: " + response.statusText);
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split("\n\n");

          for (const line of lines) {
            if (line.startsWith("data: ")) {
              const jsonData = line.slice(6);
              try {
                const parsedData = JSON.parse(jsonData);
                setMessages((prev) => {
                  const newMessages = [...prev];
                  newMessages[newMessages.length - 1] = parsedData;
                  return newMessages;
                });
              } catch (error) {
                console.error("Error parsing JSON:", error);
              }
            }
          }
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
        setMessage("");
      }
    },
    [loading, message],
  );

  // Listen for suggestion clicks from the Chat component
  useEffect(() => {
    const handleSuggestionClick = (
      event: CustomEvent<{ suggestion: string }>,
    ) => {
      setMessage(event.detail.suggestion);
      // Optional: Auto-send the suggestion
      handleSendMessage(event.detail.suggestion);
    };

    document.addEventListener(
      "suggestionClick",
      handleSuggestionClick as EventListener,
    );

    return () => {
      document.removeEventListener(
        "suggestionClick",
        handleSuggestionClick as EventListener,
      );
    };
  }, [handleSendMessage]);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  }

  // Function to handle section hover
  const handleSectionHover = (section: string | null) => {
    setActiveSection(section);
  };

  // Sample questions for the embedded chat
  const sampleQuestions = [
    "Tell me about Blendi's experience",
    "What technologies does Blendi use?",
  ];

  const handleSampleQuestion = (question: string) => {
    setMessage(question);
    handleSendMessage(question);
  };

  const toggleChatSize = () => {
    setExpandedChat((prev) => !prev);
  };

  const resetChat = () => {
    setMessages([]);
    setExpandedChat(false);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("blendi.maliqi93@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Hero Section with Integrated AI */}
      <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-12 shadow-xl sm:px-6 md:py-16 lg:px-8">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>

        <div
          className={`relative z-10 grid gap-8 ${
            expandedChat && !isMobile
              ? "md:grid-cols-[40%_60%]"
              : expandedChat && isMobile
                ? "grid-cols-1"
                : "md:grid-cols-2"
          }`}
        >
          {/* Left column - Intro */}
          <div
            className={`flex flex-col justify-center ${expandedChat && isMobile ? "hidden" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <span className="block">Blendi Maliqi</span>
                <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Software Developer
                </span>
              </h1>
              <p className="mb-6 text-lg text-slate-300">
                Building modern web applications with React, Next.js, and .NET.
                Passionate about creating intuitive user experiences and
                scalable solutions.
              </p>
              <div className="mb-6">
                <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
                  Contact Me
                </p>
                <div className="flex items-stretch gap-2">
                  <a
                    href="mailto:blendi.maliqi93@gmail.com"
                    className="flex flex-1 items-center rounded-md border border-blue-500/30 bg-slate-800/70 px-4 py-3 text-lg text-slate-200 shadow-sm transition-all hover:border-blue-500/50 hover:bg-slate-700/70 hover:text-blue-400 hover:shadow-md"
                    aria-label="Email Blendi"
                  >
                    <Mail className="mr-3 h-5 w-5 text-blue-400" />
                    blendi.maliqi93@gmail.com
                  </a>
                  <button
                    onClick={copyEmailToClipboard}
                    className="group relative flex w-14 items-center justify-center rounded-md border border-blue-500/30 bg-slate-800/70 px-4 shadow-sm transition-all hover:border-blue-500/50 hover:bg-slate-700/70 hover:shadow-md"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="h-5 w-5 text-green-400" />
                    ) : (
                      <Copy className="h-5 w-5 text-blue-400" />
                    )}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                      {copied ? "Copied!" : "Copy email"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/works">
                  <Button className="bg-white text-slate-900 hover:bg-white/90">
                    View My Work
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right column - Embedded Chat */}
          <div
            className={`flex items-center justify-center ${expandedChat && isMobile ? "col-span-1" : ""}`}
          >
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 }}
              className="w-full max-w-full rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm transition-all duration-500"
              style={{
                zIndex: expandedChat ? 10 : 1,
              }}
            >
              <div className="rounded-lg bg-slate-800/80 shadow-lg">
                <div className="flex items-center justify-between rounded-t-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-3">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={resetChat}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                      aria-label="Reset chat"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={toggleChatSize}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                      aria-label={
                        expandedChat ? "Minimize chat" : "Expand chat"
                      }
                    >
                      {expandedChat ? (
                        <Minimize2 className="h-3.5 w-3.5" />
                      ) : (
                        <Maximize2 className="h-3.5 w-3.5" />
                      )}
                    </button>
                    <div className="flex space-x-1">
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
                    </div>
                  </div>
                </div>
                <motion.div
                  className="overflow-hidden p-4"
                  animate={{
                    height: expandedChat
                      ? isMobile
                        ? "60vh"
                        : "500px"
                      : "380px",
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                >
                  {/* Profile info at the top of chat */}
                  {messages.length === 0 && (
                    <div className="mb-6 flex flex-col items-center">
                      <div className="group relative mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500/40 shadow-xl transition-all duration-300 hover:scale-105">
                        <Image
                          fill
                          src="/blendi.jpg"
                          alt="Blendi"
                          className="object-cover transition-all duration-300 group-hover:brightness-110"
                          style={{ objectPosition: "15% center" }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={true}
                        />
                      </div>
                      <div className="mt-6 w-full border-t border-white/10 pt-6">
                        <p className="text-center text-sm text-slate-300">
                          👋 Hi there! I'm Blendi's AI assistant. Ask me
                          anything about his skills, experience, projects, or
                          background.
                        </p>
                      </div>
                    </div>
                  )}
                  <Chat messages={messages} embedded={true} />
                </motion.div>
                <div className="border-t border-white/10 p-3">
                  {messages.length === 0 && (
                    <div className="mb-5 flex flex-wrap gap-2">
                      {sampleQuestions.map((question) => (
                        <button
                          key={question}
                          onClick={() => handleSampleQuestion(question)}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                        >
                          {question}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="relative">
                    <Input
                      disabled={loading}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={handleKeyPress}
                      value={message}
                      placeholder="Ask me anything..."
                      className="h-10 w-full rounded-full border-white/10 bg-white/5 pr-10 text-white placeholder:text-white/50"
                    />
                    <Button
                      onClick={() => handleSendMessage()}
                      size="icon"
                      className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                      disabled={loading || message.trim() === ""}
                    >
                      <ArrowUp className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${expandedChat && isMobile ? "hidden" : ""}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold">My Skills</h2>
          <p className="mt-2 text-muted-foreground">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => handleSectionHover(category.name)}
              onMouseLeave={() => handleSectionHover(null)}
              className={`group rounded-xl border p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-md ${
                activeSection === category.name
                  ? "border-blue-500/50 shadow-md"
                  : "border-border"
              }`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                {category.icon}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/skills"
                  className="flex items-center text-sm text-blue-500 hover:text-blue-600"
                >
                  <span>View all {category.name.toLowerCase()} skills</span>
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${expandedChat && isMobile ? "hidden" : ""}`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-muted-foreground">Some of my recent work</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => handleSectionHover(project.title)}
              onMouseLeave={() => handleSectionHover(null)}
              className={`group relative rounded-xl border p-6 pt-10 transition-all duration-300 hover:border-blue-500/50 hover:shadow-md ${
                activeSection === project.title
                  ? "border-blue-500/50 shadow-md"
                  : "border-border"
              }`}
            >
              <div className="absolute right-4 top-4">
                <Link
                  href={
                    project.title === "Mastercard"
                      ? "/works"
                      : "/hobby-projects"
                  }
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex h-8 items-center rounded-full border border-blue-500/30 bg-slate-800/80 px-3 text-xs font-medium text-blue-400 shadow-sm transition-all hover:border-blue-500/50 hover:bg-slate-700 hover:shadow-md"
                  >
                    <span>View Project</span>
                    <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Button>
                </Link>
              </div>
              <div className="mb-4 flex h-16 items-center justify-center">
                <Image
                  src={project.logoPath}
                  alt={`${project.title} logo`}
                  width={120}
                  height={60}
                  className="h-auto max-h-16 w-auto object-contain"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        ></motion.div>
      </section>
    </div>
  );
}
