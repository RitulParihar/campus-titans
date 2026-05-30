import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";

export async function POST(
  request: Request
) {
  const userId =
    await getUserSession();

  if (!userId) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const { collegeId } =
    await request.json();

  const existing =
    await prisma.savedCollege.findUnique({
      where: {
        userId_collegeId: {
          userId,
          collegeId,
        },
      },
    });

  if (existing) {
    await prisma.savedCollege.delete({
      where: {
        id: existing.id,
      },
    });

    return NextResponse.json({
      saved: false,
    });
  }

  await prisma.savedCollege.create({
    data: {
      userId,
      collegeId,
    },
  });

  return NextResponse.json({
    saved: true,
  });
}