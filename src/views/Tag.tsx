import { Button } from "components/Button";
import { Center } from "components/Center";
import Icon from "components/Icon";
import { Input } from "components/Input";
import Layout from "components/Layout";
import { Space } from "components/Space";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useTags } from "hooks/useTags";

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
  const { findTag, updateTag, deleteTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id));
  const tagContent = (tag: { id: number; name: string }) => (
    <div>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="请输入标签名"
          value={tag.name}
          onChange={(e) => updateTag(tag.id, { name: e.target.value })}
        />
      </InputWrapper>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button onClick={() => deleteTag(tag.id)}>
          <div onClick={onClickRemove}>删除标签</div>
        </Button>
      </Center>
    </div>
  );
  const history = useHistory();
  const onClickRemove = () => {
    window.alert("删除成功");
    history.goBack();
  };
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <Topbar>
        <Icon name="left" onClick={onClickBack} />
        <span>编辑标签</span>
        <Icon />
      </Topbar>
      {tag ? (
        tagContent(tag)
      ) : (
        <Center>
          <Space />
          <Space />
          <Space />
          标签不存在
        </Center>
      )}
    </Layout>
  );
};

export { Tag };
