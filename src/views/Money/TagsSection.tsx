import styled from "styled-components";

const TagsSection = styled.section`
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

export {TagsSection}