export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export function shuffleByCategory<T>(
  array: T[],
  getCategoryKey: (item: T) => string,
): T[] {
  const grouped = array.reduce<Record<string, T[]>>((acc, item) => {
    const category = getCategoryKey(item);

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(item);
    return acc;
  }, {});

  Object.keys(grouped).forEach((category) => {
    grouped[category] = shuffleArray(grouped[category]);
  });

  return Object.values(grouped).flat();
}
