/**
 * Generates random width based on the base width and variablity
 */
export const randomWidth = (baseWidth = 80, variability = 0.2) => {
  const min = baseWidth * (1 - variability);
  const max = baseWidth * (1 + variability);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
