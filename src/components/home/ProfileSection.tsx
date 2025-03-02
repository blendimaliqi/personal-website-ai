import React, { useState } from "react";
import { Mail, Copy, Check, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";

interface ProfileSectionProps {
  isDarkTheme: boolean;
}

export function ProfileSection({ isDarkTheme }: ProfileSectionProps) {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("blendi.maliqi93@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col justify-center">
      <div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          <span
            className={`block ${isDarkTheme ? "text-white" : "text-slate-900"}`}
          >
            Blendi Maliqi
          </span>
          <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Software Developer
          </span>
        </h1>
        <p
          className={`mb-6 text-lg ${isDarkTheme ? "text-slate-300" : "text-slate-700"}`}
        >
          Building modern web applications with React, Next.js, and .NET.
          Passionate about creating intuitive user experiences and scalable
          solutions.
        </p>
        <div className="mb-6">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
            Contact Me
          </p>
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-stretch sm:gap-2 sm:space-y-0">
            <a
              href="mailto:blendi.maliqi93@gmail.com"
              className={`flex flex-1 items-center rounded-md border ${
                isDarkTheme
                  ? "border-blue-500/30 bg-slate-800/70 text-slate-200 hover:border-blue-500/50 hover:bg-slate-700/70 hover:text-blue-400"
                  : "border-blue-500/30 bg-slate-200/70 text-slate-700 hover:border-blue-500/50 hover:bg-slate-300/70 hover:text-blue-600"
              } px-4 py-3 text-base shadow-sm transition-all sm:text-lg`}
              aria-label="Email Blendi"
            >
              <Mail className="mr-3 h-5 w-5 text-blue-400" />
              <span className="truncate">blendi.maliqi93@gmail.com</span>
            </a>
            <button
              onClick={copyEmailToClipboard}
              className={`group relative flex w-full items-center justify-center rounded-md border ${
                isDarkTheme
                  ? "border-blue-500/30 bg-slate-800/70 hover:border-blue-500/50 hover:bg-slate-700/70"
                  : "border-blue-500/30 bg-slate-200/70 hover:border-blue-500/50 hover:bg-slate-300/70"
              } px-4 py-2 shadow-sm transition-all hover:shadow-md sm:w-14`}
              aria-label="Copy email address"
            >
              {copied ? (
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-400 sm:mr-0" />
                  <span className="text-green-400 sm:hidden">Copied!</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Copy className="mr-2 h-5 w-5 text-blue-400 sm:mr-0" />
                  <span className="text-blue-400 sm:hidden">Copy email</span>
                </div>
              )}
              <span
                className={`absolute -bottom-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded ${
                  isDarkTheme ? "bg-slate-900" : "bg-slate-700"
                } px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block`}
              >
                {copied ? "Copied!" : "Copy email"}
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <Link href="/works">
            <Button
              className={
                isDarkTheme
                  ? "bg-white text-slate-900 hover:bg-white/90"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }
            >
              View My Work
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
