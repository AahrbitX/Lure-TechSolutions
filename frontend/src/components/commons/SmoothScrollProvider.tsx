'use client';

import { type ReactNode } from 'react';

// Lenis removed — native scroll is used for better performance and compatibility
export const useLenis = () => null;

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
