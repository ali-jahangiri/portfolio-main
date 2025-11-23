'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Heading } from '@/lib/toc-utils';

interface Props {
  headings: Heading[];
  isCollapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
}

const TableOfContents = ({ headings, isCollapsed: externalIsCollapsed, onToggleCollapse }: Props) => {
  const [activeId, setActiveId] = useState<string>(headings.length > 0 ? headings[0].id : '');
  const [internalIsCollapsed, setInternalIsCollapsed] = useState<boolean>(false);

  const isCollapsed = externalIsCollapsed !== undefined ? externalIsCollapsed : internalIsCollapsed;

  useEffect(() => {
    if (headings.length === 0) return;

    const observerOptions = {
      rootMargin: '-100px 0% -66% 0%',
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleHeadings = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          return b.intersectionRatio - a.intersectionRatio;
        });

      if (visibleHeadings.length > 0) {
        setActiveId(visibleHeadings[0].target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let i = headings.length - 1; i >= 0; i--) {
        const element = document.getElementById(headings[i].id);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition >= elementTop) {
            setActiveId(headings[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div
      className={`h-fit max-h-[calc(100vh)] overflow-y-auto pb-8 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'overflow-hidden' : ''
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`flex items-center justify-between mb-5 transition-all duration-300 ease-in-out ${
            isCollapsed ? 'mb-0' : ''
          }`}
        >
          <p
            className={`text-xs font-bold text-neutral-900 uppercase tracking-wider transition-all duration-300 ease-in-out ${
              isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'
            }`}
          >
            Table Of Contents
          </p>
          <button
            onClick={() => {
              if (onToggleCollapse) {
                onToggleCollapse(!isCollapsed);
              } else {
                setInternalIsCollapsed(!isCollapsed);
              }
            }}
            className="p-1 cursor-pointer rounded-md hover:bg-neutral-100 transition-colors shrink-0"
            aria-label={isCollapsed ? 'Expand table of contents' : 'Collapse table of contents'}
            aria-expanded={!isCollapsed}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-neutral-600" />
            ) : (
              <ChevronLeft className="w-4 h-4 text-neutral-600" />
            )}
          </button>
        </div>
        <div
          className={`h-full overflow-y-auto transition-all duration-300 ease-in-out ${
            isCollapsed
              ? 'max-h-0 opacity-0 overflow-x-hidden overflow-hidden'
              : 'max-h-[calc(100vh-12rem)] opacity-100'
          }`}
        >
          <ul className="space-y-1.5">
            {headings.map((heading) => (
              <li
                key={heading.id}
                className={`text-sm transition-all ${
                  heading.level === 1 ? 'ml-0' : heading.level === 2 ? 'ml-2' : heading.level === 3 ? 'ml-6' : 'ml-9'
                }`}
              >
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  className={`block py-1.5 px-2 -ml-2 rounded transition-all ${
                    activeId === heading.id
                      ? 'text-primary font-semibold bg-primary/5 -ml-3'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
