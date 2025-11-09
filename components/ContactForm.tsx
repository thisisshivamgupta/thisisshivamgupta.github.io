'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  // In a real application, you would handle form state and submission logic here
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // --- REAL WORLD: Replace this with an actual API call (e.g., to a serverless function or email service) ---
    setTimeout(() => {
      // Simulate successful submission
      setStatus('success');
    }, 2000); 
    // ---------------------------------------------------------------------------------------------------------
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="client@example.com" required />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="Project Inquiry or Quote Request" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Project Details / Message</Label>
        <Textarea id="message" rows={5} placeholder="Tell me about your project, timeline, and budget..." required />
      </div>

      <Button type="submit" className="w-full sm:w-auto" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </Button>

      {status === 'success' && (
        <p className="text-green-600 font-medium mt-4">
          Thank you! Your message has been sent successfully. I'll be in touch soon.
        </p>
      )}
    </form>
  );
};

export default ContactForm;