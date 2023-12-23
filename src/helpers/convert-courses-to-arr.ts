// Converts array of days like [1, 2, 5] (staring with 1, up to 7) to [1, 1, 0, 0, 1, 0]
export const convertCoursesToArr = (daysArr: string[]): number[] => {
  const converted: number[] = [0, 0, 0, 0, 0, 0, 0];

  for (const day of daysArr) {
    if (!day.trim()) continue;
    const value = parseInt(day.trim())
    converted[value - 1] = 1;
  }

  return converted;
};
