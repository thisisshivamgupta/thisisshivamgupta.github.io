"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;  // Make link optional
  tags?: string[]; // Make tags optional
}

// Add default empty values for 'tags' and 'link'
const ProjectCard = ({
  title,
  description,
  imageUrl,
  link = "#",
  tags = [],
}: ProjectCardProps) => {
  return (
    <div className="relative flex items-center justify-center rounded-lg overflow-hidden">
      {/* ADDED target="_blank" and rel="noopener noreferrer" */}
      <Link 
        href={link} 
        className="w-full"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DirectionAwareHover
          imageUrl={imageUrl}
          className="w-full h-80 md:h-96"
        >
          {/* This is the content that appears on hover */}
          <div className="p-6 flex flex-col justify-end h-full">
            <h3 className="font-bold text-2xl text-white">{title}</h3>
            <p className="font-normal text-sm text-gray-200 my-2">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </DirectionAwareHover>
      </Link>
    </div>
  );
};

export default ProjectCard;