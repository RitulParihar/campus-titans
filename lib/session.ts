import { cookies } from "next/headers";

const COOKIE_NAME = "campus_titans_user";

export async function setUserSession(
  userId: string
) {
  const cookieStore = await cookies();

  cookieStore.set(
    COOKIE_NAME,
    userId,
    {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    }
  );
}

export async function getUserSession() {
  const cookieStore = await cookies();

  return cookieStore.get(
    COOKIE_NAME
  )?.value;
}

export async function clearSession() {
  const cookieStore = await cookies();

  cookieStore.delete(
    COOKIE_NAME
  );
}