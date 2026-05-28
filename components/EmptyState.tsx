interface EmptyStateProps {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="py-24 text-center">
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-4 text-slate-500">
        {description}
      </p>
    </div>
  );
}