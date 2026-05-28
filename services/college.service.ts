import { prisma } from "@/lib/prisma";

export const getColleges = async () => {
  const colleges = await prisma.college.findMany({
    orderBy: {
      rating: "desc",
    },
  });

  return colleges;
};