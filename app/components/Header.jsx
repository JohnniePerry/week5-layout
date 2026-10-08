export default function Header() {
  return (
    <header className="border-b-[6px] border-amber-500 bg-neutral-900 text-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div>
          <p className="text-2xl font-bold italic">Mission Forward</p>
          <p className="text-xs">Tools for Life After Service</p>
        </div>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-6 text-sm"
        >
          <a className="transition hover:text-amber-400" href="#">
            Home
          </a>

          <a className="transition hover:text-amber-400" href="#resources">
            About
          </a>

          <a className="transition hover:text-amber-400" href="#footer">
            Contact
          </a>

          <a
            className="rounded-full bg-red-700 px-6 py-2 font-semibold transition hover:bg-red-800"
            href="#"
          >
            Sign Up
          </a>

          <a
            className="rounded-full bg-red-700 px-6 py-2 font-semibold transition hover:bg-red-800"
            href="#"
          >
            Login
          </a>
        </nav>
      </div>
    </header>
  );
}