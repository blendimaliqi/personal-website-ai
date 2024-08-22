import React from "react";
import RightSideCardPage from "~/components/RIghtSideCardPage";
import RightSidePage from "~/components/RightSidePage";

type Props = {};

function WorkExpereiencePage({}: Props) {
  return (
    <div className="mx-auto flex max-w-6xl px-4 ">
      {/* <RightSidePage /> */}
      <RightSideCardPage />
    </div>
  );
}

export default WorkExpereiencePage;
