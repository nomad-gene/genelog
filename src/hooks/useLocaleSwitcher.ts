'use client';

import { useLocale } from 'next-intl';

import { usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export function useLocaleSwitcher() {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const locales = routing.locales;

  return { activeLocale, locales, pathname };
}
