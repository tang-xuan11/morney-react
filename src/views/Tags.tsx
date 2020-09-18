import React from "react";
import Layout from "components/Layout";
import { useTags } from "useTags";
import styled from "styled-components";
import Icon from "components/Icon";

const TagList = styled.ol`
  background: white;
  font-size: 16px;
  > li {
    padding: 12px 16px 12px 0px;
    line-height: 20px;
    margin-left: 16px;
    border-bottom: 1px solid #d5d5d5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Button = styled.button`
  font-size: 18px;
  color: white;
  padding: 8px 12px;
  border: none;
  background: #f60;
  border-radius: 4px;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`;
const Tags = () => {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => (
          <li key={tag}>
            <span className="oneLine">{tag}</span>
            <Icon name="right" />
          </li>
        ))}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>新建标签</Button>
      </Center>
    </Layout>
  );
};

export default Tags;
