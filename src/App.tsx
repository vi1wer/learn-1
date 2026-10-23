import { useState } from 'react';
import { books as initialBooks } from './data/Books';
import type { Book } from './types/Book';
import styled from "@emotion/styled";
import BookList from "./components/BookList";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Stats from "./components/Stats/Stats";
import BookForm from "./components/BookForm/BookForm";

const Title = styled.h1`
  text-align: center;
  margin: 20px 0;
`;

function App() {
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const deleteBook = (id: number): void => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const addBook = (bookData: Omit<Book, 'id'>): void => {
    const newBook: Book = {
      ...bookData,
      id: Date.now(),
    };
    setBooks((prev) => [...prev, newBook]);
  };

  return (
    <>
      <Header/>
      <main>
        <Title>Welcome To Bookstore</Title>
      </main>
      
      <Stats books={books} />

      <BookList books={books} deleteBook={deleteBook} />

      <Footer />
      <BookForm addBook={addBook} />
    </>
  );
}

export default App;