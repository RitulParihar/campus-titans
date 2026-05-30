import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect(
    new URL("/", "http://localhost:3000")
  );

  res.cookies.set({
    name: "campus_titans_user",
    value: "",
    expires: new Date(0), // delete cookie
  });

  return res;
}