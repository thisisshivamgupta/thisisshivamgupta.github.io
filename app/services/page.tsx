"use client";

import { ArrowRight } from "lucide-react";
// 1. Import the new component and data
import { ServiceCard } from "@/components/Services/ServiceCard";
import { servicesData } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-extrabold mb-4 text-foreground">
        Services I Offer
      </h1>
      <p className="text-xl text-muted-foreground mb-10">
        I provide tailored development and consulting services to help businesses...
      </p>

      {/* 2. Loop over data to render components */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            description={service.description}
            deliverables={service.deliverables}
          />
        ))}
      </div>
      
      {/* Footer CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold mb-3 text-foreground">Ready to start your project?</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Let's discuss your specific needs...
        </p>
        <a href="/contact" className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/90">
          Contact Me for a Quote
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  );
}