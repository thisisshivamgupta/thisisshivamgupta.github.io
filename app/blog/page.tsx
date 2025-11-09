import * as React from 'react';
import { NotionAPI } from 'notion-client';
import { NotionBlogRenderer } from '@/components/NotionBlogRenderer';

// Your Notion Page ID
const NOTION_PAGE_ID = '1bfc7f8cc29080c08511dfc5bbcb7ab7';

// This function tells Next.js to render this page on the server
export const revalidate = 60; // Re-fetch the blog every 60 seconds

export default async function BlogPage() {
  const api = new NotionAPI();
  
  // Fetch the page data from Notion
  const recordMap = await api.getPage(NOTION_PAGE_ID);

  return (
    <div className="p-4 md:p-10">
      <NotionBlogRenderer recordMap={recordMap} />
    </div>
  );
}