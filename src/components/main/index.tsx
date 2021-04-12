import { setTell } from 'lib/firebase/function';
import { getUserName } from 'lib/localStorage';
import React from 'react';
import { style } from './style';
export type Props = {
  count: number,
};
const Component: React.FC<Props> = (props) => {
  const [loading, setLoading] = React.useState(false);
  const tryTell = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setTell(getUserName(), props.count)
      .then(() => {
        alert('お疲れ様です！登録しました。残りは' + (200 - props.count - 1) + '件です。');
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div {...props}>
      <div className="count">
        <h1>対応件数</h1>
        <div>
          <span>{props.count}件</span>
          <span>/200件中</span>
        </div>
        <div>{Math.round(props.count / 200 * 100 * 100) / 100}%達成！</div>
      </div>
      <div>
        <button onClick={tryTell}>電話取りました！</button>
      </div>
      <div>サイボウズ</div>
    </div>
  );
};

export default style(Component);
