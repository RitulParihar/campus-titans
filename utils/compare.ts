export function buildCompareUrl(
  currentIds: string[],
  newId: string
) {

  const uniqueIds = Array.from(
    new Set([...currentIds, newId])
  ).slice(0, 3);

  return `/compare?ids=${uniqueIds.join(",")}`;
}