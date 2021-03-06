import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from "./Icon";

const NavWrapper = styled.nav`
  background: white;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  line-height: 24px;
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      text-align: center;
      > a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #999999;
        padding: 4px 0;
        > .icon {
          width: 24px;
          height: 24px;
          fill: #999999;
        }
        &.selected {
          color: #333333;
          > .icon {
            fill: #333333;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag" />
            标签页
          </NavLink>
        </li>
        <li>
          <NavLink to="/money" activeClassName="selected">
            <Icon name="money" />
            记账页
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart" />
            统计页
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
