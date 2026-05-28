import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <Container>
        <div className="flex items-center justify-between h-20">
          
          <Link
            href="/"
            className="text-2xl font-semibold tracking-tight"
          >
            Campus Titans
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link
              href="/colleges"
              className="text-slate-700 hover:text-black transition"
            >
              Colleges
            </Link>

            <Link
              href="/compare"
              className="text-slate-700 hover:text-black transition"
            >
              Compare
            </Link>

            <Link
              href="/saved"
              className="text-slate-700 hover:text-black transition"
            >
              Saved
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 border border-[var(--border)] rounded-full text-sm hover:bg-white transition">
              Login
            </button>

            <button className="px-5 py-2 rounded-full bg-[var(--primary)] text-white text-sm hover:opacity-90 transition">
              Sign Up
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}