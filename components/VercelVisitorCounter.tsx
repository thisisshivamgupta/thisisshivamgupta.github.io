"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function VercelVisitorCounter() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg">
      <Eye className="h-4 w-4" />
      <div className="flex flex-col">
        <span className="text-xs opacity-90">Tracked for</span>
        <span className="text-sm font-bold">Almanac</span>
      </div>
    </div>
  );
}