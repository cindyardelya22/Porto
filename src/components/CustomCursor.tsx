'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '@/context/CursorContext';

export default function CustomCursor() {
  const { cursorMode, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const touchCheck = () => {
      const hasTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouch);
    };

    touchCheck();
    window.addEventListener('resize', touchCheck);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', touchCheck);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible || cursorMode === 'hidden') {
    return null;
  }

  const isExpanded = cursorMode !== 'default';

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className={`fixed flex items-center justify-center rounded-full transition-all duration-200 ${
          isExpanded
            ? 'h-16 w-16 bg-zinc-900/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-zinc-900 shadow-xl border border-white/20 dark:border-zinc-800'
            : 'h-5 w-5 bg-zinc-500/10 border border-zinc-500/40'
        }`}
      >
        {isExpanded ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold tracking-wider uppercase text-white dark:text-zinc-900"
          >
            {cursorText || cursorMode}
          </motion.span>
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600 dark:bg-amber-400 shadow-xs" />
        )}
      </motion.div>
    </div>
  );
}
