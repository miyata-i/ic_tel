import React from 'react';
import { Style } from './style';
import { stopPropagation } from 'lib';
export type Props = {
  userName?: string
  submit?: (nextUserName?: string) => void,
  cancel?: () => void,
};
const Component: React.FC<Props> = (props) => {
  const [userName, setUserName] = React.useState(props.userName || "");
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handleSubmit(event: React.FocusEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(userName);

    props.submit(userName);
  }

  function cancel() {
    props.cancel();
  }

  return (
    <Style onClick={cancel}>
      <div onClick={stopPropagation}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login_name">ニックネーム</label>
          <input
            id="login_name"
            type="text"
            value={userName}
            placeholder="必須です。"
            onChange={handleChange}
            autoFocus
          />
          <button type="submit">ログイン</button>
        </form>
      </div>
    </Style>
  );
};

export default Component;
