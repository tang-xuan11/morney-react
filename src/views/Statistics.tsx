import React, { useState } from "react";
import Layout from "components/Layout";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import dayjs from "dayjs";

const CategoryWrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  background: white;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Statistics = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  const selectedRecords = records.filter((r) => r.category === category);
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      <div>
        {selectedRecords.map((r) => {
          return (
            <Item>
              <div className="tags">
                {r.tagIds.map((tagId) => (
                  <span>{getName(tagId)}</span>
                ))}
              </div>
              <div className="note">{r.note}</div>
              <div className="amount">￥{r.amount}</div>
              {/* {dayjs(r.createAt).format("YYYY年MM月DD日")} */}
            </Item>
          );
        })}
      </div>
    </Layout>
  );
};

export default Statistics;
