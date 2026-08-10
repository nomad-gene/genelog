'use client';

import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';
import { Link } from '@/i18n/navigation';

const LOCALE_LABEL: Record<string, string> = {
  ko: 'KO',
  en: 'EN',
};

export function LayoutLocaleSwitcher() {
  const { activeLocale, locales, pathname } = useLocaleSwitcher();
  const nextLocale =
    locales.find((locale) => locale !== activeLocale) ?? activeLocale;

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      aria-label="Switch language"
      className="flex h-8 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900"
    >
      <span
        key={activeLocale}
        className="[animation:locale-fade-in_0.25s_ease]"
      >
        {LOCALE_LABEL[activeLocale] ?? activeLocale.toUpperCase()}
      </span>
    </Link>
  );
}
