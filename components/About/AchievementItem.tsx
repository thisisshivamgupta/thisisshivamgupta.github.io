"use client";

import type { LucideIcon } from "lucide-react";

interface AchievementItemProps {
  icon: LucideIcon;
  title: string;
  details: string;
}

export const AchievementItem = ({ icon: Icon, title, details }: AchievementItemProps) => (
  <li className="flex items-start p-4 bg-accent border border-l-4 border-l-primary rounded-md">
    <Icon className="w-6 h-6 mr-4 text-primary shrink-0 mt-1" />
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="text-sm text-muted-foreground">{details}</p>
    </div>
  </li>
);