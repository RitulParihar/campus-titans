import Container from "@/components/Container";

export default function ComparePage() {
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
            Evaluate colleges side-by-side based on fees,
            ratings, placements, and location.
          </p>
        </div>

      </Container>
    </main>
  );
}