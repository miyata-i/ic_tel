import styled from 'styled-components';
import React from 'react';
import { Props } from '.';
import { mainCard } from 'styles';

export const Style = styled.div`
  ${mainCard} background-color: #343D45;
  justify-content: center;
  .date_format{
    display: flex;
    justify-content: space-between;
    span{
      display: flex;
      justify-content: space-between;
    }
    &>span{
      padding: 0 .5rem;
    }
  }

  .log_wrap{
    display: flex;
    flex-direction: column-reverse;
    overflow-y: scroll;
    height: 35%;
    font-size: 1.05rem;
    font-weight: 200;
    &>div{
      padding: .25rem .25rem;
    }
  }
`;
