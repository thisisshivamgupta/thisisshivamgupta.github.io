import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import GitHubSnakeGraph from "@/components/Github/GitHubSnakeGraph";
import { homePageData, projectsData } from "@/lib/data";
import { LampDemo } from "@/components/LampDemo";
import ProjectCard from "@/components/Projects/ProjectCard";
import React from "react";



export default function HomePage() {
  return (
    <div>
      <LampDemo />

      <div className="mt-0 px-10">
        {/* 2. Wrap the graph in Suspense */}
        <React.Suspense fallback={<div className="h-32 w-full bg-accent animate-pulse rounded-lg" />}>
          <GitHubSnakeGraph />
        </React.Suspense>
      </div>

      <div className="p-10">
        <div className="flex space-x-4 mb-10 mt-8 justify-center">
          <Button size="lg" asChild>
            <a href="#work">Explore My Work</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/contact">Get a Quote</a>
          </Button>
        </div>

        <Separator className="my-8" />

        {/* 3. REPLACE your old project list with the new component */}
       <div>
          <h2 id="work" className="text-2xl font-semibold mb-6 text-foreground">
            Featured Case Studies
          </h2>
          {/* 3. You must .map() over your projectsData array */}
          <div className="space-y-12">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.title}
                {...project} // This passes all props: title, description, imageUrl, etc.
              />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}