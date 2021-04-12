import React from 'react';
import { style } from './style';
export type Ranking = {
  userName: string,
  count: number,
  lastDate: string,
};
export type RankingList = Ranking[];

export type Props = {
  ranking: RankingList,
};
const Component: React.FC<Props> = (props) => {
  const mapList = props.ranking.map((row) => (
    <li key={row.userName}>
      {row.userName} : {row.count}件 : {row.lastDate}
    </li>
  ));

  return (
    <div {...props}>
      <h1>ランキング</h1>
      {mapList}
    </div>
  );
};

export default style(Component);
