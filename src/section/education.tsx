"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import React, { useState } from "react";

const EducationSection = () => {
  const BLUR_FADE_DELAY = 0.04;

  const [expandedId, setExpandedId] = useState(0); // Default to the first item

  const handleClick = (id: number) => {
    setExpandedId((prevId) => (prevId === id ? -1 : id)); // Collapse if clicked again
  };
  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <h2 className="text-xl font-bold">Education</h2>
      </BlurFade>
      {DATA?.education?.map((education: any, id: number) => (
        <BlurFade
          key={education.school}
          delay={BLUR_FADE_DELAY * 8 + id * 0.05}
        >
          <ResumeCard
            key={education.school}
            id={id}
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            title={education.school}
            subtitle={education.degree}
            period={`${education.start} - ${education.end}`}
            isExpanded={true}
            onClick={() => handleClick(id)}
            description={education.desc}
          />
        </BlurFade>
      ))}
    </div>
  );
};

export default EducationSection;
