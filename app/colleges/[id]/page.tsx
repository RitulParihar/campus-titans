import Container from "@/components/Container";
import { getCollegeById } from "@/services/college.service";
import { notFound } from "next/navigation";

export default async function CollegeDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const college = await getCollegeById(params.id);

  if (!college) {
    return notFound();
  }

  return (
    <main className="py-16">
      <Container>
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            {college.name}
          </h1>

          <p className="mt-2 text-slate-600">
            {college.location}
          </p>
        </div>

        {/* Image */}
        <img
          src={college.imageUrl}
          alt={college.name}
          className="w-full h-[400px] object-cover rounded-3xl"
        />

        {/* Overview */}
        <div className="mt-10 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">
              Overview
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              {college.description}
            </p>

            <h2 className="mt-10 text-2xl font-semibold">
              Placements
            </h2>

            <p className="mt-4 text-slate-600 leading-7">
              {college.placements}
            </p>
          </div>

          {/* Sidebar */}
          <div className="bg-white border border-[var(--border)] rounded-3xl p-6 h-fit">
            <h3 className="text-lg font-semibold">
              Key Details
            </h3>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-slate-500">Fees</p>
                <p className="font-semibold">
                  ₹{college.fees}
                </p>
              </div>

              <div>
                <p className="text-slate-500">Rating</p>
                <p className="font-semibold">
                  {college.rating}/5
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}