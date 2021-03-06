import React, { useState } from "react";
import Layout from "components/Layout";
import { CategorySection } from "./Money/CategorySection";
import styled from "styled-components";
import { RecordItem, useRecords } from "hooks/useRecords";
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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Statistics = () => {
  const [category, setCategory] = useState<"-" | "+">("-");
  const { records } = useRecords();
  const { getName } = useTags();
  const hash: { [k: string]: RecordItem[] } = {};
  const selectedRecords = records.filter((r) => r.category === category);
  selectedRecords.forEach((r) => {
    const key = dayjs(r.createAt).format("YYYY年M月D日");
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });

  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection
          value={category}
          onChange={(value) => setCategory(value)}
        />
      </CategoryWrapper>
      {array.map(([date, records]) => (
        <div key={date}>
          <Header>{date}</Header>
          <div>
            {records.map((r) => {
              return (
                <Item key={r.createAt}>
                  <div className="tags oneLine">
                    {r.tagIds.map((tagId) => (
                      <span key={tagId}>{getName(tagId)}</span>
                    ))}
                  </div>
                  {r.note && <div className="note">{r.note}</div>}
                  <div className="amount">￥{r.amount}</div>
                </Item>
              );
            })}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Statistics;
