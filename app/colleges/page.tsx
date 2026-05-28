import CollegeCard from "@/components/CollegeCard";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import { getColleges } from "@/services/college.service";

export default async function CollegesPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const search = searchParams.q || "";

  const colleges = await getColleges(search);

  return (
    <main className="py-16">
      <Container>
        <SectionHeading
          eyebrow="College Directory"
          title="Explore top colleges across India."
          description="Browse institutions with real-time search and filtering."
        />

        <div className="mt-10 max-w-xl">
          <SearchBar />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {colleges.length > 0 ? (
            colleges.map((college) => (
              <CollegeCard key={college.id} college={college} />
            ))
          ) : (
            <p className="text-slate-500">No colleges found.</p>
          )}
        </div>
      </Container>
    </main>
  );
}