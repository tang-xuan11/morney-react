import styled from "styled-components";

const NotesSection = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      height: 72px;
      width: 100%;
      background: none;
      border: none;
    }
  }
`;

export { NotesSection };
