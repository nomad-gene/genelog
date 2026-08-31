'use client';

import { createPortal } from 'react-dom';

import { useMobileMenu } from '@/hooks/useMobileMenu';
import { Link, usePathname } from '@/i18n/navigation';
import { PATH } from '@/lib/paths';

const NAV_LINKS = [
  { href: PATH.posts, label: 'Posts' },
  { href: PATH.series, label: 'Series' },
  { href: PATH.archive, label: 'Archive' },
  { href: PATH.about, label: 'About' },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function LayoutNav() {
  const { open, toggle, close } = useMobileMenu();
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden items-center gap-1 rounded-full bg-zinc-100/70 p-1 text-sm font-medium md:flex dark:bg-zinc-900/70">
        {NAV_LINKS.map((item) => {
          const active = isActivePath(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active}
              className={
                active
                  ? 'rounded-full bg-white px-3 py-1.5 text-zinc-950 shadow-sm dark:bg-zinc-800 dark:text-zinc-50'
                  : 'rounded-full px-3 py-1.5 text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50'
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={toggle}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-sm md:hidden dark:border-zinc-800"
      >
        {open ? '✕' : '☰'}
      </button>

      {open
        ? createPortal(
            <>
              <button
                type="button"
                aria-label="Close menu"
                onClick={close}
                className="fixed inset-0 z-40 [animation:backdrop-fade-in_0.2s_ease] bg-black/30 backdrop-blur-sm md:hidden"
              />
              <div className="fixed inset-x-0 bottom-0 z-50 [animation:sheet-slide-up_0.25s_ease-out] rounded-t-3xl border-t border-zinc-200 bg-white pb-[max(1.25rem,env(safe-area-inset-bottom))] shadow-2xl md:hidden dark:border-zinc-800 dark:bg-zinc-950">
                <div className="flex justify-center pt-2.5 pb-1">
                  <span className="h-1 w-10 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>

                <p className="px-6 pt-3 pb-2 text-xs font-medium tracking-wide text-zinc-400 uppercase dark:text-zinc-500">
                  Navigation
                </p>

                <nav className="flex flex-col px-3 pb-2">
                  {NAV_LINKS.map((item, index) => {
                    const active = isActivePath(pathname, item.href);
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={close}
                        aria-current={active}
                        className={
                          active
                            ? 'flex items-center gap-3 rounded-2xl bg-zinc-100 px-3 py-3 dark:bg-zinc-900'
                            : 'flex items-center gap-3 rounded-2xl px-3 py-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900'
                        }
                      >
                        <span className="w-5 text-xs font-medium text-zinc-400 dark:text-zinc-600">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="flex-1 text-base font-semibold text-zinc-950 dark:text-zinc-50">
                          {item.label}
                        </span>
                        {active ? (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-zinc-950 dark:bg-zinc-50"
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className="text-zinc-300 dark:text-zinc-700"
                          >
                            →
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <div className="border-t border-zinc-200 p-3 dark:border-zinc-800">
                  <button
                    type="button"
                    onClick={close}
                    className="w-full rounded-2xl bg-zinc-100 py-3 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </>,
            document.body,
          )
        : null}
    </>
  );
}
