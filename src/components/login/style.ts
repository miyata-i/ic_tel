import styled from 'styled-components';
import { flexCenter } from 'styles';

export const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #00000099;
  ${flexCenter} z-index: 10;
  padding: 1rem;
  & > div {
    padding: .5rem;
    width: 100%;
    height: 100%;
    max-width: 22rem;
    max-height: 12.5rem;
    display: flex;
    flex-direction: column;
    & > div {
      &:nth-child(1) {
        border-bottom: 1px solid;
        padding: .5rem;
        color: rgb(131, 123, 117);
      }
      &:nth-child(2) {
        flex: 1;
        ${flexCenter};
        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          .input {
            width: 90%;
            margin: 0 auto;
          }
        }
      }
      &:nth-child(3) {
        padding: .5rem .2rem .2rem;
        display: flex;
        justify-content: flex-end;
        & > * {
          margin-left: 1rem;
        }
      }
    }
  }
`;
