import { Button } from "components/Button";
import Icon from "components/Icon";
import Layout from "components/Layout";
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
      <div>{tag.name}</div>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="请输入标签名" />
        </label>
      </div>
      <Button>删除标签</Button>
    </Layout>
  );
};

export { Tag };
