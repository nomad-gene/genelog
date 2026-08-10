export function LayoutFooter() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto w-full max-w-5xl px-6 py-8 text-sm text-zinc-500 dark:text-zinc-500">
        © {new Date().getFullYear()} genelog. All rights reserved.
      </div>
    </footer>
  );
}
