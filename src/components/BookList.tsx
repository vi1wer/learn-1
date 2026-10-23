import styled from "@emotion/styled";

import BookCard from "./BookCard/BookCard";
import type { Book } from "../types/Book";

const Section = styled.section`
  /* стили .book-list */
`;

const SectionTitle = styled.h2`
  /* стили */
`;

const List = styled.div`
  /* стили */
`;

const EmptyMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
  padding: 40px 0;
`;

interface BookListProps {
  books: Book[];
  deleteBook: (id: number) => void;
}

function BookList({ books, deleteBook }: BookListProps) {
  const countBook = books.length;

  return (
    <Section>
      <SectionTitle>My Books List: {countBook}</SectionTitle>

      {books.length === 0 ? (
  <EmptyMessage>📚 Список пуст. Добавь первую книгу!</EmptyMessage>
) : (
  <List>
    {books.map((book) => (
      <BookCard key={book.id} book={book} deleteBook={deleteBook} />
    ))}
  </List>
)}
    </Section>
  );
}

export default BookList;