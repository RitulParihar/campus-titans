import { redirect } from "next/navigation";
import { getUserSession } from "@/lib/session";
import { prisma } from "@/lib/prisma";

import Container from "@/components/Container";
import CollegeCard from "@/components/CollegeCard";

export default async function SavedPage() {
  const userId = await getUserSession();

  if (!userId) {
    redirect("/login");
  }

  const saved = await prisma.savedCollege.findMany({
    where: {
      userId,
    },
    include: {
      college: true,
    },
  });

  return (
    <main className="py-16">
      <Container>
        <h1 className="text-4xl font-bold">
          Saved Colleges
        </h1>

        <p className="mt-3 text-slate-600">
          Your personal shortlist.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {saved.length > 0 ? (
            saved.map((item) => (
              <CollegeCard
                key={item.college.id}
                college={item.college}
              />
            ))
          ) : (
            <p className="text-slate-500">
              No saved colleges yet.
            </p>
          )}
        </div>
      </Container>
    </main>
  );
}