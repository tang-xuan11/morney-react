import styled from "styled-components";
import React from "react";
import { useTags } from "useTags";
import { createId } from "lib/createId";
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

type Props = {
  value: number[];
  onChange: (value: number[]) => void;
};

const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt("请输入标签名");
    if (tagName !== null) {
      if (tagName === "") {
        window.alert("标签名不能为空");
      } else {
        setTags([...tags, { id: createId(), name: tagName }]);
      }
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      props.onChange(selectedTagIds.filter((t) => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  const getClass = (tagId: number) => {
    return selectedTagIds.indexOf(tagId) >= 0 ? "selected" : "";
  };
  return (
    <Wrapper>
      <ol>
        {tags.map((tag) => (
          <li
            key={tag.id}
            onClick={() => {
              onToggleTag(tag.id);
            }}
            className={getClass(tag.id)}
          >
            {tag.name}
          </li>
        ))}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wrapper>
  );
};
export { TagsSection };
