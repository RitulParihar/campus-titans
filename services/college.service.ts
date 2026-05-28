import { prisma } from "@/lib/prisma";

export const getColleges = async (params: any = {}) => {
  const search = typeof params.search === "string" ? params.search : "";
  const minRating =
    typeof params.minRating === "number" ? params.minRating : undefined;
  const maxFees =
    typeof params.maxFees === "number" ? params.maxFees : undefined;
  const location =
    typeof params.location === "string" ? params.location : "";

  const colleges = await prisma.college.findMany({
    where: {
      AND: [
        search
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
          : {},
        minRating
          ? {
              rating: {
                gte: minRating,
              },
            }
          : {},
        maxFees
          ? {
              fees: {
                lte: maxFees,
              },
            }
          : {},
        location
          ? {
              location: {
                contains: location,
                mode: "insensitive",
              },
            }
          : {},
      ],
    },
    orderBy: {
      rating: "desc",
    },
  });

  return colleges;
};