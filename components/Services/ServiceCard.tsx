"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
}

export const ServiceCard = ({ icon: Icon, title, description, deliverables }: ServiceCardProps) => (
  <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col bg-card">
    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
      <Icon className="h-8 w-8 text-primary" />
      <CardTitle className="text-xl text-foreground">{title}</CardTitle>
    </CardHeader>
    <CardContent className="pt-4 flex-grow">
      <CardDescription className="mb-4 text-muted-foreground">{description}</CardDescription>
      <div className="mt-4">
        <h4 className="text-sm font-semibold mb-2 text-foreground">Key Deliverables:</h4>
        <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-1">
          {deliverables.map((item: string) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);