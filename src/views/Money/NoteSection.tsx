import styled from "styled-components";
import React, { useRef, useState } from "react";
const Wrapper = styled.section`
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
const NoteSection = () => {
  const [note, setNote] = useState("");
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNote(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          type="text"
          placeholder="在这里添加备注"
          defaultValue={note}
          onBlur={onBlur}
          ref={refInput}
        />
      </label>
    </Wrapper>
  );
};

export { NoteSection };
