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
            ? 'h-16 w-16 bg-gradient-to-tr from-violet-600 via-fuchsia-500 to-rose-400 text-white shadow-xl shadow-purple-500/30 border-2 border-white'
            : 'h-6 w-6 bg-purple-500/10 border-2 border-purple-500/60'
        }`}
      >
        {isExpanded ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold tracking-wider uppercase text-white"
          >
            {cursorText || cursorMode}
          </motion.span>
        ) : (
          <span className="h-1.5 w-1.5 rounded-full bg-purple-600 shadow-sm" />
        )}
      </motion.div>
    </div>
  );
}
