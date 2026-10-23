import type { Book, BookStatus } from "../../types/Book";
import styled from "@emotion/styled";

// Заголовок
const TitleCard = styled.h3<{ length: number }>`
  color: #4a03ff;
  margin: 0 0 10px 0;
  font-size: ${({ length }) => {
    if (length > 40) return "8px";
    if (length > 28) return "10px";
    if (length > 16) return "12px";
    return "16px";
  }};
`;

// Обертка карточки
const CardProject = styled.div`
  border: 1px solid #eee;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 300px;
`;

// Автор
const Author = styled.p`
  margin: 0;
  color: #333;
  font-size: 16px;
`;

// Статус
const Badge = styled.span<{ status: BookStatus }>`
  border: 1px solid #ccc;
  border-radius: 6px;
  padding: 5px 8px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 6px;

  color: ${({ status }) => {
    if (status === "completed") return "#1b8a2f";
    if (status === "in-progress") return "#b8860b";
    return "#7e22ce";
  }};

  background-color: ${({ status }) => {
    if (status === "completed") return "#e6f7e9";
    if (status === "in-progress") return "#fdf3d7";
    return "#f3e8ff";
  }};

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ status }) => {
      if (status === "completed") return "#1b8a2f";
      if (status === "in-progress") return "#b8860b";
      return "#7e22ce";
    }};
  }
`;



// Дополнительная информация
const Info = styled.div`
  margin-top: 8px;
  font-size: 14px;
  color: #666;
`;

// Оценка
const Stars = styled.div`
  font-size: 16px;
  color: #ffc107;
`;

// Секция
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DeleteButton = styled.button`
  margin-top: auto;
  padding: 8px 12px;
  border: 1px solid #ff4d4f;
  background-color: #fff;
  color: #ff4d4f;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #ff4d4f;
    color: #fff;
  }
`;

interface BookCardProps {
  book: Book;
  deleteBook: (id: number) => void;
}

interface StyledProps {
  isDone: boolean;
}

const statusText: Record<string, string> = {
  completed: "Прочитал!",
  planned: "Хочу прочитать",
  "in-progress": "Читаю",
};

const Status = styled.p<StyledProps>`
  color: ${({ isDone }) => (isDone ? "#2e8b57" : "#d558f7")};
  font-size: 26px;
  margin: 0;
`;

function BookCard({ book, deleteBook }: BookCardProps) {
  const rating = Number(book.rating) ?? 0;
  const stars = "⭐".repeat(Math.min(rating, 5));
  const isDone = book.status === "completed";

  const ratingBookText = isDone ? (
    <Section>
      <Stars>{stars}</Stars>
      <Status isDone={isDone}>{statusText[book.status] || book.status}</Status>
    </Section>
  ) : (
    <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>Приятного чтения</p>
  );

  return (
    <CardProject>
      <img src={book.cover} alt={book.title} width={100} style={{ borderRadius: "4px" }} />
      <TitleCard length={book.title.length}>{book.title}</TitleCard>
      <Author>{book.author}</Author>
      <Badge status={book.status}>{statusText[book.status] || book.status}</Badge>
      {ratingBookText}
      {book.note && <Info>Note: {book.note}</Info>}
      <DeleteButton onClick={() => deleteBook(book.id)}>
        Удалить
      </DeleteButton>
    </CardProject>
  );
}

export default BookCard;