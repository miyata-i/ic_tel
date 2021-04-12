import styled from 'styled-components';
import React from 'react';
import { Props } from '.';
import { flexCenter } from 'styles';
export const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
  ${flexCenter} z-index: 10;
  & > div {
    padding: .5rem;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: .4rem;
    max-width: 35rem;
    max-height: 15rem;
    ${flexCenter};
    flex-wrap: wrap;
  }
`;
