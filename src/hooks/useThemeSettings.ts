'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function useThemeSettings() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return { mounted, theme, setTheme };
}
