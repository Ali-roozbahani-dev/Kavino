export interface ApiPaginatedResponse {
  count: number;
  next: string | null;
  previous: string | null;
}