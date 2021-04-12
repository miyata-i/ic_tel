import styled from 'styled-components';
import React from 'react';
import { Props } from '.';
import { mainCard } from 'styles';
export const style = (Component: React.FC<Props>) => styled(Component)`
  ${mainCard}
  background-color: #D3C3B6;
  ul{
      padding: none;
      width: 100%;
      max-width: 25rem;
  }
  li {
    transition: 0.3s;
    list-style-type: decimal;
    border-bottom: 1px solid #dddddddd;
    &:first-child {
      border-top: 1px solid #dddddddd;
    }
    padding: 0.5rem 0.2rem;
    display: flex;
    align-items: center;
    width: 100%;
    & > span {
      margin: 0.25rem;
      flex: 1;
      &:nth-child(1){
        flex: 0 0 3rem;
      }
      &:nth-child(3){
        flex: 0 0 3rem;
      }

    }
  }
`;
