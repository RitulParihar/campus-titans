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

          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Evaluate colleges side-by-side.
          </p>
        </div>

        {colleges.length === 0 ? (
          <p className="text-slate-500">
            No colleges selected for comparison.
          </p>
        ) : (
          <>
            {/* CARDS */}

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

            {/* COMPARISON TABLE */}

            <div className="mt-14 overflow-x-auto rounded-3xl border bg-white">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b bg-slate-50">
                    <th className="p-5 text-left font-semibold">
                      Feature
                    </th>

                    {colleges.map((college) => (
                      <th
                        key={college.id}
                        className="p-5 text-left font-semibold"
                      >
                        {college.name}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="p-5 font-medium">
                      Location
                    </td>

                    {colleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5"
                      >
                        {college.location}
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b">
                    <td className="p-5 font-medium">
                      Fees
                    </td>

                    {colleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5"
                      >
                        {formatCurrency(college.fees)}
                      </td>
                    ))}
                  </tr>

                  <tr className="border-b">
                    <td className="p-5 font-medium">
                      Rating
                    </td>

                    {colleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5"
                      >
                        ⭐ {college.rating}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td className="p-5 font-medium">
                      Avg Package
                    </td>

                    {colleges.map((college) => (
                      <td
                        key={college.id}
                        className="p-5"
                      >
                        ₹12 LPA
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </Container>
    </main>
  );
}