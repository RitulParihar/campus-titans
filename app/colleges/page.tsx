import CollegeCard from "@/components/CollegeCard";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
import { getColleges } from "@/services/college.service";

export default async function CollegesPage() {
  const colleges = await getColleges();

  return (
    <main className="py-16">
      <Container>

        <SectionHeading
          eyebrow="College Directory"
          title="Explore top colleges across India."
          description="Browse premium institutions with detailed academic and placement insights."
        />

        <div className="mt-10 max-w-xl">
          <SearchBar />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <CollegeCard
              key={college.id}
              college={college}
            />
          ))}
        </div>

      </Container>
    </main>
  );
}