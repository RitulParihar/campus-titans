import Button from "@/components/Button";
import Container from "@/components/Container";
import SearchBar from "@/components/SearchBar";
import SectionHeading from "@/components/SectionHeading";
export const dynamic = "force-dynamic";
export default function HomePage() {
  return (
    <main>
      <section className="py-24">
        <Container>

          <SectionHeading
            eyebrow="Premium College Discovery"
            title="Find the right college with clarity and confidence."
            description="Discover, compare, and save colleges through a refined modern platform designed for smarter academic decisions."
          />

          <div className="mt-10 max-w-2xl">
            <SearchBar />
          </div>

          <div className="mt-8 flex items-center gap-4">
            <Button>
              Explore Colleges
            </Button>

            <Button variant="secondary">
              Compare Colleges
            </Button>
          </div>

        </Container>
      </section>
    </main>
  );
}
