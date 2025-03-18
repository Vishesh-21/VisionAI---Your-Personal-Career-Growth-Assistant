import { getResume } from "@/actions/resume";
import React from "react";
import { ResumeBuilder } from "./_components/ResumeBuilder";

export default async function ResumePage() {
  const resume = await getResume();
  return (
    <div className="container mx-auto">
      <ResumeBuilder initialContent={resume?.content} />
    </div>
  );
}
