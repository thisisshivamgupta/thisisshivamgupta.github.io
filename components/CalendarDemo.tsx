"use client"

// FIX: Changed '*React' to '* as React'
import * as React from "react"
import { Calendar } from "@/components/ui/calendar"


export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Render a placeholder to prevent layout shift
    return <div className="h-[250px] w-full rounded-md bg-accent" />;
  }

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border border-border shadow-sm bg-card p-0" // Removed padding
      captionLayout="dropdown" // Use dropdowns for compact navigation
      
      // --- These new classes make the calendar smaller ---
      classNames={{
        caption_label: "text-sm font-small",
        nav_button: "h-6 w-6", // Smaller nav buttons
        head_cell: "text-muted-foreground rounded-md w-9 h-9 text-[0.7rem]", // Smaller day headers (S, M, T, W...)
        cell: "h-7 w-7 text-center text-sm p-0", // Smaller date cells
        day: "h-7 w-7 text-[0.7rem]", // Smaller day numbers
        day_selected: "bg-primary text-primary-foreground",
        day_today: "bg-accent text-accent-foreground",
      }}
      // --- End of new classes ---
    />
  )
}