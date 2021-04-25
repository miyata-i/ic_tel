import { updateDate } from 'lib/firebase/function';
import { getUserName } from 'lib/localStorage';
import React from 'react';
import { style } from './style';
export type Ranking = {
  userName: string,
  count: number,
  lastDate: string,
  yesterday?: number,
};
export type RankingList = Ranking[];

export type Props = {
  ranking: RankingList,
};
const Component: React.FC<Props> = (props) => {
  React.useEffect(() => {
    updateDate(getUserName());
  }, []);

  const mapList = props.ranking.map((row, index) => (
    <li key={row.userName}>
      <span>
        <strong>{index + 1}位</strong>
      </span>
      <span>
        <strong>{row.userName}</strong>
      </span>
      <span>
        <strong>{row.count}</strong>件 +{row.count - row.yesterday || 0}
      </span>
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
