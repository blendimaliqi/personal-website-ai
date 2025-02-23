import React from "react";
import { Metadata } from "next";
import WorksContent from "./WorksContent";

export const metadata: Metadata = {
  title: "Work Experience | Blendi Maliqi",
  description:
    "Discover Blendi Maliqi's professional journey, work experience, and career achievements in software development.",
  alternates: {
    canonical: "https://blendimaliqi.com/works",
  },
};

export default function WorksPage() {
  return (
    <div className="mx-auto flex max-w-6xl px-4">
      <WorksContent />
    </div>
  );
}
