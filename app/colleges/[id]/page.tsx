import CollegeCard from "@/components/CollegeCard";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import { getColleges } from "@/services/college.service";
import FiltersBar from "@/components/FiltersBar";

export default async function CollegesPage({
  searchParams,
}: {
  searchParams: {
    q?: string;
    minRating?: string;
    maxFees?: string;
    location?: string;
  };
}) {
  const colleges = await getColleges({
  search: searchParams.q || "",
  minRating: searchParams.minRating
    ? Number(searchParams.minRating)
    : undefined,
  maxFees: searchParams.maxFees
    ? Number(searchParams.maxFees)
    : undefined,
  location: searchParams.location || "",
});

  return (
    <main className="py-16">
      <Container>
        <SectionHeading
          eyebrow="College Directory"
          title="Explore top colleges across India."
          description="Advanced filters with real-time server-side search."
        />

        <div className="mt-10 max-w-xl">
          <SearchBar />
        </div>
        <div className="mt-10 max-w-xl">
  <SearchBar />
</div>

<FiltersBar />

        {/* FILTER UI (we will build next step) */}

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