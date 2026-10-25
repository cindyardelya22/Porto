'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type CursorMode = 'default' | 'view' | 'drag' | 'explore' | 'copy' | 'external' | 'hidden' | 'link';

interface CursorContextType {
  cursorMode: CursorMode;
  cursorText: string;
  setCursor: (mode: CursorMode, text?: string) => void;
  resetCursor: () => void;
}

const CursorContext = createContext<CursorContextType>({
  cursorMode: 'default',
  cursorText: '',
  setCursor: () => {},
  resetCursor: () => {},
});

export function CursorProvider({ children }: { children: ReactNode }) {
  const [cursorMode, setCursorMode] = useState<CursorMode>('default');
  const [cursorText, setCursorText] = useState<string>('');

  const setCursor = (mode: CursorMode, text: string = '') => {
    setCursorMode(mode);
    setCursorText(text);
  };

  const resetCursor = () => {
    setCursorMode('default');
    setCursorText('');
  };

  return (
    <CursorContext.Provider value={{ cursorMode, cursorText, setCursor, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
}

export function useCursor() {
  return useContext(CursorContext);
}
