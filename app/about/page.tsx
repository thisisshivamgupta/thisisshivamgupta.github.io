"use client";

import { Separator } from "@/components/ui/separator";
// 1. Import the new components and data
import { QuickFact } from "@/components/About/QuickFact";
import { AchievementItem } from "@/components/About/AchievementItem";
import { aboutPageData } from "@/lib/data";

export default function AboutPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-extrabold mb-8 text-foreground">
        Get to Know Me
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* COLUMN 1: IMAGE AND QUICK FACTS */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-card p-4 rounded-xl shadow-md border border-border">
            <img
              src="/me.jpg"
              alt="Shivam Gupta Professional Headshot"
              className="w-full h-auto rounded-lg object-cover shadow-lg"
            />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Shivam Gupta, Software Engineer
            </p>
          </div>

          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-4 text-primary">
              Quick Facts
            </h3>
            {/* 2. Loop over data */}
            <ul className="space-y-3 text-sm">
              {aboutPageData.quickFacts.map((fact) => (
                <QuickFact
                  key={fact.label}
                  icon={fact.icon}
                  label={fact.label}
                  value={fact.value}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* COLUMN 2: BIO AND ACHIEVEMENTS */}
        <div className="lg:col-span-2">
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-foreground">My Professional Journey</h2>
            {/* 3. Loop over data */}
            {aboutPageData.bio.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </section>

          <Separator className="my-8" />

          <section>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Achievements & Certifications</h2>
            {/* 4. Loop over data */}
            <ul className="space-y-4">
              {aboutPageData.achievements.map((item) => (
                <AchievementItem
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  details={item.details}
                />
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}