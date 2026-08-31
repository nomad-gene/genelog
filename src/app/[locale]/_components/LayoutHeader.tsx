import { LayoutGithubLink } from './LayoutGithubLink';
import { LayoutLocaleSwitcher } from './LayoutLocaleSwitcher';
import { LayoutLogo } from './LayoutLogo';
import { LayoutNav } from './LayoutNav';
import { LayoutSettingsPanel } from './LayoutSettingsPanel';

export function LayoutHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-white/70 backdrop-blur-lg dark:border-zinc-800/60 dark:bg-black/60">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <LayoutLogo />
        <div className="flex items-center gap-3">
          <LayoutNav />
          <span
            aria-hidden="true"
            className="hidden h-5 w-px bg-zinc-200 md:block dark:bg-zinc-800"
          />
          <div className="flex items-center gap-2">
            <LayoutLocaleSwitcher />
            <LayoutSettingsPanel />
            <LayoutGithubLink />
          </div>
        </div>
      </div>
    </header>
  );
}
