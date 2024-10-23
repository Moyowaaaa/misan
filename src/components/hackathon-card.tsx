import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Props {
  title: string;
  description: string[];
  dates: string;
  location: string;
  image?: any;
  link: any;
}

export function HackathonCard({
  title,
  description,
  dates,
  location,
  image,
  link,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage
            src={image}
            alt={title}
            className="object-contain h-full w-full"
          />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}

        <div className="flex flex-wrap items-center gap-2">
          <h2 className="font-semibold leading-none flex gap-2">
            {title}

            {link && (
              <a href={link} target="_blank">
                {" "}
                <span>
                  <ExternalLink height={15} width={15} />
                </span>
              </a>
            )}
          </h2>
        </div>

        {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )}

        {description && description.length > 0 && (
          <div className="flex flex-col gap-2">
            {description?.map((d, idx) => (
              <span
                className="prose dark:prose-invert text-sm text-muted-foreground"
                key={idx}
              >
                -{d}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}
