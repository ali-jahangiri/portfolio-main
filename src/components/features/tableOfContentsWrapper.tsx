'use client';

import { useState, useEffect } from 'react';
import TableOfContents from './tableOfContents';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsWrapperProps {
  headings: Heading[];
}

const STORAGE_KEY = 'toc-collapsed-state';

export default function TableOfContentsWrapper({ headings }: TableOfContentsWrapperProps) {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem(STORAGE_KEY);
      if (savedState !== null) return JSON.parse(savedState);
    }
    return false;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(isCollapsed));
    }
  }, [isCollapsed]);

  const handleToggleCollapse = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
  };

  return (
    <aside
      className={`sticky top-24 transition-all -ml-12 duration-300 ease-in-out ${
        isCollapsed ? 'w-12 right-0' : 'w-64 right-0'
      }`}
    >
      <div className="">
        <TableOfContents headings={headings} isCollapsed={isCollapsed} onToggleCollapse={handleToggleCollapse} />
      </div>
    </aside>
  );
}
