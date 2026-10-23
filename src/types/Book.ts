export type BookStatus = "in-progress" | "planned" | "completed";

export interface Book {
  id: number,
  author: string,
  title: string,
  year: number;
  status: "in-progress" | "planned" | "completed";
  rating: number;
  note: string;
  cover: string;
}
