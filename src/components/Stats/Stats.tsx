import styled from "@emotion/styled";
import type { Book } from "../../types/Book";

const StatsSection = styled.section`
  padding: 16px 24px;
`;

const StatsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const StatCard = styled.div`
  flex: 1;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
`;

const Label = styled.span`
  display: block;
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

const Value = styled.span`
  display: block;
  font-size: 28px;
  font-weight: bold;
  color: #4a03ff;
`;

interface StatsProps {
  books: Book[];
}

function Stats({ books }: StatsProps) {
    const total = books.length;
    const done = books.filter((book) => book.status === "completed").length;
    const reading = books.filter((book) => book.status === "in-progress").length;
    const want = books.filter((book) => book.status === "planned").length;
  
    return (
        <StatsSection>
          <StatsWrapper>
            <StatCard>
              <Value>{total}</Value>
              <Label>Всего книг</Label>
            </StatCard>
      
            <StatCard>
              <Value>{done}</Value>
              <Label>Прочитано</Label>
            </StatCard>
      
            <StatCard>
              <Value>{reading}</Value>
              <Label>Читаю</Label>
            </StatCard>
      
            <StatCard>
              <Value>{want}</Value>
              <Label>Хочу прочитать</Label>
            </StatCard>
          </StatsWrapper>
        </StatsSection>
      );
  }


export default Stats;

