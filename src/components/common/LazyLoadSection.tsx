'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ReactNode } from 'react';

interface LazyLoadSectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  minHeight?: string;
}

export default function LazyLoadSection({
  children,
  threshold = 0.1,
  rootMargin = '100px',
  className = '',
  minHeight = 'h-96',
}: LazyLoadSectionProps) {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  });

  return (
    <div ref={elementRef} className={className}>
      {isVisible ? children : <div className={minHeight} />}
    </div>
  );
}