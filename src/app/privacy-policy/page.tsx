"use client";
import { DATA } from "@/data/resume";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

const PrivacyPolicy = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const projectParam = searchParams.get("project");

  const currentPrivacyPolicy = useMemo(() => {
    if (!projectParam) return null;

    const decodedProjectName = decodeURIComponent(projectParam);
    return DATA.projects.find(
      (project: any) =>
        project.title.toLowerCase() === decodedProjectName.toLowerCase()
    );
  }, [projectParam]);

  return (
    <>
      <div className="w-full  flex flex-col gap-4">
        <div
          className="flex gap-1 items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <ChevronLeft />

          <p>Back</p>
        </div>

        <div
          className="w-full"
          dangerouslySetInnerHTML={{ __html: currentPrivacyPolicy?.policy }}
        ></div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
