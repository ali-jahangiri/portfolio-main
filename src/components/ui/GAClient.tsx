'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function GAClient() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-NC517NT9NS', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
