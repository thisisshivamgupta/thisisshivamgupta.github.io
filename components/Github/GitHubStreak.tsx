"use client";

import React from 'react';

interface GitHubStreakProps {
  username: string;
}

const GitHubStreak: React.FC<GitHubStreakProps> = ({ username }) => {
  if (!username) {
    return <p className="text-sm text-red-500">Please provide a GitHub username.</p>;
  }
  
  // URL to the GitHub Readme Streak service
  const streakUrl = `https://github-readme-streak.vercel.app/api?user=${username}&theme=highcontrast&hide_border=true&date=2025-11-08`;

  return (
    <div className="p-6 bg-gray-50 border rounded-lg">
      <h3 className="text-xl font-semibold mb-3">
        Coding Consistency 🔥
      </h3>
      <p className="text-gray-600 mb-4 text-sm">
        My recent contributions, automatically updated via my GitHub profile.
      </p>
      
      {/* The dynamic image embedding */}
      <img 
        src={streakUrl} 
        alt="GitHub Streak" 
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
};

export default GitHubStreak;