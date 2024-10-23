"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import EducationSection from "@/section/education";
import WorkExperience from "@/section/work";
import Link from "next/link";
import React, { useState } from "react";
import Markdown from "react-markdown";
import { Mail } from "lucide-react";
import ProjectModal from "@/components/project-modal";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      {showModal && (
        <ProjectModal
          openModal={showModal}
          setOpenModal={setShowModal}
          selectedProject={selectedProject}
        />
      )}
      <main className="flex flex-col min-h-[100dvh] space-y-10 relative">
        <section id="hero">
          <div className="mx-auto w-full max-w-3xl space-y-8">
            <div className="gap-2 flex flex-col lg:flex-row justify-between items-center gap-10">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-64 border">
                  <AvatarImage
                    alt={DATA.name}
                    src={DATA.avatarUrl}
                    className="h-full w-full object-cover"
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-col gap-2">
              <h4 className="text-base font-bold">Technical</h4>

              <div className="flex flex-wrap gap-1">
                {DATA?.TechnicalSkills?.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
              <h4 className="text-base font-bold">Research & Analysis</h4>

              <div className="flex flex-wrap gap-1">
                {DATA?.Reasearch?.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
              <h4 className="text-base font-bold">Soft</h4>

              <div className="flex flex-wrap gap-1">
                {DATA?.SoftSkills?.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <WorkExperience />
        </section>
        <section id="education">
          <EducationSection />
        </section>

        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are a few of my favorites projects I&apos;ve worked on.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 max-w-[800px] mx-auto ">
              {DATA.projects.map((project, id) => (
                <React.Fragment key={project.title}>
                  <BlurFade delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                    <div
                      onClick={() => {
                        if (project.isExpendible) {
                          setShowModal(true);
                          setSelectedProject(project as any);
                        }
                      }}
                      className="cursor-pointer"
                    >
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        image={project.image}
                        links={project.links}
                        appLinks={
                          project?.appLinks
                            ? (project.appLinks as any)
                            : undefined
                        } // Check for appLinks
                      />
                    </div>
                  </BlurFade>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Volunteering
                  </div>

                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Over the past few years, I have attended and volunteered in
                    a number of Communities and events
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4  ">
                {DATA?.volunteerWork?.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project?.title}
                      description={project?.desc as any}
                      location={project?.location}
                      dates={project.dates}
                      image={
                        project?.image ? (project.image as any) : undefined
                      } // Check for image
                      link={project?.link as any}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>

                <a href="mailto:msnetchie11@gmail.com" className="">
                  <div className="pt-6 cursor-pointer w-max mx-auto dark:border-b-[#ffffff] border-b-[#080a0b] hover:border-b-2 flex items-center gap-4 items-center justify-center pb-4">
                    <p>Send me an email</p>
                    <Mail />
                  </div>
                </a>
              </div>
            </BlurFade>
          </div>
        </section>

        <div className="w-full text-center absolute bottom-0">
          © {currentYear} Misan
        </div>
      </main>
    </>
  );
}
