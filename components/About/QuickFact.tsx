"use client";

import type { LucideIcon } from "lucide-react";

interface QuickFactProps {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const QuickFact = ({ icon: Icon, label, value }: QuickFactProps) => (
  <li className="flex justify-between items-start">
    <span className="flex items-center text-muted-foreground">
      <Icon className="w-4 h-4 mr-2 text-primary" />
      {label}
    </span>
    <span className="font-medium text-right text-foreground">{value}</span>
  </li>
);