import React from 'react';

export type Props = {};
const Component: React.FC<Props> = (props) => {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(
    () => {
      const intervalId = setInterval(() => {
        setNow(new Date());
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    },
    [now]
  );

  return (
    <div className="clock">
      {now.toLocaleDateString()} {now.toLocaleTimeString()}
    </div>
  );
};

export default Component;
