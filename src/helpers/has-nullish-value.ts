export const hasNullishValue = (values: any[]) => {
  for (const value of values)
    if (value === null || value === undefined || value === '') return true;

  return false;
};
