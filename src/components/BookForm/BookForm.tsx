import styled from "@emotion/styled";
import { useState } from "react";
import type { BookStatus, Book } from "../../types/Book";

type BookFormProps = {
  addBook: (bookData: Omit<Book, "id">) => void;
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 500px;
  margin: 0 auto;
  padding: 24px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fafafa;
`;

const FormTitle = styled.h2`
  margin: 0 0 8px 0;
  text-align: center;
  color: #4a03ff;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4a03ff;
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4a03ff;
  }
`;

const Error = styled.p`
  color: #e53935;
  font-size: 14px;
  margin: 0;
`;

const Button = styled.button`
  padding: 10px 16px;
  background-color: #4a03ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3a02cc;
  }
`;

const Hint = styled.p`
  color: #888;
  font-size: 14px;
  font-style: italic;
  margin: 0;
`;

function BookForm({ addBook }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<BookStatus>("planned");
  const [rating, setRating] = useState(0);
  const [error, setError] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!title.trim() || !author.trim()) {
      setError("Заполните название и автора книги");
      return;
    }
  
    setError("");
  
    addBook({                          
      title: title.trim(),
      author: author.trim(),
      status,
      rating,
      note: note.trim(),
      year: new Date().getFullYear(),
      cover: "https://via.placeholder.com/100x150?text=Book",
    });
  
    setTitle("");
    setAuthor("");
    setStatus("planned");
    setRating(0);
    setNote("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>Добавить книгу</FormTitle>

      <Field>
        <Label htmlFor="title">Название</Label>
        <Input
          id="title"
          type="text"
          placeholder="Введите название"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Field>

      <Field>
        <Label htmlFor="author">Автор</Label>
        <Input
          id="author"
          type="text"
          value={author}
          placeholder="Введите автора"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Field>

      <Field>
        <Label htmlFor="status">Статус</Label>
        <Select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as BookStatus)}
        >
          <option value="planned">Хочу прочитать</option>
          <option value="in-progress">Читаю</option>
          <option value="completed">Прочитал!</option>
        </Select>
      </Field>

      {status === "completed" ? (
        <>
          <Field>
            <Label htmlFor="rating">Оценка</Label>
            <Select
              id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              <option value={0}>—</option>
              <option value={1}>1 ⭐</option>
              <option value={2}>2 ⭐</option>
              <option value={3}>3 ⭐</option>
              <option value={4}>4 ⭐</option>
              <option value={5}>5 ⭐</option>
            </Select>
          </Field>

          <Field>
            <Label htmlFor="note">Заметка</Label>
            <Input
              id="note"
              type="text"
              placeholder="Что запомнилось?"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </Field>
        </>
      ) : (
        <Hint>Оценка и заметка доступны только для прочитанных книг 📖</Hint>
      )}

      {error && <Error>{error}</Error>}

      <Button type="submit">Добавить книгу</Button>
    </FormContainer>
  );
}

export default BookForm;