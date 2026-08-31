import { Link } from '@/i18n/navigation';
import { PATH } from '@/lib/paths';
import { SITE_CONFIG } from '@/lib/site';

export function LayoutLogo() {
  return (
    <Link href={PATH.home} className="flex items-center gap-3">
      <span
        aria-hidden="true"
        className="h-8 w-8 shrink-0 [animation:logo-spin_6s_linear_infinite] rounded-full bg-[conic-gradient(from_0deg,#818cf8,#f472b6,#fbbf24,#818cf8)] p-[2px]"
      >
        <span className="block h-full w-full rounded-full bg-white dark:bg-black" />
      </span>
      <span className="text-lg font-extrabold tracking-tight">
        {SITE_CONFIG.name}
      </span>
    </Link>
  );
}
