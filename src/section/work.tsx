"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import React, { useState } from "react";

const WorkExperience = () => {
  const BLUR_FADE_DELAY = 0.04;

  const [expandedId, setExpandedId] = useState(0); // Default to the first item

  const handleClick = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? -1 : id)); // Collapse if clicked again
  };
  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className="text-xl font-bold">Work Experience</h2>
      </BlurFade>
      {DATA.work.map((work: any, id: number) => (
        <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
          <ResumeCard
            key={work.company}
            id={id}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
            isExpanded={expandedId === id}
            onClick={() => handleClick(id)}
          />
        </BlurFade>
      ))}
    </div>
  );
};

export default WorkExperience;
