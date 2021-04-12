import React from 'react';
import styled from 'styled-components';
import { database } from 'lib/firebase';
import GraphComponent from 'components/graph';
import MainComponent from 'components/main';
import RankingComponent, { RankingList } from 'components/ranking';
import LoginComponent from 'components/login';
import {
  getUserName,
  setUserName as setUserNameAtLocal,
} from 'lib/localStorage';
import { flexCenter } from 'styles';
import { getCount, getRanking } from 'lib/firebase/function';

const Component: React.FC = (props) => {
  const [userName, setUserName] = React.useState(getUserName());
  const [count, setCount] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(!!!userName.length);
  const [ranking, setRanking] = React.useState([]);
  React.useEffect(
    () => {
      getCount(userName, setCount);
    },
    [userName]
  );

  React.useEffect(() => {
    getRanking((nextList) => {
      nextList.sort((a, b) => {
        return b.count - a.count;
      });
      setRanking(nextList);
    });
  }, []);

  function tryLogin(isCancel: boolean) {
    return function(next?: string) {
      if (isCancel) {
        setIsOpen(!!!userName.length);

        return;
      }
      setUserName(next);
      setUserNameAtLocal(next);
      setIsOpen(!!!next.length);
    };
  }
  function loginOpen() {
    setIsOpen(true);
  }

  return (
    <div {...props}>
      <div className="main">
        <MainComponent count={count} />
        <RankingComponent ranking={ranking} />
        <GraphComponent />
      </div>
      {isOpen && (
        <LoginComponent
          userName={userName}
          submit={tryLogin(false)}
          cancel={tryLogin(true)}
        />
      )}
      <button onClick={loginOpen}>
        <div>{userName}</div>
        <div>変更</div>
      </button>
    </div>
  );
};

const Style = styled(Component)`
  & > .main {
    display: flex;
    flex-wrap: wrap;
    min-height: 100vh;
    height: 100%;
  }

  & > button {
    position: fixed;
    top: 1rem;
    right: 1rem;
    ${flexCenter}
    padding: 1rem 1.5rem;
    flex-direction: column;
    border-radius: .4rem;
    border: none;
    outline-color: inherit;
    box-shadow: 0px 4px 5px 1px #0000002e;
    & > div {
      &:last-child {
        display: none;
      }
    }
    &:hover {
      & > div {
        &:last-child {
          display: none;
        }
        &:first-child {
          display: block;
        }
      }
    }
  }
`;
export default Style;
