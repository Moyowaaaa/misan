"use client";
import { DATA } from "@/data/resume";
import { ChevronLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useMemo } from "react";

const PrivacyPolicyContent = () => {
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
    <div className="w-full max-w-4xl mx-auto py-8 px-4">
      <div
        className="flex gap-1 items-center cursor-pointer mb-6"
        onClick={() => router.back()}
      >
        <ChevronLeft />
        <p>Back</p>
      </div>

      {currentPrivacyPolicy ? (
        <div
          className="w-full prose max-w-none"
          dangerouslySetInnerHTML={{ __html: currentPrivacyPolicy.policy }}
        />
      ) : (
        <div className="text-center py-8">
          <h2 className="text-xl font-semibold mb-2">
            Privacy Policy Not Found
          </h2>
          <p className="text-gray-600">
            The privacy policy for the requested project could not be found.
          </p>
        </div>
      )}
    </div>
  );
};

export default PrivacyPolicyContent;
