"use client";
import React from "react";
import { SkillsSection } from "./components/SkillsSection";

const SkillsPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <SkillsSection />
      </main>
    </div>
  );
};

export default SkillsPage;
