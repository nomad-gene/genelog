'use client';

import { useLocale } from 'next-intl';
import { useEffect, useState } from 'react';

import { usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export function useLocaleSwitcher() {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const locales = routing.locales;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const toggle = () => setOpen((prev) => !prev);
  const close = () => setOpen(false);

  return { activeLocale, locales, pathname, open, toggle, close };
}
