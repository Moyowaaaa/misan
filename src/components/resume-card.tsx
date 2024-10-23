"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  id: number;
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  isExpanded: boolean;
  onClick: () => void;
}

export const ResumeCard = ({
  id,
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  isExpanded,
  onClick,
}: ResumeCardProps) => {
  return (
    <div className="block cursor-pointer" onClick={onClick}>
      <Card className="flex">
        <Link href={href || "#"} className="flex-none">
          <Avatar className=" size-12 m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="h-full object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </Link>
        <div className="flex-grow ml-4 items-center flex-col group">
          <CardHeader>
            <div className="flex md:items-center flex-col md:flex-row md:justify-between gap-x-2 text-base">
              <h3 className="inline-flex items-center md:justify-center font-semibold leading-none text-xs sm:text-sm">
                {title}
                {badges && (
                  <span className="inline-flex gap-x-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                )}
                <ChevronRightIcon
                  className={cn(
                    "size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </h3>
              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground md:text-right">
                {period}
              </div>
            </div>
            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}
          </CardHeader>
          {description && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isExpanded ? 1 : 0,
                height: isExpanded ? "auto" : 0,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-2 whitespace-break-spaces prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-[1.5rem]"
            >
              {description}
            </motion.div>
          )}
        </div>
      </Card>
    </div>
  );
};
