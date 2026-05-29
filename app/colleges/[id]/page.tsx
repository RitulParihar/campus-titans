import { prisma } from "@/lib/prisma";
import Container from "@/components/Container";
import { MapPin, Star } from "lucide-react";
import { formatCurrency } from "@/utils/format";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollegeDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    notFound();
  }

  return (
    <main className="py-16">
      <Container>
        <Link
      href="/colleges"
      className="mb-8 inline-flex items-center gap-2 text-sm text-slate-600 hover:text-black transition"
    >
      <ArrowLeft size={16} />
      Back to Colleges
    </Link>
        {/* HERO */}
        <div className="overflow-hidden rounded-3xl border bg-white">

          <img
            src={college.imageUrl}
            alt={college.name}
            className="h-[350px] w-full object-cover"
          />

          <div className="p-8">

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>
                <h1 className="text-4xl font-bold text-slate-900">
                  {college.name}
                </h1>

                <div className="mt-3 flex items-center gap-2 text-slate-500">
                  <MapPin size={18} />
                  {college.location}
                </div>
              </div>

              <div className="flex items-center gap-2 text-lg font-semibold">
                <Star
                  size={20}
                  className="fill-yellow-400 text-yellow-400"
                />
                {college.rating}
              </div>

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl border p-5">
                <p className="text-sm text-slate-500">
                  Annual Fees
                </p>

                <p className="mt-2 text-2xl font-bold">
                  {formatCurrency(college.fees)}
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <p className="text-sm text-slate-500">
                  Average Package
                </p>

                <p className="mt-2 text-2xl font-bold">
                  ₹12 LPA
                </p>
              </div>

              <div className="rounded-2xl border p-5">
                <p className="text-sm text-slate-500">
                  Top Recruiters
                </p>

                <p className="mt-2 text-lg font-semibold">
                  Google, Microsoft, Amazon
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* OVERVIEW */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold">
            Overview
          </h2>

          <p className="mt-4 max-w-3xl leading-8 text-slate-600">
            {college.name} is one of India's leading institutions
            offering world-class education, placements,
            research opportunities, and campus life.
          </p>
        </section>

        {/* COURSES */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold">
            Popular Courses
          </h2>

          <div className="mt-6 flex flex-wrap gap-4">

            {[
              "B.Tech",
              "MBA",
              "M.Tech",
              "BBA",
            ].map((course) => (
              <div
                key={course}
                className="
                  rounded-full
                  border
                  bg-white
                  px-5
                  py-3
                  text-sm
                "
              >
                {course}
              </div>
            ))}

          </div>
        </section>

      </Container>
    </main>
  );
}