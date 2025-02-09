import React from "react";
import RightSidePage from "~/components/RIghtSideCardPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience | Blendi Maliqi",
  description:
    "Discover Blendi Maliqi's professional journey, work experience, and career achievements in software development.",
  alternates: {
    canonical: "https://blendimaliqi.com/works",
  },
};

type Props = {};

function WorkExpereiencePage({}: Props) {
  return (
    <div className="mx-auto flex max-w-6xl px-4 ">
      {/* <RightSidePage /> */}
      <RightSidePage />
    </div>
  );
}

export default WorkExpereiencePage;
