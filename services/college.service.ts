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
export const getCollegeById = async (id: string) => {
  const college = await prisma.college.findUnique({
    where: { id },
    include: {
      courses: true,
      reviews: true,
    },
  });

  return college;
};