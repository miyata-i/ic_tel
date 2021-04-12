import styled from 'styled-components';
import React from 'react';
import { Props } from '.';
import { flexCenter, mainCard } from 'styles';

export const style = (Component: React.FC<Props>) => styled(Component)`
  ${mainCard}
  background-color: #2E2833;
  justify-content: space-between;
  button {
    width: 10rem;
    height: 10rem;
    ${flexCenter}
    border-radius: 50%;
    border: none;
    box-shadow: 0px 4px 9px 6px #00000047;
  }
  .count {
    & > div {
      &:nth-child(2) {
          max-width: 7rem;
          margin: 0 auto;
          padding-bottom: 1rem;
        & > span {
            display: block;
          &:first-child {
            font-size: 1.7em;
          }
          &:last-child{
              text-align: right;
          }
        }
      }

      &:nth-child(3){
          padding-top: .5rem;
          text-align: center;
      }

    }
  }
`;
