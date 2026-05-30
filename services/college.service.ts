import { prisma } from "@/lib/prisma";

export const getColleges = async (params: any = {}) => {
  const search = params.search || "";
  const minRating = params.minRating ? Number(params.minRating) : undefined;
  const maxFees = params.maxFees ? Number(params.maxFees) : undefined;
  const location = params.location || "";

  const where: any = {};

  if (search) {
    where.OR = [
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
    ];
  }

  if (minRating !== undefined && !isNaN(minRating)) {
    where.rating = {
      gte: minRating,
    };
  }

  if (maxFees !== undefined && !isNaN(maxFees)) {
    where.fees = {
      lte: maxFees,
    };
  }

  if (location) {
    where.location = {
      contains: location,
      mode: "insensitive",
    };
  }

  try {
    return await prisma.college.findMany({
      where,
      orderBy: {
        rating: "desc",
      },
    });
  } catch (err) {
    console.error("getColleges error:", err);
    return [];
  }
};