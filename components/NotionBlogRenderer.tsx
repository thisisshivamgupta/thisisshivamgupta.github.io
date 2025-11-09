"use client";

import * as React from 'react';
import { NotionRenderer } from 'react-notion-x';
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';

// Import the required CSS
import 'react-notion-x/src/styles.css';
// Import prism.js for code highlighting
import 'prismjs/themes/prism-tomorrow.css';
// Import custom styles for the equation component
import 'katex/dist/katex.min.css';

export const NotionBlogRenderer = ({ recordMap }: { recordMap: any }) => {
  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={false} // The theme toggle will handle this automatically
      className="bg-background"
      
      // Add components for extra features like code blocks and tables
      components={{
        Code,
        Collection,
      }}
      
      // This styles the page to match your portfolio's fonts
      bodyClassName="!font-sans"
    />
  );
};