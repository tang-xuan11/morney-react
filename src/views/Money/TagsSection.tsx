import styled from "styled-components";
import React, { useState } from "react";
const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0px -12px;
    > li {
      font-size: 14px;
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 16px;
      margin: 8px 12px;
      &.selected {
        background: #f60;
      }
    }
  }
  > button {
    background: none;
    border: none;
    color: #666;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    margin-top: 8px;
  }
`;

const TagsSection: React.FC = (props) => {
  const [tags, setTags] = useState<string[]>(["衣", "食", "住", "行"]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const onAddTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName !== null) {
      if (tagName === "") {
        window.alert("标签名不能为空");
      } else {
        setTags([...tags, tagName]);
      }
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  const getClass = (tag: string) => {
   return selectedTags.indexOf(tag) >= 0 ? "selected" : "";
  };
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag}
            onClick={() => {
              onToggleTag(tag);
            }}
            className={getClass(tag)}
          >
            {tag}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export { TagsSection };
