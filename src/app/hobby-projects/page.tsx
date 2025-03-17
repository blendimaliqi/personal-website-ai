import React from "react";
import HobbyProjectsContent from "./HobbyProjectsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hobby Projects | Blendi Maliqi",
  description:
    "Explore Blendi Maliqi's personal projects and hobby developments in software engineering.",
  alternates: {
    canonical: "https://blendimaliqi.com/hobby-projects",
  },
};

type Props = {};

function HobbyProjectsPage({}: Props) {
  return (
    <div className="mx-auto flex max-w-6xl px-4">
      <HobbyProjectsContent />
    </div>
  );
}

export default HobbyProjectsPage;
