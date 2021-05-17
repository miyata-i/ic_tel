import { zeroPadding } from 'lib';
import { getLog, Log } from 'lib/firebase/function';
import React from 'react'
import { Style } from './style'
export type Props = {
  user_name: string
}

const dayOfWeek = ["日", "月", "火", "水", "木", "金", "土"]
function dateFormat(logDate: string) {
  const padding = zeroPadding(2, "0")
  const _date = new Date(logDate);
  const month = padding(_date.getMonth() + 1);
  const date = padding(_date.getDate());
  const hours = padding(_date.getHours());
  const minutes = padding(_date.getMinutes());
  const dayOf = dayOfWeek[_date.getDay()]
  return `${month}/${date}(${dayOf}) ${hours} : ${minutes}`;
}
const Component: React.FC<Props> = (props) => {
  const [log, setLog] = React.useState<Log>({});

  React.useEffect(() => {
    getLog(props.user_name, setLog);
  }, [props.user_name])
  const mapLog = Object.keys(log).map((key) => (
    <div key={key}>{dateFormat(log[key].date)}</div>
  ));

  return (
    <Style>
      <h1>ログ</h1>
      <div className="log_wrap">
        {mapLog}
      </div>

    </Style>
  )
}

export default Component
