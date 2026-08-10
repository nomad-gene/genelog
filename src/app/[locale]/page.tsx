export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-6 py-16">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          genelog
        </h1>
        <p className="mt-3 max-w-xl text-zinc-600 dark:text-zinc-400">
          Notes on things I build and learn.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Recent posts
        </h2>
        <p className="mt-4 text-sm text-zinc-400 dark:text-zinc-600">
          No posts yet.
        </p>
      </section>
    </div>
  );
}
