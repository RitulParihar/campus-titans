import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    const valid = await verifyPassword(
      password,
      user.password
    );

    if (!valid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // ✅ CREATE RESPONSE FIRST
    const res = NextResponse.json({
      success: true,
    });

    // ✅ SET COOKIE ON RESPONSE
    res.cookies.set({
      name: "campus_titans_user",
      value: user.id,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secure: false, // IMPORTANT for localhost
    });

    return res;
  } catch (err) {
    return NextResponse.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}