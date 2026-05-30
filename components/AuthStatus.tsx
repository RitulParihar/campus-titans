import { getUserSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function AuthStatus() {
  const userId = await getUserSession();

  if (!userId) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm hover:underline"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="rounded-full bg-black px-4 py-2 text-sm text-white"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm">
        Hi, {user?.name}
      </span>

      <form action="/api/logout">
  <button className="text-sm text-red-500">
    Logout
  </button>
</form>
    </div>
  );
}