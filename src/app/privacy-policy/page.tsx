import { Suspense } from "react";
import PrivacyPolicyContent from "./privacy-policy-content";

export default function PrivacyPolicyPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-4xl mx-auto py-8 px-4">
          <div className="flex gap-1 items-center mb-6">
            <div className="h-6 w-6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
          </div>
          <div className="space-y-4">
            <div className="h-8 w-3/4 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      }
    >
      <PrivacyPolicyContent />
    </Suspense>
  );
}
