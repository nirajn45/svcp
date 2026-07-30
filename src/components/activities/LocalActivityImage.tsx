'use client';

import Image, { ImageProps } from 'next/image';
import { useState, useMemo } from 'react';

interface LocalActivityImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string | string[];
  alt: string;
  fallbackSrc?: string | string[];
}

function normalizeSources(src?: string | string[]): string[] {
  if (!src) return [];
  return Array.isArray(src) ? src : [src];
}

export default function LocalActivityImage({
  src,
  alt,
  fallbackSrc,
  ...props
}: LocalActivityImageProps) {
  const candidates = useMemo(() => {
    const sources = normalizeSources(src);
    const fallbacks = normalizeSources(fallbackSrc);
    const combined = [...sources, ...fallbacks];
    const unique = Array.from(new Set(combined));
    return unique.filter(
      (c): c is string =>
        typeof c === 'string' &&
        c.trim() !== '' &&
        !c.includes('auditorium.avif')
    );
  }, [src, fallbackSrc]);

  const [candidateIndex, setCandidateIndex] = useState<number>(0);

  // Reset index when candidates array reference changes
  const [prevCandidates, setPrevCandidates] = useState(candidates);
  if (prevCandidates !== candidates) {
    setPrevCandidates(candidates);
    setCandidateIndex(0);
  }

  const currentSrc = candidates[candidateIndex];

  const handleError = () => {
    setCandidateIndex((prev) => (prev + 1 < candidates.length ? prev + 1 : prev));
  };

  if (!currentSrc) {
    return null;
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
}

