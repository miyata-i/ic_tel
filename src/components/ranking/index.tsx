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
  const mapList = props.ranking.map((row, index) => (
    <li key={row.userName}>
      <span>
        <strong>{index + 1}位.</strong>
      </span>
      <span>
        <strong>{row.userName}</strong>
      </span>
      <span>
        <strong>{row.count}</strong>件
      </span>
      <span>{row.lastDate}</span>
    </li>
  ));

  return (
    <div {...props}>
      <h1>ランキング</h1>
      <ul>{mapList}</ul>
    </div>
  );
};

export default style(Component);
