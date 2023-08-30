export function shuffle<T>(a: T[]) {
  return a.sort(() => Math.random() - 0.5);
}
