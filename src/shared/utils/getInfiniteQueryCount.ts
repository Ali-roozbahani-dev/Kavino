// برای بیرون کشیدن تعداد آیتم ها در کوئری های بینهایت

export function getInfiniteQueryCount<T extends { count: number }>(
  data?: { pages: T[] }
) {
  return data?.pages[0]?.count ?? 0;
}