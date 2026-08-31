'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';
import { Link } from '@/i18n/navigation';

const LOCALE_LABEL: Record<string, string> = {
  ko: 'KO',
  ja: 'JA',
  en: 'EN',
};

export function LayoutLocaleSwitcher() {
  const { activeLocale, locales, pathname, open, toggle, close } =
    useLocaleSwitcher();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [anchor, setAnchor] = useState<{ top: number; right: number } | null>(
    null,
  );

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setAnchor({
      top: rect.bottom + 8,
      right: window.innerWidth - rect.right,
    });
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={toggle}
        aria-label="Switch language"
        aria-expanded={open}
        className={
          open
            ? 'flex h-8 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-950'
            : 'flex h-8 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900'
        }
      >
        <span
          key={activeLocale}
          className="[animation:locale-fade-in_0.25s_ease]"
        >
          {LOCALE_LABEL[activeLocale] ?? activeLocale.toUpperCase()}
        </span>
      </button>

      {open && anchor
        ? createPortal(
            <>
              <button
                type="button"
                aria-label="Close language menu"
                onClick={close}
                className="fixed inset-0 z-40 cursor-default"
              />
              <div
                style={{ top: anchor.top, right: anchor.right }}
                className="fixed z-50 w-32 rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              >
                {locales.map((locale) => {
                  const active = locale === activeLocale;
                  return (
                    <Link
                      key={locale}
                      href={pathname}
                      locale={locale}
                      onClick={close}
                      aria-current={active}
                      className={
                        active
                          ? 'flex items-center rounded-xl bg-zinc-950 px-3 py-2 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-950'
                          : 'flex items-center rounded-xl px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900'
                      }
                    >
                      {LOCALE_LABEL[locale] ?? locale.toUpperCase()}
                    </Link>
                  );
                })}
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  );
}
