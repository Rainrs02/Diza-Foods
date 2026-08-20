'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function GSAPReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className = '',
}: GSAPRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let x = 0;
    let y = 0;

    switch (direction) {
      case 'up':
        y = 50;
        break;
      case 'down':
        y = -50;
        break;
      case 'left':
        x = 50;
        break;
      case 'right':
        x = -50;
        break;
    }

    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y,
      x,
      opacity: 0,
      duration,
      delay,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
