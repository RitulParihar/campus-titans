import Container from "@/components/Container";
import { prisma } from "@/lib/prisma";
import { formatCurrency } from "@/utils/format";

interface Props {
  searchParams: Promise<{
    ids?: string;
  }>;
}

export default async function ComparePage({
  searchParams,
}: Props) {

  const params = await searchParams;

  const ids = params.ids?.split(",") || [];

  const colleges = await prisma.college.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  });

  return (
    <main className="py-16">
      <Container>

        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
            Comparison
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Compare Colleges
          </h1>

          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            Evaluate colleges side-by-side.
          </p>
        </div>

        {colleges.length === 0 ? (
          <p className="text-slate-500">
            No colleges selected for comparison.
          </p>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {colleges.map((college) => (
              <div
                key={college.id}
                className="rounded-3xl border bg-white p-6"
              >

                <img
                  src={college.imageUrl}
                  alt={college.name}
                  className="h-44 w-full rounded-2xl object-cover"
                />

                <h2 className="mt-5 text-2xl font-bold">
                  {college.name}
                </h2>

                <div className="mt-6 space-y-4 text-sm">

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Location
                    </span>

                    <span className="font-medium">
                      {college.location}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Fees
                    </span>

                    <span className="font-medium">
                      {formatCurrency(college.fees)}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Rating
                    </span>

                    <span className="font-medium">
                      ⭐ {college.rating}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-slate-500">
                      Avg Package
                    </span>

                    <span className="font-medium">
                      ₹12 LPA
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>
        )}

      </Container>
    </main>
  );
}