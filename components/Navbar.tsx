import Link from "next/link";
import Container from "./Container";
import AuthStatus from "./AuthStatus";

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--background)]">
      <Container>
        <div className="flex h-20 items-center justify-between">

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

          <AuthStatus />

        </div>
      </Container>
    </header>
  );
}