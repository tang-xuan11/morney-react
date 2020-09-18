import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { Space } from "components/Space";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "useTags";

type Params = {
  id: string;
};

const Topbar = styled.header`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px 16px;
`;
const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`;
const Tag: React.FC = (props) => {
  const { findTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="请输入标签名"
          value={tag.name}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button>删除标签</Button>
      </Center>
    </Layout>
  );
};

export { Tag };
