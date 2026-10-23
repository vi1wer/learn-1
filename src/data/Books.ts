import type { Book } from "../types/Book";

export const books: Book[] = [
  {
    id: 1,
    author: "Автор книги",
    title: "Книга",
    year: 2030,
    status: "completed",
    rating: 5,
    note: "Отличная книга!",
    cover: "https://i.pinimg.com/originals/03/2d/47/032d4728aba53ff69b4d241906bf6f5c.jpg?nii=t",
  },
  {
    id: 2,
    author: "Автор книги",
    title: "Книга",
    year: 2026,
    status: "in-progress",
    rating: 0,
    note: "Записка",
    cover: "https://i.pinimg.com/originals/03/2d/47/032d4728aba53ff69b4d241906bf6f5c.jpg?nii=t",
  },
  {
    id: 3,
    author: "Автор",
    title: "Книга в Планах",
    year: 2026,
    status: "planned",
    rating: 0,
    note: "Записка",
    cover: "https://i.pinimg.com/originals/03/2d/47/032d4728aba53ff69b4d241906bf6f5c.jpg?nii=t",
  },
];