'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  trigger?: boolean;
  speed?: number;
  chars?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
}

const DEFAULT_CHARS = '!<>-_\\/[]{}—=+*^?#_0123456789ABCDEF';

export default function TextScramble({
  text,
  className = '',
  scrambleOnHover = true,
  trigger = false,
  speed = 30,
  chars = DEFAULT_CHARS,
  as: Component = 'span',
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const isScramblingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;

    const length = text.length;
    let iteration = 0;
    const maxIterations = length * 2.5;

    const update = () => {
      let result = '';
      for (let i = 0; i < length; i++) {
        if (text[i] === ' ') {
          result += ' ';
          continue;
        }

        if (i < iteration / 2.5) {
          result += text[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      setDisplayText(result);

      if (iteration < maxIterations) {
        iteration++;
        animationFrameRef.current = window.setTimeout(update, speed);
      } else {
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    };

    update();
  }, [text, speed, chars]);

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    if (trigger) {
      scramble();
    }
  }, [trigger, scramble]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        clearTimeout(animationFrameRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (scrambleOnHover) {
      scramble();
    }
  };

  return (
    <Component
      onMouseEnter={handleMouseEnter}
      className={`inline-block select-none cursor-pointer ${className}`}
    >
      {displayText}
    </Component>
  );
}
