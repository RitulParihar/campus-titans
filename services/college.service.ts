import { prisma } from "@/lib/prisma";

export const getColleges = async (search?: string) => {
  const colleges = await prisma.college.findMany({
    where: search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              location: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : undefined,
    orderBy: {
      rating: "desc",
    },
  });

  return colleges;
};