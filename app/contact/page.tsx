"use client"; // This page needs to be a client component for the form

import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { homePageData, projectsData } from "@/lib/data";

export default function ContactPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-extrabold mb-4 text-foreground">
        Let's Build Together
      </h1>
      {/* FIX 1: Use semantic color 'text-muted-foreground' */}
      <p className="text-xl text-muted-foreground mb-10">
        I'm currently accepting new projects. Reach out via the form below or
        through my direct contact information.
      </p>

      {/* Grid Layout for Form and Details */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* COLUMN 1 & 2: Contact Form (2/3 width) */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Send Me a Message
          </h2>
          <ContactForm />
        </div>

        {/* COLUMN 3: Contact Details (1/3 width) */}
        <div className="lg:col-span-1 space-y-8">
          {/* Direct Contact Info */}
          {/* FIX 2: Use semantic colors 'bg-card', 'border-border', and 'text-foreground' */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Direct Contact</h3>
            <div className="space-y-4">
              <ContactDetail
                icon={Mail}
                label="Email Address"
                value= {homePageData.mailID}
                link={`mailto:${homePageData.mailID}`}
              />
            </div>
          </div>

          {/* Clear Call to Action */}
          {/* FIX 3: Use 'text-primary-foreground' for text on a 'bg-primary' button */}
          <div className="p-6 bg-primary text-primary-foreground rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Contact me for a quote</h3>
            <p className="mb-4">
              Get an estimate for your custom development or consulting project
              today.
            </p>
            <a
              href={`mailto:${homePageData.mailID}`}
              className="inline-flex items-center font-semibold text-lg hover:underline text-primary-foreground"
            >
              Email Now →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper component for contact details
const ContactDetail = ({ icon: Icon, label, value, link }: any) => (
  <div className="flex items-start">
    <Icon className="w-5 h-5 mr-3 mt-1 text-primary shrink-0" />
    <div>
      {/* FIX 4: Use semantic colors */}
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      {link ? (
        <a
          href={link}
          // FIX 5: Add 'break-all' to prevent overflow and use semantic color
          className="text-base text-foreground hover:text-primary transition-colors break-all"
        >
          {value}
        </a>
      ) : (
        <p className="text-base text-foreground break-all">{value}</p>
      )}
    </div>
  </div>
);